"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navigation({ currentPage }: { currentPage: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          setHasScrolled(scrollTop > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
      hasScrolled 
        ? 'bg-white/95 border-b border-gray-200 shadow-lg' 
        : 'bg-white/80 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <div className="flex items-center group cursor-pointer">
                <div className={`transition-all duration-500 ease-out ${
                  hasScrolled ? 'opacity-0 scale-95 -translate-y-1' : 'opacity-100 scale-100 translate-y-0'
                }`}>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:to-gray-500 transition-all duration-300">
                    Velour & Co.
                  </h1>
                </div>
                <div className={`absolute inset-0 flex items-center transition-all duration-500 ease-out ${
                  hasScrolled ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1'
                }`}>
                  <Image 
                    src="/velourlogo.svg" 
                    alt="Velour & Co. Logo" 
                    width={140} 
                    height={45} 
                    className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/about" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'about' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              About
              {currentPage === 'about' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/services" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'services' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Services
              {currentPage === 'services' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/process" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'process' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Process
              {currentPage === 'process' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/contact" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'contact' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
              )}
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <span className="mr-2">Get Started</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                currentPage === 'about' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                currentPage === 'services' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Services
            </Link>
            <Link
              href="/process"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                currentPage === 'process' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Process
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                currentPage === 'contact' 
                  ? 'text-gray-900 bg-gray-100 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-3 rounded-xl font-medium shadow-lg transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 