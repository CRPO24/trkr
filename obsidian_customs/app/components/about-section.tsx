
'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Clock, Target } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    { icon: Users, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Clock, value: '48hrs', label: 'Average Turnaround' },
    { icon: Target, value: '100%', label: 'Satisfaction Rate' },
  ]

  const expertise = [
    'Advanced Carbon Fiber Manufacturing',
    'Precision 3D Printing Technologies',
    'Custom Automotive Engineering',
    'Performance Optimization',
    'Quality Control & Testing',
    'Customer-Focused Solutions'
  ]

  return (
    <section id="about" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            About <span className="gradient-text">Obsidian Customs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneers in automotive modification, combining cutting-edge technology with 
            traditional craftsmanship to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded with a passion for automotive excellence, Obsidian Customs has grown 
                to become a leading provider of premium automotive modifications. Our journey 
                began with a simple vision: to push the boundaries of what's possible in 
                automotive customization.
              </p>
              <p>
                Today, we specialize in carbon fiber fabrication and 3D printing technologies, 
                offering solutions that combine lightweight performance with stunning aesthetics. 
                Our team of expert craftsmen and engineers work tirelessly to bring your 
                automotive dreams to reality.
              </p>
              <p>
                Every project we undertake is a testament to our commitment to quality, 
                innovation, and customer satisfaction. We don't just modify cars – we 
                transform them into masterpieces.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workshop Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://thumbs.dreamstime.com/b/modern-automotive-workshop-luxury-sports-cars-bright-orange-black-stylish-sleek-parked-front-vibrant-walls-340892847.jpg"
                alt="Obsidian Customs Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="bg-gray-900 border-gray-800 text-center card-hover">
                <CardContent className="p-6">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "To revolutionize the automotive modification industry through innovative 
              technologies, exceptional craftsmanship, and unwavering dedication to customer 
              satisfaction. We transform ordinary vehicles into extraordinary machines that 
              reflect our clients' unique vision and passion for automotive excellence."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
