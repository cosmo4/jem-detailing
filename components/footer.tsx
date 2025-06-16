import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black px-10 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="JEM Aviation Detailing" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">JEM Aviation</span>
            </div>
            <p className="text-gray-400 mb-4">Premium aircraft detailing services for private plane owners.</p>
            <p className="italic text-sm text-gray-500">&quot;Cut like a Diamond, Cleaned to Fly&quot;</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#quote" className="text-gray-400 hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+15303539215" className="text-gray-400 hover:text-white transition-colors">
                  +1 (530) 353-9215
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a
                  href="mailto:jem.aviation.detailing@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  jem.aviation.detailing@gmail.com
                </a>
              </li>
              <li>
                <a href="https://jemdetailing.com" className="text-gray-400 hover:text-white transition-colors">
                  jemdetailing.com
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-red-600/20 rounded-lg border border-red-400/30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-200 font-medium text-sm">Urgent Service</span>
              </div>
              <p className="text-xs text-red-100">
                24/7 response available for time-sensitive cleaning needs
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Service Areas</h4>
              <p className="text-sm text-gray-400">
                Northern California, Nevada, and surrounding areas. Mobile service available.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JEM Aviation Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
