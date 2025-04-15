
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

const StatCard = ({
  title,
  value,
  trend,
  description,
  className,
  icon,
  loading = false
}: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-[#E4E8F0] p-6 shadow-sm",
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-[#8492A6]">{title}</h3>
        {icon && <div className="text-[#2E5BFF]">{icon}</div>}
      </div>
      
      <div className="mt-2">
        {loading ? (
          <div className="h-8 w-24 bg-slate-200 rounded animate-pulse-opacity"></div>
        ) : (
          <div className="flex items-end">
            <p className="text-2xl font-bold text-[#3C4858]">{value}</p>
            
            {trend && (
              <span className={cn(
                "ml-2 text-sm font-medium mb-1",
                trend.isPositive ? "text-[#47D16C]" : "text-[#FF4757]"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
          </div>
        )}
      </div>
      
      {description && (
        <p className="mt-2 text-xs text-[#8492A6]">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
