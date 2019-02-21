<template>
	<div v-if="page" class="contact">
		<div class="service-banner text-center">
			<img :src="page.main_image.path" :alt="page.title" />
		</div>
		<div class="container">
			<h1 class="text-green my-4 header-border">{{ page.title }}</h1>
		</div>
		<div class="contacts-block short-form big-form">
			<div class="container">
				<div class="row">
					<div v-html="page.content" class="col-md-6"></div>
					<div class="col-md-6">
						<BigForm />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BigForm from "@/components/BigForm";
export default {
	name: "contact",
	components: {
		BigForm
	},
	computed: {
		page() {
			return this.$store.getters.getPage(this.$route.name);
		}
	}
};
</script>
