import {  FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'; // Import Control from the appropriate library

// Update FormData to include all necessary fields
interface FormData {
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string; // Add description
  requirements: string[]; // Add requirements
  link: string; // Added link property
}

interface FormType {
  control: Control<FormData>; // Specify the type of your form data
  // Add other properties as needed
}

export default function JobBasicInfo({ form }: { form: FormType }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Basic Information</h2>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior Software Engineer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Tech Innovators Inc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g. San Francisco, CA or Remote" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="salary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Salary Range</FormLabel>
            <FormControl>
              <Input placeholder="e.g. $100,000 - $150,000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
