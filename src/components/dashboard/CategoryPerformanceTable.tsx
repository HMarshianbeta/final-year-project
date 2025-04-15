
import { ProductCategory } from "@/services/mockDataService";
import { cn } from "@/lib/utils";

interface CategoryPerformanceTableProps {
  categories: ProductCategory[];
  loading?: boolean;
}

const CategoryPerformanceTable = ({ categories, loading = false }: CategoryPerformanceTableProps) => {
  if (loading) {
    return (
      <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-medium">Category Performance</h3>
        </div>
        <div className="p-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex justify-between mb-4">
              <div className="h-5 w-24 bg-slate-200 rounded animate-pulse-opacity"></div>
              <div className="h-5 w-16 bg-slate-200 rounded animate-pulse-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-medium">Category Performance</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="p-4 text-left font-medium text-sm text-slate-500">Category</th>
              <th className="p-4 text-right font-medium text-sm text-slate-500">Return Rate</th>
              <th className="p-4 text-right font-medium text-sm text-slate-500">Returns / Sales</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.name} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 text-sm text-slate-900">{category.name}</td>
                <td className="p-4 text-right text-sm">
                  <span 
                    className={cn(
                      "font-medium px-2 py-1 rounded-full",
                      category.returnRate <= 10 ? "bg-success-50 text-success-700" : 
                      category.returnRate <= 15 ? "bg-warning-50 text-warning-700" :
                      "bg-danger-50 text-danger-700"
                    )}
                  >
                    {category.returnRate}%
                  </span>
                </td>
                <td className="p-4 text-right text-sm text-slate-700">
                  {category.totalReturns} / {category.totalSales}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryPerformanceTable;
