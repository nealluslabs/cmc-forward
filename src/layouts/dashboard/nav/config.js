// component
import SvgColor from '../../../components/svg-color';


const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'cooler',
    path: '/dashboard/cooler',
    icon: icon('ic_disabled'),
    children: [
      {
        title: 'my coolers',
        type: 'item',
        icon: 'Savings',
        path: '/dashboard/my-cooler',
      },
      {
        title: 'public',
        type: 'item',
        icon: 'LockOpen',
        path: '/dashboard/public-cooler',
      },
      {
        title: 'private',
        type: 'item',
        icon: 'LockIcon',
        path: '/dashboard/private-cooler',
      },
    ],
  },
  {
    title: 'messages',
    path: '/dashboard/create-cooler',
    // icon: icon('ic_msg'),
    iconLabel: 'msg',
  },
  {
    title: 'settings',
    path: '/dashboard/members',
    iconLabel: 'settings',
  },
];

export default navConfig;
