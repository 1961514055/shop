import Home from '@/page/Home';
import Login from '@/page/Login';
import Register from '@/page/Register';
import Search from '@/page/Search';
import Detail from '@/page/Detail';
export default [
	{
		path: '/home',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
		meta: {
			isHade: true,
		},
	},
	{
		path: '/register',
		component: Register,
		meta: {
			isHade: true,
		},
	},
	{
		name: 'search',
		path: '/search/:keyword?',
		component: Search,
	},
	{
		name: 'detail',
		path: '/detail/:skuId',
		component: Detail,
	},
];
