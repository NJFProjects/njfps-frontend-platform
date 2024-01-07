<script setup lang="ts">
import { computed } from "vue";
import { tv } from "tailwind-variants";

const props = withDefaults(
	defineProps<{
		color?: "primary" | "secondary";
		size?: "sm" | "md" | "lg";
	}>(),
	{ color: "primary", size: "md" },
);

const button = tv({
	base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
	variants: {
		color: {
			primary: "bg-blue-500 text-white",
			secondary: "bg-purple-500 text-white",
		},
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "px-4 py-3 text-lg",
		},
	},
	compoundVariants: [
		{
			size: ["sm", "md"],
			class: "px-3 py-1",
		},
	],
});

const buttonClass = computed(() =>
	button({
		color: props.color,
		size: props.size,
	}),
);
</script>

<template>
	<button :class="buttonClass">
		<slot></slot>
	</button>
</template>
