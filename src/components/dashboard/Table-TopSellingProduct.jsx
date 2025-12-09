const TopSellingProductsTable = (props) => {
  const sorted = [...props.products]
    .map(product => ({
      ...product,
      totalSales: product.sales.domestic + product.sales.international,
    }))
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 10);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Top 10 Selling Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Total Sales (#)</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((product, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.gender}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3 text-right">{product.totalSales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProductsTable;
