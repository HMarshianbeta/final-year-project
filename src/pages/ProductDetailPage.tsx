
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Link, useParams } from 'react-router-dom';
import { Shield, Pencil, Copy, Archive, CheckCircle, X, Image, Clock } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImage, setCurrentImage] = useState(0);
  
  // Mock product data
  const product = {
    id: parseInt(id || "1"),
    name: "Premium Headphones X1",
    sku: "PHX1-001",
    category: "Electronics",
    status: "verified",
    description: "Our flagship wireless headphones with active noise cancellation, premium sound quality, and extended battery life. Perfect for professionals and audiophiles.",
    manufacturingDate: "2025-01-15",
    brand: "AudioTech",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    specifications: [
      { name: "Weight", value: "250g" },
      { name: "Battery Life", value: "30 hours" },
      { name: "Connectivity", value: "Bluetooth 5.2" },
      { name: "Noise Cancellation", value: "Advanced ANC" },
      { name: "Water Resistance", value: "IPX4" }
    ],
    authFeatures: [
      { name: "Security Hologram", description: "Located on the left earcup, shimmers in blue and gold when tilted" },
      { name: "QR Authentication", description: "Scannable QR code inside case links to product verification" },
      { name: "Serial Number Format", description: "15-digit alphanumeric code starting with PHX1" }
    ],
    verificationHistory: [
      { date: "Apr 3, 2025", location: "Central Warehouse", result: "Authentic" },
      { date: "Mar 28, 2025", location: "Distribution Center", result: "Authentic" },
      { date: "Mar 15, 2025", location: "Manufacturing Plant", result: "Authentic" }
    ]
  };
  
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
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center p-3 text-blue-primary bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/verifications" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Verifications</span>
                </Link>
              </li>
              <li>
                <Link to="/reports" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center text-sm">
            <Link to="/products" className="text-neutral-secondaryText hover:text-blue-primary">
              Products
            </Link>
            <span className="mx-2 text-neutral-secondaryText">/</span>
            <span className="text-neutral-primaryText font-medium">
              {product.name}
            </span>
          </div>

          {/* Product header */}
          <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-neutral-primaryText">{product.name}</h1>
                <Badge 
                  className={product.status === 'verified' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}>
                  {product.status === 'verified' ? (
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </div>
                  ) : 'Unverified'}
                </Badge>
              </div>
              <p className="text-neutral-secondaryText">SKU: {product.sku} • Category: {product.category}</p>
            </div>
            <div className="flex gap-2">
              <Link to={`/products/${id}/edit`}>
                <Button variant="outline">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </Link>
              <Button variant="outline">
                <Copy className="h-4 w-4 mr-2" />
                Duplicate
              </Button>
              <Button variant="outline" className="text-red-500 hover:text-red-600">
                <Archive className="h-4 w-4 mr-2" />
                Archive
              </Button>
            </div>
          </div>

          {/* Product content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Images */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden mb-6">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={product.images[currentImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`h-16 w-16 rounded overflow-hidden cursor-pointer ${currentImage === index ? 'ring-2 ring-blue-primary' : ''}`}
                      onClick={() => setCurrentImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right column - Details */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Product Information</h2>
                  <p className="text-neutral-primaryText mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-secondaryText mb-2">Brand</h3>
                      <p className="text-neutral-primaryText">{product.brand}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-neutral-secondaryText mb-2">Manufacturing Date</h3>
                      <p className="text-neutral-primaryText">{product.manufacturingDate}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Tabs defaultValue="specs" className="mb-6">
                <TabsList>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="auth">Authentication Features</TabsTrigger>
                  <TabsTrigger value="history">Verification History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specs">
                  <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="border-b border-neutral-border pb-2">
                          <h3 className="text-sm font-medium text-neutral-secondaryText">{spec.name}</h3>
                          <p className="text-neutral-primaryText">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="auth">
                  <Card className="divide-y divide-neutral-border">
                    {product.authFeatures.map((feature, index) => (
                      <div key={index} className="p-6 flex">
                        <div className="bg-blue-50 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                          <Shield className="h-6 w-6 text-blue-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{feature.name}</h3>
                          <p className="text-neutral-secondaryText">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </Card>
                </TabsContent>
                
                <TabsContent value="history">
                  <Card>
                    <div className="relative">
                      {product.verificationHistory.map((record, index) => (
                        <div key={index} className="p-6 flex">
                          <div className={`absolute h-full w-0.5 bg-blue-100 left-10 top-0 ${index === 0 ? 'mt-8' : ''} ${index === product.verificationHistory.length - 1 ? 'h-8' : ''}`} />
                          <div className="bg-blue-50 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4 z-10">
                            <Clock className="h-6 w-6 text-blue-primary" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-medium">{record.date}</span>
                              <span className={`ml-3 inline-flex items-center rounded-full px-2 py-1 text-xs ${
                                record.result === 'Authentic' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {record.result}
                              </span>
                            </div>
                            <p className="text-neutral-secondaryText">{record.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2">
                <Button className="flex-1">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Start Verification
                </Button>
                <Button variant="outline" className="flex-1">
                  <Image className="h-4 w-4 mr-2" />
                  Generate QR Code
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductDetailPage;
