import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface JobFilterProps {
  onFilter: (filters: FilterOptions) => void
}

interface FilterOptions {
  search: string
  location: string
  jobType: string
  salary: string
}

export function JobFilter({ onFilter }: JobFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    location: '',
    jobType: '',
    salary: '',
  })

  const handleChange = (name: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(filters)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Search jobs..."
        value={filters.search}
        onChange={(e) => handleChange('search', e.target.value)}
      />
      <Input
        placeholder="Location"
        value={filters.location}
        onChange={(e) => handleChange('location', e.target.value)}
      />
      <Select onValueChange={(value) => handleChange('jobType', value)}>
        <SelectTrigger>
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full-time">Full Time</SelectItem>
          <SelectItem value="part-time">Part Time</SelectItem>
          <SelectItem value="contract">Contract</SelectItem>
          <SelectItem value="internship">Internship</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => handleChange('salary', value)}>
        <SelectTrigger>
          <SelectValue placeholder="Salary Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-50000">$0 - $50,000</SelectItem>
          <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
          <SelectItem value="100000-150000">$100,000 - $150,000</SelectItem>
          <SelectItem value="150000+">$150,000+</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full">Apply Filters</Button>
    </form>
  )
}