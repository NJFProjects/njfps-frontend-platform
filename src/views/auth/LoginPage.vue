<script setup lang="ts">
import AuthPageBase from "./AuthPageBase.vue";
import DynamicForm from "../../components/DynamicFormBase.vue";
import * as Yup from "yup";

const formSchema = {
	fields: [
		{
			label: "Email",
			name: "email",
			as: "input",
			rules: Yup.string().email().required(),
		},
		{
			label: "Password",
			name: "password",
			as: "input",
			type: "password",
			rules: Yup.string().min(8).required(),
		},
	],
};
</script>
<template>
	<AuthPageBase>
		<div class="flex flex-col gap-4 self-stretch">
			<div class="text-4xl font-bold text-cyan-900">Login</div>
			<DynamicForm :schema="formSchema" />
		</div>
	</AuthPageBase>
</template>
