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
        <div className="absolute -top-32 -left-32 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/30 via-indigo-400/25 via-violet-400/30 via-purple-400/25 to-pink-400/30 rounded-full blur-2xl animate-float-1">
        </div>
        
        <div className="absolute -top-16 -right-32 w-[700px] h-[700px] bg-gradient-to-bl from-indigo-400/25 via-violet-400/30 via-purple-400/25 via-fuchsia-400/30 to-pink-500/25 rounded-full blur-2xl animate-float-2">
        </div>
        
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/30 via-indigo-400/25 via-violet-400/30 via-purple-400/25 to-fuchsia-400/30 rounded-full blur-2xl animate-float-3">
        </div>
        
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-violet-400/25 via-purple-400/30 via-fuchsia-400/25 to-pink-500/30 rounded-full blur-2xl animate-float-4">
        </div>
        
        <div className="absolute -bottom-16 -right-16 w-[750px] h-[750px] bg-gradient-to-tl from-blue-400/30 via-indigo-500/25 via-violet-400/30 via-purple-500/25 to-pink-400/30 rounded-full blur-2xl animate-float-5">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 px-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 text-lg px-6 sm:px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group">
                  Book Free Consultation
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                    →
                  </span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-6 sm:px-8 py-3 hover:scale-105 transition-all duration-200 border-gray-300 hover:border-black hover:shadow-lg">
                View Our Work
              </Button>
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
                <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
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
            <h2 className="text-4xl font-bold text-black mb-6">Why Leading Businesses Choose Velour & Co.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not the right fit for everyone—and that's intentional. We work with businesses
              ready to invest in strategic, long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Strategic Thinking</h3>
              <p className="text-gray-700">
                We go beyond tactics to understand your business, market, and growth opportunities at a strategic level.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Proven Process</h3>
              <p className="text-gray-700">
                Our systematic approach ensures consistent results and eliminates the guesswork from marketing.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Full Integration</h3>
              <p className="text-gray-700">
                All your marketing works together seamlessly—no more disconnected campaigns or conflicting messages.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="flex items-end space-x-1">
                  <div className="w-2 h-4 bg-white rounded-sm"></div>
                  <div className="w-2 h-6 bg-white rounded-sm"></div>
                  <div className="w-2 h-3 bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Data-Driven Results</h3>
              <p className="text-gray-700">
                Every decision is backed by data, and every strategy is designed to deliver measurable ROI.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">True Partnership</h3>
              <p className="text-gray-700">
                We're an extension of your team, not just a vendor. Your goals become our goals.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="relative w-8 h-6">
                  <div className="absolute bottom-0 left-0 w-1 h-2 bg-white rounded-sm"></div>
                  <div className="absolute bottom-0 left-2 w-1 h-3 bg-white rounded-sm"></div>
                  <div className="absolute bottom-0 left-4 w-1 h-5 bg-white rounded-sm"></div>
                  <div className="absolute bottom-0 left-6 w-1 h-6 bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Scalable Growth</h3>
              <p className="text-gray-700">
                Our strategies and systems are built to grow with your business, adapting to new challenges and opportunities.
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

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl font-bold text-black mb-6">
              Comprehensive marketing solutions.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brand identity to digital presence, we provide end-to-end
              marketing services that drive growth and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-blue-50/30 hover:from-blue-50 hover:to-purple-50">
              <CardHeader>
                <CardTitle className="text-xl text-black group-hover:text-blue-600 transition-colors duration-300">Brand Design</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Create compelling brand identities that resonate with your target audience and stand out in the market.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-purple-50/30 hover:from-purple-50 hover:to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl text-black group-hover:text-purple-600 transition-colors duration-300">Content Creation</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Develop engaging, high-quality content that tells your brand story and drives customer engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-pink-50/30 hover:from-pink-50 hover:to-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-black group-hover:text-pink-600 transition-colors duration-300">Social Media Management</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Build and manage your social presence across platforms to connect with customers and grow your community.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-green-50/30 hover:from-green-50 hover:to-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl text-black group-hover:text-green-600 transition-colors duration-300">Website Development</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Design and develop modern, responsive websites that convert visitors into customers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-orange-50/30 hover:from-orange-50 hover:to-yellow-50">
              <CardHeader>
                <CardTitle className="text-xl text-black group-hover:text-orange-600 transition-colors duration-300">SEO Optimization</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Improve your search rankings and organic visibility to drive qualified traffic to your business.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-indigo-50/30 hover:from-indigo-50 hover:to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-black group-hover:text-indigo-600 transition-colors duration-300">Strategy & Consulting</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Get expert guidance on marketing strategy and business growth initiatives tailored to your goals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Success Framework */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Built for Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While we can't share specific client details, we can share the types of transformations
              our strategic approach consistently delivers across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                  <strong>Challenge:</strong> Early-stage SaaS company needed to establish market presence and generate qualified leads.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong> Complete brand development, content strategy, and multi-channel lead generation system.
                </p>
                <p className="text-gray-600">
                  <strong>Framework:</strong> Strategic positioning → Brand identity → Content marketing → Lead nurturing → Growth optimization.
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
                  <strong>Challenge:</strong> Mature business experiencing stagnant growth and increased competition.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong> Market repositioning, digital transformation, and customer acquisition optimization.
                </p>
                <p className="text-gray-600">
                  <strong>Framework:</strong> Market analysis → Strategic repositioning → Digital overhaul → Performance optimization → Sustained growth.
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
                  <strong>Challenge:</strong> Established company needed to modernize brand and reach new market segments.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Approach:</strong> Complete rebrand, audience expansion strategy, and omnichannel marketing.
                </p>
                <p className="text-gray-600">
                  <strong>Framework:</strong> Brand audit → Identity redesign → Audience research → Channel strategy → Market expansion.
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

          <div className="max-w-md mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Input
              placeholder="Your Name"
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-2xl px-6 py-[calc(1rem+7px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white"
            />
            <Input
              placeholder="Email Address"
              type="email"
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-2xl px-6 py-[calc(1rem+7px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white"
            />
            <Input
              placeholder="Company Name"
              className="bg-white/80 backdrop-blur-sm text-black border-0 rounded-2xl px-6 py-[calc(1rem+7px)] text-lg transition-all duration-200 focus:scale-105 focus:bg-white"
            />
            <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg py-4 rounded-2xl border-0">
              Book Free Consultation
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </Button>
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
