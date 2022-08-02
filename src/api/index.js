// 存放所有的请求接口 方便管理
import request from '@/utils';

export const reqCategoryList = () => {
	return request({
		url: '/product/getBaseCategoryList',
		method: 'get',
	});
};
