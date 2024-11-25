'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { EnhancedThemeToggle } from '../ui/enhanced-theme-toggle'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          FitLife
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/programs" className="hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="/trainers" className="hover:text-primary transition-colors">
            Trainers
          </Link>
          <Link href="/membership" className="hover:text-primary transition-colors">
            Membership
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <EnhancedThemeToggle size="sm" />
          <Button size="sm">
            Join Now
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
