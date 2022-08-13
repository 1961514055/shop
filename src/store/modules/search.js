import { reqSearchInfo } from '@/api';
const state = {
	searchInfo: [],
};
const mutations = {
	RECEIVE_MUTATIONS(state, searchInfo) {
		state.searchInfo = searchInfo;
	},
};
const actions = {
	async getSearchInfo({ commit }, searchParam) {
		try {
			const result = await reqSearchInfo(searchParam);
			if (result && result.code === 200) {
				commit('RECEIVE_MUTATIONS', result.data);
			}
		} catch (error) {
			console.log('获取搜索info失败', error);
		}
	},
};
const getters = {
	goodsList(state) {
		return state.searchInfo.goodsList;
	},
	attrsList(state) {
		return state.searchInfo.attrsList;
	},
	trademarkList(state) {
		return state.searchInfo.trademarkList;
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
