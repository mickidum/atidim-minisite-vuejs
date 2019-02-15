import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
		state: {
				site: [],
				loaded: false
		},
		mutations: {
				clearStore(state) {
						state.site = [];
						state.loaded = false;
				},
				fillStore(state, payload) {
						state.site = payload;
						state.loaded = true;
				}
		},
		actions: {
				fillStore({
						commit
				}, payload) {
						commit('fillStore', payload);
				}
		},
		getters: {
				getAll: state => {
						return state.site
				},
				loaded: state => {
						return state.loaded
				},
				building: state => id => {
						return state
								.site
								.find(building => {
										return building.building_number == id
								})
				}
		}
});
