import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              marketing solutions.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 px-4">
            From strategic planning to flawless execution, we provide end-to-end marketing services
            that drive growth and deliver measurable results for your business.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to work seamlessly together, creating a unified approach
              that amplifies your brand and accelerates your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-blue-50/30 hover:from-blue-50 hover:to-purple-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">B</span>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-blue-600 transition-colors duration-300">Brand Design & Identity</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Comprehensive brand development from strategy to visual identity, creating memorable
                  brands that resonate with your target audience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-purple-50/30 hover:from-purple-50 hover:to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">C</span>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-purple-600 transition-colors duration-300">Content Creation & Strategy</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Strategic content that tells your story, engages your audience, and drives action
                  across all marketing channels and touchpoints.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-pink-50/30 hover:from-pink-50 hover:to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-pink-600 transition-colors duration-300">Social Media Management</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Complete social media strategy, content creation, community management, and
                  performance optimization across all platforms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-green-50/30 hover:from-green-50 hover:to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">W</span>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-green-600 transition-colors duration-300">Website Development</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Custom websites that combine stunning design with optimal performance, user experience,
                  and conversion optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-orange-50/30 hover:from-orange-50 hover:to-yellow-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">SEO</span>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-orange-600 transition-colors duration-300">SEO & Digital Marketing</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Comprehensive SEO strategy, technical optimization, and digital marketing campaigns
                  that drive qualified traffic and conversions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gradient-to-br from-white to-indigo-50/30 hover:from-indigo-50 hover:to-blue-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <CardTitle className="text-xl text-black group-hover:text-indigo-600 transition-colors duration-300">Analytics & Optimization</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700">
                  Data-driven insights, performance tracking, and continuous optimization to maximize
                  ROI and achieve your business objectives.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}

      {/* Brand Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Brand Design & Identity</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your brand is more than a logo—it's the complete experience your customers have with your business.
                We create comprehensive brand identities that capture your essence and resonate with your audience.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">What's Included:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Brand strategy and positioning</li>
                    <li>• Logo design and visual identity system</li>
                    <li>• Color palette and typography selection</li>
                    <li>• Brand guidelines and style guide</li>
                    <li>• Marketing collateral design</li>
                    <li>• Brand voice and messaging framework</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Our Process:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-black">Discovery & Research</h4>
                        <p className="text-gray-600">Deep dive into your business, market, and competition</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-black">Strategy Development</h4>
                        <p className="text-gray-600">Define brand positioning, personality, and messaging</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-black">Design & Development</h4>
                        <p className="text-gray-600">Create visual identity and brand assets</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-black">Implementation</h4>
                        <p className="text-gray-600">Roll out brand across all touchpoints</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-black mb-6">Why Brand Design Matters</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>73%</strong> of consumers are willing to pay more for products from brands they trust and recognize.
                </p>
                <p>
                  <strong>Consistent branding</strong> can increase revenue by up to 23% by building recognition and trust.
                </p>
                <p>
                  <strong>First impressions</strong> are formed within 0.05 seconds—your brand design is often the first thing customers notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-black mb-6">Modern Web Standards</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Mobile-First Design:</strong> Over 60% of web traffic comes from mobile devices—we design for mobile first.
                </p>
                <p>
                  <strong>Speed Optimization:</strong> A 1-second delay in page load time can reduce conversions by 7%.
                </p>
                <p>
                  <strong>SEO Integration:</strong> Built with search engine optimization in mind from the ground up.
                </p>
                <p>
                  <strong>Conversion Focus:</strong> Every element designed to guide users toward your desired actions.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-black mb-8">Website Development</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your website is your digital headquarters—where first impressions are made and conversions happen.
                We build high-performance websites that look stunning and drive results.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Technical Excellence:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Responsive design for all devices</li>
                    <li>• Lightning-fast loading speeds</li>
                    <li>• SEO-optimized architecture</li>
                    <li>• Security and performance monitoring</li>
                    <li>• Content management systems</li>
                    <li>• E-commerce integration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Development Approach:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-black">Planning & Architecture</h4>
                        <p className="text-gray-600">Site mapping, user journey design, and technical planning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-black">Design & Prototyping</h4>
                        <p className="text-gray-600">Wireframes, mockups, and interactive prototypes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-black">Development & Testing</h4>
                        <p className="text-gray-600">Code, test, and optimize for performance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-black">Launch & Optimization</h4>
                        <p className="text-gray-600">Deploy, monitor, and continuously improve</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content & SEO Combined */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Content & SEO Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Great content and strong SEO work hand in hand to drive organic traffic,
              engage your audience, and establish your authority in your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg p-8 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-black flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">C</span>
                  </div>
                  Content Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Strategic content that tells your story, educates your audience, and drives engagement across all channels.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Content strategy and planning</li>
                    <li>• Blog posts and articles</li>
                    <li>• Video and multimedia content</li>
                    <li>• Email marketing campaigns</li>
                    <li>• Social media content</li>
                    <li>• Case studies and whitepapers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-black flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">SEO</span>
                  </div>
                  SEO & Digital Marketing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive SEO strategy that improves your search rankings and drives qualified organic traffic.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keyword research and strategy</li>
                    <li>• On-page and technical SEO</li>
                    <li>• Link building and outreach</li>
                    <li>• Local SEO optimization</li>
                    <li>• Performance tracking and reporting</li>
                    <li>• Paid advertising campaigns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Investment Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing designed to scale with your business growth. Each package includes everything you need to succeed at that stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Package */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="p-8 pb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-black">$1,250</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Starter</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  Perfect for new businesses ready to establish their brand presence and digital foundation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  <div className="bg-blue-50/50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-blue-600 mb-2">Setup Investment</div>
                    <div className="text-lg font-bold text-black">$750</div>
                    <div className="text-sm text-gray-600">One-time onboarding</div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">✓</span>
                        <span>Brand identity development & visual system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">✓</span>
                        <span>Professional website (up to 3 pages)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">✓</span>
                        <span>Foundational SEO setup & optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">✓</span>
                        <span>Social media profile setup & strategy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">✓</span>
                        <span>Content strategy roadmap & guidelines</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Minimum Commitment</div>
                    <div className="text-sm text-gray-600">3 months (10% discount at 6-month commit)</div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-3 rounded-xl group">
                      Start Your Journey
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Growth Package */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="p-8 pb-6 relative z-10 pt-12">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-black">$3,250</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-black mb-2 group-hover:text-purple-600 transition-colors duration-300">Growth</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  Comprehensive marketing suite for businesses ready to scale and capture market share.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  <div className="bg-purple-50/50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-purple-600 mb-2">Setup Investment</div>
                    <div className="text-lg font-bold text-black">$1,000</div>
                    <div className="text-sm text-gray-600">One-time onboarding</div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Everything in Starter, plus:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 font-bold">✓</span>
                        <span>Advanced SEO & content marketing (4 posts/month)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 font-bold">✓</span>
                        <span>Full social media management (12 posts/month)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 font-bold">✓</span>
                        <span>Monthly email marketing campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 font-bold">✓</span>
                        <span>Performance analytics dashboard & reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 font-bold">✓</span>
                        <span>Monthly strategy calls & optimization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Minimum Commitment</div>
                    <div className="text-sm text-gray-600">6 months (10% discount available)</div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-3 rounded-xl group">
                      Scale Your Business
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="p-8 pb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-black">$6,500+</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">Enterprise</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  Fully customized marketing solutions for established businesses seeking market leadership.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  <div className="bg-gray-50/50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Setup Investment</div>
                    <div className="text-lg font-bold text-black">$1,500</div>
                    <div className="text-sm text-gray-600">Custom scope planning</div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Premium Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2 font-bold">✓</span>
                        <span>Fully customized marketing strategy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2 font-bold">✓</span>
                        <span>End-to-end website development & hosting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2 font-bold">✓</span>
                        <span>Dedicated account management team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2 font-bold">✓</span>
                        <span>Advanced analytics & business intelligence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2 font-bold">✓</span>
                        <span>Multi-channel campaigns (paid + organic)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2 font-bold">✓</span>
                        <span>Priority support & quarterly business reviews</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Minimum Commitment</div>
                    <div className="text-sm text-gray-600">6-12 months (pricing scales with scope)</div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-gray-700 to-black text-white hover:from-gray-800 hover:to-gray-900 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-3 rounded-xl group">
                      Custom Solution
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-8 rounded-3xl border border-blue-100/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Why Choose Velour & Co. Packages?</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black mb-2">Fast Implementation</h4>
                  <p className="text-gray-600 text-sm">Get up and running in 2-3 weeks with our streamlined onboarding process.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black mb-2">Proven Results</h4>
                  <p className="text-gray-600 text-sm">Our systematic approach delivers measurable ROI and sustainable growth.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black mb-2">Dedicated Support</h4>
                  <p className="text-gray-600 text-sm">Direct access to your account team with transparent communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Updated CTA section with enhanced styling - July 3, 2025 */}
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-black leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Marketing?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Let's discuss which services will drive the biggest impact for your business.
            Schedule a free consultation to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg px-8 sm:px-10 py-4 rounded-xl">
                Get Free Consultation
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2 text-xl">
                  →
                </span>
              </Button>
            </Link>
            <Link href="/process">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 sm:px-10 py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl transition-all duration-200">
                See Our Process
              </Button>
            </Link>
          </div>
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
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Brand Design</li>
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Content Creation</li>
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Social Media</li>
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">Web Development</li>
                <li className="hover:text-black transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">SEO</li>
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
