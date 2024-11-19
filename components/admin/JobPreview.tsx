export default function JobPreview({ form }: { form: { getValues: () => { title: string; company: string; location: string; salary: string; description: string; requirements: string[]; link: string } } }) {
    const { title, company, location, salary, description, requirements, link } = form.getValues()
  
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Job Preview</h2>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-lg mb-1">{company}</p>
          <p className="text-muted-foreground mb-4">{location} | {salary}</p>
          <h4 className="text-lg font-semibold mb-2">Job Description</h4>
          <p className="mb-4 whitespace-pre-wrap">{description}</p>
          <h4 className="text-lg font-semibold mb-2">Requirements</h4>
          <ul className="list-disc list-inside">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold mb-2">How to Apply</h4>
          <p className="mb-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {link}
            </a>
          </p>
        </div>
      </div>
    )
  }
