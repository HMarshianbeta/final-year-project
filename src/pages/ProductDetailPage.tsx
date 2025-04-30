import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy data from ProductsPage
  const products = [
    {
      id: 1,
      name: "Damaged Phone Display",
      sku: "DPD-001",
      category: "Electronics",
      status: "verified",
      description: "A phone display with visible cracks and damage.",
      image: "/assets/pngtree-damaged-phone-display-with-cracks-and-breaks-png-image_14807000.png",
    },
    {
      id: 2,
      name: "Glossy Surface TV",
      sku: "GSTV-002",
      category: "Electronics",
      status: "verified",
      description: "A sleek and glossy surface television.",
      image: "/assets/pngtree-black-screen-realistic-glossy-surface-dark-thin-led-tv-blank-television-png-image_6504092.png",
    },
    {
      id: 3,
      name: "Stock Photo",
      sku: "SP-003",
      category: "Photography",
      status: "verified",
      description: "A high-quality stock photo.",
      image: "/assets/istockphoto-1299065445-612x612.jpg",
    },
    {
      id: 4,
      name: "Preview Image",
      sku: "PI-004",
      category: "Graphics",
      status: "verified",
      description: "A preview image for design purposes.",
      image: "/assets/PHOTO-2025-04-15-16-33-29-removebg-preview.png",
    },
  ];

  // Find the product by ID
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-background">
      <header className="bg-white border-b border-neutral-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Product Details</h1>
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
            <Button>Take Action</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ProductDetailPage;
