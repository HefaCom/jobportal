import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Portal | Find Your Dream Job',
  description: 'Discover thousands of job opportunities with top employers. Job Portal connects talented professionals with leading companies across various industries.',
  keywords: 'job portal, job search, career opportunities, employment, job listings',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jobportal.com',
    siteName: 'Job Portal',
    images: [
      {
        url: 'https://jobportal.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Job Portal - Find Your Dream Job',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jobportal',
    creator: '@jobportal',
  },
}