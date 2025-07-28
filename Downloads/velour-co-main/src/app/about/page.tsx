import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Redefining
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              marketing excellence.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 px-4">
            We're not just another marketing agency. We're strategic partners who believe in building
            lasting relationships and delivering measurable results that transform businesses.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-4xl font-bold text-black mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025 in the innovation hub of La Jolla, California, Velour & Co. emerged from a simple observation:
                  too many businesses were struggling with fragmented marketing efforts that delivered inconsistent results.
                </p>
                <p>
                  Our founders recognized that in today's hyper-connected world, businesses need more than just marketing services—they
                  need strategic partners who understand the intricate relationship between brand, technology, and customer experience.
                </p>
                <p>
                  We built Velour & Co. to bridge this gap, combining deep strategic thinking with flawless execution to help
                  businesses not just grow, but scale sustainably and purposefully.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-black mb-6">Why "Velour"?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Velour represents the perfect balance of luxury and comfort—just like our approach to marketing.
                  We deliver premium results with an experience that feels effortless for our clients. It's sophisticated
                  yet approachable, powerful yet refined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Everything we do is guided by our mission, vision, and core values that shape how we approach
              every project and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white via-blue-50/50 to-white backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 group">
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold text-black mb-4">Mission</CardTitle>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  To empower businesses with strategic marketing solutions that drive sustainable growth,
                  foster meaningful connections with their audiences, and create lasting competitive advantages
                  in an ever-evolving marketplace.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white via-purple-50/50 to-white backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 group">
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold text-black mb-4">Vision</CardTitle>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  To be the most trusted marketing partner for ambitious businesses, known for our strategic insight,
                  flawless execution, and unwavering commitment to delivering results that exceed expectations and
                  drive transformational growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white via-pink-50/50 to-white backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 group">
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold text-black mb-4">Values</CardTitle>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Strategic thinking, transparent communication, creative excellence, data-driven decisions,
                  collaborative partnerships, continuous innovation, and an unwavering commitment to integrity
                  in everything we do.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">The Velour Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't believe in one-size-fits-all solutions. Every business is unique, and our approach
              reflects that understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">Discover</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                We start by deeply understanding your business, market, and goals through comprehensive research and analysis.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors duration-300">Strategize</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                We develop customized strategies that align with your business objectives and target audience insights.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-pink-600 transition-colors duration-300">Execute</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                We implement with precision, creativity, and attention to detail that ensures flawless delivery.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-green-600 transition-colors duration-300">Optimize</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                We continuously monitor, analyze, and refine to ensure optimal performance and sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together diverse expertise in strategy, media, and growth to deliver
              comprehensive marketing solutions that transform businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">MA</span>
                </div>
                <CardTitle className="text-xl text-black">Mehdi Aziz</CardTitle>
                <CardDescription className="text-gray-600 font-medium mb-3">
                  Co-Founder & Head of Client Success
                </CardDescription>
                <CardDescription className="text-gray-600">
                  Visionary leader with extensive experience in strategic marketing and business growth. Drives the overall
                  vision and ensures exceptional client outcomes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AA</span>
                </div>
                <CardTitle className="text-xl text-black">Ali Alani</CardTitle>
                <CardDescription className="text-gray-600 font-medium mb-3">
                  Co-Founder & Managing Director
                </CardDescription>
                <CardDescription className="text-gray-600">
                  Executive leader driving strategic vision and operational excellence across all business functions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">HK</span>
                </div>
                <CardTitle className="text-xl text-black">Hafsah Kazi</CardTitle>
                <CardDescription className="text-gray-600 font-medium mb-3">
                  Media Director
                </CardDescription>
                <CardDescription className="text-gray-600">
                  Creative strategist who leads our media initiatives, content creation, and brand storytelling
                  to create compelling narratives that resonate.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AK</span>
                </div>
                <CardTitle className="text-xl text-black">Anaya Khan</CardTitle>
                <CardDescription className="text-gray-600 font-medium mb-3">
                  Growth Director
                </CardDescription>
                <CardDescription className="text-gray-600">
                  Growth specialist focused on scaling strategies, performance optimization, and driving
                  measurable results that accelerate business success.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Why Leading Businesses Choose Velour & Co.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than a service provider—we're your strategic growth partner committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Strategic Expertise</h3>
              <p className="text-gray-700">
                Deep industry knowledge and strategic thinking that goes beyond tactics to drive long-term business growth.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Proven Methodology</h3>
              <p className="text-gray-700">
                Our time-tested approach combines best practices with innovative thinking to deliver consistent results.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Full-Service Capabilities</h3>
              <p className="text-gray-700">
                From strategy to execution, we provide comprehensive solutions that eliminate the need for multiple vendors.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Data-Driven Results</h3>
              <p className="text-gray-700">
                Every decision is backed by data and analytics to ensure measurable impact on your business objectives.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Transparent Partnership</h3>
              <p className="text-gray-700">
                Open communication, regular reporting, and collaborative decision-making throughout our partnership.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Scalable Solutions</h3>
              <p className="text-gray-700">
                Flexible strategies and systems that grow with your business and adapt to changing market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's discuss how our strategic approach can accelerate your business growth and
            deliver the results you've been looking for.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg px-8 py-3">
              Start Your Journey
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </Button>
          </Link>
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
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Social Media Marketing</li>
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Advanced Growth Analytics</li>
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Marketing Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">About Us</Link></li>
                <li><Link href="/process" className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">Our Process</Link></li>
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
