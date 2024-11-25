'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import { trainers } from '@/data/trainers'
import { Button } from '@/components/ui/button'

const Trainers = () => {
  // Select the first three trainers
  const featuredTrainers = trainers.slice(0, 3)

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Expert Trainers</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Work with our team of experienced fitness professionals dedicated to helping you achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/trainers/${trainer.id}`}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-4 justify-center">
                        {trainer.socialMedia.instagram && (
                          <a 
                            href={`https://instagram.com/${trainer.socialMedia.instagram}`}
                            className="text-white hover:text-primary transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                        {trainer.socialMedia.twitter && (
                          <a 
                            href={`https://twitter.com/${trainer.socialMedia.twitter}`}
                            className="text-white hover:text-primary transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {trainer.socialMedia.linkedin && (
                          <a 
                            href={`https://linkedin.com/in/${trainer.socialMedia.linkedin}`}
                            className="text-white hover:text-primary transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1 dark:text-white">{trainer.name}</h3>
                  <p className="text-primary mb-2">{trainer.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {trainer.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/trainers">
            <Button variant="outline" size="lg">
              View All Trainers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Trainers
