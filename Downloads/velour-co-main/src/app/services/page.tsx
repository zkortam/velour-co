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
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Social Media Marketing */}
          <div className="relative group grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 rounded-3xl shadow-xl border border-blue-100/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl overflow-hidden">
            {/* Removed icon placeholder */}
            <div className="pt-8 pb-8 pr-8 pl-8 lg:pl-20">
              <h2 className="text-4xl font-bold text-black mb-2">Social Media Marketing</h2>
              <h3 className="text-xl text-blue-700 font-semibold mb-4">Build Your Brand, Grow Your Influence.</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Establish your digital presence with strategic content, powerful branding, and targeted engagement designed to connect deeply with your audience.
              </p>
                  <h3 className="text-xl font-bold text-black mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li><span className="font-semibold text-black">Brand Identity & Design:</span> Craft a distinctive, memorable visual identity aligned with your brand vision.</li>
                <li><span className="font-semibold text-black">Content Creation & Strategy:</span> Develop engaging content tailored to captivate and convert your audience.</li>
                <li><span className="font-semibold text-black">Social Media Management:</span> Ensure consistent posting, active community engagement, and effective growth strategies.</li>
                  </ul>
              <h3 className="text-xl font-bold text-black mb-3">Our Proven Process:</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-base">1</div>
                  <div>
                    <div className="font-semibold text-black">Brand discovery & detailed audience research</div>
                    <div className="text-gray-600 text-sm">In-depth exploration of your business, market, and audience.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold text-base">2</div>
                <div>
                    <div className="font-semibold text-black">Strategic content planning & creative direction</div>
                    <div className="text-gray-600 text-sm">Developing a content roadmap and creative vision.</div>
                      </div>
                    </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-base">3</div>
                      <div>
                    <div className="font-semibold text-black">Consistent posting schedule & community management</div>
                    <div className="text-gray-600 text-sm">Regular engagement and management of your social presence.</div>
                      </div>
                    </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-base">4</div>
                      <div>
                    <div className="font-semibold text-black">Ongoing performance reviews & strategy optimization</div>
                    <div className="text-gray-600 text-sm">Continuous improvement based on analytics and feedback.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl m-8 shadow-md">
              <h4 className="text-2xl font-bold mb-4">Why Social Media Marketing?</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Over 4.7 Billion Active Users:</strong> Social media is essential for reaching your audience daily.</li>
                <li><strong>Trust & Loyalty:</strong> 78% of consumers say they are more likely to buy from a brand they follow on social media.</li>
                <li><strong>Growth Catalyst:</strong> Businesses see an average increase of 60% in lead generation through effective social media strategies.</li>
              </ul>
            </div>
          </div>

          {/* Advanced Growth Analytics */}
          <div className="relative group grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-indigo-50/80 via-white/80 to-blue-50/80 rounded-3xl shadow-xl border border-indigo-100/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl overflow-hidden">
            <div className="pl-8 pt-8 pb-8 pr-8 lg:pl-20">
              <h2 className="text-4xl font-bold text-black mb-2">Advanced Growth Analytics</h2>
              <h3 className="text-xl text-indigo-700 font-semibold mb-4">Turn Data Into Powerful Action.</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Maximize your marketing impact with insightful analytics and actionable strategies designed for continuous improvement and substantial growth.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li><span className="font-semibold text-black">Performance Analytics & Optimization:</span> Gain detailed insights into your campaign performance and refine strategies accordingly.</li>
                <li><span className="font-semibold text-black">Growth Opportunity Reports:</span> Regular reports highlighting new opportunities to outperform competitors.</li>
              </ul>
              <h3 className="text-xl font-bold text-black mb-3">Our Proven Process:</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-base">1</div>
                <div>
                    <div className="font-semibold text-black">Comprehensive data collection & integration</div>
                    <div className="text-gray-600 text-sm">Integrating all relevant data sources for a complete picture.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-base">2</div>
                <div>
                    <div className="font-semibold text-black">Real-time performance tracking & insightful reporting</div>
                    <div className="text-gray-600 text-sm">Monitoring and analyzing performance in real-time.</div>
                      </div>
                    </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold text-base">3</div>
                      <div>
                    <div className="font-semibold text-black">Actionable recommendations based on analytics</div>
                    <div className="text-gray-600 text-sm">Using data to make informed decisions and optimize strategies.</div>
                      </div>
                    </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-base">4</div>
                      <div>
                    <div className="font-semibold text-black">Ongoing strategy refinement & targeted implementation</div>
                    <div className="text-gray-600 text-sm">Continuous adaptation and targeted execution of strategies.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl m-8 shadow-md">
              <h4 className="text-2xl font-bold mb-4">Why Advanced Growth Analytics?</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Data-Driven Results:</strong> Businesses leveraging analytics typically outperform competitors by up to 85%.</li>
                <li><strong>Continuous Improvement:</strong> Real-time analytics reveal new growth opportunities, enabling agile adjustments.</li>
                <li><strong>Competitive Advantage:</strong> Companies that utilize advanced analytics are 23 times more likely to gain new customers.</li>
                  </ul>
                </div>
          </div>

          {/* Marketing Consulting */}
          <div className="relative group grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-pink-50/80 via-white/80 to-red-50/80 rounded-3xl shadow-xl border border-pink-100/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl overflow-hidden">
            <div className="pl-8 pt-8 pb-8 pr-8 lg:pl-20">
              <h2 className="text-4xl font-bold text-black mb-2">Marketing Consulting</h2>
              <h3 className="text-xl text-pink-700 font-semibold mb-4">Your Strategic Partner in Success.</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elevate your strategy and results with personalized, expert consulting. We partner closely with you, offering strategic guidance tailored to your goals and market opportunities.
            </p>
              <h3 className="text-xl font-bold text-black mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li><span className="font-semibold text-black">Monthly Strategy Sessions:</span> Dedicated one-on-one sessions focused on your unique business goals.</li>
                <li><span className="font-semibold text-black">Comprehensive Reviews & Recommendations:</span> Detailed assessments with actionable advice for maximum results.</li>
              </ul>
              <h3 className="text-xl font-bold text-black mb-3">Our Proven Process:</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-base">1</div>
                  <div>
                    <div className="font-semibold text-black">Initial assessment & collaborative goal setting</div>
                    <div className="text-gray-600 text-sm">Assessing current state and setting clear, achievable goals.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold text-base">2</div>
                  <div>
                    <div className="font-semibold text-black">Monthly in-depth strategy sessions</div>
                    <div className="text-gray-600 text-sm">Deep dive into your business and ongoing strategy refinement.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-base">3</div>
                  <div>
                    <div className="font-semibold text-black">Detailed performance review & actionable feedback</div>
                    <div className="text-gray-600 text-sm">Reviewing results and providing actionable advice.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-base">4</div>
                  <div>
                    <div className="font-semibold text-black">Continuous support, guidance, and optimization</div>
                    <div className="text-gray-600 text-sm">Ongoing support and optimization based on evolving needs.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 p-8 rounded-2xl m-8 shadow-md">
              <h4 className="text-2xl font-bold mb-4">Why Marketing Consulting?</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Expert Guidance:</strong> Direct access to experienced marketing professionals who understand your challenges.</li>
                <li><strong>Strategic Partnership:</strong> Businesses partnering with expert consultants experience growth rates up to 70% faster.</li>
                <li><strong>Confidence & Clarity:</strong> Make strategic decisions confidently, backed by professional insights and ongoing support.</li>
              </ul>
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
