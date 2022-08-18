import { reqDetailInfo } from '@/api';
const state = {
	detailInfo: {},
};
const mutations = {
	RECEIVE_DETAILINFO(state, detailInfo) {
		state.detailInfo = detailInfo;
	},
};
const actions = {
	async getDetailInfo({ commit }, skuId) {
		try {
			let result = await reqDetailInfo(skuId);
			if (result.code === 200 && result) {
				commit('RECEIVE_DETAILINFO', result.data);
			}
		} catch (error) {
			console.log('查询商品详情失败getDetailInfo', error);
		}
	},
};
const getters = {
	categoryView(state) {
		return state.detailInfo.categoryView || {};
	},
	skuInfo(state) {
		return state.detailInfo.skuInfo || {};
	},
	spuSaleAttrList(state) {
		return state.detailInfo.spuSaleAttrList || {};
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
