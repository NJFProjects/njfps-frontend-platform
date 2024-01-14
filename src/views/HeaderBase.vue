<script setup lang="ts">
import LogoPlaceholder from "../components/LogoPlaceholder.vue";
import BaseButton from "../components/BaseButton.vue";
</script>
<template>
	<div
		class="bg-white border-cyan-900/30 flex items-center justify-between self-stretch border-b border-solid px-8 py-4"
	>
		<div class="flex items-center justify-center gap-6">
			<router-link to="/">
				<LogoPlaceholder class="h-10" :is-logo="false" />
			</router-link>
			<BaseButton color="primary" type="ghost">Explore</BaseButton>
		</div>
		<div class="flex-start flex gap-4">
			<router-link to="/login">
				<BaseButton color="primary" type="outline">Login</BaseButton>
			</router-link>
			<BaseButton color="primary" type="solid">Register</BaseButton>
		</div>
	</div>
</template>
