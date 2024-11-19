'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import JobCard from '@/components/JobCard'
import Sidebar from '@/components/SideBar'
import Head from 'next/head' // Import Head for SEO
import CompanySlider from '@/components/CompanySlider'

// Mock data - replace with actual data from Firebase
const mockJobs = [
  { id: '1', title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco, CA', salary: '$100k - $150k' },
  { id: '2', title: 'Frontend Developer', company: 'Web Inc', location: 'Remote', salary: '$80k - $120k' },
  { id: '3', title: 'Full Stack Engineer', company: 'Startup Co', location: 'New York, NY', salary: '$90k - $140k' },
]



export default function Jobs() {
  const [jobs, setJobs] = useState(mockJobs) // setJobs is declared but not used yet

  // Example function to update jobs
  const updateJobs = (newJobs: { id: string; title: string; company: string; location: string; salary: string; }[]) => {
    setJobs(newJobs);
  }

  // Use useEffect to call updateJobs once on component mount
  useEffect(() => {
    updateJobs([
      ...mockJobs, // Spread existing mock jobs
      { id: '4', title: 'Data Scientist', company: 'Data Co', location: 'Austin, TX', salary: '$110k - $160k' },
    ]);
  }, []); // Empty dependency array to run only once

  return (
    <>
      <Head>
        <title>Job Listings - JobPortal</title>
        <meta name="description" content="Explore the latest job listings on JobPortal and find your dream job." />
      </Head>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-3/4"
        >
          <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
              
            ))}
            
          </div>
        </motion.div>
        <Sidebar />
      </div>
      <section className="bg-muted p-8 rounded-lg my-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Companies</h2>
        <div className="">
                                 
            <CompanySlider/>
            </div>
            </section>
               
    </>
  )
}
