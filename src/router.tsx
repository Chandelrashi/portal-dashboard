import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Ideas from './pages/Ideas';
import IdeaDetail from './pages/IdeaDetail';
import Settings from './pages/Settings';
import { isAuthed } from './auth';

const withAuth = (element: JSX.Element) => (isAuthed() ? element : <Navigate to="/login" replace />);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: withAuth(<Dashboard />) },
      { path: 'ideas', element: withAuth(<Ideas />) },
      { path: 'ideas/:id', element: withAuth(<IdeaDetail />) },
      { path: 'settings', element: withAuth(<Settings />) },
    ]
  }
]);
