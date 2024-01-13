<script setup lang="ts">
import { computed } from "vue";
import { IconObject } from "../utils/icon-import";

const props = defineProps({
	iconName: {
		type: String,
		default: "SwatchIcon",
	},
	iconType: {
		type: String,
		validator(value: string) {
			// The value must match one of these strings
			return ["solid", "outline"].includes(value);
		},
		default: "outline",
	},
});

const SelectedIcon = computed(() => IconObject[props.iconType][props.iconName]);
</script>

<template>
	<component :is="SelectedIcon"></component>
</template>
