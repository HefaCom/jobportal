'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Search, Target, BarChart2, Users, Briefcase, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'Job Search Strategy | Job Portal',
//   description: 'Develop a targeted job search strategy to find and secure the right opportunities for your career with our expert guidance.',
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

const features = [
  { icon: Search, title: 'Personalized Job Search Plan', description: 'Tailored strategy based on your skills, experience, and career goals.' },
  { icon: Target, title: 'Target Company Identification', description: 'Identify and research companies that align with your career aspirations.' },
  { icon: BarChart2, title: 'Market Analysis', description: 'In-depth analysis of job market trends in your industry.' },
  { icon: Users, title: 'Networking Strategies', description: 'Techniques to expand your professional network and uncover hidden opportunities.' },
  { icon: Briefcase, title: 'Application Optimization', description: 'Tailoring your applications to increase your chances of getting interviews.' },
  { icon: TrendingUp, title: 'Progress Tracking', description: 'Regular check-ins and adjustments to your job search strategy.' },
]

const pricingPlans = [
  { name: 'Basic Strategy', price: '$199', features: ['Initial consultation', 'Personalized job search plan', 'Target company list', 'Basic market analysis', '2 weeks of email support'] },
  { name: 'Comprehensive Strategy', price: '$399', features: ['All Basic features', 'In-depth market analysis', 'Networking strategy', 'Application optimization for 3 jobs', '4 weeks of email support', '2 strategy review calls'] },
  { name: 'Executive Job Search', price: '$799', features: ['All Comprehensive features', 'Executive-level market insights', 'Personal branding strategy', 'Interview preparation', 'Salary negotiation guidance', '8 weeks of email support', '4 strategy review calls'] },
]

const faqs = [
  { question: 'How long does it take to develop a job search strategy?', answer: 'The initial strategy development typically takes 1-2 weeks, depending on the complexity of your career goals and the chosen package. However, job searching is an ongoing process, and we provide support and adjustments throughout the duration of your chosen package.' },
  { question: 'Can you guarantee I\'ll find a job?', answer: 'While we can\'t guarantee job placement, our strategies significantly increase your chances of finding suitable opportunities and securing interviews. Our success rate is high, with many clients finding new positions within 3-6 months of implementing our strategies.' },
  { question: 'How is this different from using a recruiter?', answer: 'Unlike recruiters who work for employers, we work directly for you. Our strategies empower you to take control of your job search, targeting opportunities that align with your career goals, not just open positions a recruiter is trying to fill.' },
  { question: 'Do you write resumes and cover letters as part of this service?', answer: 'While our Application Optimization feature includes guidance on tailoring your applications, detailed resume and cover letter writing are separate services. However, we can bundle these services with your job search strategy for a comprehensive approach.' },
  { question: 'Is this service suitable for career changers?', answer: 'Our strategies are particularly valuable for career changers. We help you identify transferable skills, target suitable industries and roles, and develop a narrative that makes your transition compelling to potential employers.' },
]

const testimonials = [
  { name: 'David Lee', role: 'Software Developer', company: 'TechInnovate Inc.', quote: 'The job search strategy provided by Job Portal was a game-changer. Within two months, I had multiple interviews and landed a role that perfectly aligned with my career goals.' },
  { name: 'Emily Chen', role: 'Marketing Manager', company: 'Global Brands Co.', quote: 'As a career changer, I was struggling to break into a new industry. The targeted approach and networking strategies I learned helped me secure a role in my dream field.' },
  { name: 'Michael Rodriguez', role: 'Senior Financial Analyst', company: 'Finance Wizards LLC', quote: 'The executive-level insights and personal branding strategy were invaluable. I secured a senior position with a significant salary increase, all within 3 months of starting the program.' },
]

export default function JobSearchStrategyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Job Search Strategy</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Navigate Your Career Path with Precision</h2>
        <p className="text-lg mb-6">
          In today&apos;s competitive job market, a strategic approach is key to landing the right opportunity. Our Job Search Strategy service provides you with a personalized roadmap to navigate your career journey, identify the best opportunities, and present yourself as the ideal candidate.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Strategic Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Career Assessment:</span> We evaluate your skills, experience, and career aspirations.</li>
          <li className="text-lg"><span className="font-semibold">Market Analysis:</span> We conduct in-depth research on job market trends in your target industry.</li>
          <li className="text-lg"><span className="font-semibold">Goal Setting:</span> We help you define clear, achievable career goals.</li>
          <li className="text-lg"><span className="font-semibold">Target Company Identification:</span> We create a list of potential employers aligned with your goals.</li>
          <li className="text-lg"><span className="font-semibold">Networking Plan:</span> We develop strategies to expand your professional network.</li>
          <li className="text-lg"><span className="font-semibold">Application Strategy:</span> We create a plan to optimize your job applications.</li>
          <li className="text-lg"><span className="font-semibold">Personal Branding:</span> We help you craft a compelling professional narrative.</li>
          <li className="text-lg"><span className="font-semibold">Action Plan:</span> We provide a detailed, step-by-step plan for your job search.</li>
          <li className="text-lg"><span className="font-semibold">Progress Tracking:</span> We set up a system to monitor and evaluate your job search progress.</li>
          <li className="text-lg"><span className="font-semibold">Strategy Refinement:</span> We continuously adjust your strategy based on results and feedback.</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Strategy Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <p className="mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p>{testimonial.role}, {testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Revolutionize Your Job Search?</h2>
        <p className="mb-6">
          Don&apos;t leave your career to chance. Let our experts guide you to your next great opportunity with a personalized job search strategy.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Start Your Strategic Job Search</Button>
        </Link>
      </motion.div>
    </div>
  )
}
