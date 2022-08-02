import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/page/Home';
import Login from '@/page/Login';
import Register from '@/page/Register';
import Search from '@/page/Search';
Vue.use(VueRouter);

export default new VueRouter({
	routes: [
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
			path: '/search',
			component: Search,
		},
	],
});
