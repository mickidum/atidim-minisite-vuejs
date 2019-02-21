<template>
	<div v-if="page" class="home">
		<div class="home-banner text-center">
			<img :src="page.main_image.path" :alt="page.main_image.title" />
		</div>
		<div class="">
			<div class="container header-containera">
				<h1 class="text-green my-3 header-border">{{ page.title }}</h1>
			</div>
			<div class="search-form">
				<SearchForm />
			</div>
			<div class="text-center filter">
				<img
					class="fit"
					:src="page.content_1_gallery[0].path"
					:alt="page.content_1_gallery[0].title"
				/>
			</div>
		</div>
		<div class="short-form">
			<div class="container">
				<h2>צור קשר</h2>
				<ShortForm />
			</div>
		</div>
		<div v-html="page.content" class="asakim"></div>
	</div>
</template>

<script>
import ShortForm from "@/components/ShortForm";
import SearchForm from "@/components/SearchForm";

export default {
	name: "home",
	components: {
		ShortForm,
		SearchForm
	},
	computed: {
		page() {
			return this.$store.getters.getPage(this.$route.name);
		}
	}
};
</script>
