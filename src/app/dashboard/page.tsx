import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

export default async function DashboardPage() {
  const session = await auth()
  
  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Welcome Back!</h3>
          </CardHeader>
          <CardContent>
            <p className="text-trust-slate">
              {session.user?.email}
            </p>
            <p className="text-sm text-trust-slate mt-2">
              Role: {session.user?.role || 'USER'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Active Leads</h3>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-strategic-blue">0</p>
            <p className="text-sm text-trust-slate">Pending follow-up</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Recent Activity</h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-trust-slate">
              No recent activity to display
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">View Leads</h4>
              <p className="text-sm text-trust-slate">
                Manage your lead pipeline
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Market Reports</h4>
              <p className="text-sm text-trust-slate">
                Latest defense industry insights
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Resources</h4>
              <p className="text-sm text-trust-slate">
                Guides and documentation
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Settings</h4>
              <p className="text-sm text-trust-slate">
                Manage your account
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}