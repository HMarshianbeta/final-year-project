import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Link, useParams } from 'react-router-dom';
import { Shield } from 'lucide-react';
import axios from 'axios';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [verificationResult, setVerificationResult] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleVerification = async () => {
if (!product) return;

    setIsVerifying(true);
    try {
      const formData = new FormData();
      formData.append('image', product.image);

      const response = await axios.post('/api/verify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setVerificationResult(response.data.result);
    } catch (error) {
      console.error('Verification failed:', error);
      setVerificationResult('Error verifying the product.');
    } finally {
      setIsVerifying(false);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-background">
      <header className="bg-white border-b border-neutral-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="text-blue-primary h-8 w-8" />
            <span className="ml-2 text-xl font-bold">VerifyPro</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="h-48 w-48 object-cover rounded" />
            <div>
              <h1 className="text-2xl font-bold text-neutral-primaryText">{product.name}</h1>
              <p className="text-neutral-secondaryText">SKU: {product.sku}</p>
              <p className="text-neutral-secondaryText">Category: {product.category}</p>
              <p className="mt-4 text-neutral-primaryText">{product.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <Button onClick={handleVerification} disabled={isVerifying}>
              {isVerifying ? 'Verifying...' : 'Start Verification'}
            </Button>
          </div>

          {verificationResult && (
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <p className="text-neutral-primaryText font-medium">Verification Result:</p>
              <p className="text-neutral-secondaryText">{verificationResult}</p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default ProductDetailPage;
