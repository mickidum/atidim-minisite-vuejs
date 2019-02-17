<template>
	<div>
		<b-form id="search-form">
			<div class="container">
				<div class="form-row">
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="search-form-type">סוג נכס</label>
						<b-form-select
							id="search-form-type"
							v-model="officeType"
							:options="officeTypeOptions"
							class="mb-3"
						>
						</b-form-select>
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="short-form-mail">דואל</label>
						<b-input class="" id="short-form-mail" placeholder="דואל:" />
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="short-form-phone">טלפון</label>
						<b-input class="" id="short-form-phone" placeholder="טלפון:" />
					</div>
					<div class="col-md-3 mb-2">
						<b-button class="btn-block" variant="success">שליחה</b-button>
					</div>
				</div>
			</div>
		</b-form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			officeType: null,
			officeTypeOptions: [
				{ value: null, text: "סוג נכס" },
				{ value: "משרד", text: "משרד" },
				{ value: "מסחר", text: "מסחר" },
				{ value: "מעטפת", text: "מעטפת" }
			]
		};
	},
	computed: {
		getOptions() {
			const flat = this.$store.getters.getAll.flat(office => {
				// const options = [
				// ]
				return office;
			});
			console.log(flat);
			return flat;
		}
	},
	mounted() {
		this.getOptions;
	}
};
</script>
