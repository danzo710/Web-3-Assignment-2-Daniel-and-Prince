import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CategorySalesPieChart = (props) => {
  const { products } = props;
  const categoryMap = {};
  products.forEach((product) => {
    const category = product.category;
    const totalSales = product.sales?.total || 0;

    if (categoryMap[category]) {
      categoryMap[category] += totalSales;
    } else {
      categoryMap[category] = totalSales;
    }
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  console.log('Category chart data:', data); // 🔹 add this to debug

  const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE', '#EFF6FF'];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 lg:col-span-2" style={{ height: 350 }}>
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Sales by Category
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategorySalesPieChart;
