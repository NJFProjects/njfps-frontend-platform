<script setup lang="ts">
import BaseButton from "./components/BaseButton.vue";
import ProfileThumbnail from "./components/ProfileThumbnail.vue";

const profileThumbnailArgs = {
	size: "xxl",
	showDropList: true,
	profileImgURL:
		"https://i.pinimg.com/564x/5b/a6/a5/5ba6a59f0c45c05c0ea75d8824c136b5.jpg",
};
</script>
<template>
	<div>
		<ProfileThumbnail v-bind="profileThumbnailArgs" />
	</div>
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
