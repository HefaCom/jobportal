import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  salary: string
  tags: string[]
}

export function JobCard({ id, title, company, location, salary, tags }: JobCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-1">{company}</p>
        <p className="text-sm text-muted-foreground mb-2">{location} • {salary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link  href={`/jobs/${id}`} passHref>
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}