const CategorySalesProfitTable = ({ categorySummary }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Sales + Profit by Category
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Total Sales (#)</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Total Profit ($)</th>
            </tr>
          </thead>
          <tbody>
            {categorySummary.map((category, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-800">{category.name}</td>
                <td className="px-4 py-3 text-right text-sm text-gray-700">{category.totalSales}</td>
                <td className="px-4 py-3 text-right text-sm text-gray-700">${category.totalProfit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySalesProfitTable;