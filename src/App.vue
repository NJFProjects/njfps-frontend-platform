<script setup lang="ts">
import BaseButton from "./components/BaseButton.vue";
</script>
<template>
	<div>
		<BaseButton color="primary" size="sm" icon-left="BuildingOffice2Icon">
			Button
		</BaseButton>
		<BaseButton color="primary" size="md" icon-left="BuildingOffice2Icon"
			>Button</BaseButton
		>
		<BaseButton color="primary" size="lg" icon-right="BuildingOffice2Icon"
			>Button</BaseButton
		>
	</div>
	<BaseButton color="secondary" size="sm" icon-left="BuildingOffice2Icon"
		>Button</BaseButton
	>
	<BaseButton
		color="secondary"
		size="md"
		icon-right="BuildingOffice2Icon"
		icon-right-type="outline"
		>Button</BaseButton
	>
	<BaseButton
		color="secondary"
		size="lg"
		icon-left="BuildingOffice2Icon"
		icon-left-type="outline"
		>Button</BaseButton
	>
</template>
