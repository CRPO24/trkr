
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    { value: '500+', label: 'Modifications Completed', icon: Trophy },
    { value: '50+', label: 'Performance Upgrades', icon: Zap },
    { value: '100%', label: 'Quality Guarantee', icon: Shield },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://static.lambocars.com/wp-content/uploads/2023/07/5-scaled-1.jpg"
            alt="Luxury car with carbon fiber modifications"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 gradient-bg opacity-70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
            <span className="text-white">Obsidian</span>{' '}
            <span className="gradient-text">Customs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium automotive modifications specializing in carbon fiber fabrication and 
            3D printed performance parts for all vehicle types
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="text-lg px-8 py-4">
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
            Get Custom Quote
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="glass rounded-lg p-6 text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2 count-animation">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
