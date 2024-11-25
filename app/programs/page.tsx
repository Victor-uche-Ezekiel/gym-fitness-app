'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { programs } from '@/data/programs'

export default function Programs() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
          alt="Gym equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Transform your life with our specialized fitness programs
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <div className="flex gap-4 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {Object.keys(program.schedule).length} days/week
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      ${program.pricing.monthly}/month
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {program.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/programs/${program.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join any of our programs and start your fitness journey today
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
