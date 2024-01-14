<script setup lang="ts">
import {
	Form as FormValidate,
	Field as FieldValidate,
	ErrorMessage,
} from "vee-validate";
import BaseButton from "./BaseButton.vue";

interface Field {
	as?: string;
	name?: string;
	label?: string;
	children?: string;
	msg?: string;
	[index: string]: unknown;
}

const props = defineProps<{
	schema: {
		fields: {
			type: Field;
			required: true;
		}[];
	};
}>();

// Need to use defineProps() to get props from parent component for destination
const onSubmit = (values: unknown) => {
	console.log(JSON.stringify(values, null, 2));
};
</script>
<template>
	<FormValidate class="flex flex-col gap-4" @submit="onSubmit">
		<div
			v-for="{ as, name, label, children, msg, ...attrs } in props.schema
				.fields"
			:key="name"
			class="flex flex-col items-start gap-2"
		>
			<label :for="name" class="text-cyan-900 font-base font-semibold">{{
				label
			}}</label>
			<FieldValidate
				:id="name"
				:as="as"
				:name="name"
				v-bind="attrs"
				class="field-base py-3 pl-3 pr-11 flex self-stretch"
			>
				<template v-if="children && children.length">
					<component
						:is="tag"
						v-for="({ tag, text, ...childAttrs }, idx) in children"
						:key="idx"
						v-bind="childAttrs"
					>
						{{ text }}
					</component>
				</template>
			</FieldValidate>
			<ErrorMessage v-if="msg" :name="name" class="text-pink-600 text-sm">{{
				msg
			}}</ErrorMessage>
			<ErrorMessage v-else :name="name" class="text-pink-600 text-sm" />
		</div>
		<BaseButton size="lg">Submit</BaseButton>
	</FormValidate>
</template>
