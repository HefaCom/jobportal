import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="md:w-1/4 space-y-6"
    >
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Search Jobs</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search jobs..."
            className="w-full p-2 border rounded-md"
          />
          <button type="submit" className="mt-2 w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors">
            Search
          </button>
        </form>
      </div>

      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Important Links</h2>
        <ul className="space-y-2">
          <li><Link href="/career-advice" className="hover:underline">Career Advice</Link></li>
          <li><Link href="/salary-guide" className="hover:underline">Salary Guide</Link></li>
          <li><Link href="/interview-tips" className="hover:underline">Interview Tips</Link></li>
        </ul>
      </div>

      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
        <ul className="space-y-2">
          <li><Link href="/services/cv-revamp" className="hover:underline">CV Revamping</Link></li>
          <li><Link href="/services/consultation" className="hover:underline">Career Consultation</Link></li>
          <li><Link href="/services/data-analysis" className="hover:underline">Data Analysis</Link></li>
          <li><Link href="/services/research" className="hover:underline">Research Services</Link></li>
          <li><Link href="/services/article-writing" className="hover:underline">Article Writing</Link></li>
        </ul>
      </div>
    </motion.aside>
  )
}