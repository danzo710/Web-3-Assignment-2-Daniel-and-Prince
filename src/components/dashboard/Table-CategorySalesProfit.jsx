import { calculateSalesData } from '../../utils/sales/calculateSalesData';

const CategorySalesProfitTable = (props) => {
  const summary = props.products.reduce((acc, p) => {
    const cat = p.category;
    const salesData = calculateSalesData(p.sales, p.price, p.cost);
    if (!acc[cat]) acc[cat] = { totalSales: 0, totalProfit: 0 };
    acc[cat].totalSales += p.sales.domestic + p.sales.international;
    acc[cat].totalProfit += salesData.total.profit;
    return acc;
  }, {});

  const categories = Object.keys(summary).map(cat => ({ name: cat, ...summary[cat] }));

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">Sales + Profit by Category</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Total Sales (#)</th>
              <th className="px-4 py-3 text-right">Total Profit ($)</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">{cat.name}</td>
                <td className="px-4 py-3 text-right">{cat.totalSales}</td>
                <td className="px-4 py-3 text-right">${cat.totalProfit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySalesProfitTable;
