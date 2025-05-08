import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { productCategories, predictReturnRate } from "@/services/mockDataService";
import axios from "axios";

interface ReturnPredictionProps {
  onPredictionGenerated?: (prediction: string | number) => void;
}

const ReturnPrediction = ({ onPredictionGenerated }: ReturnPredictionProps) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleVerify = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    console.log("Starting verification process..."); // Log before Axios request

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Full backend response:", response); // Log the full response

      if (!response.data || !response.data.predictions) {
        throw new Error("Invalid response format: Missing 'predictions' key");
      }

      const predictions = response.data.predictions;
      if (!Array.isArray(predictions)) {
        throw new Error("Invalid response format: 'predictions' is not an array");
      }

      console.log("Predictions array:", predictions); // Log the predictions array

      const isScratched = predictions.some((pred: any) => pred.name === "Scratched");
      const resultText = isScratched ? "Scratched" : "Not Scratched";

      setResult(resultText);
      console.log("Updated result state:", resultText); // Log the updated result state

      if (onPredictionGenerated) {
        onPredictionGenerated(resultText);
      }
    } catch (error) {
      console.error("Error during verification:", error);
      setResult("Error verifying the product.");
    } finally {
      setLoading(false);
    }
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

          <div className="space-y-4">
            <Label htmlFor="file">Upload Product Image</Label>
            <Input type="file" id="file" onChange={handleFileChange} />

            <Button onClick={() => { console.log("Button clicked"); handleVerify(); }} disabled={loading || !file}>
              {loading ? "Verifying..." : "Start Verification"}
            </Button>

            {result && (
              <div className="mt-4 text-lg font-semibold">
                Result: {result}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPrediction;
