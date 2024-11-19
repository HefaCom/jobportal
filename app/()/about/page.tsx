'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Users, Briefcase, TrendingUp } from 'lucide-react'
// Import metadata from a separate file
import { metadata } from './metadata'
import Head from 'next/head'

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

export default function AboutPage() {
  return (
    <>
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">About Job Portal</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Users className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>Connecting talented professionals with their dream careers, fostering growth and success in the job market.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Briefcase className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p>Leveraging cutting-edge technology and industry insights to provide personalized job matching and career guidance.</p>
        </motion.div>
        <motion.div
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TrendingUp className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Our Impact</h2>
          <p>Empowering thousands of job seekers and employers to build successful, fulfilling professional relationships.</p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Join Us in Shaping the Future of Work</h2>
        <p className="max-w-2xl mx-auto">
          At Job Portal, we&apos;re more than just a job board. We&apos;re a community of professionals, employers, and career
          experts working together to create a brighter future for the global workforce. Join us on this exciting journey!
        </p>
      </motion.div>
    </div>
    </>
  )
}
