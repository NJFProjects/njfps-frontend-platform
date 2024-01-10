<script setup lang="ts">
import ReactionIcon from "./ReactionIcon.vue";

const props = withDefaults(
	defineProps<{
		likeAmount?: number;
		watchAmount?: number;
		bookmarkAmount?: number;
		hasLike?: boolean;
		hasWatch?: boolean;
		hasBookmark?: boolean;
	}>(),
	{
		likeAmount: 30,
		watchAmount: 18,
		bookmarkAmount: 4,
		hasLike: false,
		hasWatch: false,
		hasBookmark: false,
	},
);
</script>

<template>
	<div class="flex gap-4">
		<div class="flex items-center gap-1">
			<ReactionIcon
				icon-name="HeartIcon"
				:status-activated="props.hasLike"
				:status-amount="props.likeAmount"
				:reaction-enabled="false"
				class="h-4 w-4"
			/>
		</div>
		<div class="flex items-center gap-1">
			<ReactionIcon
				icon-name="EyeIcon"
				:status-activated="props.hasWatch"
				:status-amount="props.watchAmount"
				:reaction-enabled="false"
				class="h-4 w-4"
			/>
		</div>
		<div class="flex items-center gap-1">
			<ReactionIcon
				icon-name="BookmarkIcon"
				:status-activated="props.hasBookmark"
				:status-amount="props.bookmarkAmount"
				:reaction-enabled="false"
				class="h-4 w-4"
			/>
		</div>
	</div>
</template>
