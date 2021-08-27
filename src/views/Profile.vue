<template>
	<div class="profile">
		<About v-bind:profil="profile" />
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Profile",
	data: function() {
		return {};
	},
	components: {
		About,
		Footer,
	},
	mounted() {},
	methods: {},
	computed: {
		profile() {
			return this.$store.state.profile;
		},
	},
};
</script>
<style scoped></style>
