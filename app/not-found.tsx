import Link from 'next/link'
import Head from 'next/head' // Import Head for SEO
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not found | Find Your Dream Job',
  description: 'Discover thousands of job opportunities with top employers. Start your career journey with Job Portal today.',
}

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/jobs" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
          Back to Job Listings
        </Link>
      </div>
    </>
  )
}
