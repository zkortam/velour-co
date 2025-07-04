import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Process() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 backdrop-blur-sm bg-white/90 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-xl font-bold text-black hover:scale-105 transition-transform duration-200 cursor-pointer">Velour & Co.</h1>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200 hover:scale-105 transform">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-200 hover:scale-105 transform">Services</Link>
              <Link href="/process" className="text-black font-medium">Process</Link>
              <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200 hover:scale-105 transform">Contact</Link>
            </div>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
            Our proven
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              methodology.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Discover</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep dive into your business, market, audience, and competitive landscape to understand
                opportunities and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Strategize</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop comprehensive strategies aligned with your goals, backed by research
                and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Execute</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement with precision and creativity, ensuring every detail meets our
                high standards for quality and effectiveness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">4</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Optimize</h3>
              <p className="text-gray-600 leading-relaxed">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Detailed Process Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect in each phase of our partnership, from initial
              consultation to ongoing optimization.
            </p>
          </div>

          <div className="space-y-16">
            {/* Phase 1: Discovery */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black">Discovery Phase</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We begin every partnership with comprehensive research and analysis to understand
                  your business inside and out. This foundation ensures all subsequent strategies
                  are built on solid ground.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-black">What We Analyze:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span>Current marketing performance and metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span>Target audience demographics and psychographics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span>Competitive landscape and market positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span>Brand perception and market opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span>Technical infrastructure and capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-black mb-6">Deliverables</h4>
                <div className="space-y-4">
                  <Card className="border-0 shadow-sm p-4">
                    <h5 className="font-semibold text-black mb-2">Market Analysis Report</h5>
                    <p className="text-gray-600 text-sm">Comprehensive overview of your market position and opportunities</p>
                  </Card>
                  <Card className="border-0 shadow-sm p-4">
                    <h5 className="font-semibold text-black mb-2">Audience Research</h5>
                    <p className="text-gray-600 text-sm">Detailed profiles of your ideal customers and their behaviors</p>
                  </Card>
                  <Card className="border-0 shadow-sm p-4">
                    <h5 className="font-semibold text-black mb-2">Competitive Audit</h5>
                    <p className="text-gray-600 text-sm">Analysis of competitors' strategies, strengths, and weaknesses</p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Phase 2: Strategy */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-black mb-6">Strategic Framework</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">G</div>
                    <div>
                      <h5 className="font-semibold text-black">Goals & KPIs</h5>
                      <p className="text-gray-600 text-sm">Clear, measurable objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">T</div>
                    <div>
                      <h5 className="font-semibold text-black">Target Positioning</h5>
                      <p className="text-gray-600 text-sm">How you'll stand out in the market</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">C</div>
                    <div>
                      <h5 className="font-semibold text-black">Channel Strategy</h5>
                      <p className="text-gray-600 text-sm">Optimal marketing channels and tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">M</div>
                    <div>
                      <h5 className="font-semibold text-black">Messaging Framework</h5>
                      <p className="text-gray-600 text-sm">Compelling brand narrative and voice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black">Strategy Development</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Based on our discoveries, we craft comprehensive strategies that align with your
                  business goals and market realities. Every recommendation is backed by data and
                  designed for maximum impact.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-3">Strategic Components:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-700">Brand positioning</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-700">Content strategy</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-700">Channel optimization</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-700">Growth roadmap</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Execution */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black">Execution & Implementation</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  This is where strategy becomes reality. Our team executes with precision,
                  creativity, and attention to detail that ensures every element works in
                  harmony to achieve your goals.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-3">Implementation Areas:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3">•</span>
                        <div>
                          <h5 className="font-semibold text-black">Creative Development</h5>
                          <p className="text-gray-600">Design, copy, and multimedia content creation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3">•</span>
                        <div>
                          <h5 className="font-semibold text-black">Technical Implementation</h5>
                          <p className="text-gray-600">Website development, automation, and integrations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3">•</span>
                        <div>
                          <h5 className="font-semibold text-black">Campaign Launch</h5>
                          <p className="text-gray-600">Multi-channel marketing campaign deployment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-black mb-6">Quality Assurance</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">QA</div>
                    <div>
                      <h5 className="font-semibold text-black">Multi-Stage Review</h5>
                      <p className="text-gray-600 text-sm">Every deliverable undergoes thorough quality checks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3">
                      <div className="w-3 h-1.5 border-l-2 border-b-2 border-white transform rotate-45"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black">Client Approval</h5>
                      <p className="text-gray-600 text-sm">Your feedback and approval at every major milestone</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                      <div className="flex items-end space-x-0.5">
                        <div className="w-1 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-1.5 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black">Performance Testing</h5>
                      <p className="text-gray-600 text-sm">Technical and performance validation before launch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4: Optimization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-black mb-6">Continuous Improvement</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Monthly Reviews</h5>
                    <p className="text-gray-600 text-sm">Performance analysis and strategy adjustments</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">A/B Testing</h5>
                    <p className="text-gray-600 text-sm">Continuous testing to optimize conversion rates</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Data Analysis</h5>
                    <p className="text-gray-600 text-sm">Deep insights into customer behavior and trends</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Strategic Pivots</h5>
                    <p className="text-gray-600 text-sm">Adapt strategies based on market changes and results</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black">Optimization & Growth</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Marketing is never "set it and forget it." We continuously monitor performance,
                  analyze data, and make improvements to ensure your marketing investment delivers
                  maximum ROI and sustainable growth.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-black">Optimization Focus Areas:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Conversion rate optimization</li>
                    <li>• Customer acquisition cost reduction</li>
                    <li>• Lifetime value improvement</li>
                    <li>• Channel performance enhancement</li>
                    <li>• Content performance analysis</li>
                    <li>• User experience refinement</li>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Process?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's start with a free consultation where we'll walk you through exactly
            how our process can be tailored to your business needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg px-8 py-3">
              Schedule Free Consultation
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
