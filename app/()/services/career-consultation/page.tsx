'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Users, Target, Compass, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Career Consultation Service | Job Portal',
//   description: 'Get personalized career advice from our expert consultants to guide your professional journey and achieve your career goals.',
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

export default function CareerConsultationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Career Consultation Service</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Navigate Your Career with Expert Guidance</h2>
        <p className="text-lg mb-4">
          Our Career Consultation service provides personalized advice and strategies to help you make informed decisions about your professional future and achieve your career goals.
        </p>
        <div className="flex items-center mb-2">
          <Users className="w-6 h-6 mr-2 text-primary" />
          <span>One-on-one sessions with experienced career consultants</span>
        </div>
        <div className="flex items-center mb-2">
          <Target className="w-6 h-6 mr-2 text-primary" />
          <span>Tailored advice for your specific career stage and industry</span>
        </div>
        <div className="flex items-center mb-2">
          <Compass className="w-6 h-6 mr-2 text-primary" />
          <span>Guidance on career transitions and exploring new opportunities</span>
        </div>
        <div className="flex items-center mb-4">
          <TrendingUp className="w-6 h-6 mr-2 text-primary" />
          <span>Strategies for long-term career growth and development</span>
        </div>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Initial assessment of your current career situation and goals</li>
          <li>In-depth discussion about your skills, experiences, and aspirations</li>
          <li>Analysis of industry trends and job market opportunities</li>
          <li>Development of a personalized career action plan</li>
          <li>Guidance on networking, personal branding, and interview preparation</li>
          <li>Follow-up session to track progress and adjust strategies</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Consultation Packages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Single Session</h3>
            <p className="text-3xl font-bold mb-4">$149</p>
            <ul className="list-disc list-inside mb-4">
              <li>90-minute consultation</li>
              <li>Career assessment</li>
              <li>Personalized action plan</li>
              <li>Email follow-up</li>
            </ul>
            <Button className="w-full">Book Now</Button>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Career Growth Package</h3>
            <p className="text-3xl font-bold mb-4">$399</p>
            <ul className="list-disc list-inside mb-4">
              <li>3 x 60-minute consultations</li>
              <li>Comprehensive career assessment</li>
              <li>Detailed action plan with milestones</li>
              <li>Interview preparation session</li>
              <li>30-day email support</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Take Control of Your Career?</h2>
        <p className="mb-6">
          Our expert consultants are here to help you navigate your professional journey and achieve your career aspirations.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Schedule Your Consultation</Button>
        </Link>
      </motion.div>
    </div>
  )
}