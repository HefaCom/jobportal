'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  salary: string
}

export default function JobCard({ id, title, company, location, salary }: JobCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-card text-card-foreground p-6 rounded-lg shadow-md"
    >
      <Link href={`/jobs/${id}`} className="block">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-1">{company}</p>
        <p className="text-muted-foreground mb-1">{location}</p>
        <p className="text-muted-foreground">{salary}</p>
      </Link>
    </motion.div>
  )
}