import React from "react";
import TopSellingProductsTable from "./table-topsellingproduct.jsx";
import TopProfitableProductsTable from "./table-toprofitableproduct.jsx";
import CategorySalesProfitTable from "./table-categorysalesprofit.jsx";
import GenderSalesPieChart from "./pieChart-gendersales.jsx";
import CategorySalesPieChart from "./pieChart-categorysales.jsx";

const SalesDashboard = () => {
  // Placeholder data for top selling products (sorted by totalSales descending)
  const topSellingProducts = [
    {
      name: "Classic Running Shoes",
      gender: "Men",
      category: "Footwear",
      totalSales: 1543,
    },
    {
      name: "Yoga Mat Pro",
      gender: "Women",
      category: "Accessories",
      totalSales: 1389,
    },
    {
      name: "Performance T-Shirt",
      gender: "Men",
      category: "Apparel",
      totalSales: 1276,
    },
    {
      name: "Athletic Leggings",
      gender: "Women",
      category: "Apparel",
      totalSales: 1198,
    },
    {
      name: "Training Shorts",
      gender: "Unisex",
      category: "Apparel",
      totalSales: 1087,
    },
    {
      name: "Sport Water Bottle",
      gender: "Unisex",
      category: "Accessories",
      totalSales: 982,
    },
    {
      name: "Compression Socks",
      gender: "Unisex",
      category: "Accessories",
      totalSales: 876,
    },
    {
      name: "Basketball Sneakers",
      gender: "Men",
      category: "Footwear",
      totalSales: 845,
    },
    {
      name: "Sports Bra Elite",
      gender: "Women",
      category: "Apparel",
      totalSales: 792,
    },
    {
      name: "Gym Bag Premium",
      gender: "Unisex",
      category: "Accessories",
      totalSales: 721,
    },
  ].sort((a, b) => b.totalSales - a.totalSales);

  // Placeholder data for top profitable products (sorted by profit descending)
  const topProfitableProducts = [
    {
      name: "Classic Running Shoes",
      gender: "Men",
      category: "Footwear",
      totalSales: 1543,
      profit: 46290,
    },
    {
      name: "Basketball Sneakers",
      gender: "Men",
      category: "Footwear",
      totalSales: 845,
      profit: 33800,
    },
    {
      name: "Athletic Leggings",
      gender: "Women",
      category: "Apparel",
      totalSales: 1198,
      profit: 29950,
    },
    {
      name: "Yoga Mat Pro",
      gender: "Women",
      category: "Accessories",
      totalSales: 1389,
      profit: 27780,
    },
    {
      name: "Performance T-Shirt",
      gender: "Men",
      category: "Apparel",
      totalSales: 1276,
      profit: 25520,
    },
    {
      name: "Sports Bra Elite",
      gender: "Women",
      category: "Apparel",
      totalSales: 792,
      profit: 23760,
    },
    {
      name: "Training Shorts",
      gender: "Unisex",
      category: "Apparel",
      totalSales: 1087,
      profit: 21740,
    },
    {
      name: "Gym Bag Premium",
      gender: "Unisex",
      category: "Accessories",
      totalSales: 721,
      profit: 18025,
    },
    {
      name: "Compression Socks",
      gender: "Unisex",
      category: "Accessories",
      totalSales: 876,
      profit: 13140,
    },
    {
      name: "Sport Water Bottle",
      gender: "Unisex",
      category: "Accessories",
      totalSales: 982,
      profit: 9820,
    },
  ].sort((a, b) => b.profit - a.profit);

  // Category summary data (sorted alphabetically by category name)
  const categorySummary = [
    { name: "Accessories", totalSales: 3969, totalProfit: 68765 },
    { name: "Apparel", totalSales: 4353, totalProfit: 100970 },
    { name: "Footwear", totalSales: 2388, totalProfit: 80090 },
  ].sort((a, b) => a.name.localeCompare(b.name));

  // Gender sales data for pie chart
  const genderSalesData = [
    { name: "Men", value: 3664 },
    { name: "Women", value: 3379 },
    { name: "Unisex", value: 3666 },
  ];

  // Category sales data for pie chart
  const categorySalesData = [
    { name: "Accessories", value: 3969 },
    { name: "Apparel", value: 4353 },
    { name: "Footwear", value: 2388 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Sales Dashboard
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Top Selling Products Table */}
        <div className="lg:col-span-2">
          <TopSellingProductsTable topSellingProducts={topSellingProducts} />
        </div>

        {/* Top Profitable Products Table */}
        <div className="lg:col-span-2">
          <TopProfitableProductsTable
            topProfitableProducts={topProfitableProducts}
          />
        </div>

        {/* Gender Sales Pie Chart */}
        <div>
          <GenderSalesPieChart genderSalesData={genderSalesData} />
        </div>

        {/* Category Sales Pie Chart */}
        <div className="lg:col-span-2">
          <CategorySalesPieChart categorySalesData={categorySalesData} />
        </div>
        {/* Category Sales + Profit Table */}
        <div>
          <CategorySalesProfitTable categorySummary={categorySummary} />
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
