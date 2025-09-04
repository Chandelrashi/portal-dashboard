import { useEffect, useMemo, useState } from 'react';
import { fetchPortalData } from '../data';
import type { Idea, PortalData } from '../types';
import { Link } from 'react-router-dom';

export default function Ideas() {
  const [data, setData] = useState<PortalData | null>(null);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('All');

  useEffect(() => {
    fetchPortalData().then(setData).catch(console.error);
  }, []);

  const ideas = useMemo(() => {
    const items = data?.ideas ?? [];
    return items.filter(i => (status === 'All' || i.status === status) && i.title.toLowerCase().includes(q.toLowerCase()));
  }, [data, q, status]);

  if (!data) return <div>Loading...</div>;

  const statuses = ['All', ...Array.from(new Set(data.ideas.map(i => i.status)))];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <input
          placeholder="Search ideas..."
          className="border rounded-lg px-3 py-2 w-full sm:w-80"
          value={q} onChange={e => setQ(e.target.value)}
        />
        <select className="border rounded-lg px-3 py-2 w-full sm:w-52" value={status} onChange={e => setStatus(e.target.value)}>
          {statuses.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ideas.map((i: Idea) => (
          <div key={i.id} className="bg-white rounded-2xl p-4 shadow-sm border flex flex-col">
            <div className="flex-1">
              <div className="text-sm text-gray-500">{i.status}</div>
              <div className="text-lg font-semibold">{i.title}</div>
              <p className="text-sm text-gray-600 mt-1">{i.summary}</p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-gray-500">Confidence {(i.confidence*100).toFixed(0)}%</div>
              <Link to={`/ideas/${i.id}`} className="text-blue-600 hover:underline">Open</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
