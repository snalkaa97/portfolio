import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
window.session_key = "aloalka";
const vuexLocal = new VuexPersistence({
	key: window.session_key,
	storage: window.sessionStorage,
});

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		profile: {
			name: "Syaifudin Alkatiri",
			image: "../assets/profile_pic.png",
			bio:
				"Currently working at Ministry Of State-Owned Enterprises (Kementerian Badan Usaha Milik Negara) as Web Programmer. Started my career since 2020 after graduated as Bachelor Degree at Universitas Muhammadiyah Jakarta. Before joining SOE, I also have been same career as Web Developer.",
		},
	},
	mutations: {
		changeProfile(state, payload, event) {
			let index = state.profile.indexOf(payload);
			state.profile[index].name = event;
		},
	},
	getters: {},
	plugins: [vuexLocal.plugin],
});
