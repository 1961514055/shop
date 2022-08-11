import { reqBannerList, reqCategoryList, reqFloorList } from '@/api';

const state = {
	// 三级菜单
	categoryList: [],
	// 轮播图
	bannerList: [],
	// 楼层
	floorList: [],
};
const mutations = {
	RECEIVE_CATEGORYLIST(state, categoryList) {
		state.categoryList = categoryList;
	},
	RECEIVE_BANNERLIST(state, bannerList) {
		state.bannerList = bannerList;
	},
	RECEIVE_FLOORLIST(state, floorList) {
		state.floorList = floorList;
	},
};
const actions = {
	async getCategoryList({ commit }) {
		try {
			const result = await reqCategoryList();
			commit('RECEIVE_CATEGORYLIST', result.data);
		} catch (error) {
			alert('获取三级分类数据失败');
		}
	},
	async getBannerList({ commit }) {
		try {
			const result = await reqBannerList();
			if (result && result.code === 200) {
				commit('RECEIVE_BANNERLIST', result.data);
			}
		} catch (err) {
			console.log('轮播图查询失败', err);
		}
	},
	async getFloorList({ commit }) {
		try {
			const result = await reqFloorList();
			if (result && result.code === 200) {
				commit('RECEIVE_FLOORLIST', result.data);
			}
		} catch (err) {
			console.log('楼层查询失败', err);
		}
	},
};
const getters = {};

export default {
	state,
	mutations,
	actions,
	getters,
};
