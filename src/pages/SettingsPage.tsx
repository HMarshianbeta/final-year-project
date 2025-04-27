
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Shield, User, Building2, Bell, Lock, CreditCard, Upload, Mail, Phone, MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsPage: React.FC = () => {
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
                  <User className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <User className="h-5 w-5 mr-3" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/verification" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <User className="h-5 w-5 mr-3" />
                  <span>Verifications</span>
                </Link>
              </li>
              <li>
                <Link to="/reports" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <User className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center p-3 text-blue-primary bg-blue-50 rounded-lg">
                  <User className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-primaryText">Settings</h1>
            <p className="text-neutral-secondaryText">Manage your account and preferences</p>
          </div>

          <Tabs defaultValue="profile" className="mb-6">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Personal Information</h2>
                  <p className="text-neutral-secondaryText text-sm">Update your personal details and contact information</p>
                </div>
                <div className="p-6">
                  {/* Profile Photo */}
                  <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center shrink-0">
                      <span className="font-medium text-blue-primary text-xl">JD</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Profile Photo</h3>
                      <p className="text-neutral-secondaryText text-sm mb-2">This will be displayed on your profile</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Personal Info Form */}
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                          <Input id="email" type="email" defaultValue="john.doe@company.com" className="pl-10" />
                        </div>
                        <Button variant="outline">Verify</Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                        <Input id="phone" defaultValue="+1 (555) 123-4567" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" defaultValue="Product Manager" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" rows={3} placeholder="Tell us a little about yourself" />
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </form>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="company">
              <Card className="mb-6">
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Company Information</h2>
                  <p className="text-neutral-secondaryText text-sm">Update your company details and branding</p>
                </div>
                <div className="p-6">
                  {/* Company Logo */}
                  <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="bg-blue-100 h-20 w-20 rounded-lg flex items-center justify-center shrink-0">
                      <Shield className="h-10 w-10 text-blue-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Company Logo</h3>
                      <p className="text-neutral-secondaryText text-sm mb-2">This will be displayed throughout the platform</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Company Info Form */}
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                        <Input id="company-name" defaultValue="TechCorp Inc." className="pl-10" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Input id="industry" defaultValue="Electronics Manufacturing" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <Input id="company-size" defaultValue="50-100 employees" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-website">Website</Label>
                      <Input id="company-website" defaultValue="https://techcorp.com" />
                    </div>

                    <h3 className="font-medium text-lg pt-4">Address</h3>

                    <div className="space-y-2">
                      <Label htmlFor="street">Street Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                        <Input id="street" defaultValue="123 Main Street" className="pl-10" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="San Francisco" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" defaultValue="CA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP/Postal Code</Label>
                        <Input id="zip" defaultValue="94105" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </form>
                </div>
              </Card>

              <Card>
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Team Members</h2>
                  <p className="text-neutral-secondaryText text-sm">Manage user access and permissions</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <Input placeholder="Search team members" className="max-w-xs" />
                    <Button>
                      Add Team Member
                    </Button>
                  </div>
                  
                  <div className="border border-neutral-border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-neutral-background text-neutral-secondaryText text-sm">
                        <tr>
                          <th className="py-3 px-6 text-left">Name</th>
                          <th className="py-3 px-6 text-left">Email</th>
                          <th className="py-3 px-6 text-left">Role</th>
                          <th className="py-3 px-6 text-left">Status</th>
                          <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-border">
                        <tr className="hover:bg-neutral-background">
                          <td className="py-4 px-6">John Doe</td>
                          <td className="py-4 px-6">john.doe@company.com</td>
                          <td className="py-4 px-6">Admin</td>
                          <td className="py-4 px-6">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                              Active
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-background">
                          <td className="py-4 px-6">Sarah Kim</td>
                          <td className="py-4 px-6">sarah.kim@company.com</td>
                          <td className="py-4 px-6">Manager</td>
                          <td className="py-4 px-6">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                              Active
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-background">
                          <td className="py-4 px-6">Robert Martinez</td>
                          <td className="py-4 px-6">robert.m@company.com</td>
                          <td className="py-4 px-6">Verifier</td>
                          <td className="py-4 px-6">
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                              Pending
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Notification Preferences</h2>
                  <p className="text-neutral-secondaryText text-sm">Control when and how you receive notifications</p>
                </div>
                <div className="p-6">
                  <h3 className="font-medium mb-4">Email Notifications</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Verification Alerts</p>
                        <p className="text-neutral-secondaryText text-sm">Receive notifications when a product verification is completed</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Flagged Products</p>
                        <p className="text-neutral-secondaryText text-sm">Get alerted when a product is flagged as suspicious or counterfeit</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Team Activity</p>
                        <p className="text-neutral-secondaryText text-sm">Updates about team member actions and changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Reports</p>
                        <p className="text-neutral-secondaryText text-sm">Weekly and monthly summary reports</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Updates</p>
                        <p className="text-neutral-secondaryText text-sm">News about product features and updates</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <hr className="my-6 border-neutral-border" />
                  
                  <h3 className="font-medium mb-4">Push Notifications</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Enable Push Notifications</p>
                        <p className="text-neutral-secondaryText text-sm">Allow browser notifications for important alerts</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Real-time Verification Alerts</p>
                        <p className="text-neutral-secondaryText text-sm">Get notified instantly when verifications are completed</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="mb-6">
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Password and Security</h2>
                  <p className="text-neutral-secondaryText text-sm">Manage your password and security settings</p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                        <Input id="current-password" type="password" className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                        <Input id="new-password" type="password" className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
                        <Input id="confirm-password" type="password" className="pl-10" />
                      </div>
                      <p className="text-sm text-neutral-secondaryText mt-2">Password must be at least 8 characters and include uppercase, lowercase, number and special character.</p>
                    </div>
                    
                    <div className="pt-4">
                      <Button>Update Password</Button>
                    </div>
                  </form>
                </div>
              </Card>

              <Card className="mb-6">
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
                  <p className="text-neutral-secondaryText text-sm">Add an extra layer of security to your account</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="font-medium">Enable Two-Factor Authentication</p>
                      <p className="text-neutral-secondaryText text-sm">Require a verification code when signing in</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="text-neutral-secondaryText text-sm">
                    <p className="mb-2">Two-factor authentication adds an extra layer of security to your account by requiring a verification code in addition to your password when you sign in.</p>
                    <p>We recommend using an authenticator app such as Google Authenticator or Authy.</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">API Access</h2>
                  <p className="text-neutral-secondaryText text-sm">Manage API keys for integrations</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="font-medium">API Key</p>
                      <p className="text-neutral-secondaryText text-sm">Use this key to authenticate API requests</p>
                    </div>
                    <Button variant="outline">
                      Generate New Key
                    </Button>
                  </div>
                  
                  <div className="bg-neutral-background p-4 rounded-lg font-mono text-sm mb-4 break-all">
                    ••••••••••••••••••••••••••••••••••••••••••••••
                  </div>
                  
                  <div className="text-neutral-secondaryText text-sm mb-6">
                    <p>This key provides full access to the API. Keep it secure and never share it publicly.</p>
                  </div>
                  
                  <h3 className="font-medium mb-3">Access Permissions</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p>Read Products</p>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Write Products</p>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Read Verifications</p>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Write Verifications</p>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <Button>Save API Settings</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
