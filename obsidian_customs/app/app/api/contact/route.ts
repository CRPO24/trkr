
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, serviceType, projectType, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Save to database
    const contactInquiry = await prisma.contactInquiry.create({
      data: {
        name: name?.trim(),
        email: email?.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        serviceType: serviceType || null,
        projectType: projectType || null,
        message: message?.trim(),
        status: 'new'
      }
    })

    return NextResponse.json(
      { 
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        inquiryId: contactInquiry.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Sorry, there was an issue processing your request. Please try again.' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
