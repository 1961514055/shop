import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//  创建ajax请求 设置全局路径
const request = axios.create({
	baseURL: '/mock',
	timeout: 2000,
});

// 设置请求拦截

request.interceptors.request.use(
	(req) => {
		// 进度条开始
		NProgress.start();
		return req;
	},
	(err) => {
		NProgress.done();
		return config;
	}
);

// 设置响应拦截
request.interceptors.response.use(
	(res) => {
		// 进度条结束
		NProgress.done();
		return res.data;
	},
	(err) => {
		NProgress.done();
		return config;
	}
);

export default request;
