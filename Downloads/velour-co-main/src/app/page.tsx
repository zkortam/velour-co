import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        
        {/* Flowing Blue-to-Hot-Pink Gradient Blobs */}
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

        <div className="max-w-7xl mx-auto text-center relative z-10 -mt-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Scale your business
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                with strategic marketing.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 px-4">
              Velour & Co. empowers clients to rapidly scale their businesses with
              comprehensive marketing solutions across California.
            </p>
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 px-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 text-lg px-6 sm:px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group">
                  Book Free Consultation
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                    →
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
                Not just another marketing agency.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Founded in 2025 in La Jolla, California, we built Velour & Co. on a simple belief:
                businesses deserve marketing partners who think strategically, execute flawlessly,
                and deliver measurable results that transform growth trajectories.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We're selective about who we work with because we believe in building long-term partnerships,
                not just completing projects. Your success becomes our success.
              </p>
              <Link href="/about">
                <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 group">
                  Learn Our Story
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                    →
                  </span>
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:scale-105 transition-all duration-300 cursor-pointer group hover:shadow-lg">
                <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">2025</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105 transition-all duration-300 cursor-pointer group hover:shadow-lg">
                <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">CA</div>
                <div className="text-gray-600">Statewide Service</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105 transition-all duration-300 cursor-pointer group hover:shadow-lg">
                <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
                <div className="text-gray-600">Core Services</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:scale-105 transition-all duration-300 cursor-pointer group hover:shadow-lg">
                <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-gray-600">Growth Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Why Businesses Choose Velour & Co.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand choosing a partner is about trust, character, and shared vision. At Velour & Co., we're intentional about the relationships we build, partnering exclusively with businesses who value authenticity and strategic depth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">We Listen Deeply</h3>
              <p className="text-gray-700">
                We don't just hear your needs—we internalize them. Our team takes the time to genuinely understand your vision, values, and goals, so every step we take together has purpose.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">We're Strategically Creative</h3>
              <p className="text-gray-700">
                Our strength lies in combining strategic thinking with bold creativity. We innovate thoughtfully, pushing boundaries in ways that resonate with your audience and deliver real impact.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">We're Relentless About Results</h3>
              <p className="text-gray-700">
                Driven by passion, guided by analytics, we hold ourselves accountable to your success. Every team member is committed to measurable outcomes, ensuring your growth is tangible and sustainable.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">We Invest in Partnerships</h3>
              <p className="text-gray-700">
                We care deeply—not just about your business, but about your journey. We build lasting partnerships rooted in transparency, respect, and a shared ambition to succeed together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">The Velour Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures every project delivers exceptional results through
              strategic thinking, creative execution, and continuous optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Discover</h3>
              <p className="text-gray-600">
                Deep dive into your business, market, and growth opportunities.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Strategize</h3>
              <p className="text-gray-600">
                Develop comprehensive strategies aligned with your business goals.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Execute</h3>
              <p className="text-gray-600">
                Implement with precision, creativity, and attention to detail.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Optimize</h3>
              <p className="text-gray-600">
                Continuously monitor, analyze, and refine for maximum impact.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/process">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 hover:scale-105 transition-all duration-200 border-gray-300 hover:border-black hover:shadow-lg group">
                Explore Our Process
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Client Success Framework */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Built for Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While client confidentiality limits sharing specific details, we consistently deliver transformative results through our structured strategic approach. Below are representative scenarios highlighting our impact across diverse business stages:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="w-2 h-8 bg-white rounded-full"></div>
                    <div className="absolute -top-1 -left-1 w-4 h-3 bg-white transform rotate-12 rounded-sm"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-black">Startup to Scale</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> An early-stage SaaS company needed to establish a strong market presence and generate consistent, qualified leads.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong>
                </p>
                <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
                  <li>Strategic Positioning</li>
                  <li>Comprehensive Brand Development</li>
                  <li>Targeted Content Marketing</li>
                  <li>Multi-Channel Lead Generation</li>
                  <li>Continuous Growth Optimization</li>
                </ul>
                <p className="text-gray-600">
                  <strong>Impact:</strong> Clear brand positioning, consistent inbound leads, and sustainable growth trajectory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <div className="relative w-8 h-6">
                    <div className="absolute bottom-0 left-0 w-1 h-2 bg-white rounded-sm"></div>
                    <div className="absolute bottom-0 left-2 w-1 h-3 bg-white rounded-sm"></div>
                    <div className="absolute bottom-0 left-4 w-1 h-5 bg-white rounded-sm"></div>
                    <div className="absolute bottom-0 left-6 w-1 h-6 bg-white rounded-sm"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-black">Established Business Growth</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> A mature business facing stagnant growth amid increasing market competition.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong>
                </p>
                <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
                  <li>Market Analysis & Competitive Benchmarking</li>
                  <li>Strategic Repositioning</li>
                  <li>Digital Transformation</li>
                  <li>Performance and Acquisition Optimization</li>
                  <li>Ongoing Growth and Performance Monitoring</li>
                </ul>
                <p className="text-gray-600">
                  <strong>Impact:</strong> Enhanced market competitiveness, improved customer acquisition metrics, and revitalized growth momentum.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 border-2 border-white rounded-full relative">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-black">Brand Transformation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> An established organization seeking to modernize its brand identity and effectively penetrate new market segments.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong>
                </p>
                <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
                  <li>Comprehensive Brand Audit</li>
                  <li>Brand Identity Redesign</li>
                  <li>Audience Research and Segmentation</li>
                  <li>Integrated Channel Strategy</li>
                  <li>Targeted Market Expansion</li>
                </ul>
                <p className="text-gray-600">
                  <strong>Impact:</strong> Revitalized brand perception, broadened audience reach, and successful market penetration in targeted segments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-black">Market Entry Marketing</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> Companies aiming to successfully enter new markets or geographical areas.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong>
                </p>
                <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
                  <li>Detailed Market Research and Analysis</li>
                  <li>Localization and Positioning Strategy</li>
                  <li>Targeted Launch Campaigns</li>
                  <li>Omnichannel Marketing Execution</li>
                  <li>Ongoing Market Performance Optimization</li>
                </ul>
                <p className="text-gray-600">
                  <strong>Impact:</strong> Effective market entry, increased brand awareness, immediate traction, and sustainable long-term growth in new regions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Every business is unique, but our strategic approach consistently delivers measurable results.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 group">
                Discuss Your Growth Goals
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-black animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Ready to scale your business?
          </h2>
          <p className="text-xl text-gray-700 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Book a free consultation to discuss your marketing goals and discover
            how we can help accelerate your growth.
          </p>

          <div className="max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="/contact">
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-xl py-6 rounded-2xl border-0">
                Book Free Consultation
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                  →
                </span>
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-600 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            No commitments. Free 30-minute strategy session.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/">
                <div className="flex items-center mb-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <Image 
                    src="/velourlogo.svg" 
                    alt="Velour & Co. Logo" 
                    width={120} 
                    height={40} 
                    className="h-8 w-auto"
                  />
                </div>
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
