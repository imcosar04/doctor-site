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
    try {
      const apiKey = process.env.RESEND_API_KEY
      if (!apiKey) {
        console.error('RESEND_API_KEY is not set')
        // Continue without sending email, but log the error
      } else {
        const resend = new Resend(apiKey)
        await resend.emails.send({
        from: 'Consultation Form <onboarding@resend.dev>', // You'll need to verify your domain with Resend
        to: 'cosarmd@gmail.com',
        subject: `New Consultation Request from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              New Consultation Request
            </h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              ${message ? `<p style="margin: 10px 0;"><strong>Message:</strong></p><p style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e40af;">${message.replace(/\n/g, '<br>')}</p>` : ''}
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              This email was sent from the consultation form on your website.
            </p>
          </div>
        `,
          reply_to: email,
        })
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Still return success to user, but log the error
      // You might want to handle this differently based on your needs
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

