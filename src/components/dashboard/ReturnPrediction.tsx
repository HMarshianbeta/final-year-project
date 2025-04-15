
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { productCategories, predictReturnRate } from "@/services/mockDataService";

interface ReturnPredictionProps {
  onPredictionGenerated?: (prediction: number) => void;
}

const ReturnPrediction = ({ onPredictionGenerated }: ReturnPredictionProps) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    if (!category || !price) return;

    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const result = predictReturnRate(category, parseFloat(price));
      setPrediction(result);
      if (onPredictionGenerated) {
        onPredictionGenerated(result);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-medium">Return Rate Prediction</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Product Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {productCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Product Price ($)</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full"
              min="0"
            />
          </div>

          <Button
            onClick={handlePredict}
            className="w-full bg-brand-600 hover:bg-brand-700"
            disabled={!category || !price || loading}
          >
            {loading ? "Analyzing..." : "Predict Return Rate"}
          </Button>

          {prediction !== null && (
            <div className="mt-4 p-4 bg-slate-50 rounded-md">
              <p className="text-sm text-slate-600 mb-1">Predicted Return Rate:</p>
              <div className="flex items-center">
                <div 
                  className={`text-2xl font-bold 
                    ${prediction <= 10 ? 'text-success-700' : 
                    prediction <= 15 ? 'text-warning-700' : 
                    'text-danger-700'}`}
                >
                  {prediction}%
                </div>
                <div className="ml-3 text-xs">
                  {prediction <= 10 ? (
                    <span className="bg-success-50 text-success-700 px-2 py-1 rounded-full">Low Risk</span>
                  ) : prediction <= 15 ? (
                    <span className="bg-warning-50 text-warning-700 px-2 py-1 rounded-full">Medium Risk</span>
                  ) : (
                    <span className="bg-danger-50 text-danger-700 px-2 py-1 rounded-full">High Risk</span>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                This prediction is based on historical return patterns for similar products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReturnPrediction;
