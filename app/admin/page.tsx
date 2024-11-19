import { Metadata } from 'next'
import Link from 'next/link'
import { BarChart, Users, Briefcase, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Job Portal',
  description: 'Manage job listings, users, and settings in the Job Portal admin dashboard.',
}

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Analytics"
          icon={<BarChart className="h-8 w-8" />}
          value="1,234"
          description="Total job views"
          link="/admin/analytics"
        />
        <DashboardCard
          title="Users"
          icon={<Users className="h-8 w-8" />}
          value="567"
          description="Registered users"
          link="/admin/users"
        />
        <DashboardCard
          title="Jobs"
          icon={<Briefcase className="h-8 w-8" />}
          value="89"
          description="Active job listings"
          link="/admin/jobs"
        />
        <DashboardCard
          title="Settings"
          icon={<Settings className="h-8 w-8" />}
          value=""
          description="Manage portal settings"
          link="/admin/settings"
        />
      </div>
      <div className="mt-12">
        <Link
          href="/admin/jobs/new"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center"
        >
          Post New Job
        </Link>
      </div>
    </div>
  )
}

interface DashboardCardProps {
  title: string;
  icon: JSX.Element;
  value: string;
  description: string;
  link: string;
}

function DashboardCard({ title, icon, value, description, link }: DashboardCardProps) {
  return (
    <Link href={link} className="block">
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          {icon}
        </div>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
