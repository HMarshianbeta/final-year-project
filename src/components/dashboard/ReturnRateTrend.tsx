
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TimeSeriesPoint } from '@/services/mockDataService';
import { format, parseISO } from 'date-fns';

interface ReturnRateTrendProps {
  data: TimeSeriesPoint[];
  loading?: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-md rounded-md">
        <p className="text-sm font-medium text-slate-900">{format(parseISO(label), 'MMM d, yyyy')}</p>
        <p className="text-sm text-brand-600">
          <span className="font-medium">{payload[0].value}</span> returns
        </p>
      </div>
    );
  }
  return null;
};

const ReturnRateTrend = ({ data, loading = false }: ReturnRateTrendProps) => {
  // Format the date labels
  const formattedData = data.map(point => ({
    ...point,
    formattedDate: format(parseISO(point.date), 'MMM d')
  }));

  if (loading) {
    return (
      <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-medium">Return Rate Trend</h3>
        </div>
        <div className="p-6 h-64 flex items-center justify-center">
          <div className="w-full h-full bg-slate-100 animate-pulse-opacity rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-medium">Return Rate Trend</h3>
      </div>
      <div className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(parseISO(date), 'MMM d')}
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              stroke="#94a3b8" 
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#0ea5e9" 
              strokeWidth={2}
              fill="url(#colorReturns)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReturnRateTrend;
