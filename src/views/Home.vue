<template>
	<div class="home">
		<div class="home-banner text-center">
			<img class="fit" src="@/assets/home-banner.jpg" alt="home" />
		</div>
		<div class="filter">
			<div class="container header-container">
				<h1 class="text-green my-3 header-border">משרדים להשכרה</h1>
			</div>
			<div class="text-center">
				<img class="fit" src="@/assets/home2.jpg" alt="home2" />
			</div>
		</div>
		<div class="short-form">
			<div class="container">
				<h2>צור קשר</h2>
				<ShortForm />
			</div>
		</div>
		<div class="asakim">
			<div class="container">
				<h2 class="text-green header-border mb-4">
					עסקים מבוקשים לפארק עתידים
				</h2>
				<b-row>
					<b-col md="4">
						<img class="w-100" src="@/assets/asakim/a-1.jpg" alt="גאדג׳טים" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							גאדג׳טים
						</h4>
					</b-col>
					<b-col md="4">
						<img
							class="w-100"
							src="@/assets/asakim/a-2.jpg"
							alt="מעבדת סלולר"
						/>
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							מעבדת סלולר
						</h4>
					</b-col>
					<b-col md="4">
						<img class="w-100" src="@/assets/asakim/a-3.jpg" alt="סניף בנק" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							סניף בנק
						</h4>
					</b-col>

					<!-- <div class="w-100"></div> -->

					<b-col md="4">
						<img
							class="w-100"
							src="@/assets/asakim/a-4.jpg"
							alt="אופניים חשמליים"
						/>
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							אופניים חשמליים
						</h4>
					</b-col>
					<b-col md="4">
						<img class="w-100" src="@/assets/asakim/a-5.jpg" alt="ציוד משרדי" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							ציוד משרדי
						</h4>
					</b-col>
					<b-col md="4">
						<img class="w-100" src="@/assets/asakim/a-6.jpg" alt="ניקוי יבש" />
						<h4 class="text-center bg-dark text-white py-1 mt-1 mb-3">
							ניקוי יבש
						</h4>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>

<script>
import ShortForm from "@/components/ShortForm";

export default {
	name: "home",
	components: {
		ShortForm
	}
};
</script>

<style lang="scss"></style>
