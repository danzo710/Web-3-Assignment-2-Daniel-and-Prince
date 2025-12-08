import {
  PieChart,Pie,Cell,Tooltip,
  Legend,ResponsiveContainer
} from 'recharts';

const GenderSalesPieChart = ({ genderSalesData }) => {
  const COLORS = ['#3B82F6', '#93C5FD', '#DBEAFE'];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Pie Chart
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={genderSalesData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {genderSalesData.map((entry, index) => (
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