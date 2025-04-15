
// Mock data service for returns analysis

// Types for our data
export interface ReturnData {
  id: string;
  date: string;
  orderId: string;
  product: string;
  category: string;
  price: number;
  reason: string;
  customerId: string;
}

export interface ProductCategory {
  name: string;
  returnRate: number;
  totalSales: number;
  totalReturns: number;
}

export interface TimeSeriesPoint {
  date: string;
  value: number;
}

// Return reasons
export const returnReasons = [
  "Wrong size",
  "Different from description",
  "Damaged during delivery",
  "Defective product",
  "Changed mind",
  "Found better price elsewhere",
  "Arrived too late",
  "Incorrect item shipped"
];

// Product categories
export const productCategories = [
  "Apparel", 
  "Electronics",
  "Home Goods", 
  "Beauty",
  "Footwear", 
  "Accessories",
  "Sports Equipment",
  "Toys & Games"
];

// Generate random date within the past 90 days
const getRandomDate = () => {
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - Math.floor(Math.random() * 90));
  return pastDate.toISOString().split('T')[0];
};

// Generate mock return data
export const generateMockReturns = (count: number = 300): ReturnData[] => {
  const returns: ReturnData[] = [];
  
  for (let i = 0; i < count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const reason = returnReasons[Math.floor(Math.random() * returnReasons.length)];
    
    returns.push({
      id: `return-${i}`,
      date: getRandomDate(),
      orderId: `ord-${Math.floor(10000 + Math.random() * 90000)}`,
      product: `Product ${Math.floor(100 + Math.random() * 900)}`,
      category,
      price: +(Math.random() * 200 + 10).toFixed(2),
      reason,
      customerId: `cust-${Math.floor(10000 + Math.random() * 90000)}`
    });
  }
  
  return returns;
};

// Calculate return rate by category
export const getReturnRateByCategory = (): ProductCategory[] => {
  const mockReturns = generateMockReturns();
  const categoryStats: Record<string, { returns: number, sales: number }> = {};
  
  // Initialize categories
  productCategories.forEach(cat => {
    categoryStats[cat] = { returns: 0, sales: 0 };
  });
  
  // Generate random sales numbers for each category (3-6x the return number)
  mockReturns.forEach(item => {
    categoryStats[item.category].returns += 1;
  });
  
  productCategories.forEach(cat => {
    // Random sales multiple between 3-6x returns
    const salesMultiple = 3 + Math.random() * 3;
    categoryStats[cat].sales = Math.floor(categoryStats[cat].returns * salesMultiple);
  });
  
  // Convert to array with return rates
  return Object.keys(categoryStats).map(name => ({
    name,
    returnRate: parseFloat((categoryStats[name].returns / categoryStats[name].sales * 100).toFixed(1)),
    totalReturns: categoryStats[name].returns,
    totalSales: categoryStats[name].sales
  }));
};

// Get time series data for returns
export const getReturnTrends = (): TimeSeriesPoint[] => {
  const mockReturns = generateMockReturns();
  
  // Group by date
  const dateGroups: Record<string, number> = {};
  mockReturns.forEach(item => {
    if (dateGroups[item.date]) {
      dateGroups[item.date]++;
    } else {
      dateGroups[item.date] = 1;
    }
  });
  
  // Convert to array and sort by date
  const trends = Object.keys(dateGroups).map(date => ({
    date,
    value: dateGroups[date]
  }));
  
  return trends.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Get top return reasons
export const getTopReturnReasons = () => {
  const mockReturns = generateMockReturns();
  
  // Count reasons
  const reasonCounts: Record<string, number> = {};
  mockReturns.forEach(item => {
    if (reasonCounts[item.reason]) {
      reasonCounts[item.reason]++;
    } else {
      reasonCounts[item.reason] = 1;
    }
  });
  
  // Convert to array and sort
  return Object.keys(reasonCounts)
    .map(reason => ({
      reason,
      count: reasonCounts[reason],
      percentage: parseFloat((reasonCounts[reason] / mockReturns.length * 100).toFixed(1))
    }))
    .sort((a, b) => b.count - a.count);
};

// ML Model simulation for return rate prediction
export const predictReturnRate = (category: string, price: number): number => {
  // Simplified model based on category and price
  const basePredictions: Record<string, number> = {
    "Apparel": 15.2,
    "Electronics": 8.7,
    "Home Goods": 10.3,
    "Beauty": 7.5,
    "Footwear": 18.9,
    "Accessories": 9.2,
    "Sports Equipment": 11.7,
    "Toys & Games": 6.8
  };
  
  // Price adjustment (higher prices slightly increase return rates)
  const priceAdjustment = price > 100 ? 1.2 : price > 50 ? 0.8 : 0;
  
  // Randomize slightly for realistic variation
  const randomFactor = (Math.random() - 0.5) * 2;
  
  const basePrediction = basePredictions[category] || 10;
  return parseFloat((basePrediction + priceAdjustment + randomFactor).toFixed(1));
};
