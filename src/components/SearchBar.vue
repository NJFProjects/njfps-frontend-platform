<script setup lang="ts">
import AppIcon from "./AppIcon.vue";

export interface Props {
	placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: "vue",
});

const query = defineModel("query", { type: String, default: "" });
</script>

<template>
	<div
		class="border-gray-400 bg-white hover:border-cyan-500 hover:bg-cyan-50 group flex items-center justify-between self-stretch rounded-xl border border-solid p-4"
	>
		<input
			v-model="query"
			type="text"
			:placeholder="props.placeholder"
			class="text-cyan-900 group-hover:bg-cyan-50 w-full text-base font-bold outline-none"
		/>
		<AppIcon icon-name="MagnifyingGlassIcon" class="h-6 w-6" />
	</div>
</template>
