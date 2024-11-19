'use clent'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import JobCard from '@/components/JobCard'
import Sidebar from '@/components/SideBar'

// Mock data - replace with actual data from Firebase
const mockJobs = {
  '1': {
    id: '1',
    title: 'Software Engineer',
    company: 'Tech Co',
    location: 'San Francisco, CA',
    salary: '$100k - $150k',
    description: 'We are seeking a talented Software Engineer to join our team...',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in JavaScript and React',
      'Strong problem-solving skills',
      'Excellent communication and teamwork abilities',
    ],
  },
  '2': {
    id: '2',
    title: 'Frontend Developer',
    company: 'Web Inc',
    location: 'Remote',
    salary: '$80k - $120k',
    description: 'Join our team as a Frontend Developer and create amazing user experiences...',
    requirements: [
      'Strong proficiency in HTML, CSS, and JavaScript',
      'Experience with modern frontend frameworks (React, Vue, or Angular)',
      'Understanding of responsive design principles',
      'Knowledge of web performance optimization techniques',
      'Ability to work in a fast-paced, collaborative environment',
    ],
  },
  '3': {
    id: '3',
    title: 'Full Stack Engineer',
    company: 'Startup Co',
    location: 'New York, NY',
    salary: '$90k - $140k',
    description: 'We\'re looking for a Full Stack Engineer to help build our next-generation platform...',
    requirements: [
      'Experience with both frontend and backend development',
      'Proficiency in JavaScript, Node.js, and a modern frontend framework',
      'Familiarity with database systems (SQL and NoSQL)',
      'Understanding of RESTful API design and implementation',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
    ],
  },
}

// Define a type for the job
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
}

export default function JobDetails() {
  const router = useRouter()
  const { id } = router.query
  const [job, setJob] = useState<Job | null>(null)
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([]) // Specify the type as Job[]

  useEffect(() => {
    if (id && typeof id === 'string') {
      const fetchedJob = mockJobs[id as keyof typeof mockJobs]; // Type assertion to specify the key type
      if (!fetchedJob) {
        router.push('/404'); // Redirect to 404 if job not found
      } else {
        setJob(fetchedJob)

        // Fetch related jobs (excluding the current job)
        const fetchedRelatedJobs = Object.values(mockJobs)
          .filter(relatedJob => relatedJob.id !== id)
          .slice(0, 2)
        setRelatedJobs(fetchedRelatedJobs)
      }
    }
  }, [id, router])

  const handleShare = () => {
    // Implement share functionality
    console.log('Sharing job:', job?.title)
    alert(`Sharing job: ${job?.title}`)
  }

  if (!job) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading...</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-3/4"
        >
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <p className="text-xl mb-2">{job.company}</p>
          <p className="text-muted-foreground mb-4">{job.location} | {job.salary}</p>
          
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
            <p className="mb-4">{job.description}</p>
            
            <h3 className="text-xl font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleShare}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors mb-8"
          >
            Share This Job
          </button>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Related Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </motion.div>
        <Sidebar />
      </div>
    </Layout>
  )
}
