import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { firstName, lastName, email, phone, message } = body
    
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to doctor
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set in environment variables')
      console.error('Available env vars:', Object.keys(process.env).filter(key => key.includes('RESEND')))
      return NextResponse.json(
        { 
          error: 'Email service not configured',
          details: 'RESEND_API_KEY environment variable is not set. Please check your Vercel environment variables.'
        },
        { status: 500 }
      )
    }
    
    // Log that API key was found (but don't log the actual key for security)
    console.log('RESEND_API_KEY found, length:', apiKey.length)

    try {
      const resend = new Resend(apiKey)
      // Note: Using the doctor's verified email address
      const emailResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'cosarmd@gmail.com', // Doctor's verified email address
        subject: `New Consultation Request from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              New Consultation Request
            </h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')} ${lastName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              ${message ? `<p style="margin: 10px 0;"><strong>Message:</strong></p><p style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e40af;">${message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\n/g, '<br>')}</p>` : ''}
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              This email was sent from the consultation form on your website.
            </p>
          </div>
        `,
        reply_to: email,
      })
      
      console.log('Email send result:', JSON.stringify(emailResult, null, 2))
      
      // Check if the email was actually sent successfully
      if (emailResult.error) {
        console.error('Resend API returned an error:', emailResult.error)
        return NextResponse.json(
          { 
            error: 'Failed to send email notification',
            details: emailResult.error.message || 'Resend API returned an error'
          },
          { status: 500 }
        )
      }
      
      if (!emailResult.data || !emailResult.data.id) {
        console.error('Unexpected email result format:', emailResult)
        return NextResponse.json(
          { 
            error: 'Failed to send email notification',
            details: 'Email service returned an unexpected response'
          },
          { status: 500 }
        )
      }
      
      console.log('Email sent successfully with ID:', emailResult.data.id)
    } catch (emailError: any) {
      console.error('Error sending email:', emailError)
      console.error('Error details:', JSON.stringify(emailError, null, 2))
      // Return error so you know something went wrong
      return NextResponse.json(
        { 
          error: 'Failed to send email notification',
          details: emailError?.message || emailError?.toString() || 'Unknown error'
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request received successfully' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing consultation request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

