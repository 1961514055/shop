import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import '@/register'; // 注册组件
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
