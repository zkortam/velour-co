import { NextRequest, NextResponse } from 'next/server'

const FORMSPARK_ACTION_URL = "https://submit-form.com/wrWBRQIGH"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, company, phone } = body
    
    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Submit to Formspark
    const response = await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        phone,
        message: `New consultation request from ${name} at ${company}. Phone: ${phone}. Email: ${email}`
      }),
    })

    if (!response.ok) {
      throw new Error(`Formspark error: ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 