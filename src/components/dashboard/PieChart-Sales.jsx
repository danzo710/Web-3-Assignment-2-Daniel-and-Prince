import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SalesPieChart = ({ salesData }) => {
  const chartData = [
    { name: 'Domestic', value: salesData.domestic},
    { name: 'International', value: salesData.international}
  ];

  const COLORS = ['#3B82F6', '#10B981'];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 lg:col-span-2" style={{ height: 350 }}>
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Sales by Region
      </h2>
      <ResponsiveContainer width="80%" height="80%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};