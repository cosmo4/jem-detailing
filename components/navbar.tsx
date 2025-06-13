"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

import { Button } from "primereact/button"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="JEM Aviation Detailing" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-tight">JEM Aviation</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#services"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('services')
              if (element) {
                const offset = 80 // Account for fixed navbar height
                const elementPosition = element.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('gallery')
              if (element) {
                const offset = 80
                const elementPosition = element.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
          >
            Gallery
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('about')
              if (element) {
                const offset = 80
                const elementPosition = element.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('contact')
              if (element) {
                const offset = 80
                const elementPosition = element.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#quote"
            className="hidden md:flex"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('quote')
              if (element) {
                const offset = 80
                const elementPosition = element.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
          >
            <Button className="flex items-center">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button
            outlined
            rounded
            className="md:hidden"
            icon={<Menu className="h-5 w-5" />}
            aria-label="Toggle menu"
          />
        </div>
      </div>
    </header>
  )
}
