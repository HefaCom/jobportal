'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, Zap, BarChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'CV Revamping Service | Job Portal',
//   description: 'Transform your CV into a powerful tool that showcases your skills and experience, increasing your chances of landing your dream job.',
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

export default function CVRevampingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">CV Revamping Service</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Transform Your CV, Transform Your Career</h2>
        <p className="text-lg mb-4">
          Our CV Revamping service is designed to help you create a compelling, professional CV that stands out to employers and showcases your unique skills and experiences.
        </p>
        <div className="flex items-center mb-2">
          <FileText className="w-6 h-6 mr-2 text-primary" />
          <span>Tailored to your industry and career goals</span>
        </div>
        <div className="flex items-center mb-2">
          <CheckCircle className="w-6 h-6 mr-2 text-primary" />
          <span>ATS-friendly formatting to pass automated screenings</span>
        </div>
        <div className="flex items-center mb-2">
          <Zap className="w-6 h-6 mr-2 text-primary" />
          <span>Highlight your key achievements and skills</span>
        </div>
        <div className="flex items-center mb-4">
          <BarChart className="w-6 h-6 mr-2 text-primary" />
          <span>Data-driven approach to showcase your impact</span>
        </div>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>In-depth consultation to understand your career history and goals</li>
          <li>Comprehensive review of your current CV</li>
          <li>Strategic restructuring of content to highlight your strengths</li>
          <li>Optimization of keywords for your target industry</li>
          <li>Professional formatting and design</li>
          <li>Two rounds of revisions to ensure your complete satisfaction</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">CV Revamp Package</h3>
          <p className="text-3xl font-bold mb-4">$199</p>
          <ul className="list-disc list-inside mb-4">
            <li>Comprehensive CV overhaul</li>
            <li>ATS optimization</li>
            <li>Two rounds of revisions</li>
            <li>Cover letter template</li>
            <li>LinkedIn profile summary</li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your CV?</h2>
        <p className="mb-6">
          Take the first step towards landing your dream job with a professionally crafted CV.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Contact Us Now</Button>
        </Link>
      </motion.div>
    </div>
  )
}