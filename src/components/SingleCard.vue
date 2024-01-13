<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import SingleCardIconStack from "./SingleCardIconStack.vue";
import ProfileThumbnail from "./ProfileThumbnail.vue";

export interface Props {
	cardTitle?: string;
	fromDate?: string;
	toDate?: string;
	teamSize?: number;
	cardContent?: string;
	likeAmount?: number;
	watchAmount?: number;
	bookmarkAmount?: number;
	cardImgURL?: string;
	profileImgURL?: string;
	hasLike?: boolean;
	hasWatch?: boolean;
	hasBookmark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	cardTitle: "Default Title",
	fromDate: "2021-06-26",
	toDate: "2021-10-15",
	cardContent: "Default Content",
	teamSize: 5,
	likeAmount: 30,
	watchAmount: 18,
	bookmarkAmount: 4,
	cardImgURL: "",
	profileImgURL: "",
	hasLike: false,
	hasWatch: false,
	hasBookmark: false,
});
</script>

<template>
	<div
		class="text-cyan-900 bg-white flex h-[20rem] w-[20rem] flex-col gap-3 overflow-hidden rounded-2xl shadow-lg"
	>
		<img
			v-if="props.cardImgURL"
			:src="props.cardImgURL"
			class="h-36 w-full object-cover"
		/>
		<div class="flex grow flex-col items-start gap-3 px-5">
			<p
				class="max-h-14 max-w-full overflow-hidden text-pretty break-words text-xl font-bold"
			>
				{{ props.cardTitle }}
			</p>
			<div class="flex flex-col items-start gap-2 self-stretch">
				<div class="flex gap-3">
					<ProfileThumbnail
						size="lg"
						:profile-img-u-r-l="props.profileImgURL"
					/>
					<div class="flex flex-col gap-0.5">
						<div class="flex justify-between">
							<div class="flex items-center gap-1 pr-4">
								<AppIcon
									icon-name="UsersIcon"
									icon-type="solid"
									class="h-4 w-4"
								/>
								<div class="text-sm">{{ props.teamSize }}</div>
							</div>
							<div class="flex items-center gap-1 pr-4">
								<AppIcon
									icon-name="ClockIcon"
									icon-type="solid"
									class="h-4 w-4"
								/>
								<div class="text-sm">4 months</div>
							</div>
						</div>
						<div class="flex items-center gap-1">
							<AppIcon
								icon-name="CalendarDaysIcon"
								icon-type="solid"
								class="h-4 w-4"
							/>
							<div class="text-sm">
								{{ props.fromDate }} ~ {{ props.toDate }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<SingleCardIconStack
			:like-amount="props.likeAmount"
			:watch-amount="props.watchAmount"
			:bookmark-amount="props.bookmarkAmount"
			:has-like="props.hasLike"
			:has-watch="props.hasWatch"
			:has-bookmark="props.hasBookmark"
			class="border-gray-200 text-gray-400 items-end justify-end border-t border-solid px-5 pb-1.5 pt-2"
		/>
	</div>
</template>
