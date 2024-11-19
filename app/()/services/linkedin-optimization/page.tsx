'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Linkedin, Search, Users, TrendingUp, Target, BarChart2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'LinkedIn Profile Optimization | Job Portal',
//   description: 'Enhance your LinkedIn profile to attract recruiters and showcase your professional brand with our expert optimization service.',
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
  { icon: Linkedin, title: 'Profile Audit', description: 'Comprehensive review of your current LinkedIn profile.' },
  { icon: Search, title: 'Keyword Optimization', description: 'Enhance visibility to recruiters and hiring managers.' },
  { icon: Users, title: 'Network Growth Strategy', description: 'Tips to expand your professional network effectively.' },
  { icon: TrendingUp, title: 'Content Strategy', description: 'Guidance on sharing content to boost your professional brand.' },
  { icon: Target, title: 'Tailored Recommendations', description: 'Personalized suggestions based on your industry and career goals.' },
  { icon: BarChart2, title: 'Performance Tracking', description: 'Metrics to measure the impact of profile improvements.' },
]

const pricingPlans = [
  { name: 'Basic Optimization', price: '$99', features: ['Profile audit', 'Keyword optimization', 'Headline and summary rewrite', 'Basic recommendations'] },
  { name: 'Advanced Optimization', price: '$199', features: ['All Basic features', 'Full profile rewrite', 'Custom background image', 'Content strategy plan', '30-minute consultation'] },
  { name: 'Premium Package', price: '$349', features: ['All Advanced features', '3-month content calendar', 'Network growth strategy', 'Job search strategy integration', '2 follow-up consultations'] },
]

const faqs = [
  { question: 'Why is LinkedIn profile optimization important?', answer: 'An optimized LinkedIn profile increases your visibility to recruiters, showcases your professional brand, and can lead to more career opportunities. It\'s often the first impression you make on potential employers or clients.' },
  { question: 'How long does the optimization process take?', answer: 'The basic optimization can be completed within 2-3 business days. Advanced and Premium packages may take 5-7 business days, depending on the extent of changes and consultation schedules.' },
  { question: 'Will you write the content for my profile?', answer: 'Yes, our expert writers will craft compelling content for your profile based on the information you provide and our consultation. You\'ll have the opportunity to review and request revisions.' },
  { question: 'How do I measure the success of the optimization?', answer: 'We provide metrics such as profile view increases, appearance in search results, and engagement rates. The Premium package includes ongoing performance tracking and adjustments.' },
  { question: 'Can you help with recommendations and endorsements?', answer: 'While we can\'t directly provide recommendations or endorsements, we offer strategies to ethically increase these on your profile as part of our service.' },
]

const testimonials = [
  { name: 'Jennifer Lee', role: 'Marketing Director', company: 'TechGrowth Inc.', quote: 'After the LinkedIn optimization service, I saw a 200% increase in profile views and received multiple job offers within a month. The team\'s expertise in personal branding is unmatched.' },
  { name: 'Robert Chen', role: 'Software Engineer', company: 'InnovateSoft', quote: 'The keyword optimization was a game-changer. I\'m now appearing in recruiter searches for my dream roles and have landed several promising interviews.' },
  { name: 'Samantha Rodriguez', role: 'HR Consultant', company: 'Global HR Solutions', quote: 'As an HR professional, I was skeptical, but the results speak for themselves. My network has grown significantly, and I\'m now seen as a thought leader in my field thanks to the content strategy provided.' },
]

export default function LinkedInOptimizationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">LinkedIn Profile Optimization</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Elevate Your Professional Brand on LinkedIn</h2>
        <p className="text-lg mb-6">
          In today&apos;s digital age, your LinkedIn profile is often the first impression you make on potential employers or clients. Our LinkedIn Profile Optimization service helps you stand out from the crowd, attract the right opportunities, and showcase your professional brand effectively.
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Optimization Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Initial Consultation:</span> We discuss your career goals and target audience.</li>
          <li className="text-lg"><span className="font-semibold">Profile Audit:</span> We conduct a comprehensive review of your current LinkedIn profile.</li>
          <li className="text-lg"><span className="font-semibold">Keyword Research:</span> We identify industry-specific keywords to improve your searchability.</li>
          <li className="text-lg"><span className="font-semibold">Content Creation:</span> We craft compelling content for your headline, summary, and experience sections.</li>
          <li className="text-lg"><span className="font-semibold">Visual Optimization:</span> We enhance your profile&apos;s visual elements, including your photo and background image.</li>
          <li className="text-lg"><span className="font-semibold">Skills and Endorsements:</span> We optimize your skills section and provide strategies for gaining endorsements.</li>
          <li className="text-lg"><span className="font-semibold">Network Growth Strategy:</span> We develop a plan to expand your professional network strategically.</li>
          <li className="text-lg"><span className="font-semibold">Content Strategy:</span> We create a plan for sharing content to establish thought leadership.</li>
          <li className="text-lg"><span className="font-semibold">Implementation:</span> We apply all optimizations to your profile.</li>
          <li className="text-lg"><span className="font-semibold">Review and Refinement:</span> We review the changes with you and make any necessary adjustments.</li>
          <li className="text-lg"><span className="font-semibold">Performance Tracking:</span> We set up tracking to measure the impact of the optimizations.</li>
        </ol>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Optimization Packages</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Supercharge Your LinkedIn Profile?</h2>
        <p className="mb-6">
          Don&apos;t let opportunities pass you by. Let our experts optimize your LinkedIn profile and open doors to your dream career.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Start Your LinkedIn Transformation</Button>
        </Link>
      </motion.div>
    </div>
  )
}
