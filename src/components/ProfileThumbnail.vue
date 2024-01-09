<script setup lang="ts">
import { computed } from "vue";
import { tv } from "tailwind-variants";
import AppIcon from "./AppIcon.vue";

const props = withDefaults(
	defineProps<{
		size?: "md" | "lg" | "xl" | "xxl";
		showDropList?: boolean;
		userName?: string;
		profileImgURL?: string;
	}>(),
	{
		size: "lg",
		showDropList: false,
		userName: "",
		profileImgURL: "",
	},
);

const profileThumbnail = tv({
	slots: {
		wrapclass: "inline-flex items-center gap-0.5",
		profileClass: "rounded-full overflow-hidden",
		userNameClass: "font-bold text-cyan-900",
		dropListClass: "text-cyan-900 mx-1 mt-1",
	},
	variants: {
		size: {
			md: {
				profileClass: "w-10 h-10",
				userNameClass: "text-base	pl-1.5",
				dropListClass: "w-4 h-4",
			},
			lg: {
				profileClass: "w-12 h-12",
				userNameClass: "text-xl pl-2",
				dropListClass: "w-4 h-4",
			},
			xl: {
				profileClass: "w-14 h-14",
				userNameClass: "text-2xl pl-3",
				dropListClass: "w-5 h-5",
			},
			xxl: {
				profileClass: "w-16 h-16",
				userNameClass: "text-3xl pl-4",
				dropListClass: "w-6 h-6",
			},
		},
	},
});

// Use computed to track the changes of props
const profileThumbnailClass = computed(() => {
	return profileThumbnail({
		size: props.size,
	});
});
</script>

<template>
	<div :class="profileThumbnailClass.wrapclass()">
		<div :class="profileThumbnailClass.profileClass()">
			<img :src="profileImgURL" class="h-full w-full object-cover" />
		</div>
		<div v-if="userName" :class="profileThumbnailClass.userNameClass()">
			{{ userName }}
		</div>
		<AppIcon
			v-if="showDropList"
			icon-name="ChevronDownIcon"
			:class="profileThumbnailClass.dropListClass()"
		/>
	</div>
</template>
