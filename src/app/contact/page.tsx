"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      console.log('Submitting to Formspree:', formData)
      
      // Create the message for Formspree
      const message = `New consultation request from ${formData.name} at ${formData.company}. Phone: ${formData.phone}. Email: ${formData.email}`
      
      const response = await fetch('https://formspree.io/f/mjkrzlno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: message
        })
      })
      
      console.log('Response status:', response.status)
      console.log('Response:', response)
      
      if (response.ok) {
        console.log('Form submitted successfully!')
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', phone: '' })
      } else {
        const errorData = await response.json()
        console.error('Form submission failed:', errorData)
        setErrors({ submit: 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation currentPage="contact" />
        
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-60" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Consultation Requested!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for your interest in working with Velour & Co. We've received your consultation request and will be in touch within 24 hours to schedule your free 30-minute strategy session.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>What's next?</strong>
              </p>
              <ul className="text-gray-600 space-y-2 max-w-md mx-auto text-left">
                <li>• We'll review your business information</li>
                <li>• Schedule a convenient time for your consultation</li>
                <li>• Prepare a customized strategy for your business</li>
                <li>• Discuss how we can accelerate your growth</li>
              </ul>
            </div>
            <div className="mt-12">
              <Link href="/">
                <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Let's start your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              growth journey.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to scale your business? We're here to help. Reach out today for a free consultation
            and discover how we can accelerate your growth.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-black">Get Your Free Consultation</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 px-4">
            Tell us about your business and we'll provide you with a customized strategy for growth.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-6 px-4">
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-[calc(1rem+4px)] px-6 py-[calc(1rem+12px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white shadow-none"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            <Input
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-[calc(1rem+4px)] px-6 py-[calc(1rem+12px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white shadow-none"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            <Input
              placeholder="Company Name"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-[calc(1rem+4px)] px-6 py-[calc(1rem+12px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white shadow-none"
            />
            {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
            <Input
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-[calc(1rem+4px)] px-6 py-[calc(1rem+12px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white shadow-none"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            <Button type="submit" size="lg" className="w-full bg-blue-900 hover:bg-blue-950 text-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg py-[calc(1rem+10px)] rounded-[calc(1rem+4px)] border-0" disabled={isSubmitting}>
              {isSubmitting ? 'Booking...' : 'Book Free Consultation'}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </Button>
            {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}
          </form>

          <p className="text-sm text-gray-600 mt-6">
            No commitments. Free 30-minute strategy session.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-black">Phone</CardTitle>
                <CardDescription className="text-gray-600">
                  Ready to talk? Give us a call during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-black mb-2">(858) 555-GROW</p>
                <p className="text-gray-600">Mon-Fri, 9AM-6PM PST</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-black">Email</CardTitle>
                <CardDescription className="text-gray-600">
                  Send us a message and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-black mb-2">hello@velourco.com</p>
                <p className="text-gray-600">We typically respond same day</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-black">Location</CardTitle>
                <CardDescription className="text-gray-600">
                  Visit us in beautiful La Jolla, California.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-black mb-2">La Jolla, CA</p>
                <p className="text-gray-600">By appointment only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/">
                <h3 className="text-xl font-bold text-black mb-4 hover:scale-105 transition-transform duration-200 cursor-pointer">Velour & Co.</h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Empowering businesses to scale rapidly through strategic marketing solutions.
              </p>
              <p className="text-gray-600">
                Based in La Jolla, California<br />
                Serving clients across the state
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Brand Design</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Content Creation</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Social Media</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">SEO</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Contact</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 hover:text-black transition-colors duration-200">© 2025 Velour & Co. All rights reserved.</p>
            <p className="text-gray-600 mt-4 md:mt-0 hover:text-black transition-colors duration-200">Founded in La Jolla, California</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
