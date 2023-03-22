import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import Page404 from './pages/Page404';
import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAppPage from './pages/DashboardAppPage';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: 'home', element: <HomePage /> }
      ],
    },
    {
      path: 'login',
      element: <Login/>,
    },
    {
      path: 'register',
      element: <Register/>,
    },
    {
      path: 'home',
      element: <HomePage2/>,
    },
    {
      path: 'app',
      element: <DashboardAppPage/>,
    },
    {
      element: <SimpleLayout />,
      children: [
        // { element: <Navigate to="/login" />, index: true },
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
