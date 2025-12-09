import { calculateSalesData } from '../../utils/sales/calculateSalesData';
import { Link } from "react-router";

const TopProfitableProductsTable = (props) => {
  const enriched = props.products.map(product => {
    const salesData = calculateSalesData(product.sales, product.price, product.cost);
    return { ...product, profit: salesData.total.profit, totalSales: product.sales.domestic + product.sales.international };
  });

  const sorted = enriched.sort((a, b) => b.profit - a.profit).slice(0, 10);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Top Profitable Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Total Sales (#)</th>
              <th className="px-4 py-3 text-right">Profit ($)</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((product, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Link to={`/product/${product.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                    {product.name}
                  </Link>
                </td>
                <td className="px-4 py-3">{product.gender}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3 text-right">{product.totalSales}</td>
                <td className="px-4 py-3 text-right">${product.profit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProfitableProductsTable;
