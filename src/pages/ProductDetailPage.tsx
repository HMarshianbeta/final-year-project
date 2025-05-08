import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ReturnPrediction from "@/components/dashboard/ReturnPrediction";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const productData = [
    {
      id: 1,
      name: "Damaged Phone Display",
      sku: "DPD-001",
      category: "Electronics",
      description: "A phone display with visible cracks and scratches.",
      image: "/assets/pngtree-damaged-phone-display-with-cracks-and-breaks-png-image_14807000.png",
    },
    {
      id: 2,
      name: "Glossy Surface TV",
      sku: "GSTV-002",
      category: "Electronics",
      description: "A glossy surface TV with no visible damage.",
      image: "/assets/pngtree-black-screen-realistic-glossy-surface-dark-thin-led-tv-blank-television-png-image_6504092.png",
    },
    {
      id: 3,
      name: "Stock Photo",
      sku: "SP-003",
      category: "Photography",
      description: "A stock photo for testing purposes.",
      image: "/assets/istockphoto-1299065445-612x612.jpg",
    },
    {
      id: 4,
      name: "Preview Image",
      sku: "PI-004",
      category: "Graphics",
      description: "A preview image for testing purposes.",
      image: "/assets/PHOTO-2025-04-15-16-33-29-removebg-preview.png",
    },
  ];

  const product = productData.find((p) => p.id === parseInt(id || "1"));

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
            <img
              src={product?.image}
              alt={product?.name}
              className="h-48 w-48 object-cover rounded"
            />
            <div>
              <h1 className="text-2xl font-bold text-neutral-primaryText">
                {product?.name}
              </h1>
              <p className="text-neutral-secondaryText">SKU: {product?.sku}</p>
              <p className="text-neutral-secondaryText">Category: {product?.category}</p>
              <p className="mt-4 text-neutral-primaryText">{product?.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <ReturnPrediction />
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ProductDetailPage;
