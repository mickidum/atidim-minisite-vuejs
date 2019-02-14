<template>
	<div class="building-page">
		<div class="header-container container">
			<h1 class="text-green my-3 header-border">בניין {{ buildingNumber }}</h1>
		</div>
		<div class="service-banner text-center">
			<img src="@/assets/banner1.jpg" alt="buildings banner" />
		</div>
		<div class="building-image text-center">
			<img
				src="@/assets/b-test/top.jpg"
				:alt="`Image for building ${buildingNumber}`"
			/>
		</div>
		<div class="building-text">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="b-number">
							<img src="@/assets/b-test/badge.png" alt="badge icon" />
							<span class="text-green-light">{{ buildingNumber }}</span>
						</div>
					</div>
					<div class="col-md-8"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "building",

	data() {
		return {};
	},
	computed: {
		buildingNumber() {
			return this.$route.params.id;
		}
	}
};
</script>

<style lang="css" scoped>
h1 {
	transition: all 1s;
}
</style>
