<script setup lang="ts">
import { tv } from "tailwind-variants";

const props = defineProps({
	color: {
		validator(value: string) {
			// The value must match one of these strings
			return ["primary", "secondary"].includes(value);
		},
		default: "primary",
	},
	size: {
		validator(value: string) {
			// The value must match one of these strings
			return ["sm", "md", "lg"].includes(value);
		},
		default: "md",
	},
});

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

const buttonArgs = {
	size: props.size,
	color: props.color,
};

const buttonClass = button(buttonArgs);
</script>

<template>
	<button :class="buttonClass">
		<slot></slot>
	</button>
</template>
