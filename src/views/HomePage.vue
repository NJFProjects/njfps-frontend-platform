<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
import FooterBase from "./FooterBase.vue";
import SingleCard from "../components/SingleCard.vue";
export interface Props {
	cardAmountInStack?: number;
}

const props = withDefaults(defineProps<Props>(), {
	cardAmountInStack: 3,
});
const query = ref("");

// For demo purposes
const cardInformationArray: Array<object> = [];
for (let i = 0; i < props.cardAmountInStack; i++) {
	cardInformationArray.push({
		cardTitle: "Default Title",
		fromDate: "2021-06-26",
		toDate: "2021-10-15",
		cardContent: "Default Content",
		teamSize: 5,
		likeAmount: 30,
		watchAmount: 18,
		bookmarkAmount: 4,
		cardImgURL:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		profileImgURL:
			"https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		hasLike: false,
		hasWatch: false,
		hasBookmark: false,
	});
}
</script>
<template>
	<main class="flex flex-col gap-12">
		<section class="bg-cyan-50 flex justify-center py-20">
			<div class="flex flex-col items-center self-stretch">
				<p class="text-cyan-900 text-5xl/loose font-bold">
					Explore Inspiring Projects
				</p>
				<SearchBar v-model:query="query" />
				<!-- <div>Search Query: {{ query }}</div> -->
			</div>
		</section>
		<section class="flex justify-center">
			<div
				class="flex max-w-[72rem] flex-col items-start gap-4 overflow-x-auto"
			>
				<div class="text-cyan-900 text-3xl font-semibold">Most Watched</div>
				<div class="flex items-start gap-5 pb-4">
					<SingleCard
						v-for="(item, index) in cardInformationArray"
						v-bind="item"
						:key="index"
					/>
				</div>
			</div>
		</section>
		<FooterBase class="mt-12" />
	</main>
</template>
