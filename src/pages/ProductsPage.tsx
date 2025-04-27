
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Shield, Box, Search, Plus, Grid, List, Filter, CheckCircle, AlertTriangle } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock data for products
  const products = [
    { 
      id: 1, 
      name: "Premium Headphones X1", 
      sku: "PHX1-001", 
      category: "Electronics",
      status: "verified",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 2, 
      name: "Smart Watch Pro", 
      sku: "SWP-002", 
      category: "Wearables",
      status: "verified",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 3, 
      name: "Designer Handbag", 
      sku: "DHB-003", 
      category: "Fashion",
      status: "unverified",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 4, 
      name: "Bluetooth Speaker", 
      sku: "BTS-004", 
      category: "Electronics",
      status: "verified",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 5, 
      name: "Luxury Sunglasses", 
      sku: "LSG-005", 
      category: "Accessories",
      status: "flagged",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 6, 
      name: "Premium Sneakers", 
      sku: "PSN-006", 
      category: "Footwear",
      status: "verified",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
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
                <Link to="/dashboard" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <Box className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center p-3 text-blue-primary bg-blue-50 rounded-lg">
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
                  <Box className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <Box className="h-5 w-5 mr-3" />
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
              <h1 className="text-2xl font-bold text-neutral-primaryText">Products</h1>
              <p className="text-neutral-secondaryText">Manage and monitor your product catalog</p>
            </div>
            <Link to="/products/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </Link>
          </div>

          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-secondaryText h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <div className="bg-white border border-neutral-border rounded-lg flex overflow-hidden">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                  size="icon"
                  className="rounded-none"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'ghost'} 
                  size="icon"
                  className="rounded-none"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products grid/list view */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-neutral-primaryText">{product.name}</h3>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                          product.status === 'verified' ? 'bg-green-100 text-green-800' :
                          product.status === 'unverified' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.status === 'verified' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {product.status === 'flagged' && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                        </span>
                      </div>
                      <div className="text-sm text-neutral-secondaryText space-y-1">
                        <p>SKU: {product.sku}</p>
                        <p>Category: {product.category}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card>
              <table className="w-full">
                <thead className="bg-neutral-background text-neutral-secondaryText text-sm">
                  <tr>
                    <th className="py-3 px-6 text-left">Product</th>
                    <th className="py-3 px-6 text-left">SKU</th>
                    <th className="py-3 px-6 text-left">Category</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-border">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-neutral-background">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded overflow-hidden mr-3">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          {product.name}
                        </div>
                      </td>
                      <td className="py-4 px-6">{product.sku}</td>
                      <td className="py-4 px-6">{product.category}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                          product.status === 'verified' ? 'bg-green-100 text-green-800' :
                          product.status === 'unverified' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.status === 'verified' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {product.status === 'flagged' && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <Link to={`/products/${product.id}`}>
                          <Button variant="ghost" size="sm" className="text-blue-primary">
                            View Details
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-neutral-secondaryText">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> products
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-primary">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
