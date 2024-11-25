'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
        alt="Fitness background"
        fill
        priority
        className="object-cover object-center"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Transform Your Life Through Fitness
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Join our community and achieve your fitness goals with expert guidance and state-of-the-art facilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-black">
              View Programs
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          >
            {[
              { value: "1000+", label: "Active Members" },
              { value: "50+", label: "Expert Trainers" },
              { value: "100+", label: "Weekly Classes" },
              { value: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
