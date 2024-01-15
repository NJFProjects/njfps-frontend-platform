<script setup lang="ts">
import {
	Form as FormValidate,
	Field as FieldValidate,
	ErrorMessage,
} from "vee-validate";
import BaseButton from "./BaseButton.vue";

interface PropsType {
	schema: {
		fields: {
			name: string;
			type?: string;
			label?: string;
			msg?: string;
			[index: string]: unknown;
		}[];
	};
}

const props = defineProps<PropsType>();

const emit = defineEmits<{
	submit: [payload: string];
}>();

// Need to use defineProps() to get props from parent component for destination
const onSubmit = (values: unknown) => {
	let payload = JSON.stringify(values, null, 2);
	console.log(payload);
	emit("submit", payload);
};
</script>
<template>
	<FormValidate class="flex flex-col gap-4" @submit="onSubmit">
		<div
			v-for="{ name, label, msg, type, ...attrs } in props.schema.fields"
			:key="name"
			class="flex flex-col items-start gap-2"
		>
			<label :for="name" class="text-cyan-900 font-base font-semibold">{{
				label
			}}</label>
			<FieldValidate
				:id="name"
				v-slot="{ meta, field }"
				:name="name"
				v-bind="attrs"
			>
				<input
					v-bind="field"
					:type="type"
					class="field-base flex self-stretch py-3 pl-3 pr-11"
					:class="{
						'border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500':
							!meta.valid && meta.touched,
					}"
				/>
			</FieldValidate>
			<ErrorMessage v-if="msg" :name="name" class="text-pink-600 text-sm">{{
				msg
			}}</ErrorMessage>
			<ErrorMessage v-else :name="name" class="text-pink-600 text-sm" />
		</div>
		<BaseButton size="lg">Submit</BaseButton>
	</FormValidate>
</template>
