import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Chart from '../components/Chart';
import type { PortalData } from '../types';
import { fetchPortalData } from '../data';

export default function Dashboard() {
  const [data, setData] = useState<PortalData | null>(null);

  useEffect(() => {
    fetchPortalData().then(setData).catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.metrics.map(m => (
          <Card key={m.label} title={m.label} value={m.value} />
        ))}
      </div>
      <Chart data={data.chart.monthly} />
      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <h2 className="text-lg font-semibold mb-2">Recent Ideas</h2>
        <ul className="divide-y">
          {data.ideas.slice(0,5).map(idea => (
            <li key={idea.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{idea.title}</div>
                <div className="text-xs text-gray-500">{idea.status} • {(idea.confidence*100).toFixed(0)}% confidence</div>
              </div>
              <a className="text-blue-600 hover:underline" href={`/ideas/${idea.id}`}>Open</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
