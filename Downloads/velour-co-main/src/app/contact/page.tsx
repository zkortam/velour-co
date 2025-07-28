"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { useState } from "react"
import dynamic from "next/dynamic"

const Confetti = dynamic(() => import("react-confetti"), { ssr: false })

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
      
      const response = await fetch('https://formspree.io/f/xkgzbjnj', {
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
        <Confetti />
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
            <div className="space-y-4 mt-8 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold text-center text-gray-800 mb-4">What's next?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-base mt-0.5">✓</span>
                    <span className="text-gray-700">We'll review your business information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white font-bold text-base mt-0.5">✓</span>
                    <span className="text-gray-700">Schedule a convenient time for your consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white font-bold text-base mt-0.5">✓</span>
                    <span className="text-gray-700">Prepare a customized strategy for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white font-bold text-base mt-0.5">✓</span>
                    <span className="text-gray-700">Discuss how we can accelerate your growth</span>
                  </li>
                </ul>
              </div>
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
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        
        {/* Enhanced Flowing Blue-to-Hot-Pink Gradient Blobs */}
        <div className="absolute top-12 left-12 w-[800px] h-[800px] bg-gradient-to-br from-blue-300/35 via-indigo-300/30 via-violet-300/35 via-purple-300/30 to-pink-300/35 rounded-full blur-2xl animate-float-1">
        </div>
        
        <div className="absolute top-12 right-12 w-[700px] h-[700px] bg-gradient-to-bl from-indigo-300/30 via-violet-300/35 via-purple-300/30 via-fuchsia-300/35 to-pink-400/30 rounded-full blur-2xl animate-float-2">
        </div>
        
        <div className="absolute bottom-12 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/35 via-indigo-300/30 via-violet-300/35 via-purple-300/30 to-fuchsia-300/35 rounded-full blur-2xl animate-float-3">
        </div>
        
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-violet-300/30 via-purple-300/35 via-fuchsia-300/30 to-pink-400/35 rounded-full blur-2xl animate-float-4">
        </div>
        
        <div className="absolute bottom-12 right-12 w-[750px] h-[750px] bg-gradient-to-tl from-blue-300/35 via-indigo-400/30 via-violet-300/35 via-purple-400/30 to-pink-300/35 rounded-full blur-2xl animate-float-5">
        </div>

        {/* New Animated Geometric Shapes */}
        <div className="absolute top-20 left-1/4 w-32 h-32 border-2 border-blue-300/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-16 w-16 h-16 border-2 border-violet-300/20 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-gradient-to-tr from-indigo-300/20 to-blue-300/20 rounded-lg animate-float-6"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle-1"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-purple-400/40 rounded-full animate-float-particle-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/35 rounded-full animate-float-particle-3"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-400/40 rounded-full animate-float-particle-4"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-violet-400/35 rounded-full animate-float-particle-5"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-fuchsia-400/30 rounded-full animate-float-particle-6"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-blue-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-purple-400/25 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>

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
                <p className="text-lg font-semibold text-black mb-2">(925) 436-0396</p>
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
                <p className="text-lg font-semibold text-black mb-2">team@velourmarketing.co</p>
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
                  Visit us in La Jolla and the San Francisco Bay Area.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-black mb-2">La Jolla, CA • Bay Area, CA</p>
                <p className="text-gray-600">By appointment only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marketing doesn't have to be boring. Follow along for smart strategies, exclusive insights, and behind-the-scenes glimpses into how we make brands thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8 group">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-pink-600 transition-colors duration-300">Instagram</CardTitle>
                <CardDescription className="text-gray-600">
                  Explore fresh campaigns, strategic insights, and creative excellence.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-black mb-2">@velourmarketing</p>
                <p className="text-gray-600">Follow for daily inspiration</p>
                <a href="https://www.instagram.com/velourmarketing/" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-xl px-6 py-2 transition-all duration-300 hover:scale-105">
                    Follow for daily inspiration →
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8 group">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-blue-600 transition-colors duration-300">TikTok</CardTitle>
                <CardDescription className="text-gray-600">
                  Level up fast with quick tips, industry trends, and marketing know-how.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-white mb-2">@velourmarketing</p>
                <p className="text-gray-400">Follow and grow smarter</p>
                <a href="https://www.tiktok.com/@velour.marketing" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0 rounded-xl px-6 py-2 transition-all duration-300 hover:scale-105">
                    Follow and grow smarter →
                  </Button>
                </a>
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
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Social Media Marketing</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Advanced Growth Analytics</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Marketing Consulting</Link></li>
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
