import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function Process() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="process" />

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
            Our proven
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              methodology.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            The Velour Process is a time-tested framework that ensures consistent results.
            From discovery to optimization, every step is designed to maximize your growth potential.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures nothing falls through the cracks and every decision
              is backed by strategy and data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">Discover</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Deep dive into your business, market, audience, and competitive landscape to understand
                opportunities and challenges.
              </p>
            </div>

            <div className="text-center group cursor-pointer p-6 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-3xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors duration-300">Strategize</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Develop comprehensive strategies aligned with your goals, backed by research
                and industry best practices.
              </p>
            </div>

            <div className="text-center group cursor-pointer p-6 rounded-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-3xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-green-600 transition-colors duration-300">Execute</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Implement with precision and creativity, ensuring every detail meets our
                high standards for quality and effectiveness.
              </p>
            </div>

            <div className="text-center group cursor-pointer p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-3xl">4</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors duration-300">Optimize</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Continuously monitor, analyze, and refine to ensure optimal performance
                and sustained growth over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl font-bold text-black mb-6">Detailed Process Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect in each phase of our partnership, from initial
              consultation to ongoing optimization.
            </p>
          </div>

          <div className="space-y-16">
            {/* Phase 1: Discovery */}
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="group">
                <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">Discovery Phase</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  We begin every partnership with comprehensive research and analysis to understand
                  your business inside and out. This foundation ensures all subsequent strategies
                  are built on solid ground.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">What We Analyze:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-blue-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Current marketing performance and metrics</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-blue-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Target audience demographics and psychographics</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-blue-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Competitive landscape and market positioning</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-blue-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Brand perception and market opportunities</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-blue-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Technical infrastructure and capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-black mb-6 group-hover:text-blue-600 transition-colors duration-300">Deliverables</h4>
                <div className="space-y-4">
                  <Card className="border-0 shadow-sm p-4 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group/card">
                    <h5 className="font-semibold text-black mb-2 group-hover/card:text-blue-600 transition-colors duration-300">Market Analysis Report</h5>
                    <p className="text-gray-600 text-sm group-hover/card:text-gray-800 transition-colors duration-300">Comprehensive overview of your market position and opportunities</p>
                  </Card>
                  <Card className="border-0 shadow-sm p-4 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group/card">
                    <h5 className="font-semibold text-black mb-2 group-hover/card:text-blue-600 transition-colors duration-300">Audience Research</h5>
                    <p className="text-gray-600 text-sm group-hover/card:text-gray-800 transition-colors duration-300">Detailed profiles of your ideal customers and their behaviors</p>
                  </Card>
                  <Card className="border-0 shadow-sm p-4 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group/card">
                    <h5 className="font-semibold text-black mb-2 group-hover/card:text-blue-600 transition-colors duration-300">Competitive Audit</h5>
                    <p className="text-gray-600 text-sm group-hover/card:text-gray-800 transition-colors duration-300">Analysis of competitors' strategies, strengths, and weaknesses</p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Phase 2: Strategy */}
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-black mb-6 group-hover:text-purple-600 transition-colors duration-300">Strategic Framework</h4>
                <div className="space-y-4">
                  <div className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">G</div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-purple-600 transition-colors duration-300">Goals & KPIs</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Clear, measurable objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">T</div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-pink-600 transition-colors duration-300">Target Positioning</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">How you'll stand out in the market</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">C</div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-red-600 transition-colors duration-300">Channel Strategy</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Optimal marketing channels and tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">M</div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-orange-600 transition-colors duration-300">Messaging Framework</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Compelling brand narrative and voice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 group">
                <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-purple-600 transition-colors duration-300">Strategy Development</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Based on our discoveries, we craft comprehensive strategies that align with your
                  business goals and market realities. Every recommendation is backed by data and
                  designed for maximum impact.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">Strategic Components:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-purple-500 mr-2 group-hover/item:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">Brand positioning</span>
                      </div>
                      <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-purple-500 mr-2 group-hover/item:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">Content strategy</span>
                      </div>
                      <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-purple-500 mr-2 group-hover/item:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">Channel optimization</span>
                      </div>
                      <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-purple-500 mr-2 group-hover/item:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">Growth roadmap</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Execution */}
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="group">
                <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-green-600 transition-colors duration-300">Execution & Implementation</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  This is where strategy becomes reality. Our team executes with precision,
                  creativity, and attention to detail that ensures every element works in
                  harmony to achieve your goals.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors duration-300">Implementation Areas:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-green-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                        <div>
                          <h5 className="font-semibold text-black group-hover/item:text-green-600 transition-colors duration-300">Creative Development</h5>
                          <p className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">Design, copy, and multimedia content creation</p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-green-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                        <div>
                          <h5 className="font-semibold text-black group-hover/item:text-green-600 transition-colors duration-300">Technical Implementation</h5>
                          <p className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">Website development, automation, and integrations</p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-all duration-300 cursor-pointer group/item">
                        <span className="text-green-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                        <div>
                          <h5 className="font-semibold text-black group-hover/item:text-green-600 transition-colors duration-300">Campaign Launch</h5>
                          <p className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">Multi-channel marketing campaign deployment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-black mb-6 group-hover:text-green-600 transition-colors duration-300">Quality Assurance</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm group-hover/item:scale-110 transition-transform duration-300">QA</div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-green-600 transition-colors duration-300">Multi-Stage Review</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Every deliverable undergoes thorough quality checks</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 group-hover/item:scale-110 transition-transform duration-300">
                      <div className="w-3 h-1.5 border-l-2 border-b-2 border-white transform rotate-45"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-emerald-600 transition-colors duration-300">Client Approval</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Your feedback and approval at every major milestone</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3 group-hover/item:scale-110 transition-transform duration-300">
                      <div className="flex items-end space-x-0.5">
                        <div className="w-1 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-1.5 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black group-hover/item:text-blue-600 transition-colors duration-300">Performance Testing</h5>
                      <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Technical and performance validation before launch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4: Optimization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-black mb-6 group-hover:text-orange-600 transition-colors duration-300">Continuous Improvement</h4>
                <div className="space-y-6">
                  <div className="p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <h5 className="font-semibold text-black mb-2 group-hover/item:text-orange-600 transition-colors duration-300">Monthly Reviews</h5>
                    <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Performance analysis and strategy adjustments</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <h5 className="font-semibold text-black mb-2 group-hover/item:text-red-600 transition-colors duration-300">A/B Testing</h5>
                    <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Continuous testing to optimize conversion rates</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <h5 className="font-semibold text-black mb-2 group-hover/item:text-pink-600 transition-colors duration-300">Data Analysis</h5>
                    <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Deep insights into customer behavior and trends</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group/item">
                    <h5 className="font-semibold text-black mb-2 group-hover/item:text-purple-600 transition-colors duration-300">Strategic Pivots</h5>
                    <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">Adapt strategies based on market changes and results</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 group">
                <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-orange-600 transition-colors duration-300">Optimization & Growth</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Marketing is never "set it and forget it." We continuously monitor performance,
                  analyze data, and make improvements to ensure your marketing investment delivers
                  maximum ROI and sustainable growth.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors duration-300">Optimization Focus Areas:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-orange-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Conversion rate optimization</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-orange-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Customer acquisition cost reduction</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-orange-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Lifetime value improvement</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-orange-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Channel performance enhancement</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-orange-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">Content performance analysis</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer group/item">
                      <span className="text-orange-500 mr-3 group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-gray-800 transition-colors duration-300">User experience refinement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Reporting */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Communication & Reporting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency is at the heart of our process. You'll always know what we're working on,
              how it's performing, and what's coming next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-sm relative">
                    <div className="absolute top-1 left-1 w-6 h-1 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-3 left-1 w-4 h-1 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-5 left-1 w-5 h-1 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-black">Weekly Updates</CardTitle>
                <CardDescription className="text-gray-600">
                  Regular check-ins on progress, milestones, and any questions you might have.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="flex items-end space-x-1">
                    <div className="w-2 h-4 bg-white rounded-sm"></div>
                    <div className="w-2 h-6 bg-white rounded-sm"></div>
                    <div className="w-2 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-black">Monthly Reports</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive performance reports with insights, recommendations, and next steps.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full relative">
                    <div className="absolute top-2 left-2 w-4 h-1 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-1 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-black">Quarterly Reviews</CardTitle>
                <CardDescription className="text-gray-600">
                  Strategic sessions to review performance, adjust goals, and plan for the future.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-black leading-tight">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Process?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Let's start with a free consultation where we'll walk you through exactly
            how our process can be tailored to your business needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg px-8 sm:px-10 py-4 rounded-xl">
              Schedule Free Consultation
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2 text-xl">
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
