import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import HomePage from './pages/HomePage';
import HomePage1 from './pages/HomePage1';
import HomePage2 from './pages/HomePage2';
import FeedPage from './pages/FeedPage';
import VideoPage from './pages/VideoPage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import DocsPage from './pages/DocsPage';
import MembersPage from './pages/MembersPage';
import MyCoolersPage from './pages/MyCoolersPage';
import CoolersPage from './pages/CoolersPage';
import JoinCoolerPage from './pages/JoinCoolerPage';
import InboxPage from './pages/InboxPage';
import SettingsPage from './pages/SettingsPage';
import PublicCoolerPage from './pages/PublicCoolerPage';
import PrivateCoolerPage from './pages/PrivateCoolerPage';
import PublicCoolerJoin from './pages/PublicCoolerJoin';
import PrivateCoolerJoin from './pages/PrivateCoolerJoin';
import CreateCoolerPage from './pages/CreateCoolerPage';
import Login from './pages/Login';
import LoginUpdatedPage from './pages/LoginUpdatedPage/LoginUpdatedPage'
import RegisterUpdatedPage from './pages/RegisterUpdatedPage/RegisterUpdatedPage'


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: 'home', element: <HomePage1 /> },
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
      path: 'loginTest',
      element:/* <Login />*/<LoginUpdatedPage/>,
    },

    {
      path: 'regTest',
      element:/* <Login />*/<RegisterUpdatedPage/>,
    },

    {
      path: 'loginTest2',
      element: <LoginPage />,
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
