import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/page/Home';
import Login from '@/page/Login';
import Register from '@/page/Register';
import Search from '@/page/Search';
Vue.use(VueRouter);

// 解决$router.push()两次跳转同一路径报错问题
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originPush.call(this, location).catch(() => {});
};
const originReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originReplace.call(this, location).catch(() => {});
};
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
			name: 'search',
			path: '/search/:keyword?',
			component: Search,
		},
	],
});
