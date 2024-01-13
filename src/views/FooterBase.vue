<script setup lang="ts">
import LogoPlaceholder from "../components/LogoPlaceholder.vue";
</script>
<template>
	<footer
		class="bg-gray-900 flex flex-col items-start justify-center gap-8 px-16 py-16"
	>
		<LogoPlaceholder class="h-10" :is-white-bg="false" :is-logo="false" />
		<div class="flex items-start justify-between self-stretch">
			<div class="text-white text-sm font-normal">
				Copyright 2024 NJFProjects.
			</div>
			<div class="flex items-start gap-8">
				<p class="text-gray-400 text-sm/normal font-normal">Contact</p>
			</div>
		</div>
	</footer>
</template>
