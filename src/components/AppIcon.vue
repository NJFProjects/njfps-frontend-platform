<script setup lang="ts">
import { computed } from "vue";
import * as heroIconsSolid from "@heroicons/vue/24/solid";
import * as heroIconsOutline from "@heroicons/vue/24/outline";

const heroIcons = {
	solid: heroIconsSolid,
	outline: heroIconsOutline,
};

const props = withDefaults(
	defineProps<{
		iconName?: string;
		iconType?: "solid" | "outline";
	}>(),
	{
		iconName: "SwatchIcon",
		iconType: "outline",
	},
);

const SelectedIcon = computed(() => heroIcons[props.iconType][props.iconName]);
</script>

<template>
	<component :is="SelectedIcon"></component>
</template>
