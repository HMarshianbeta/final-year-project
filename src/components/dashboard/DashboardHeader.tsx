
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, RefreshCw, Download } from "lucide-react";

interface DashboardHeaderProps {
  onRefresh: () => void;
  onTimeframeChange: (timeframe: string) => void;
  loading?: boolean;
}

const DashboardHeader = ({ onRefresh, onTimeframeChange, loading = false }: DashboardHeaderProps) => {
  const [timeframe, setTimeframe] = useState("90days");

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);
    onTimeframeChange(value);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Return Rate Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">
          Monitor, analyze and predict product return rates
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Select value={timeframe} onValueChange={handleTimeframeChange} disabled={loading}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="6months">Last 6 months</SelectItem>
            <SelectItem value="12months">Last 12 months</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button 
            variant="outline"
            size="icon"
            onClick={onRefresh}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
          
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
