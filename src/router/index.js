import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
	{
		path: "/profile",
		name: "Profile",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
	},
];

const router = new VueRouter({
	routes,
});

export default router;
