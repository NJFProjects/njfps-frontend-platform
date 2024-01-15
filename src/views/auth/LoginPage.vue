<script setup lang="ts">
import AuthPageBase from "./AuthPageBase.vue";
import DynamicFormBase from "../../components/DynamicFormBase.vue";
import * as Yup from "yup";

const formSchema = {
	fields: [
		{
			label: "Email",
			name: "email",
			rules: Yup.string().email().required(),
		},
		{
			label: "Password",
			name: "password",
			type: "password",
			rules: Yup.string().min(8).required(),
		},
	],
};
</script>
<template>
	<AuthPageBase>
		<div class="flex flex-col gap-4 self-stretch">
			<div class="text-cyan-900 text-4xl font-bold">Login</div>
			<DynamicFormBase :schema="formSchema" />
		</div>
	</AuthPageBase>
</template>
