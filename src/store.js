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
		tasks: [
			{
				id: 1,
				nama: "Belajar Javascript",
				isDone: false,
			},
			{
				id: 2,
				nama: "Belajar PHP",
				isDone: false,
			},
			{
				id: 3,
				nama: "Belajar HTML",
				isDone: false,
			},
			{
				id: 4,
				nama: "Belajar CSS",
				isDone: false,
			},
		],
	},
	mutations: {
		change(state, payload) {
			let index = state.tasks.indexOf(payload);
			state.tasks[index].isDone = !state.tasks[index].isDone;
		},
		addTask(state, payload) {
			state.tasks.push(payload);
		},
		deleteTask(state, payload) {
			let index = state.tasks.indexOf(payload);
			state.tasks.splice(index, 1);
		},
	},
	getters: {
		doneTasks(state) {
			return state.tasks.filter((item) => {
				return item.isDone == true;
			});
		},
		pendingTasks(state) {
			return state.tasks.filter((item) => {
				return item.isDone == false;
			});
		},
	},
	plugins: [vuexLocal.plugin],
});
