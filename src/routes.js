import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'feed', element: <FeedPage /> },
        { path: 'video', element: <VideoPage /> },
        { path: 'video-details', element: <VideoDetailsPage /> },
        { path: 'docs', element: <DocsPage /> },
        { path: 'members', element: <MembersPage /> },
        { path: 'my-cooler', element: <MyCoolersPage /> },
        { path: 'cooler', element: <CoolersPage /> },
        { path: 'join-cooler', element: <JoinCoolerPage /> },
        { path: 'chat', element: <InboxPage /> },
        { path: 'settings', element: <SettingsPage /> },
        // { path: 'my-cooler', element: <MyCoolersPage /> },
        { path: 'public-cooler', element: <PublicCoolerPage /> },
        { path: 'private-cooler', element: <PrivateCoolerPage /> },
        { path: 'join-public-cooler', element: <PublicCoolerJoin /> },
        { path: 'join-private-cooler', element: <PrivateCoolerJoin /> },
        { path: 'create-cooler', element: <CreateCoolerPage /> },
      ],
    },
    {
      path: 'login',
      element: <HomePage2 />,
    },
    {
      path: 'register',
      element: <HomePage2 />,
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
