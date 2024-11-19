import { useFieldArray } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form' // Update the import

interface FormData {
  title: string; // Include all fields
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[]; // Ensure this is correctly defined
  link: string; // Added link property
}

export default function JobRequirements({ form }: { form: UseFormReturn<FormData> }) { // Update the type
    // const [link, setLink] = useState('');
  const { fields, append, remove } = useFieldArray<string>({
    control: form.control,
    name: "requirements", // Ensure this matches the FormData interface
  })
    

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Handle the submission logic here
    //     console.log('Application link submitted:', link);
    // };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Job Requirements</h2>
      {fields.map((field, index) => (
        <FormField
          key={field.id}
          control={form.control}
          name={`requirements.${index}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirement {index + 1}</FormLabel>
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <FormMessage />
             
            </FormItem>
            

          )}
        />
      ))}
   
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={() => append('')} // Change here
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Requirement
      </Button>
      <FormField
        control={form.control}
        name="link"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Application Link</FormLabel>
            <FormControl>
              <Input placeholder="Enter aplication link" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
        
    </div>
    
  )
}
