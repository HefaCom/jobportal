'use client'
// import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { PenTool, Search, BarChart2, Globe, BookOpen, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export const metadata: Metadata = {
//   title: 'Article Writing Service | Job Portal',
//   description: 'Commission high-quality, SEO-optimized articles on career-related topics for your platform or business needs.',
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
  { icon: PenTool, title: 'Expert Writers', description: 'Our team of professional writers specializes in career-related content.' },
  { icon: Search, title: 'SEO Optimization', description: 'Articles are optimized for search engines to improve visibility.' },
  { icon: BarChart2, title: 'Data-Driven Content', description: 'We incorporate relevant statistics and research to support our articles.' },
  { icon: Globe, title: 'Industry-Specific Knowledge', description: 'Content tailored to various industries and career paths.' },
  { icon: BookOpen, title: 'Engaging  Storytelling', description: 'We craft compelling narratives to keep readers interested.' },
  { icon: Target, title: 'Targeted Audience Focus', description: 'Content designed to resonate with your specific audience.' },
]

const pricingPlans = [
  { name: 'Basic Package', price: '$199', features: ['500-word article', 'Topic research', 'Basic SEO optimization', '1 round of revisions'] },
  { name: 'Standard Package', price: '$399', features: ['1000-word article', 'In-depth topic research', 'Advanced SEO optimization', '2 rounds of revisions', 'Meta description'] },
  { name: 'Premium Package', price: '$799', features: ['2000-word long-form article', 'Expert interviews', 'Comprehensive SEO strategy', 'Unlimited revisions', 'Social media snippets', 'Custom graphics'] },
]

const faqs = [
  { question: 'What types of articles do you write?', answer: 'We specialize in career-related content, including job search tips, industry insights, workplace trends, professional development advice, and company culture articles. We can adapt our writing to suit your specific needs and audience.' },
  { question: 'How long does it take to complete an article?', answer: 'The turnaround time depends on the complexity and length of the article. Typically, a standard 1000-word article takes 5-7 business days from brief to final draft. Rush orders may be accommodated for an additional fee.' },
  { question: 'Can I provide my own topic ideas?', answer: 'We encourage clients to share their ideas and preferences. Our team can also suggest topics based on your target audience and current trends in your industry.' },
  { question: 'Do you offer bulk pricing for multiple articles?', answer: 'Yes, we offer discounts for bulk orders. Please contact us for a custom quote based on your specific needs and volume of articles.' },
  { question: 'How do you ensure the originality of the content?', answer: 'All our articles are written from scratch and pass through plagiarism detection software. We also provide a plagiarism report upon request for your peace of mind.' },
]

const testimonials = [
  { name: 'David Lee', role: 'Content Manager', company: 'CareerBoost Blog', quote: 'The articles provided by Job Portal have significantly increased our blog traffic and user engagement. Their writers truly understand our audience and deliver high-quality content consistently.' },
  { name: 'Amanda Chen', role: 'HR Director', company: 'TechGrowth Inc.', quote: 'We\'ve been using Job Portal\'s article writing service for our company blog and newsletter. The content is always well-researched, engaging, and perfectly aligned with our employer branding strategy.' },
  { name: 'Robert Johnson', role: 'Founder', company: 'JobSeeker Pro', quote: 'As a career coaching platform, having top-notch content is crucial for us. Job Portal delivers articles that not only inform but also inspire our users. It\'s been a game-changer for our content marketing efforts.' },
]

export default function ArticleWritingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-center">Article Writing Service</h1>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Elevate Your Content Strategy with Expert Article Writing</h2>
        <p className="text-lg mb-6">
          In the competitive digital landscape, high-quality content is key to attracting and retaining your audience. Our Article Writing service provides you with expertly crafted, SEO-optimized articles that engage readers, establish your authority, and drive traffic to your platform.
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Writing Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg"><span className="font-semibold">Topic Selection:</span> We work with you to identify relevant and engaging topics for your audience.</li>
          <li className="text-lg"><span className="font-semibold">Research:</span> Our writers conduct thorough research to gather accurate and up-to-date information.</li>
          <li className="text-lg"><span className="font-semibold">Outline Creation:</span> We develop a comprehensive outline to ensure a logical flow of ideas.</li>
          <li className="text-lg"><span className="font-semibold">Writing:</span> Our expert writers craft the article, focusing on clarity, engagement, and value.</li>
          <li className="text-lg"><span className="font-semibold">SEO Optimization:</span> We incorporate relevant keywords and optimize the structure for search engines.</li>
          <li className="text-lg"><span className="font-semibold">Editing and Proofreading:</span> Our editors review the article for quality, coherence, and accuracy.</li>
          <li className="text-lg"><span className="font-semibold">Client Review:</span> We send you the draft for feedback and make any necessary revisions.</li>
          <li className="text-lg"><span className="font-semibold">Final Delivery:</span> You receive the polished, publication-ready article.</li>
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
              <Button className="w-full">Order Now</Button>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Elevate Your Content?</h2>
        <p className="mb-6">
          Let our expert writers create engaging, SEO-optimized articles that resonate with your audience and drive results.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Start Your Content Journey</Button>
        </Link>
      </motion.div>
    </div>
  )
}
