'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Target } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Career Advice | Job Portal',
//   description: 'Expert career advice to help you navigate your professional journey and achieve your goals.',
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

export default function CareerAdvicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Career Advice</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Lightbulb className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Career Development</h2>
          <p>Learn strategies for continuous growth and advancement in your professional journey.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TrendingUp className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Industry Trends</h2>
          <p>Stay informed about the latest trends and developments in your industry to stay ahead of the curve.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Target className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Goal Setting</h2>
          <p>Learn effective techniques for setting and achieving your career goals.</p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Featured Articles</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-primary hover:underline">10 Skills Every Professional Should Develop in 2023</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">How to Navigate a Career Change Successfully</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">The Future of Work: Preparing for AI and Automation</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">Building a Personal Brand That Stands Out</a>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}