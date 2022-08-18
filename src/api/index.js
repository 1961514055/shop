// 存放所有的请求接口 方便管理
import request from '@/utils/request';
import mock from '@/utils/mockRequest';

// 三级菜单查询
export const reqCategoryList = () => {
	return request({
		url: '/product/getBaseCategoryList',
		method: 'get',
	});
};

// 轮播图数据查询
export const reqBannerList = () => {
	return mock({
		url: '/bannerList',
		method: 'get',
	});
};

// 楼层数据查询
export const reqFloorList = () => {
	return mock({
		url: '/floorList',
		method: 'get',
	});
};

// 搜索商品
export const reqSearchInfo = (searchParam = {}) => {
	return request({
		url: '/list',
		method: 'post',
		data: searchParam,
	});
};

// 商品详情
export const reqDetailInfo = (skuId) => {
	return request.get(`/item/${skuId}`);
};
