import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Box, CheckCircle, AlertTriangle, BarChart3, Clock, Plus } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for dashboard
  const stats = [
    { title: "Total Products", value: "128", icon: Box, change: "+12% from last month" },
    { title: "Verified Items", value: "1,024", icon: CheckCircle, change: "+8% from last month" },
    { title: "Flagged Items", value: "23", icon: AlertTriangle, change: "+3% from last month" },
    { title: "Verification Rate", value: "94%", icon: BarChart3, change: "+2% from last month" },
  ];

  const recentVerifications = [
    { id: 1, product: "Premium Headphones X1", date: "Today, 10:30 AM", status: "authentic" },
    { id: 2, product: "Smart Watch Pro", date: "Today, 09:15 AM", status: "authentic" },
    { id: 3, product: "Designer Handbag", date: "Yesterday, 3:45 PM", status: "suspicious" },
    { id: 4, product: "Bluetooth Speaker", date: "Yesterday, 1:20 PM", status: "authentic" },
    { id: 5, product: "Luxury Sunglasses", date: "Apr 2, 2025", status: "counterfeit" },
  ];
  
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with sidebar toggle and user info */}
      <header className="bg-white border-b border-neutral-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="text-blue-primary h-8 w-8" />
            <span className="ml-2 text-xl font-bold">VerifyPro</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
              <span className="font-medium text-blue-primary">JD</span>
            </div>
            <span className="font-medium">John Doe</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-neutral-border min-h-[calc(100vh-73px)] hidden md:block">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="flex items-center p-3 text-blue-primary bg-blue-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <Box className="h-5 w-5 mr-3" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/verification" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Verifications</span>
                </Link>
              </li>
              <li>
                <Link to="/reports" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-primaryText">Dashboard</h1>
            <p className="text-neutral-secondaryText">Welcome back, John! Here's what's happening today.</p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-neutral-secondaryText text-sm">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    <p className="text-green-500 text-xs mt-1">{stat.change}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recent verifications */}
          <Card className="mb-8">
            <div className="p-6 border-b border-neutral-border">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Verifications</h2>
                <Link to="/verification" className="text-blue-primary text-sm font-medium hover:underline">
                  View all
                </Link>
              </div>
            </div>
            <div className="p-0">
              <table className="w-full">
                <thead className="bg-neutral-background text-neutral-secondaryText text-sm">
                  <tr>
                    <th className="py-3 px-6 text-left">Product</th>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-border">
                  {recentVerifications.map((verification) => (
                    <tr key={verification.id} className="hover:bg-neutral-background">
                      <td className="py-4 px-6">{verification.product}</td>
                      <td className="py-4 px-6 text-neutral-secondaryText">{verification.date}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block rounded-full px-2 py-1 text-xs ${
                          verification.status === 'authentic' ? 'bg-green-100 text-green-800' :
                          verification.status === 'suspicious' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {verification.status.charAt(0).toUpperCase() + verification.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <Button variant="ghost" size="sm" className="text-blue-primary">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Quick actions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
                <Plus className="h-6 w-6" />
                <span>Add New Product</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                <span>Start Verification</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                <span>Generate Report</span>
              </Button>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => navigate('/products')}>
                Go to Products
              </Button>
              <Button variant="outline" onClick={() => navigate('/reports')}>
                Go to Reports
              </Button>
              <Button variant="outline" onClick={() => navigate('/settings')}>
                Go to Settings
              </Button>
              <Button variant="outline" onClick={() => navigate('/verification')}>
                Go to Verifications
              </Button>
              <Button variant="outline" onClick={() => navigate('/settings')}>
                Go to Settings
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
