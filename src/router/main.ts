import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/auth/LoginPage.vue";

const routes = [
	{ path: "/", name: "home", component: HomePage },
	{ path: "/login", name: "login", component: LoginPage },
];
const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
});

export { router };
