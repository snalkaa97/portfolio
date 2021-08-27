<template>
	<div class="profile">
		<div class="container mt-3">
			<div class="row">
				<div class="col-lg-6">
					<div class="d-flex text-start align-items-center">
						<div class="flex-shrink-0">
							<img class="user-pic mr-3" src="../assets/alka1.jpg" alt="" />
						</div>
						<div class="flex-grow-1 ms-3">
							<h5>{{ firstName }} {{ lastName }}</h5>
							{{ bio }}
						</div>
					</div>
				</div>
			</div>
			<div class="text-center mt-5">
				<h5>Pokemon</h5>
			</div>
			<div class="row">
				<div
					class="col-lg-2 col-md-3 col-sm-3"
					v-for="item in items"
					v-bind:key="item.id"
				>
					<!-- <p>{{ item.name }}</p> -->
					<div class="card-body">
						<h6 class="card-title">{{ item.name }}</h6>
						<img class="card-image" v-bind:src="item.image" />
					</div>
				</div>
			</div>

			<div class="text-center">
				<h5 class="p-3 header">Tugas</h5>
			</div>
			<input
				type="text"
				class="form-control task"
				id="task"
				placeholder="Input todolist & enter"
				v-on:keyup.enter="addTask(this)"
			/>
			<button @click="status = 'all'">All</button>
			<button @click="status = 'pending'">Pending</button>
			<button @click="status = 'done'">Done</button>
			<!-- <button @click="goToHome">Home</button> -->
			<div v-for="task in tasks" v-bind:key="task.id">
				<ItemTugas v-bind:task="task" />
			</div>
		</div>
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
	</div>
</template>

<script>
// @ is an alias to /src
import ItemTugas from "@/components/ItemTugas.vue";
import "bootstrap/dist/css/bootstrap.css";

export default {
	name: "Profile",
	data: function() {
		return {
			firstName: "Syaifudin",
			lastName: "Alkatiri",
			bio:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non architecto eveniet officiis autem.",
			items: {},
			task: {
				id: "",
				nama: "",
				isDone: false,
			},
			status: "",
		};
	},
	components: {
		ItemTugas,
	},
	mounted() {
		this.pokemonItem();
	},
	methods: {
		async pokemonItem() {
			// const self = this;
			const getPokemonItem = `${"https://pokeapi.co/api/v2/pokemon/"}`;
			await fetch(getPokemonItem, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((json) => {
					this.items = json.results.map((result, index) => ({
						...result,
						id: index + 1,
						image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
							1}.png`,
					}));
				});
		},
		addTask() {
			this.task = {
				id: this.$store.state.tasks.length + 1,
				nama: document.getElementById("task").value,
				isDone: false,
			};
			document.getElementById("task").value = "";
			this.$store.commit("addTask", this.task);
		},
		goToHome() {
			this.$router.push("/");
		},
	},
	computed: {
		tasks() {
			// console.log(this.status);
			if (this.status == "all") {
				return this.$store.state.tasks;
			} else if (this.status == "done") {
				return this.$store.getters.doneTasks;
			} else if (this.status == "pending") {
				return this.$store.getters.pendingTasks;
			} else {
				return this.$store.state.tasks;
			}
		},
	},
};
</script>
<style scoped>
.user-pic {
	height: 80px;
	widows: 80px;
	border-radius: 200%;
}
</style>
