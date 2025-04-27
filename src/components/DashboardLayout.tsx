
import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, BarChart3, Box, CheckCircle, Settings, Menu, X, User, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const isActivePath = (path: string) => {
    if (path === '/dashboard') {
      return currentPath === '/dashboard';
    }
    return currentPath.startsWith(path);
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-background to-white">
      {/* Header with glassmorphism effect */}
      <header className="backdrop-blur-md bg-white/80 border-b border-white/20 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="md:hidden mr-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <Shield className="text-blue-primary h-6 w-6" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-primary to-blue-hover bg-clip-text text-transparent">VerifyPro</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-neutral-secondaryText">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-primary to-blue-hover h-9 w-9 rounded-full flex items-center justify-center text-white">
                <span className="font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Glassmorphism Sidebar */}
        <aside 
          className={cn(
            "fixed md:sticky top-[61px] md:top-[63px] h-[calc(100vh-61px)] md:h-[calc(100vh-63px)] backdrop-blur-lg bg-white/80 border-r border-white/20 shadow-lg transition-all duration-300 z-40",
            isSidebarOpen ? "left-0 w-64" : "-left-64 md:left-0 w-64"
          )}
        >
          <div className="absolute top-2 right-2 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <nav className="p-4 mt-6 md:mt-0">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/dashboard" 
                  className={cn(
                    "flex items-center p-3 rounded-lg transition-all duration-200",
                    isActivePath('/dashboard') 
                      ? "text-blue-primary bg-blue-primary/10 shadow-sm" 
                      : "text-neutral-primaryText hover:bg-white/50"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span className="font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className={cn(
                    "flex items-center p-3 rounded-lg transition-all duration-200",
                    isActivePath('/products') 
                      ? "text-blue-primary bg-blue-primary/10 shadow-sm" 
                      : "text-neutral-primaryText hover:bg-white/50"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Box className="h-5 w-5 mr-3" />
                  <span className="font-medium">Products</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/verification" 
                  className={cn(
                    "flex items-center p-3 rounded-lg transition-all duration-200",
                    isActivePath('/verification') 
                      ? "text-blue-primary bg-blue-primary/10 shadow-sm" 
                      : "text-neutral-primaryText hover:bg-white/50"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span className="font-medium">Verifications</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/reports" 
                  className={cn(
                    "flex items-center p-3 rounded-lg transition-all duration-200",
                    isActivePath('/reports') 
                      ? "text-blue-primary bg-blue-primary/10 shadow-sm" 
                      : "text-neutral-primaryText hover:bg-white/50"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span className="font-medium">Reports</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/settings" 
                  className={cn(
                    "flex items-center p-3 rounded-lg transition-all duration-200",
                    isActivePath('/settings') 
                      ? "text-blue-primary bg-blue-primary/10 shadow-sm" 
                      : "text-neutral-primaryText hover:bg-white/50"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  <span className="font-medium">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content with increased padding for better spacing */}
        <main className="flex-1 transition-all duration-300">
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
