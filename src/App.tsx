import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPortalData } from './data';
import type { PortalData } from './types';
import { logout, isAuthed } from './auth';

export default function App() {
  const [data, setData] = useState<PortalData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPortalData().then(setData).catch(console.error);
  }, []);

  const active = ({ isActive }: { isActive: boolean }) =>
    'px-3 py-2 rounded-lg text-sm ' + (isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200');

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white border-r hidden md:flex md:flex-col">
        <div className="p-4 border-b">
          <div className="text-xl font-bold">{data?.company.name ?? 'Portal'}</div>
          <div className="text-sm text-gray-500">{data?.company.tagline}</div>
        </div>
        <nav className="p-4 space-y-1">
          <NavLink className={active} to="/dashboard">Dashboard</NavLink>
          <NavLink className={active} to="/ideas">Ideas</NavLink>
          <NavLink className={active} to="/settings">Settings</NavLink>
        </nav>
        <div className="mt-auto p-4">
          {isAuthed() && (
            <button
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg py-2"
              onClick={() => { logout(); navigate('/login'); }}
            >
              Log out
            </button>
          )}
        </div>
      </aside>

      <div className="flex-1">
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div className="md:hidden">
            <span className="font-bold">{data?.company.name ?? 'Portal'}</span>
          </div>
          <div className="text-sm text-gray-500">Owner: {data?.company.owner ?? '—'}</div>
        </header>
        <main className="p-4">
          <Outlet context={{ data, setData }} />
        </main>
      </div>
    </div>
  )
}
