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
          setHasScrolled(scrollTop > 30)
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
    console.log("Menu toggled:", !isMenuOpen) // Debug log
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="border-b border-gray-200 backdrop-blur-sm bg-white/90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <div className="flex items-center hover:scale-105 transition-all duration-500 cursor-pointer relative">
                <div className={`transition-all duration-700 ease-in-out ${hasScrolled ? 'opacity-0 scale-95 -translate-y-1' : 'opacity-100 scale-100 translate-y-0'}`}>
                  <h1 className="text-xl font-bold text-black">Velour & Co.</h1>
                </div>
                <div className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${hasScrolled ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1'}`}>
                  <Image 
                    src="/velourlogo.svg" 
                    alt="Velour & Co. Logo" 
                    width={120} 
                    height={40} 
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className={`transition-colors duration-200 hover:scale-105 transform ${currentPage === 'about' ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`}>
              About
            </Link>
            <Link href="/services" className={`transition-colors duration-200 hover:scale-105 transform ${currentPage === 'services' ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`}>
              Services
            </Link>
            <Link href="/process" className={`transition-colors duration-200 hover:scale-105 transform ${currentPage === 'process' ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`}>
              Process
            </Link>
            <Link href="/contact" className={`transition-colors duration-200 hover:scale-105 transform ${currentPage === 'contact' ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg px-3 py-2 flex items-center space-x-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              <span className="text-sm font-semibold text-gray-700">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === 'about' ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === 'services' ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <Link
                href="/process"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === 'process' ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                Process
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === 'contact' ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4 pb-2">
                <Link href="/contact" onClick={closeMenu}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-200 shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 