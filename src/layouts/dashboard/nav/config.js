// component
import SvgColor from '../../../components/svg-color';


const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/home',
    // icon: icon('ic_analytics'),
  },
  {
    title: 'feed',
    path: '/dashboard/feed',
    // icon: icon('ic_analytics'),
  },
  {
    title: 'incubator',
    path: '#',
    // icon: icon('ic_disabled'),
    children: [
      {
        title: 'videos',
        type: 'item',
        // icon: 'Savings',
        path: '/dashboard/video',
      },
      {
        title: 'docs',
        type: 'item',
        // icon: 'LockIcon',
        path: '/dashboard/docs',
      },
    ],
  },
  {
    title: 'jobs',
    // path: '/dashboard/chat',
    // icon: icon('ic_msg'),
    iconLabel: 'msg',
  },
  {
    title: 'settings',
    // path: '/dashboard/settings',
    iconLabel: 'settings',
  },
];

export default navConfig;
