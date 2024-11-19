'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { FileText, Users, BarChart2, Search, PenTool, MessageSquare, Linkedin, Compass, Target, DollarSign, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// export const metadata: Metadata = {
//   title: 'Our Services | Job Portal',
//   description: 'Explore our comprehensive range of professional services designed to boost your career and enhance your job search experience.',
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

const services = [
  {
    title: 'CV Revamping',
    description: 'Transform your CV into a powerful tool that showcases your skills and experience.',
    icon: FileText,
    link: '/services/cv-revamping',
  },
  {
    title: 'Career Consultation',
    description: 'Get personalized advice from our expert career consultants to guide your professional journey.',
    icon: Users,
    link: '/services/career-consultation',
  },
  {
    title: 'Data Analysis',
    description: 'Leverage data-driven insights to make informed decisions about your career or hiring strategies.',
    icon: BarChart2,
    link: '/services/data-analysis',
  },
  {
    title: 'Research Services',
    description: 'Access comprehensive research on industry trends, company profiles, and market analysis.',
    icon: Search,
    link: '/services/research-services',
  },
  {
    title: 'Article Writing',
    description: 'Commission high-quality, SEO-optimized articles on career-related topics for your platform.',
    icon: PenTool,
    link: '/services/article-writing',
  },
  {
    title: 'Interview Coaching',
    description: 'Prepare for interviews with personalized coaching sessions to boost your confidence and performance.',
    icon: MessageSquare,
    link: '/services/interview-coaching',
  },
  {
    title: 'LinkedIn Profile Optimization',
    description: 'Enhance your LinkedIn profile to attract recruiters and showcase your professional brand.',
    icon: Linkedin,
    link: '/services/linkedin-optimization',
  },
  {
    title: 'Job Search Strategy',
    description: 'Develop a targeted job search strategy to find and secure the right opportunities for your career.',
    icon: Compass,
    link: '/services/job-search-strategy',
  },
  {
    title: 'Skill Assessment and Development',
    description: 'Identify skill gaps and create a personalized development plan to advance your career.',
    icon: Target,
    link: '/services/skill-assessment',
  },
  {
    title: 'Salary Negotiation Coaching',
    description: 'Learn effective techniques to negotiate better compensation packages and benefits.',
    icon: DollarSign,
    link: '/services/salary-negotiation',
  },
  {
    title: 'Career Transition Planning',
    description: 'Navigate career changes with expert guidance and a structured transition plan.',
    icon: RefreshCw,
    link: '/services/career-transition',
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <service.icon className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <Link href={service.link} passHref>
              <Button variant="outline">Learn More</Button>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Need a Custom Solution?</h2>
        <p className="mb-6">
          We offer tailored services to meet your specific needs. Contact us to discuss how we can help you achieve your career goals.
        </p>
        <Link href="/contact" passHref>
          <Button>Get in Touch</Button>
        </Link>
      </motion.div>
    </div>
  )
}