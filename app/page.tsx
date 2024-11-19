import { Metadata } from 'next'
import Link from 'next/link'
import { Search, ArrowUpRight } from 'lucide-react'
import CompanySlider from '@/components/CompanySlider'


export const metadata: Metadata = {
  title: 'Job Portal | Find Your Dream Job',
  description: 'Discover thousands of job opportunities with top employers. Start your career journey with Job Portal today.',
}

export default function Home() {
  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-xl mb-8">Discover thousands of job opportunities with top employers</p>
        <Link href="/jobs" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors inline-flex items-center mr-4">
          Browse Jobs <Search className="ml-2 animate-pulse" size={20} />
        </Link>
        <Link href="/services" className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors inline-flex items-center">
          Our Services <ArrowUpRight className="ml-2 animate-pulse" size={20} />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">For Job Seekers</h2>
          <p>Access thousands of job listings from top companies</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">For Employers</h2>
          <p>Post job openings and find the perfect candidates</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Career Resources</h2>
          <p>Get expert advice and tools to advance your career</p>
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Featured Companies</h2>
        <div className="">
          <CompanySlider/>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow">
            <p>&quot;This job portal helped me find my dream job in no time!&quot;</p>
            <p className="mt-4 font-semibold">- Jane Doe</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <p>&quot;A fantastic resource for both job seekers and employers!&quot;</p>
            <p className="mt-4 font-semibold">- John Smith</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-4">Not sure on how to find your next dream job?</p>
        <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Contact Us
        </Link>
      </section>
    </>
  )
}
