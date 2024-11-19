'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { MessageSquare, Users, Briefcase } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Interview Tips | Job Portal',
//   description: 'Expert advice and strategies to help you ace your job interviews and land your dream role.',
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

export default function InterviewTipsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Interview Tips</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <MessageSquare className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Communication Skills</h2>
          <p>Learn how to articulate your thoughts clearly and confidently during interviews.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Users className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Behavioral Questions</h2>
          <p>Prepare for common behavioral questions and learn how to structure your responses effectively.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Briefcase className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Industry-Specific Tips</h2>
          <p>Get tailored advice for interviews in your specific industry or field.</p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Essential Interview Tips</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-primary hover:underline">How to Answer &quot;Tell Me About Yourself&quot; in an Interview</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">10 Common Interview Questions and How to Answer Them</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">Body Language Tips for Interview Success</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">How to Follow Up After an Interview</a>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
