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
	}>(),
	{
		iconName: "SwatchIcon",
		statusActivated: false,
		statusAmount: 0,
	},
);

const statusActivatedLocal = ref(props.statusActivated);
const statusAmountLocal = ref(props.statusAmount);

function mutateReactionStatus() {
	statusActivatedLocal.value = !statusActivatedLocal.value;
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
			v-if="statusActivatedLocal"
			:icon-name="props.iconName"
			icon-type="solid"
			class="cursor-pointer"
			v-bind="$attrs"
			@click="mutateReactionStatus()"
		/>
		<AppIcon
			v-else
			:icon-name="props.iconName"
			icon-type="outline"
			class="cursor-pointer"
			v-bind="$attrs"
			@click="mutateReactionStatus()"
		/>
		<div class="text-sm">{{ statusAmountLocal }}</div>
	</div>
</template>
