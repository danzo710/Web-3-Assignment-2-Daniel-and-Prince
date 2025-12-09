import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import TopSellingProductsTable from './Table-TopSellingProduct';
import TopProfitableProductsTable from './table-toprofitableproduct';
import GenderSalesPieChart from './PieChart-GenderSales';
import CategorySalesProfitTable from './Table-CategorySalesProfit';
import CategorySalesPieChart from './PieChart-CategorySales'; 

const SalesDashboard = (props) => {
  const { products, loading } = useContext(ProductsContext);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Sales Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="lg:col-span-2">
          <TopSellingProductsTable products={products} />
        </div>


        <div className="lg:col-span-2">
          <TopProfitableProductsTable products={products} />
        </div>

        <div className="lg:col-span-2">
          <GenderSalesPieChart products={products} />
        </div>


        <div className="lg:col-span-2">
          <CategorySalesProfitTable products={products} />
        </div>

        <div className="lg:col-span-2">
          <CategorySalesPieChart products={products} />
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
