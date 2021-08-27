<template>
	<div class="form-check text-start p-2">
		<input
			class="form-check-input"
			type="checkbox"
			value=""
			:id="`cek${task.id}`"
			@click="checkTask(task)"
			v-model="task.isDone"
		/>
		<label
			class="form-check-label item"
			v-bind:class="{ 'item-complete': task.isDone }"
			:for="`cek${task.id}`"
		>
			{{ task.nama }}
		</label>
		<button
			type="button"
			aria-label="Close"
			style="background-color:red; color:white; border:1px solid; border-radius:20%; margin-left:20px"
			@click="deleteTask(task)"
		>
			hapus
		</button>
	</div>
</template>
<script>
export default {
	name: "ItemTugas",
	props: ["task"],
	methods: {
		checkTask() {
			this.$store.commit("change", this.task);
		},
		deleteTask(index) {
			this.$store.commit("deleteTask", index);
		},
	},
};
</script>
<style scoped>
.item-complete {
	color: #1abc9c;
}
</style>
