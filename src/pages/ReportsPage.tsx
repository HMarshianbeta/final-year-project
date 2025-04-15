
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Shield, BarChart3, Download, Filter, ChevronDown, Map, PieChart, Calendar } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Note: We'd use recharts for real charts in a production app
const ReportsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [reportType, setReportType] = useState('verification');
  
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
                <Link to="/dashboard" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/verifications" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Verifications</span>
                </Link>
              </li>
              <li>
                <Link to="/reports" className="flex items-center p-3 text-blue-primary bg-blue-50 rounded-lg">
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
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-neutral-primaryText">Reports & Analytics</h1>
              <p className="text-neutral-secondaryText">View and generate insights from your verification data</p>
            </div>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <div className="p-4 flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1.5">Date Range</p>
                <Select 
                  value={dateRange}
                  onValueChange={setDateRange}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="last7days">Last 7 Days</SelectItem>
                    <SelectItem value="last30days">Last 30 Days</SelectItem>
                    <SelectItem value="lastquarter">Last Quarter</SelectItem>
                    <SelectItem value="lastyear">Last Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1.5">Report Type</p>
                <Select 
                  value={reportType}
                  onValueChange={setReportType}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="verification">Verification Summary</SelectItem>
                    <SelectItem value="product">Product Analysis</SelectItem>
                    <SelectItem value="geographic">Geographic Distribution</SelectItem>
                    <SelectItem value="trend">Trend Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1.5">Product Category</p>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-neutral-secondaryText text-sm">Total Verifications</p>
                  <p className="text-3xl font-bold mt-2">1,248</p>
                  <p className="text-green-500 text-xs mt-1">+12% from previous period</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-primary" />
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-neutral-secondaryText text-sm">Authentication Rate</p>
                  <p className="text-3xl font-bold mt-2">94.8%</p>
                  <p className="text-green-500 text-xs mt-1">+2.3% from previous period</p>
                </div>
                <div className="bg-green-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  <PieChart className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-neutral-secondaryText text-sm">Flagged Products</p>
                  <p className="text-3xl font-bold mt-2">48</p>
                  <p className="text-red-500 text-xs mt-1">+5% from previous period</p>
                </div>
                <div className="bg-red-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  <PieChart className="h-5 w-5 text-red-600" />
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-neutral-secondaryText text-sm">Active Users</p>
                  <p className="text-3xl font-bold mt-2">86</p>
                  <p className="text-green-500 text-xs mt-1">+10% from previous period</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-primary" />
                </div>
              </div>
            </Card>
          </div>

          {/* Main Chart */}
          <Card className="mb-6">
            <div className="p-6 border-b border-neutral-border">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Verification Trend</h2>
                <Select defaultValue="daily">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="p-6">
              {/* This would be a real chart component in production */}
              <div className="bg-neutral-background h-80 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-neutral-border mx-auto mb-4" />
                  <p className="text-neutral-secondaryText">This would be a verification trend chart</p>
                  <p className="text-sm text-neutral-border">Showing authentic vs. flagged products over time</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Secondary Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <div className="p-6 border-b border-neutral-border">
                <h2 className="text-lg font-semibold">Product Category Distribution</h2>
              </div>
              <div className="p-6">
                <div className="bg-neutral-background h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-neutral-border mx-auto mb-4" />
                    <p className="text-neutral-secondaryText">This would be a pie chart</p>
                    <p className="text-sm text-neutral-border">Showing distribution by product category</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="p-6 border-b border-neutral-border">
                <h2 className="text-lg font-semibold">Geographic Distribution</h2>
              </div>
              <div className="p-6">
                <div className="bg-neutral-background h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-12 w-12 text-neutral-border mx-auto mb-4" />
                    <p className="text-neutral-secondaryText">This would be a map visualization</p>
                    <p className="text-sm text-neutral-border">Showing verification locations worldwide</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Data Table */}
          <Card>
            <div className="p-6 border-b border-neutral-border">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Reports</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-background text-neutral-secondaryText text-sm">
                  <tr>
                    <th className="py-3 px-6 text-left">Report Name</th>
                    <th className="py-3 px-6 text-left">Date Generated</th>
                    <th className="py-3 px-6 text-left">Type</th>
                    <th className="py-3 px-6 text-left">Generated By</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-border">
                  <tr className="hover:bg-neutral-background">
                    <td className="py-4 px-6">Monthly Verification Summary</td>
                    <td className="py-4 px-6">Apr 3, 2025</td>
                    <td className="py-4 px-6">Summary</td>
                    <td className="py-4 px-6">John Doe</td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="sm" className="text-blue-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-background">
                    <td className="py-4 px-6">Quarterly Authentication Report</td>
                    <td className="py-4 px-6">Mar 31, 2025</td>
                    <td className="py-4 px-6">Quarterly</td>
                    <td className="py-4 px-6">Sarah Kim</td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="sm" className="text-blue-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-background">
                    <td className="py-4 px-6">Product Category Analysis</td>
                    <td className="py-4 px-6">Mar 15, 2025</td>
                    <td className="py-4 px-6">Product</td>
                    <td className="py-4 px-6">John Doe</td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="sm" className="text-blue-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-background">
                    <td className="py-4 px-6">Geographic Distribution Report</td>
                    <td className="py-4 px-6">Mar 10, 2025</td>
                    <td className="py-4 px-6">Geographic</td>
                    <td className="py-4 px-6">Robert Martinez</td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="sm" className="text-blue-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-background">
                    <td className="py-4 px-6">Flagged Products Analysis</td>
                    <td className="py-4 px-6">Mar 5, 2025</td>
                    <td className="py-4 px-6">Security</td>
                    <td className="py-4 px-6">Sarah Kim</td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="sm" className="text-blue-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage;
