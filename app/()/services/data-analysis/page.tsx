'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { BarChart2, PieChart, TrendingUp, Database, FileSpreadsheet, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'Data Analysis Service | Job Portal',
//   description: 'Leverage data-driven insights to make informed decisions about your career or hiring strategies with our expert data analysis service.',
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
  { icon: BarChart2, title: 'Comprehensive Data Analysis', description: 'In-depth analysis of job market trends, salary data, and industry growth patterns.' },
  { icon: PieChart, title: 'Custom Reports', description: 'Tailored reports that focus on your specific needs and questions.' },
  { icon: TrendingUp, title: 'Predictive Analytics', description: 'Forecast future trends to help you make proactive career or hiring decisions.' },
  { icon: Database, title: 'Large Dataset Handling', description: 'Process and analyze large volumes of data from various sources.' },
  { icon: FileSpreadsheet, title: 'Data Visualization', description: 'Clear, intuitive visualizations that make complex data easy to understand.' },
  { icon: Users, title: 'Competitor Analysis', description: 'Gain insights into competitor strategies and market positioning.' },
]

const pricingPlans = [
  { name: 'Basic Analysis', price: '$499', features: ['Single dataset analysis', 'Standard report', '1 round of revisions', 'Basic data visualization'] },
  { name: 'Advanced Analysis', price: '$999', features: ['Multiple dataset analysis', 'Comprehensive report', '2 rounds of revisions', 'Advanced data visualization', 'Trend forecasting'] },
  { name: 'Enterprise Analysis', price: 'Custom', features: ['Large-scale data analysis', 'Customized reporting', 'Unlimited revisions', 'Interactive dashboards', 'Ongoing support'] },
]

const faqs = [
  { question: 'What types of data can you analyze?', answer: 'We can analyze a wide range of data related to job markets, industry trends, salary information, skills demand, and more. Our team is equipped to handle both structured and unstructured data from various sources.' },
  { question: 'How long does a typical data analysis project take?', answer: 'The duration can vary depending on the scope and complexity of the project. A basic analysis might take 1-2 weeks, while more comprehensive projects could take 4-6 weeks or more. We\ll provide a detailed timeline during our initial consultation.' },
  { question: 'Can you help interpret the results of the analysis?', answer: 'We don\'t just provide raw data - our experts will help you interpret the results, understand their implications, and develop actionable strategies based on the insights.' },
  { question: 'Do you offer ongoing data analysis services?', answer: 'Yes, we offer retainer services for clients who need regular data analysis. This can be particularly useful for tracking trends over time or for businesses that need to make data-driven decisions frequently.' },
  { question: 'How do you ensure the confidentiality of my data?', answer: 'We take data security very seriously. All data is handled in compliance with relevant data protection regulations. We use secure, encrypted systems for data storage and transfer, and all our staff sign strict confidentiality agreements.' },
]

const testimonials = [
  { name: 'Sarah Johnson', role: 'HR Director', company: 'Tech Innovators Inc.', quote: 'The data analysis provided by Job Portal was instrumental in reshaping our hiring strategy. The insights were clear, actionable, and led to a 30% improvement in our talent acquisition process.' },
  { name: 'Michael Chen', role: 'Career Coach', company: 'Future Careers', quote: 'I use Job Portal\'s data analysis service to stay on top of industry trends. It\'s an invaluable tool that helps me provide the most up-to-date advice to my clients.' },
  { name: 'Emily Rodriguez', role: 'CEO', company: 'StartUp Ventures', quote: 'The predictive analytics from Job Portal helped us anticipate skill shortages in our industry. We were able to adapt our training programs proactively, giving us a significant competitive advantage.' },
]

export default function DataAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Data Analysis Service</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Unlock the Power of Data for Your Career or Business</h2>
        <p className="text-lg mb-6">
          In today&apos;s data-driven world, making informed decisions is crucial for success. Our Data Analysis service provides you with deep insights into job markets, industry trends, and talent landscapes, empowering you to make strategic career moves or optimize your hiring processes.
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Initial Consultation:</span> We discuss your objectives and determine the scope of the analysis.</li>
          <li className="text-lg"><span className="font-semibold">Data Collection:</span> We gather relevant data from various sources, ensuring data quality and relevance.</li>
          <li className="text-lg"><span className="font-semibold">Data Cleaning and Preparation:</span> We process the data to ensure accuracy and consistency.</li>
          <li className="text-lg"><span className="font-semibold">Analysis:</span> Our experts apply advanced statistical techniques and machine learning algorithms to extract insights.</li>
          <li className="text-lg"><span className="font-semibold">Visualization:</span> We create clear, intuitive visualizations to represent the findings.</li>
          <li className="text-lg"><span className="font-semibold">Reporting:</span> We compile a comprehensive report with our analysis, insights, and recommendations.</li>
          <li className="text-lg"><span className="font-semibold">Presentation:</span> We walk you through the findings and answer any questions you may have.</li>
          <li className="text-lg"><span className="font-semibold">Follow-up:</span> We provide ongoing support to help you implement data-driven strategies.</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Pricing Plans</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Harness the Power of Data?</h2>
        <p className="mb-6">
          Let our expert data analysts help you uncover valuable insights to drive your career or business forward.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Get Started with Data Analysis</Button>
        </Link>
      </motion.div>
    </div>
  )
}
