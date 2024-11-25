'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import { membershipPlans } from './data'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import { benefits } from './benefits/data'

export default function Membership() {
  const [isYearly, setIsYearly] = useState(false)
  
  const filteredPlans = membershipPlans.filter(plan => 
    plan.billingPeriod === (isYearly ? 'yearly' : 'monthly')
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Choose Your Plan</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Select the perfect membership plan that fits your fitness goals and lifestyle
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-full w-fit mx-auto">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  !isYearly ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  isYearly ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Yearly
                <span className="ml-2 text-sm text-primary">
                  (Save up to 20%)
                </span>
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${
                  plan.isPopular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">/{plan.billingPeriod}</span>
                    {plan.savings && (
                      <div className="text-primary text-sm mt-2">
                        Save ${plan.savings} per year
                      </div>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-6 text-lg ${
                      plan.isPopular ? 'bg-primary hover:bg-primary/90' : ''
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Membership Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experience premium fitness with our comprehensive membership benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/membership/benefits/${benefit.id}`}
                  className="block group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-72">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {benefit.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-primary font-semibold">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Can I cancel my membership anytime?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can cancel your membership at any time. For yearly memberships, 
                we offer a prorated refund for the remaining months.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">What's included in the guest passes?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Guest passes allow your friends or family to experience our facilities. 
                Each pass provides full access to the gym for one day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Are there any signup fees?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No, we don't charge any signup or initiation fees. The price you see 
                is the price you pay.
              </p>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">
              Join our community today and transform your life through fitness
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
