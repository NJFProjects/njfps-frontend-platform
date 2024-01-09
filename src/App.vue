<script setup lang="ts">
import SingleCard from "./components/SingleCard.vue";

const SingleCardArgs = {
	size: "md",
	cardTitle: "Lorem ipsum dolor sit amet consectetur. Libe",
	fromDate: "2021-06-26",
	toDate: "2021-10-15",
	teamSize: 5,
	likeAmount: 30,
	watchAmount: 18,
	bookmarkAmount: 4,
	cardImgURL:
		"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	profileImgURL:
		"https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
</script>
<template>
	<SingleCard v-bind="SingleCardArgs" />
</template>
