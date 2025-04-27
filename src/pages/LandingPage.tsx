import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Search, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-neutral-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="text-blue-primary h-8 w-8" />
            <span className="ml-2 text-xl font-bold">VerifyPro</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-neutral-primaryText hover:text-blue-primary">How It Works</Link>
            <Link to="/" className="text-neutral-primaryText hover:text-blue-primary">Features</Link>
            <Link to="/" className="text-neutral-primaryText hover:text-blue-primary">Pricing</Link>
            <Link to="/" className="text-neutral-primaryText hover:text-blue-primary">Contact</Link>
          </nav>
          
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-neutral-background py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Verify Product Authenticity with Confidence</h1>
            <p className="text-lg mb-8 text-neutral-secondaryText">
              Our platform helps manufacturers, distributors, and retailers 
              protect their brands and customers from counterfeit products.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">
                Get Started
                <ChevronRight className="ml-1" />
              </Button>
              <Button variant="outline" size="lg">
                See Demo
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Product Verification" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '400px' }} 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-neutral-secondaryText max-w-2xl mx-auto">
              Our comprehensive verification system provides powerful tools to ensure product authenticity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <Shield className="h-8 w-8 text-blue-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
              <p className="text-neutral-secondaryText">
                Multi-factor authentication system verifies product legitimacy through visual and digital checks.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <Search className="h-8 w-8 text-blue-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Recognition</h3>
              <p className="text-neutral-secondaryText">
                Advanced image comparison technology identifies subtle differences in counterfeit products.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <Star className="h-8 w-8 text-blue-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Robust Reporting</h3>
              <p className="text-neutral-secondaryText">
                Comprehensive analytics and reporting tools to track verification history and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-neutral-secondaryText max-w-2xl mx-auto">
              Our simple but powerful verification process protects your products throughout the supply chain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card flex flex-col items-center text-center relative">
              <div className="bg-blue-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Register Products</h3>
              <p className="text-neutral-secondaryText">
                Add your products with detailed specifications and reference images.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-blue-primary" />
              </div>
            </div>
            
            <div className="card flex flex-col items-center text-center relative">
              <div className="bg-blue-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Define Authentication</h3>
              <p className="text-neutral-secondaryText">
                Set unique identifiers and verification points for each product.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-blue-primary" />
              </div>
            </div>
            
            <div className="card flex flex-col items-center text-center relative">
              <div className="bg-blue-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Verify Products</h3>
              <p className="text-neutral-secondaryText">
                Compare received products against authenticated references.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-blue-primary" />
              </div>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-blue-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Take Action</h3>
              <p className="text-neutral-secondaryText">
                Generate reports and act on verification results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-neutral-secondaryText max-w-2xl mx-auto">
              See what our customers are saying about our verification platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-primary" />
                  ))}
                </div>
              </div>
              <p className="mb-4 italic">
                "The VerifyPro platform has been instrumental in protecting our brand integrity and ensuring our customers receive authentic products."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="font-medium text-blue-primary">JD</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-neutral-secondaryText">CEO, TechGadgets Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-primary" />
                  ))}
                </div>
              </div>
              <p className="mb-4 italic">
                "We've seen a significant reduction in counterfeit claims since implementing this verification system. The visual comparison tool is exceptional."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="font-medium text-blue-primary">SK</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Sarah Kim</p>
                  <p className="text-sm text-neutral-secondaryText">COO, Fashion Forward</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-primary" />
                  ))}
                </div>
              </div>
              <p className="mb-4 italic">
                "The analytics and reporting features have given us valuable insights into our supply chain vulnerabilities. Well worth the investment."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="font-medium text-blue-primary">RM</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Robert Martinez</p>
                  <p className="text-sm text-neutral-secondaryText">Supply Chain Manager, ElectroGoods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Brand?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join thousands of businesses protecting their products and customers with our verification platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-primary">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-primary hover:bg-neutral-background">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-primaryText text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">VerifyPro</h4>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-orange-primary" />
                <span className="ml-2 font-bold">VerifyPro</span>
              </div>
              <p className="text-sm text-neutral-border">
                The leading product verification platform for brands worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Features</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Pricing</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Case Studies</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Reviews</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">About Us</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Careers</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Blog</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Terms of Service</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">Cookie Policy</Link></li>
                <li><Link to="/" className="text-sm text-neutral-border hover:text-white">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-border mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} VerifyPro. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-border hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-border hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-border hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
