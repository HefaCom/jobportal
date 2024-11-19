'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { DollarSign, BarChart, Globe } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Salary Guide | Job Portal',
//   description: 'Comprehensive salary information to help you understand market rates and negotiate better compensation packages.',
// }

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{ top: `${(i + 1) * 20}%` }}
          animate={{
            x: ['-100%', '100%'],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10 + i * 2,
              ease: 'linear',
            },
          }}
        />
      ))}
    </div>
  )
}

export default function SalaryGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Salary Guide</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DollarSign className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Salary Ranges</h2>
          <p>Explore salary ranges for various positions across different industries and experience levels.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BarChart className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Compensation Trends</h2>
          <p>Stay informed about the latest compensation trends and how they affect your industry.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Globe className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Regional Comparisons</h2>
          <p>Compare salaries across different regions to make informed decisions about job locations.</p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Featured Salary Insights</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-primary hover:underline">Top Paying Tech Jobs in 2023</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">How to Negotiate Your Salary: Tips from HR Professionals</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">The Impact of Remote Work on Salaries</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">Understanding Employee Benefits and Total Compensation</a>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}