
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { cn } from '@/lib/utils';

interface ReasonData {
  reason: string;
  count: number;
  percentage: number;
}

interface ReturnReasonsChartProps {
  data: ReasonData[];
  loading?: boolean;
}

const COLORS = ['#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49', '#22d3ee', '#06b6d4'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-md rounded-md">
        <p className="text-sm font-medium text-slate-900">{data.reason}</p>
        <p className="text-sm text-brand-600">
          <span className="font-medium">{data.percentage}%</span> ({data.count} returns)
        </p>
      </div>
    );
  }
  return null;
};

const ReturnReasonsChart = ({ data, loading = false }: ReturnReasonsChartProps) => {
  if (loading) {
    return (
      <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-medium">Top Return Reasons</h3>
        </div>
        <div className="p-6 h-64 flex items-center justify-center">
          <div className="w-full h-full bg-slate-100 animate-pulse-opacity rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-medium">Top Return Reasons</h3>
      </div>
      <div className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              formatter={(value, entry, index) => (
                <span className="text-xs text-slate-700">{value} ({data[index]?.percentage}%)</span>
              )}
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ paddingLeft: '10px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReturnReasonsChart;
