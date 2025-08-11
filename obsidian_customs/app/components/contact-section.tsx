
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { toast } from 'sonner'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          projectType: '',
          message: ''
        })
      } else {
        toast.error('Sorry, there was an issue sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Sorry, there was an issue sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Performance Way', 'Motorsports District, CA 90210']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM PST']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@obsidiancustoms.com', 'quotes@obsidiancustoms.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 9AM - 4PM', 'Sunday: Closed']
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vehicle? Contact us for a custom quote and 
            let's bring your automotive vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company (Optional)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="serviceType" className="text-sm font-medium text-gray-300">
                        Service Type
                      </label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange('serviceType', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="carbon-fiber">Carbon Fiber Fabrication</SelectItem>
                          <SelectItem value="3d-printing">3D Printing Solutions</SelectItem>
                          <SelectItem value="custom-fab">Custom Fabrication</SelectItem>
                          <SelectItem value="performance">Performance Upgrades</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-gray-300">
                        Project Type
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => handleSelectChange('projectType', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-part">Single Component</SelectItem>
                          <SelectItem value="multiple-parts">Multiple Components</SelectItem>
                          <SelectItem value="full-kit">Complete Kit</SelectItem>
                          <SelectItem value="full-build">Full Vehicle Build</SelectItem>
                          <SelectItem value="repair">Repair/Restoration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Tell us about your project, vehicle make/model, specific requirements, timeline, and any other relevant details..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300">
                Get in touch with our team of automotive modification experts. 
                We're here to answer your questions and help bring your vision to life.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="bg-gray-900 border-gray-800 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Emergency Contact */}
            <Card className="bg-primary/10 border-primary/30 card-hover">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Emergency Services</h4>
                <p className="text-gray-300 text-sm mb-2">
                  For urgent modifications or emergency repairs, call our priority line:
                </p>
                <p className="text-primary font-semibold">+1 (555) 999-FAST</p>
                <p className="text-gray-400 text-xs mt-1">Available 24/7 for existing customers</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
