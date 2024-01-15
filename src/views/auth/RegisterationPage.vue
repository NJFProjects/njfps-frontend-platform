<script setup lang="ts">
import { ref } from "vue";
import AuthPageBase from "./AuthPageBase.vue";
import DynamicForm from "../../components/DynamicFormBase.vue";
import * as Yup from "yup";

const sentEmail = ref(false);

const formSchema = {
	fields: [
		{
			label: "Email",
			name: "email",
			rules: Yup.string().email().required(),
		},
	],
};

const onSubmit = (payload: string) => {
	console.log(payload);
	sentEmail.value = true;
};
</script>
<template>
	<AuthPageBase v-if="sentEmail">
		<div class="flex flex-col gap-4 self-stretch">
			<div class="text-cyan-900 text-2xl font-bold">
				Validation Email is sent to your email address.
			</div>
			<div class="text-cyan-900 textbase">
				Please check your inbox for the validation email to finish the
				registration.
			</div>
		</div>
	</AuthPageBase>
	<AuthPageBase v-else>
		<div class="flex flex-col gap-4 self-stretch">
			<div class="text-cyan-900 text-4xl font-bold">Register</div>
			<DynamicForm :schema="formSchema" @submit="onSubmit" />
		</div>
	</AuthPageBase>
</template>
