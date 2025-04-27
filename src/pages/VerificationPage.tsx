
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Upload, Camera, ChevronRight, ChevronLeft } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VerificationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [compareValue, setCompareValue] = useState(50);
  
  // Mock product data for reference
  const referenceProduct = {
    name: "Premium Headphones X1",
    sku: "PHX1-001",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    verificationPoints: [
      { name: "Security Hologram", description: "Located on the left earcup, shimmers in blue and gold when tilted" },
      { name: "QR Authentication", description: "Scannable QR code inside case links to product verification" },
      { name: "Serial Number Format", description: "15-digit alphanumeric code starting with PHX1" },
      { name: "Packaging Seal", description: "Tamper-evident seal with unique pattern" }
    ]
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
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
                <Link to="/products" className="flex items-center p-3 text-neutral-primaryText hover:bg-neutral-background rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/verification" className="flex items-center p-3 text-blue-primary bg-blue-50 rounded-lg">
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
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-primaryText">Verify Product</h1>
            <p className="text-neutral-secondaryText">Compare a received product with the authenticated reference</p>
          </div>

          {/* Steps indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-blue-primary text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
                <span className="ml-2 font-medium text-blue-primary">Select Product</span>
              </div>
              <div className={`flex-1 h-1 mx-4 ${step > 1 ? 'bg-blue-primary' : 'bg-neutral-border'}`}></div>
              <div className="flex items-center">
                <div className={`${step >= 2 ? 'bg-blue-primary text-white' : 'bg-neutral-background text-neutral-secondaryText border border-neutral-border'} rounded-full w-8 h-8 flex items-center justify-center`}>2</div>
                <span className={`ml-2 font-medium ${step >= 2 ? 'text-blue-primary' : 'text-neutral-secondaryText'}`}>Compare</span>
              </div>
              <div className={`flex-1 h-1 mx-4 ${step > 2 ? 'bg-blue-primary' : 'bg-neutral-border'}`}></div>
              <div className="flex items-center">
                <div className={`${step >= 3 ? 'bg-blue-primary text-white' : 'bg-neutral-background text-neutral-secondaryText border border-neutral-border'} rounded-full w-8 h-8 flex items-center justify-center`}>3</div>
                <span className={`ml-2 font-medium ${step >= 3 ? 'text-blue-primary' : 'text-neutral-secondaryText'}`}>Results</span>
              </div>
            </div>
          </div>

          {/* Step content */}
          {step === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Select Product to Verify</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="product">Product</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="headphones">Premium Headphones X1</SelectItem>
                        <SelectItem value="watch">Smart Watch Pro</SelectItem>
                        <SelectItem value="speaker">Bluetooth Speaker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="sku">SKU or Serial Number</Label>
                    <Input id="sku" placeholder="Enter product SKU or serial number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Verification Location</Label>
                    <Input id="location" placeholder="Enter location" />
                  </div>
                  
                  <Button onClick={handleNext} className="w-full">
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
              
              <div className="hidden lg:block">
                <Card className="p-6 h-full flex flex-col justify-center items-center text-center">
                  <Shield className="h-16 w-16 text-blue-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-2">How Verification Works</h3>
                  <p className="text-neutral-secondaryText mb-6">
                    Our verification process compares your received product against the manufacturer's specifications and authentication features.
                  </p>
                  <ul className="text-left space-y-2 w-full">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Upload clear photos of the product</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Enter serial numbers and authentication codes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Follow the verification checklist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Receive instant verification results</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Original Reference */}
                <Card>
                  <div className="p-6 border-b border-neutral-border">
                    <h2 className="text-lg font-semibold">Original Reference</h2>
                    <p className="text-neutral-secondaryText text-sm">Manufacturer's authenticated product</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="h-16 w-16 rounded overflow-hidden mr-4">
                        <img 
                          src={referenceProduct.image} 
                          alt={referenceProduct.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{referenceProduct.name}</h3>
                        <p className="text-sm text-neutral-secondaryText">SKU: {referenceProduct.sku}</p>
                      </div>
                    </div>
                    
                    {/* Reference Image */}
                    <div className="mb-6 bg-neutral-background rounded-lg h-64 flex items-center justify-center overflow-hidden">
                      <img 
                        src={referenceProduct.image} 
                        alt={referenceProduct.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    {/* Verification Points */}
                    <div>
                      <h3 className="font-medium mb-3">Verification Points</h3>
                      <div className="space-y-3">
                        {referenceProduct.verificationPoints.map((point, index) => (
                          <div key={index} className="bg-neutral-background p-3 rounded-lg">
                            <h4 className="font-medium text-sm">{point.name}</h4>
                            <p className="text-sm text-neutral-secondaryText">{point.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Product to Verify */}
                <Card>
                  <div className="p-6 border-b border-neutral-border">
                    <h2 className="text-lg font-semibold">Product to Verify</h2>
                    <p className="text-neutral-secondaryText text-sm">Upload images and details of the received product</p>
                  </div>
                  <div className="p-6">
                    {/* Upload Area */}
                    <div className="mb-6 border-2 border-dashed border-neutral-border rounded-lg h-64 flex flex-col items-center justify-center p-4">
                      <Upload className="h-10 w-10 text-neutral-secondaryText mb-4" />
                      <p className="font-medium text-center mb-2">Drag and drop or click to upload</p>
                      <p className="text-neutral-secondaryText text-sm text-center mb-4">Supports JPG, PNG (max 10MB)</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload File
                        </Button>
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Take Photo
                        </Button>
                      </div>
                    </div>
                    
                    {/* Verification Checklist */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Verification Checklist</h3>
                      
                      {referenceProduct.verificationPoints.map((point, index) => (
                        <div key={index} className="space-y-2">
                          <Label>{point.name}</Label>
                          <div className="flex gap-4">
                            <Button variant="outline" size="sm" className="flex-1">Yes, Present</Button>
                            <Button variant="outline" size="sm" className="flex-1">No, Missing</Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-4">
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes" placeholder="Add any observations or notes about the product" className="resize-none" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Image Comparison Slider */}
              <Card className="mb-6">
                <div className="p-6 border-b border-neutral-border">
                  <h2 className="text-lg font-semibold">Visual Comparison</h2>
                  <p className="text-neutral-secondaryText text-sm">Compare the original reference with your product</p>
                </div>
                <div className="p-6">
                  <div className="mb-6 relative h-80 bg-neutral-background rounded-lg overflow-hidden">
                    <div className="absolute inset-0 z-10">
                      <img 
                        src={referenceProduct.image} 
                        alt="Reference"
                        className="h-full w-full object-cover"
                        style={{ clipPath: `inset(0 ${100 - compareValue}% 0 0)` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div className="h-full w-full bg-neutral-background flex items-center justify-center text-neutral-secondaryText">
                        <p>Upload an image for comparison</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <div className="h-full w-0.5 bg-white"></div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 z-30">
                      <Slider 
                        value={[compareValue]} 
                        onValueChange={(values) => setCompareValue(values[0])} 
                        min={0} 
                        max={100}
                        step={1}
                      />
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <Card className="mb-6">
                <div className="p-6 border-b border-neutral-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold">Verification Results</h2>
                      <p className="text-neutral-secondaryText text-sm">
                        Completed on April 4, 2025 at 10:30 AM
                      </p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Authentic
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="h-16 w-16 rounded overflow-hidden mr-4">
                      <img 
                        src={referenceProduct.image} 
                        alt={referenceProduct.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{referenceProduct.name}</h3>
                      <p className="text-sm text-neutral-secondaryText">SKU: {referenceProduct.sku}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card className="p-6">
                      <div className="text-center">
                        <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Visual Match</h3>
                        <p className="text-neutral-secondaryText">98% Similarity</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="text-center">
                        <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Security Features</h3>
                        <p className="text-neutral-secondaryText">4/4 Verified</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="text-center">
                        <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Serial Number</h3>
                        <p className="text-neutral-secondaryText">Valid Format</p>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold">Verification Details</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-neutral-border">
                          <td className="py-3 text-neutral-secondaryText">Verified By</td>
                          <td className="py-3 font-medium">John Doe</td>
                        </tr>
                        <tr className="border-b border-neutral-border">
                          <td className="py-3 text-neutral-secondaryText">Location</td>
                          <td className="py-3 font-medium">Central Warehouse</td>
                        </tr>
                        <tr className="border-b border-neutral-border">
                          <td className="py-3 text-neutral-secondaryText">Date & Time</td>
                          <td className="py-3 font-medium">April 4, 2025 at 10:30 AM</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-neutral-secondaryText">Notes</td>
                          <td className="py-3 font-medium">All security features confirmed. Product appears to be authentic with original packaging.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="flex-1">
                      Generate Report
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Share Results
                    </Button>
                  </div>
                </div>
              </Card>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Link to="/verifications">
                  <Button>
                    Done
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VerificationPage;
