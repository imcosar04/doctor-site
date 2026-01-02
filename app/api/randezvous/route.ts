import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to calendar system
    
    // For now, we'll just return success
    // You can integrate with your email service (sendAppointmentEmail) here
    // Example:
    // await sendAppointmentEmail({ name, email, phone, date, time, reason, message: body.message })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment request received successfully' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing appointment request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

