'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { MessageSquare, Video, FileText, Target, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'Interview Coaching | Job Portal',
//   description: 'Boost your interview performance with personalized coaching sessions to enhance your confidence and communication skills.',
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
  { icon: MessageSquare, title: 'Personalized Feedback', description: 'Receive tailored advice to improve your interview skills.' },
  { icon: Video, title: 'Mock Interviews', description: 'Practice with realistic interview simulations and expert evaluation.' },
  { icon: FileText, title: 'Interview Preparation', description: 'Learn effective strategies for researching companies and preparing responses.' },
  { icon: Target, title: 'Industry-Specific Coaching', description: 'Get coaching tailored to your target industry or role.' },
  { icon: Users, title: 'Behavioral Interview Training', description: 'Master the STAR method for answering behavioral questions.' },
  { icon: Zap, title: 'Confidence Building', description: 'Develop techniques to boost your confidence and reduce interview anxiety.' },
]

const pricingPlans = [
  { name: 'Basic Coaching', price: '$149', features: ['1-hour one-on-one coaching session', 'Interview strategy review', 'Basic mock interview', 'Written feedback  report'] },
  { name: 'Comprehensive Package', price: '$399', features: ['3 one-hour coaching sessions', 'In-depth interview strategy development', 'Multiple mock interviews', 'Video recording and analysis', 'Detailed feedback and improvement plan'] },
  { name: 'Executive Coaching', price: '$799', features: ['5 one-hour coaching sessions', 'Executive-level interview strategies', 'Industry-specific mock interviews', 'Body language and communication coaching', 'Long-term interview success plan'] },
]

const faqs = [
  { question: 'How can interview coaching help me?', answer: 'Interview coaching can significantly improve your performance by enhancing your communication skills, boosting your confidence, and helping you articulate your experiences effectively. It also prepares you for various types of interview questions and scenarios you might encounter.' },
  { question: 'What happens in a typical coaching session?', answer: 'A typical session includes a review of your resume and target roles, practice with common and challenging interview questions, feedback on your responses and body language, and strategies for improvement. We may also conduct mock interviews to simulate real interview conditions.' },
  { question: 'How many sessions do I need?', answer: 'The number of sessions varies depending on your current skill level and goals. Some clients see significant improvement after just one session, while others benefit from ongoing coaching. We recommend starting with our Comprehensive Package and adjusting based on your progress.' },
  { question: 'Can you help with technical interviews?', answer: 'Yes, we offer specialized coaching for technical interviews across various industries. Our coaches have experience in tech, finance, healthcare, and other sectors requiring specific technical knowledge.' },
  { question: 'Do you offer group coaching sessions?', answer: 'Yes, we provide group coaching sessions for organizations or groups of individuals. These can be a cost-effective way to improve interview skills for multiple people. Contact us for custom group rates.' },
]

const testimonials = [
  { name: 'Alex Thompson', role: 'Software Engineer', company: 'Tech Innovators Inc.', quote: 'The interview coaching I received was invaluable. It helped me land my dream job at a top tech company. The mock interviews were especially helpful in building my confidence.' },
  { name: 'Sarah Lee', role: 'Marketing Manager', company: 'Global Brands Co.', quote: 'I was struggling with behavioral interviews, but the STAR method training I received made a huge difference. I felt so much more prepared and confident in my last interview.' },
  { name: 'Michael Rodriguez', role: 'Finance Analyst', company: 'Investment Firm LLC', quote: 'The industry-specific coaching was exactly what I needed. My coach\'s insights into the finance sector helped me stand out in a competitive interview process.' },
]

export default function InterviewCoachingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Interview Coaching</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Master the Art of Interviewing</h2>
        <p className="text-lg mb-6">
          Interviews can be daunting, but with the right preparation and coaching, you can turn them into opportunities to showcase your skills and land your dream job. Our Interview Coaching service provides personalized guidance to help you communicate effectively, build confidence, and make a lasting impression on potential employers.
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
          <li className="text-lg"><span className="font-semibold">Initial Assessment:</span> We evaluate your current interview skills and identify areas for improvement.</li>
          <li className="text-lg"><span className="font-semibold">Customized Strategy:</span> We develop a personalized coaching plan tailored to your needs and target roles.</li>
          <li className="text-lg"><span className="font-semibold">Interview Preparation:</span> We guide you through effective company research and question preparation techniques.</li>
          <li className="text-lg"><span className="font-semibold">Mock Interviews:</span> Practice with realistic interview simulations to gain confidence and refine your responses.</li>
          <li className="text-lg"><span className="font-semibold">Feedback and Improvement:</span> Receive detailed feedback and actionable tips to enhance your performance.</li>
          <li className="text-lg"><span className="font-semibold">Communication Skills:</span> We work on your verbal and non-verbal communication to ensure you present your best self.</li>
          <li className="text-lg"><span className="font-semibold">Follow-up Coaching:</span> Additional sessions to address specific challenges or prepare for upcoming interviews.</li>
          <li className="text-lg"><span className="font-semibold">Post-Interview Analysis:</span> We help you analyze your actual interview experiences and continue improving.</li>
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
              <Button className="w-full">Book Now</Button>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Ace Your Next Interview?</h2>
        <p className="mb-6">
          Don&apos;t leave your career success to chance. Let our expert coaches help you prepare for your next big opportunity.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Schedule Your Coaching Session</Button>
        </Link>
      </motion.div>
    </div>
  )
}
