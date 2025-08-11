
'use client'

import React from 'react'
import Link from 'next/link'
import { Zap, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text font-orbitron">
                Obsidian Customs
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional automotive modifications specializing in carbon fiber fabrication 
              and 3D printed performance parts for all vehicle types.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Performance Way, Motorsports District, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@obsidiancustoms.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-primary transition-colors">Carbon Fiber Fabrication</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">3D Printing Solutions</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Custom Fabrication</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Performance Upgrades</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Obsidian Customs. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Crafted with precision and passion for automotive excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
