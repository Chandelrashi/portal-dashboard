import { useEffect, useState } from 'react';
import { fetchPortalData } from '../data';
import type { PortalData } from '../types';

export default function Settings() {
  const [data, setData] = useState<PortalData | null>(null);

  useEffect(() => {
    fetchPortalData().then(setData).catch(console.error);
  }, []);

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <h2 className="font-medium">Brand</h2>
        <div className="text-sm text-gray-500">Edit <code>public/portalData.json</code> to update name, tagline, metrics, chart, ideas, and login credentials.</div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <h2 className="font-medium">Authentication</h2>
        <p className="text-sm text-gray-600">
          Default demo credentials are <code>admin</code> / <code>admin123</code>. Update them in <code>public/portalData.json</code>.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <h2 className="font-medium">Deployment</h2>
        <p className="text-sm text-gray-600">See README for GitHub Pages setup.</p>
      </div>
    </div>
  );
}
