import Link from 'next/link'
// import { motion } from 'framer-motion'
import Head from 'next/head' // Import Head for SEO

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>JobPortal - Your Job Search Companion</title>
        <meta name="description" content="Find the best job listings and post your job openings on JobPortal." />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">JobPortal</Link>
            <ul className="flex space-x-4">
              <li><Link href="/jobs" className="hover:underline">Jobs</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-muted text-muted-foreground">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <p>&copy; 2024 JobPortal. All rights reserved.</p>
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
