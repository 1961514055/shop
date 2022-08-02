import { reqCategoryList } from '@/api';

const state = {
	categoryList: [],
};
const mutations = {
	RECEIVE_CATEGORYLIST(state, categoryList) {
		state.categoryList = categoryList;
	},
};
const actions = {
	async getCategoryList({ commit }) {
		try {
			const result = await reqCategoryList();
			console.log('result=====', result);
			commit('RECEIVE_CATEGORYLIST', result);
		} catch (error) {
			alert('获取三级分类数据失败');
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
