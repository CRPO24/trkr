
'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Layers, Printer, Wrench, Cpu, Zap, Shield } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Layers,
      title: 'Carbon Fiber Fabrication',
      description: 'Custom carbon fiber parts using advanced autoclave curing and RTM processes',
      features: ['Body panels', 'Interior trim', 'Structural components', 'Aerodynamic parts'],
      image: 'https://i.ytimg.com/vi/KjiP8wKVXyc/maxresdefault.jpg'
    },
    {
      icon: Printer,
      title: '3D Printing Solutions',
      description: 'Precision 3D printed parts using automotive-grade materials and technologies',
      features: ['Prototyping', 'Custom brackets', 'Interior accessories', 'Functional components'],
      image: 'https://i.ytimg.com/vi/lCqwA1h3JV4/maxresdefault.jpg'
    },
    {
      icon: Wrench,
      title: 'Custom Fabrication',
      description: 'Bespoke automotive modifications tailored to your specific requirements',
      features: ['Performance upgrades', 'Aesthetic enhancements', 'Functional improvements', 'Restoration work'],
      image: 'https://cdn.abacus.ai/images/030c45c9-7a3f-4fb3-8620-ac79def2a5b5.png'
    }
  ]

  const capabilities = [
    { icon: Cpu, title: 'Advanced Manufacturing', description: 'State-of-the-art equipment and processes' },
    { icon: Zap, title: 'Rapid Turnaround', description: 'Efficient production without compromising quality' },
    { icon: Shield, title: 'Quality Assured', description: 'Rigorous testing and quality control measures' },
  ]

  return (
    <section id="services" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional automotive modification services combining traditional craftsmanship 
            with cutting-edge technology
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full bg-gray-900 border-gray-800 overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
