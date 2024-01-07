<script setup lang="ts">
import BaseButton from "./components/BaseButton.vue";
</script>
<template>
	<div>
		<BaseButton color="primary" size="sm">Button</BaseButton>
		<BaseButton color="primary" size="md">Button</BaseButton>
		<BaseButton color="primary" size="lg">Button</BaseButton>
	</div>
	<BaseButton color="secondary" size="sm">Button</BaseButton>
	<BaseButton color="secondary" size="md">Button</BaseButton>
	<BaseButton color="secondary" size="lg">Button</BaseButton>
</template>
