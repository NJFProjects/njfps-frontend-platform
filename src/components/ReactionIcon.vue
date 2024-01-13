<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import { ref } from "vue";

defineOptions({
	inheritAttrs: false,
});

const props = withDefaults(
	defineProps<{
		iconName?: string;
		statusActivated?: boolean;
		statusAmount?: number;
		reactionEnabled?: boolean;
	}>(),
	{
		iconName: "SwatchIcon",
		statusActivated: false,
		statusAmount: 0,
		reactionEnabled: true,
	},
);

const statusActivatedLocal = ref(props.statusActivated);
const statusAmountLocal = ref(props.statusAmount);

function assignIconStatus(): string {
	if (statusActivatedLocal.value) {
		return "solid";
	} else {
		return "outline";
	}
}

let iconType: string = assignIconStatus();

function mutateReactionStatus() {
	statusActivatedLocal.value = !statusActivatedLocal.value;

	// Assign Icon Status
	iconType = assignIconStatus();
	if (statusActivatedLocal.value) {
		statusAmountLocal.value = statusAmountLocal.value + 1;
	} else {
		statusAmountLocal.value = statusAmountLocal.value - 1;
	}

	// Api call to update the status
}
</script>

<template>
	<div class="flex items-center gap-1">
		<AppIcon
			v-if="reactionEnabled"
			:icon-name="props.iconName"
			:icon-type="iconType"
			class="cursor-pointer"
			v-bind="$attrs"
			@click="mutateReactionStatus()"
		/>
		<AppIcon
			v-else
			:icon-name="props.iconName"
			:icon-type="iconType"
			v-bind="$attrs"
		/>
		<div class="text-sm">{{ statusAmountLocal }}</div>
	</div>
</template>
