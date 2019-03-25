import Vue from "vue";
import Vuex from "vuex";
import { crmUrl, crmToken } from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		crmUrl,
		crmToken,
		site: [],
		pages: [],
		loaded: false,
		offices: []
	},
	mutations: {
		clearStore(state) {
			state.site = [];
			state.loaded = false;
		},
		fillStore(state, payload) {
			state.site = payload;
			state.loaded = true;
		},
		fillOffices(state, payload) {
			state.offices = payload;
		},
		fillPages(state, payload) {
			state.pages = payload;
		}
	},
	actions: {
		fillStore({ commit }, payload) {
			commit("fillStore", payload);
		},
		fillOffices({ commit }, payload) {
			commit("fillOffices", payload);
		},
		fillPages({ commit }, payload) {
			commit("fillPages", payload);
		}
	},
	getters: {
		getAll: state => {
			return state.site;
		},
		getOffices: state => {
			return state.offices.sort((a, b) => {
				return a.square - b.square;
			});
		},
		loaded: state => {
			return state.loaded;
		},
		building: state => id => {
			return state.site.find(building => {
				return building.building_number == id;
			});
		},
		getPage: state => slug => {
			return state.pages.find(page => {
				return page.slug == slug;
			});
		}
	}
});
