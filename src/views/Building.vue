<template>
	<div class="building-page">
		<div class="header-container container">
			<h1 class="text-green my-3 header-border">בניין {{ buildingNumber }}</h1>
		</div>
		<div class="building-banner text-center">
			<img src="@/assets/banner1.jpg" alt="buildings banner" />
		</div>
		<div class="building-image text-center">
			<img
				class="fit"
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
					<div class="col-md-8">
						<div class="b-text mb-3">
							<div class="rig text-green-light">
								תיאור:
							</div>
							<div class="lef px-2">
								מרכז מסחרי הכולל מגוון שירותים לדיירי ואורחי הפארק. במרכז:
								מסעדות, בתי קפה, כספומט, דואר, פורום חדרי ישיבות והדרכה, מספרה,
								גן ילדים, מרפאת שיניים וחנות נוחות. היצע גדול לעובדים ואורחים
								בחניון המקורה.
							</div>
						</div>

						<div class="b-text mb-3">
							<div class="rig text-green-light">
								קומות:
							</div>
							<div class="lef px-2">
								קומת מסחר וחניון עילי ותחתון.
							</div>
						</div>

						<div class="b-text">
							<div class="rig text-green-light">
								שטח מ''ר:
							</div>
							<div class="lef px-2">
								שטח מסחרי של כ- 2,500 מ''ר,4 קומות חניון תחתון. 6 קומות חניון.
								עילי.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="building-image container text-center">
			<img
				class="fit"
				src="@/assets/b-test/top2.jpg"
				:alt="`Image for building ${buildingNumber}`"
			/>
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
