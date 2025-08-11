
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, ExternalLink, Filter } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PortfolioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [filter, setFilter] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: 'McLaren Carbon Monocoque',
      category: 'carbon-fiber',
      type: 'image',
      image: 'https://i.ytimg.com/vi/KjiP8wKVXyc/maxresdefault.jpg',
      description: 'Advanced carbon fiber monocoque fabrication process'
    },
    {
      id: 2,
      title: '3D Printed Functional Parts',
      category: '3d-printing',
      type: 'image',
      image: 'https://i.ytimg.com/vi/lCqwA1h3JV4/maxresdefault.jpg',
      description: 'Custom 3D printed automotive components'
    },
    {
      id: 3,
      title: 'Complete Build Transformation',
      category: 'full-build',
      type: 'video',
      image: 'https://i.ytimg.com/vi/ZbJJOHEm3Lk/maxresdefault.jpg',
      description: 'Full vehicle transformation documentary'
    },
    {
      id: 4,
      title: 'Custom Performance Parts',
      category: 'performance',
      type: 'image',
      image: 'https://auxito.com/cdn/shop/articles/1_b4af4587-8cf9-4bcb-b403-249edfcb733e_1200x800.jpg',
      description: 'Performance upgrade components showcase'
    },
    {
      id: 5,
      title: 'Professional Workshop',
      category: 'behind-scenes',
      type: 'image',
      image: 'https://thumbs.dreamstime.com/b/modern-automotive-workshop-luxury-sports-cars-bright-orange-black-stylish-sleek-parked-front-vibrant-walls-340892847.jpg',
      description: 'Behind the scenes of our professional facility'
    },
    {
      id: 6,
      title: 'Luxury Modifications Showcase',
      category: 'luxury',
      type: 'image',
      image: 'https://cdn.abacus.ai/images/030c45c9-7a3f-4fb3-8620-ac79def2a5b5.png',
      description: 'High-end custom modification showcase'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'carbon-fiber', name: 'Carbon Fiber' },
    { id: '3d-printing', name: '3D Printing' },
    { id: 'full-build', name: 'Complete Builds' },
    { id: 'performance', name: 'Performance' },
    { id: 'luxury', name: 'Luxury Mods' }
  ]

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our latest projects showcasing precision craftsmanship and innovative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? '' : 'border-primary text-primary hover:bg-primary hover:text-white'}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden group">
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* External link for images */}
                  {item.type === 'image' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View Complete Portfolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
