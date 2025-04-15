
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpRight, ArrowDownRight, DollarSign, Package, Repeat, PieChart } from "lucide-react";

// Import our components
import StatCard from "@/components/dashboard/StatCard";
import ReturnRateTrend from "@/components/dashboard/ReturnRateTrend";
import CategoryPerformanceTable from "@/components/dashboard/CategoryPerformanceTable";
import ReturnReasonsChart from "@/components/dashboard/ReturnReasonsChart";
import ReturnPrediction from "@/components/dashboard/ReturnPrediction";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

// Import mock data services
import { 
  getReturnRateByCategory,
  getReturnTrends,
  getTopReturnReasons,
  ProductCategory,
  TimeSeriesPoint
} from "@/services/mockDataService";

// Main Dashboard Component
const Index = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [returnTrends, setReturnTrends] = useState<TimeSeriesPoint[]>([]);
  const [returnReasons, setReturnReasons] = useState<any[]>([]);
  const [timeframe, setTimeframe] = useState("90days");
  const [lastPrediction, setLastPrediction] = useState<number | null>(null);

  // Stats for the dashboard
  const [stats, setStats] = useState({
    overallReturnRate: "12.4%",
    averageReturnCost: "$24.50",
    monthlyTrend: -2.3,
    topCategory: "Apparel"
  });

  // Load data
  const loadData = () => {
    setLoading(true);
    
    // Simulate API loading delay
    setTimeout(() => {
      try {
        const categoryData = getReturnRateByCategory();
        setCategories(categoryData);
        
        const trendData = getReturnTrends();
        setReturnTrends(trendData);
        
        const reasonsData = getTopReturnReasons();
        setReturnReasons(reasonsData);
        
        setLoading(false);
        
        toast({
          title: "Data refreshed",
          description: "Dashboard data has been updated."
        });
      } catch (error) {
        console.error("Error loading data:", error);
        toast({
          variant: "destructive",
          title: "Error loading data",
          description: "There was a problem loading the dashboard data."
        });
        setLoading(false);
      }
    }, 1000);
  };

  // Handle timeframe change
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    loadData();
    
    toast({
      title: "Timeframe updated",
      description: `Showing data for ${
        newTimeframe === "30days" ? "last 30 days" :
        newTimeframe === "90days" ? "last 90 days" :
        newTimeframe === "6months" ? "last 6 months" :
        "last 12 months"
      }`
    });
  };

  // Handle prediction generated
  const handlePredictionGenerated = (prediction: number) => {
    setLastPrediction(prediction);
    
    toast({
      title: "Return Rate Prediction",
      description: `ML model predicts ${prediction}% return rate for this product.`,
    });
  };

  // Initial load
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader 
          onRefresh={loadData} 
          onTimeframeChange={handleTimeframeChange} 
          loading={loading}
        />
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Overall Return Rate"
            value={stats.overallReturnRate}
            trend={{ value: stats.monthlyTrend, isPositive: false }}
            description="vs previous period"
            icon={<Repeat className="h-5 w-5" />}
            loading={loading}
          />
          
          <StatCard
            title="Average Return Cost"
            value={stats.averageReturnCost}
            description="Per returned item"
            icon={<DollarSign className="h-5 w-5" />}
            loading={loading}
          />
          
          <StatCard
            title="Highest Return Category"
            value={stats.topCategory}
            description="19.2% return rate"
            icon={<Package className="h-5 w-5" />}
            loading={loading}
          />
          
          <StatCard
            title="Predicted Impact"
            value={lastPrediction ? `${lastPrediction}%` : "—"}
            description={lastPrediction ? "Based on ML prediction" : "Run prediction model"}
            icon={<PieChart className="h-5 w-5" />}
            loading={loading}
          />
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Chart and Table */}
          <div className="lg:col-span-2 space-y-6">
            <ReturnRateTrend data={returnTrends} loading={loading} />
            <CategoryPerformanceTable categories={categories} loading={loading} />
          </div>
          
          {/* Right Column: Reasons Chart and Prediction */}
          <div className="space-y-6">
            <ReturnReasonsChart data={returnReasons} loading={loading} />
            <ReturnPrediction onPredictionGenerated={handlePredictionGenerated} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Return Rate Analytics Dashboard | Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
