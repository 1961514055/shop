import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './routes';
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
	// 路由
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { y: 0 }; //y为0代表滚动到顶部
	},
});
