import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPortalData } from '../data';
import { login, isAuthed } from '../auth';

export default function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);
  const [expected, setExpected] = useState({ username: 'admin', password: 'admin123' });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthed()) {
      navigate('/dashboard');
    } else {
      fetchPortalData().then(d => setExpected(d.auth)).catch(console.error);
    }
  }, [navigate]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ok = login({ username, password }, expected);
    if (!ok) setError('Invalid credentials.');
    else navigate('/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto mt-24 bg-white p-6 rounded-2xl shadow-sm border">
      <h1 className="text-xl font-semibold mb-4">Sign in</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600">Username</label>
          <input className="mt-1 w-full border rounded-lg px-3 py-2" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input type="password" className="mt-1 w-full border rounded-lg px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button className="w-full bg-blue-600 text-white rounded-lg py-2">Sign in</button>
      </form>
    </div>
  );
}
