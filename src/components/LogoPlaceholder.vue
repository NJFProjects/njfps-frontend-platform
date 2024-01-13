<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
	defineProps<{
		isWhiteBg?: boolean;
		isLogo?: boolean;
	}>(),
	{
		isWhiteBg: true,
		isLogo: true,
	},
);

const bgType = computed(() => {
	if (props.isWhiteBg) {
		return "white";
	} else {
		return "black";
	}
});

const logoType = computed(() => {
	if (props.isLogo) {
		return "log";
	} else {
		return "banner";
	}
});

const imgSrc = computed(() => `/logo/${bgType.value}-${logoType.value}.svg`);
</script>

<template>
	<img :src="imgSrc" alt="NJFProjects Logo" />
</template>
