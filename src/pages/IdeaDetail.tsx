import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPortalData } from '../data';
import type { Idea, PortalData } from '../types';

export default function IdeaDetail() {
  const { id } = useParams();
  const [idea, setIdea] = useState<Idea | null>(null);

  useEffect(() => {
    fetchPortalData().then((d: PortalData) => {
      const match = d.ideas.find(i => i.id === id) || null;
      setIdea(match);
    }).catch(console.error);
  }, [id]);

  if (!idea) return <div>Idea not found.</div>;

  return (
    <div className="max-w-3xl">
      <Link to="/ideas" className="text-blue-600 hover:underline">&larr; Back to ideas</Link>
      <h1 className="text-2xl font-bold mt-2">{idea.title}</h1>
      <div className="text-sm text-gray-500 mt-1">Status: {idea.status} • Confidence {(idea.confidence*100).toFixed(0)}%</div>
      <p className="mt-3 text-gray-700">{idea.summary}</p>
      {idea.nextSteps && idea.nextSteps.length > 0 && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Next steps</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            {idea.nextSteps.map((s, idx) => <li key={idx}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
