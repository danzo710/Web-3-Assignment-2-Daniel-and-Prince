import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GenderSalesPieChart = (props) => {
  const COLORS = ['#3B82F6', '#93C5FD', '#DBEAFE'];


  const genderData = props.products.reduce((acc, product) => {
    const totalSales = product.sales?.total || 0;
    const gender = product.gender;
    const existing = acc.find((item) => item.name === gender);
    if (existing) {
      existing.value += totalSales;
    } else {
      acc.push({ name: gender, value: totalSales });
    }
    return acc;
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Sales by Gender
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={genderData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {genderData.map((entry, index) => (
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

export default GenderSalesPieChart;
