import Vue from 'vue';
import Vuex from 'vuex';
import home from '@/store/modules/home';
import search from '@/store/modules/search';
Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		home,
		search,
	},
});
