'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X,Facebook, Twitter, Instagram } from 'lucide-react'
import './globals.css'
import AnimatedBackground from '@/components/AnimatedBackground'
import ScrollUpButton from '@/components/ScrollUp'
import StickyContactChat from '@/components/ChatUs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">JobPortal</Link>
              <button
                className="md:hidden"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <ul className="hidden md:flex space-x-4">
                <li><Link href="/jobs" className="hover:underline">Jobs</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            {isMenuOpen && (
              <ul className="mt-4 flex flex-col justify-center items-center space-y-4 md:hidden">
                <li><Link href="/jobs" className="block hover:underline" onClick={toggleMenu}>Jobs</Link></li>
                <li><Link href="/services" className="block hover:underline" onClick={toggleMenu}>Services</Link></li>
                <li><Link href="/about" className="block hover:underline" onClick={toggleMenu}>About</Link></li>
                <li><Link href="/contact" className="block hover:underline" onClick={toggleMenu}>Contact</Link></li>
                <div className="mt-auto flex justify-center space-x-4 mb-4">
                  <Link href="https://facebook.com" className="hover:underline" onClick={toggleMenu}>
                    <Facebook size={24} />
                  </Link>
                  <Link href="https://twitter.com" className="hover:underline" onClick={toggleMenu}>
                    <Twitter size={24} />
                  </Link>
                  <Link href="https://instagram.com" className="hover:underline" onClick={toggleMenu}>
                    <Instagram size={24} />
                  </Link>
                </div>
              </ul>
            )}
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <AnimatedBackground/>
          <ScrollUpButton/>
          <StickyContactChat/>
          {children}
        </main>
        <footer className="bg-muted text-muted-foreground">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left">&copy; 2024 JobPortal. All rights reserved.</p>
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
