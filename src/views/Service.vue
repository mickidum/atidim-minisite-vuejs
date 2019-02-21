<template>
	<div v-if="page" class="service">
		<div class="header-container container">
			<h1 class="text-green my-3 header-border">{{ page.title }}</h1>
		</div>
		<div class="service-banner text-center">
			<img :src="page.main_image.path" :alt="page.title" />
		</div>
		<div v-html="page.content"></div>
	</div>
</template>

<script>
export default {
	name: "service",
	computed: {
		page() {
			return this.$store.getters.getPage(this.$route.name);
		}
	}
};
</script>
