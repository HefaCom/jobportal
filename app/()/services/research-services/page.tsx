'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Search, BookOpen, TrendingUp, Users, BarChart2, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'Research Services | Job Portal',
//   description: 'Access comprehensive research on industry trends, company profiles, and market analysis to make informed career and business decisions.',
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
  { icon: Search, title: 'In-depth Industry Analysis', description: 'Comprehensive reports on specific industries and sectors.' },
  { icon: BookOpen, title: 'Company Profiles', description: 'Detailed insights into target companies, including culture and growth prospects.' },
  { icon: TrendingUp, title: 'Market Trends', description: 'Up-to-date information on emerging trends and market shifts.' },
  { icon: Users, title: 'Competitor Analysis', description: 'Comparative studies of key players in your industry.' },
  { icon: BarChart2, title: 'Data-Driven Insights', description: 'Actionable insights backed by robust data and analysis.' },
  { icon: Globe, title: 'Global Perspective', description: 'Research that considers international markets and trends.' },
]

const pricingPlans = [
  { name: 'Basic Research', price: '$499', features: ['Single industry report', 'Up to 3 company profiles', 'Market overview', '30-minute consultation'] },
  { name: 'Comprehensive Research', price: '$999', features: ['Multi-industry report', 'Up to 10 company profiles', 'Detailed market analysis', 'Competitor comparison', '1-hour consultation'] },
  { name: 'Custom Research', price: 'Custom', features: ['Tailored research scope', 'Unlimited company profiles', 'In-depth market and competitor analysis', 'Trend forecasting', 'Multiple consultation sessions'] },
]

const faqs = [
  { question: 'What types of research do you offer?', answer: 'We offer a wide range of research services including industry analysis, company profiling, market trend analysis, competitor analysis, and custom research tailored to your specific needs.' },
  { question: 'How current is your research data?', answer: 'We pride ourselves on providing the most up-to-date information. Our reports are typically updated quarterly, but we also offer real-time updates for rapidly changing industries.' },
  { question: 'Can you conduct research for niche or emerging industries?', answer: 'We specialize in both established and emerging industries. Our team of expert researchers can dive deep into niche markets to provide valuable insights.' },
  { question: 'Do you offer ongoing research services?', answer: 'Yes, we offer subscription-based services for clients who need regular updates. This can be particularly useful for staying on top of fast-moving industries.' },
  { question: 'How do you ensure the accuracy of your research?', answer: 'We use a rigorous multi-step verification process, cross-referencing multiple sources and employing both primary and secondary research methods. All our reports go through a thorough review process before delivery.' },
]

const testimonials = [
  { name: 'Lisa Zhang', role: 'Strategy Director', company: 'FutureTech Solutions', quote: 'The research provided by Job Portal has been instrumental in shaping our market entry strategy. The depth and accuracy of their insights are unparalleled.' },
  { name: 'Marcus Andersson', role: 'CEO', company: 'Nordic Innovations', quote: 'We\'ve been using Job Portal\'s research services for over a year now. Their reports have helped us identify key growth opportunities and stay ahead of market trends.' },
  { name: 'Priya Patel', role: 'Head of HR', company: 'Global Talent Acquisitions', quote: 'The company profiles and industry analyses from Job Portal have significantly improved our recruitment strategies. We now have a much better understanding of our target companies and their cultures.' },
]

export default function ResearchServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Research Services</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Empower Your Decisions with Comprehensive Research</h2>
        <p className="text-lg mb-6">
          In today&apos;s fast-paced business environment, having access to accurate and timely information is crucial. Our Research Services provide you with in-depth insights into industries, companies, and market trends, enabling you to make informed decisions and stay ahead of the competition.
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Research Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Requirement Analysis:</span> We work with you to understand your specific research needs and objectives.</li>
          <li className="text-lg"><span className="font-semibold">Data Collection:</span> Our team gathers data from a wide range of credible sources, including industry reports, company filings, and expert interviews.</li>
          <li className="text-lg"><span className="font-semibold">Data Analysis:</span> We employ advanced analytical tools and techniques to process and interpret the collected data.</li>
          <li className="text-lg"><span className="font-semibold">Insight Generation:</span> Our expert analysts derive meaningful insights from the analyzed data.</li>
          <li className="text-lg"><span className="font-semibold">Report Creation:</span> We compile our findings into a comprehensive, easy-to-understand report.</li>
          <li className="text-lg"><span className="font-semibold">Quality Assurance:</span> Each report undergoes a rigorous review process to ensure accuracy and completeness.</li>
          <li className="text-lg"><span className="font-semibold">Delivery and Presentation:</span> We deliver the report and offer a presentation to walk you through the key findings.</li>
          <li className="text-lg"><span className="font-semibold">Follow-up Support:</span> Our team remains available to answer questions and provide clarifications after delivery.</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Research Packages</h2>
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
        <h2 className="text-3xl font-semibold mb-6 text-center">What Our Clients Say</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Gain a Competitive Edge?</h2>
        <p className="mb-6">
          Let our expert researchers provide you with the insights you need to make informed decisions and stay ahead in your industry.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Start Your Research Project</Button>
        </Link>
      </motion.div>
    </div>
  )
}
