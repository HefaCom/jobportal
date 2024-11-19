'use client'

import { motion } from 'framer-motion'
import { Target, BarChart2, BookOpen, TrendingUp, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



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
  { icon: Target, title: 'Comprehensive Skill Assessment', description: 'Evaluate your current skill set against industry standards and job requirements.' },
  { icon: BarChart2, title: 'Gap Analysis', description: 'Identify areas for improvement and skill gaps in your professional profile.' },
  { icon: BookOpen, title: 'Personalized Learning Plan', description: 'Receive a tailored development plan to enhance your skills effectively.' },
  { icon: TrendingUp, title: 'Progress Tracking', description: 'Monitor your skill development with regular assessments and feedback.' },
  { icon: Users, title: 'Industry Benchmarking', description: 'Compare your skills to industry standards and top performers in your field.' },
  { icon: Award, title: 'Skill Certification', description: 'Earn certificates to showcase your newly developed skills to employers.' },
]

const pricingPlans = [
  { name: 'Basic Assessment', price: '$199', features: ['Initial skill assessment', 'Basic gap analysis', 'General development recommendations', '1-month access to learning resources', 'Email support'] },
  { name: 'Comprehensive Development', price: '$499', features: ['In-depth skill assessment', 'Detailed gap analysis', 'Personalized learning plan', '3-month access to premium learning resources', '2 progress review sessions', 'Email and chat support'] },
  { name: 'Executive Skill Mastery', price: '$999', features: ['360° skill assessment', 'Executive-level gap analysis', 'Customized mastery plan', '6-month access to all learning resources', 'Monthly progress reviews', 'Priority support', 'Personal skill development coach'] },
]

const faqs = [
  { question: 'How long does the skill assessment process take?', answer: 'The initial assessment typically takes 2-3 hours to complete. For the Comprehensive and Executive plans, the in-depth assessment may be spread over a few days to ensure accuracy and thoroughness.' },
  { question: 'What types of skills do you assess?', answer: 'We assess a wide range of skills including technical skills, soft skills, leadership abilities, and industry-specific competencies. Our assessments are tailored to your specific career field and goals.' },
  { question: 'How often should I reassess my skills?', answer: 'We recommend reassessing your skills every 6-12 months, or whenever you\'re considering a career move. Regular assessments help you stay current in your field and identify new areas for growth.' },
  { question: 'Can I use the skill certificates for my resume or LinkedIn profile?', answer: 'Our skill certificates are designed to be showcased on your resume, LinkedIn profile, and other professional platforms to demonstrate your expertise to potential employers.' },
  { question: 'What if I\'m not satisfied with my progress?', answer: 'If you\'re not seeing the progress you expected, we offer additional support and plan adjustments. Our goal is your success, and we\'re committed to helping you achieve your skill development goals.' },
]

const testimonials = [
  { name: 'Alex Johnson', role: 'Software Engineer', company: 'TechGrowth Inc.', quote: 'The skill assessment opened my eyes to areas I needed to improve. Within six months, I had filled my skill gaps and landed a senior role at a top tech company.' },
  { name: 'Sarah Lee', role: 'Marketing Specialist', company: 'Global Brands Co.', quote: 'The personalized learning plan was a game-changer. It helped me develop the exact skills I needed to transition into a marketing leadership position.' },
  { name: 'Michael Rodriguez', role: 'Project Manager', company: 'Innovative Solutions LLC', quote: 'As an experienced professional, I was skeptical about what I could learn. The executive skill mastery program proved me wrong and took my capabilities to a whole new level.' },
]

export default function SkillAssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Skill Assessment and Development</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Unlock Your Full Potential</h2>
        <p className="text-lg mb-6">
          In today&apos;s rapidly evolving job market, staying ahead means continuously developing your skills. Our Skill Assessment and Development service provides a comprehensive evaluation of your current abilities and a personalized roadmap to enhance your professional toolkit, ensuring you remain competitive and ready for new opportunities.
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Assessment and Development Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Initial Consultation:</span> We discuss your career goals and target roles to tailor the assessment.</li>
          <li className="text-lg"><span className="font-semibold">Comprehensive Skill Assessment:</span> Complete a series of tests and exercises to evaluate your current skill set.</li>
          <li className="text-lg"><span className="font-semibold">Industry Benchmarking:</span> We compare your skills to industry standards and top performers in your field.</li>
          <li className="text-lg"><span className="font-semibold">Gap Analysis:</span> Identify areas where your skills need improvement or development.</li>
          <li className="text-lg"><span className="font-semibold">Personalized Development Plan:</span> Receive a tailored plan to address skill gaps and enhance your strengths.</li>
          <li className="text-lg"><span className="font-semibold">Resource Allocation:</span> Access curated learning materials and resources specific to your development needs.</li>
          <li className="text-lg"><span className="font-semibold">Progress Tracking:</span> Regular check-ins and assessments to monitor your skill development.</li>
          <li className="text-lg"><span className="font-semibold">Skill Certification:</span> Earn certificates as you master new skills to showcase your growth.</li>
          <li className="text-lg"><span className="font-semibold">Ongoing Support:</span> Receive guidance and support throughout your skill development journey.</li>
          <li className="text-lg"><span className="font-semibold">Final Evaluation:</span> Comprehensive reassessment to measure your overall progress and set future goals.</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Assessment and Development Packages</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Elevate Your Professional Skills?</h2>
        <p className="mb-6">
          Don&apos;t let skill gaps hold you back. Start your journey to professional excellence today with our expert assessment and development program.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Begin Your Skill Development Journey</Button>
        </Link>
      </motion.div>
    </div>
  )
}
