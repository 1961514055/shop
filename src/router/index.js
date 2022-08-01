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
		},
		{
			path: '/register',
			component: Register,
		},
		{
			path: '/search',
			component: Search,
		},
	],
});