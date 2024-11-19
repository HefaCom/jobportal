'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, BarChart2, Users, Briefcase, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'Salary Negotiation Coaching | Job Portal',
//   description: 'Learn effective techniques to negotiate better compensation packages and benefits with our expert salary negotiation coaching.',
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
  { icon: DollarSign, title: 'Compensation Analysis', description: 'Understand your market value and set realistic salary targets.' },
  { icon: TrendingUp, title: 'Negotiation Strategies', description: 'Learn proven techniques to negotiate effectively and confidently.' },
  { icon: BarChart2, title: 'Benefits Optimization', description: 'Maximize your total compensation package beyond just salary.' },
  { icon: Users, title: 'Role-Play Practice', description: 'Refine your negotiation skills through simulated scenarios.' },
  { icon: Briefcase, title: 'Offer Evaluation', description: 'Get expert guidance on assessing and comparing job offers.' },
  { icon: Award, title: 'Performance-Based Raises', description: 'Strategies for negotiating raises and promotions in your current role.' },
]

const pricingPlans = [
  { name: 'Basic Coaching', price: '$249', features: ['1-hour strategy session', 'Salary research report', 'Basic negotiation tactics', 'Email support for 2 weeks'] },
  { name: 'Comprehensive Package', price: '$499', features: ['2 one-hour coaching sessions', 'In-depth market analysis', 'Advanced negotiation strategies', 'Benefits optimization guidance', 'Mock negotiation practice', 'Email support for 1 month'] },
  { name: 'Executive Negotiation', price: '$999', features: ['3 one-hour coaching sessions', 'Executive compensation analysis', 'Tailored negotiation playbook', 'Equity and stock option strategies', 'Unlimited email support for 3 months', 'Post-negotiation debrief'] },
]

const faqs = [
  { question: 'When is the best time to negotiate salary?', answer: 'The best time to negotiate is typically after you\'ve received a job offer but before you\'ve accepted it. However, for existing roles, the best time is often during performance reviews or when taking on new responsibilities.' },
  { question: 'How much of an increase should I ask for?', answer: 'This depends on various factors including your current salary, industry standards, and your unique value proposition. Our coaching helps you determine a realistic yet ambitious target based on thorough market research.' },
  { question: 'What if the employer says the offer is non-negotiable?', answer: 'Even when an employer claims an offer is non-negotiable, there\'s often room for discussion. We\'ll teach you strategies to respectfully continue the conversation and explore other aspects of the compensation package.' },
  { question: 'Can you help with negotiating benefits and not just salary?', answer: 'Our coaching covers the entire compensation package, including benefits, bonuses, stock options, flexible working arrangements, and more.' },
  { question: 'How do I negotiate without risking the job offer?', answer: 'Negotiation, when done professionally and respectfully, rarely jeopardizes a job offer. We\'ll teach you how to negotiate in a way that maintains positive relationships while advocating for your worth.' },
]

const testimonials = [
  { name: 'Emily Chen', role: 'Marketing Director', company: 'Global Brands Inc.', quote: 'The salary negotiation coaching gave me the confidence to ask for what I\'m worth. I secured a 20% higher salary than the initial offer!' },
  { name: 'Michael Rodriguez', role: 'Software Engineer', company: 'Tech Innovators LLC', quote: 'I was able to negotiate not just a higher salary, but also better stock options and a flexible work arrangement. The ROI on this coaching was incredible.' },
  { name: 'Sarah Johnson', role: 'HR Manager', company: 'Corporate Solutions Co.', quote: 'As someone on the hiring side, I was skeptical about negotiation coaching. But it taught me valuable skills for my own career growth and gave me insights into creating fairer compensation packages.' },
]

export default function SalaryNegotiationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Salary Negotiation Coaching</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Maximize Your Worth, Secure Your Future</h2>
        <p className="text-lg mb-6">
          Negotiating your salary is a crucial skill that can significantly impact your financial future. Our Salary Negotiation Coaching empowers you with the knowledge, strategies, and confidence to secure the compensation package you deserve. Whether you&apos;re considering a new job offer or seeking a raise in your current role, our expert coaches will guide you through the negotiation process.
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Coaching Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Initial Assessment:</span> We evaluate your current situation, career goals, and negotiation experience.</li>
          <li className="text-lg"><span className="font-semibold">Market Research:</span> Conduct thorough research on industry standards and your market value.</li>
          <li className="text-lg"><span className="font-semibold">Strategy Development:</span> Create a personalized negotiation strategy tailored to your specific situation.</li>
          <li className="text-lg"><span className="font-semibold">Negotiation Techniques:</span> Learn proven tactics for effective salary and benefits negotiation.</li>
          <li className="text-lg"><span className="font-semibold">Role-Play Practice:</span> Refine your approach through simulated negotiation scenarios.</li>
          <li className="text-lg"><span className="font-semibold">Offer Analysis:</span> Receive guidance on evaluating and comparing job offers.</li>
          <li className="text-lg"><span className="font-semibold">Counter-Offer Crafting:</span> Develop compelling counter-offers that highlight your value.</li>
          <li className="text-lg"><span className="font-semibold">Communication Coaching:</span> Improve your verbal and written communication for negotiations.</li>
          <li className="text-lg"><span className="font-semibold">Post-Negotiation Support:</span> Get advice on finalizing agreements and navigating post-negotiation dynamics.</li>
          <li className="text-lg"><span className="font-semibold">Long-term Strategy:</span> Develop a plan for future negotiations and ongoing career growth.</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Coaching Packages</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Boost Your Earning Potential?</h2>
        <p className="mb-6">
          Don&apos;t leave money on the table. Invest in your future with our expert salary negotiation coaching and secure the compensation you deserve.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Start Your Negotiation Journey</Button>
        </Link>
      </motion.div>
    </div>
  )
}
