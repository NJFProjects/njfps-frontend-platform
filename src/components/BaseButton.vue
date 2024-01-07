<script setup lang="ts">
import { computed } from "vue";
import { tv } from "tailwind-variants";

const props = withDefaults(
	defineProps<{
		color?: "primary" | "danger" | "success" | "info";
		size?: "sm" | "md" | "lg" | "xl";
		type?: "solid" | "light" | "outline" | "ghost";
	}>(),
	{ color: "primary", size: "md", type: "solid" },
);

const baseButton = tv({
	base: "font-bold rounded",
	variants: {
		size: {
			sm: "text-sm px-2.5 py-1.5",
			md: "text-base px-3 py-1.5",
			lg: "text-lg px-3.5 py-2",
			xl: "text-xl px-4 py-2.5",
		},
	},
});

const solidButton = tv({
	extend: baseButton,
	variants: {
		color: {
			primary: "bg-cyan-900 text-white rounded active:opacity-80",
			secondary: "bg-gray-300 text-gray-900 rounded active:opacity-80",
			danger: "bg-red-500 text-white rounded active:opacity-80",
			success: "bg-green-500 text-white rounded active:opacity-80",
			info: "bg-blue-500 text-white rounded active:opacity-80",
		},
	},
});

const ghostButton = tv({
	extend: baseButton,
	variants: {
		color: {
			primary: "text-cyan-900 rounded active:opacity-80",
			secondary: "text-gray-500 rounded active:opacity-80",
			danger: "text-red-500 rounded active:opacity-80",
			success: "text-green-500 rounded active:opacity-80",
			info: "bg-white text-blue-500 rounded active:opacity-80",
		},
	},
});

const lightButton = tv({
	extend: baseButton,
	variants: {
		color: {
			primary: "bg-white text-cyan-900 rounded active:opacity-80",
			secondary: "bg-white text-gray-500 rounded active:opacity-80",
			danger: "bg-white text-red-500 rounded active:opacity-80",
			success: "bg-white text-green-500 rounded active:opacity-80",
			info: "bg-white text-blue-500 rounded active:opacity-80",
		},
	},
});

const outlineButton = tv({
	extend: baseButton,
	variants: {
		color: {
			primary:
				"bg-white border-solid border-cyan-900 border-2 rounded text-cyan-900 rounded active:opacity-80",
			secondary:
				"bg-white border-solid border-gray-500 border-2 rounded text-gray-500 rounded active:opacity-80",
			danger:
				"bg-white border-solid border-red-500 border-2 rounded text-red-500 rounded active:opacity-80",
			success:
				"bg-white border-solid border-green-500 border-2 rounded text-green-500 rounded active:opacity-80",
			info: "bg-white border-solid border-blue-500 border-2 rounded text-blue-500 rounded active:opacity-80",
		},
	},
});

const buttonClass = computed(() => {
	if (props.type === "solid") {
		return solidButton({
			color: props.color,
			size: props.size,
		});
	} else if (props.type === "light") {
		return lightButton({
			color: props.color,
			size: props.size,
		});
	} else if (props.type === "outline") {
		return outlineButton({
			color: props.color,
			size: props.size,
		});
	} else if (props.type === "ghost") {
		return ghostButton({
			color: props.color,
			size: props.size,
		});
	} else {
		return baseButton({
			size: props.size,
		});
	}
});
</script>

<template>
	<button :class="buttonClass">
		<slot></slot>
	</button>
</template>
