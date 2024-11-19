import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Control } from 'react-hook-form'; // Import Control from the appropriate library

// Define a type for the form if not already defined
interface FormData {
  title: string; // Include all fields
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  link: string; // Added link property
}

interface FormType {
  control: Control<FormData>; // Use the specific type instead of 'any'
  // Add other properties as needed
}

export default function JobDescription({ form }: { form: FormType }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Job Description</h2>
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Provide a detailed description of the job role, responsibilities, and any other relevant information."
                className="h-64"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
