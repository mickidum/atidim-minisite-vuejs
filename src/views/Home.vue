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
				<ShortForm :name="name" :email="email" :phone="phone" />
			</div>
		</div>
		<div v-html="page.content" class="asakim">
			<!-- <div class="container">
				<h2 class="text-green header-border mb-4">
					עסקים מבוקשים לפארק עתידים
				</h2>
				<div class="row">
					<div class="col-md-4">
						<img class="w-100" src="@/assets/asakim/a-1.jpg" alt="גאדג׳טים" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							גאדג׳טים
						</h4>
					</div>
					<div class="col-md-4">
						<img
							class="w-100"
							src="@/assets/asakim/a-2.jpg"
							alt="מעבדת סלולר"
						/>
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							מעבדת סלולר
						</h4>
					</div>
					<div class="col-md-4">
						<img class="w-100" src="@/assets/asakim/a-3.jpg" alt="סניף בנק" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							סניף בנק
						</h4>
					</div>
					<div class="col-md-4">
						<img
							class="w-100"
							src="@/assets/asakim/a-4.jpg"
							alt="אופניים חשמליים"
						/>
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							אופניים חשמליים
						</h4>
					</div>
					<div class="col-md-4">
						<img class="w-100" src="@/assets/asakim/a-5.jpg" alt="ציוד משרדי" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							ציוד משרדי
						</h4>
					</div>
					<div class="col-md-4">
						<img class="w-100" src="@/assets/asakim/a-6.jpg" alt="ניקוי יבש" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							ניקוי יבש
						</h4>
					</div>
				</div>
			</div> -->
		</div>
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
	data() {
		return {
			name: null,
			email: null,
			phone: null
		};
	},
	computed: {
		page() {
			return this.$store.getters.getPage(this.$route.name);
		}
	}
};
</script>
