<script setup lang="ts">
import { computed } from "vue";
import { tv } from "tailwind-variants";

const props = withDefaults(
	defineProps<{
		color?: "primary" | "primarySelected" | "danger" | "success" | "info";
		size?: "sm" | "md" | "lg" | "xl";
		type?: "solid" | "light" | "outline" | "underline" | "ghost";
		hasPaddingX?: boolean;
	}>(),
	{
		color: "primary",
		size: "md",
		type: "solid",
		hasPaddingX: true,
	},
);

const baseButton = tv({
	base: "font-bold active:opacity-80",
	variants: {
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
		},
		hasPaddingX: {
			true: "",
			false: "px-0",
		},
	},
	compoundVariants: [
		{
			size: "sm",
			hasPaddingX: true,
			class: "text-sm px-2.5 py-1.5",
		},
		{
			size: "md",
			hasPaddingX: true,
			class: "text-base px-3 py-1.5",
		},
		{
			size: "lg",
			hasPaddingX: true,
			class: "text-lg px-3.5 py-2",
		},
		{
			size: "xl",
			hasPaddingX: true,
			class: "text-xl px-4.5 py-2.5",
		},
		{
			size: "sm",
			hasPaddingX: false,
			class: "text-sm py-1.5",
		},
		{
			size: "md",
			hasPaddingX: false,
			class: "text-base py-1.5",
		},
		{
			size: "lg",
			hasPaddingX: false,
			class: "text-lg py-2",
		},
		{
			size: "xl",
			hasPaddingX: false,
			class: "text-xl py-2.5",
		},
	],
});

const solidButton = tv({
	extend: baseButton,
	base: "rounded",
	variants: {
		color: {
			primary: "bg-cyan-900 text-white",
			primarySelected: "bg-cyan-600 text-white",
			secondary: "bg-gray-300 text-gray-900",
			danger: "bg-red-500 text-white",
			success: "bg-green-500 text-white",
			info: "bg-blue-500 text-white",
		},
	},
});

const lightButton = tv({
	extend: baseButton,
	base: ["rounded", "bg-white"],
	variants: {
		color: {
			primary: "text-cyan-900",
			primarySelected: "text-cyan-600",
			secondary: "text-gray-500",
			danger: "text-red-500",
			success: "text-green-500",
			info: "text-blue-500",
		},
	},
});

const outlineButton = tv({
	extend: baseButton,
	base: ["rounded", "border-solid", "border-2"],
	variants: {
		color: {
			primary: "border-cyan-900 text-cyan-900",
			primarySelected: "border-cyan-600 text-cyan-600",
			secondary: "border-gray-500 text-gray-500",
			danger: "border-red-500 text-red-500",
			success: "border-green-500 text-green-500",
			info: "border-blue-500 text-blue-500",
		},
	},
});

const underlineButton = tv({
	extend: baseButton,
	base: "border-b-2 border-solid",
	variants: {
		color: {
			primary: "border-cyan-900 text-cyan-900",
			primarySelected: "border-cyan-600 text-cyan-600",
			secondary: "border-gray-500 text-gray-500",
			danger: "border-red-500 text-red-500",
			success: "border-green-500 text-green-500",
			info: "border-blue-500 text-blue-500",
		},
	},
});

const ghostButton = tv({
	extend: baseButton,
	variants: {
		color: {
			primary: "text-cyan-900",
			primarySelected: "text-cyan-600",
			secondary: "text-gray-500",
			danger: "text-red-500",
			success: "text-green-500",
			info: "text-blue-500",
		},
	},
});

const buttonClass = computed(() => {
	if (props.type === "solid") {
		return solidButton({
			color: props.color,
			size: props.size,
			hasPaddingX: props.hasPaddingX,
		});
	} else if (props.type === "light") {
		return lightButton({
			color: props.color,
			size: props.size,
			hasPaddingX: props.hasPaddingX,
		});
	} else if (props.type === "outline") {
		return outlineButton({
			color: props.color,
			size: props.size,
			hasPaddingX: props.hasPaddingX,
		});
	} else if (props.type === "underline") {
		return underlineButton({
			color: props.color,
			size: props.size,
			hasPaddingX: props.hasPaddingX,
		});
	} else if (props.type === "ghost") {
		return ghostButton({
			color: props.color,
			size: props.size,
			hasPaddingX: props.hasPaddingX,
		});
	} else {
		return baseButton({
			size: props.size,
			hasPaddingX: props.hasPaddingX,
		});
	}
});
</script>

<template>
	<button :class="buttonClass">
		<slot></slot>
	</button>
</template>
