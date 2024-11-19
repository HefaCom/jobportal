import { Metadata } from 'next'
import JobPostingForm from '../../../../components/admin/JobPostingForm'

export const metadata: Metadata = {
  title: 'Post New Job | Admin Dashboard',
  description: 'Create and publish a new job listing on the Job Portal.',
}

export default function PostNewJob() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Post New Job</h1>
      <JobPostingForm />
    </div>
  )
}