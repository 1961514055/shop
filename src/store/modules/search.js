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
	async getSearchInfo({ commit }) {
		try {
			const result = await reqSearchInfo();
			if (result && result.code === 200) {
				commit('RECEIVE_MUTATIONS', result.data);
			}
		} catch (error) {
			console.log('获取搜索info失败', error);
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
