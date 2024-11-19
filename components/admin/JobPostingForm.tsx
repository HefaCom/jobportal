'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import JobBasicInfo from './JobBasicInfo'
import JobDescription from './JobDescription'
import JobRequirements from './JobRequirements'
import JobPreview from './JobPreview'
import { db } from '@/app/firebase'// Import the Firestore database
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import Toastify from 'toastify-js'; // Import Toastify

const jobFormSchema = z.object({
  title: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company name is required'),
  location: z.string().min(1, 'Location is required'),
  salary: z.string().min(1, 'Salary range is required'),
  description: z.string().min(50, 'Job description must be at least 50 characters'),
  requirements: z.array(z.string()).min(1, 'At least one requirement is needed'),
  link: z.string().url().min(20, 'Must be a valid URL'), // Added link property
})

type JobFormValues = z.infer<typeof jobFormSchema>

export default function JobPostingForm() {
  const [step, setStep] = useState(1)
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: '',
      company: '',
      location: '',
      salary: '',
      description: '',
      requirements: [''],
      link: '',
    },
  })

  const onSubmit = async (data: JobFormValues) => {
    try {
      const docRef = doc(db, 'jobs', 'job_' + new Date().getTime()); // Create a unique document ID
      await setDoc(docRef, data); // Save the data to Firestore

      // Show success notification
      Toastify({
        text: "Job posted successfully!",
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: "green",
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
    } catch (error) {
      console.error("Error adding document: ", error);

      // Show error notification
      Toastify({
        text: "Failed to post job. Please try again.",
        duration: 3000,
        gravity: "top",
        position: 'right',
        backgroundColor: "red",
        stopOnFocus: true,
      }).showToast();
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 && <JobBasicInfo form={form} />}
        {step === 2 && <JobDescription form={form} />}
        {step === 3 && <JobRequirements form={form} />}
        {step === 4 && <JobPreview form={form} />}

        <div className="flex justify-between">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}
          {step < 4 && (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          )}
          {step === 4 && (
            <Button type="submit">Post Job</Button>
          )}
        </div>
      </form>
    </Form>
  )
}
