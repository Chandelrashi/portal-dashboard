import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function Chart({ data }: { data: { month: string; ideas: number; mvps: number }[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ideas" dot={false} />
          <Line type="monotone" dataKey="mvps" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
