<template>
	<div>
		<b-form @submit.prevent="formSubmit" id="footer-form">
			<div class="container">
				<div
					v-if="responseMessage.message"
					:class="[
						'text-center py-1 text-white',
						responseMessage.error ? 'error bg-danger' : 'success bg-success'
					]"
				>
					{{ responseMessage.message }}
				</div>

				<div class="form-row">
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="footer-form-name">שם מלא</label>
						<b-input
							v-model="name"
							required
							class=""
							id="footer-form-name"
							placeholder="שם מלא:"
						/>
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="footer-form-mail">דואל</label>
						<b-input
							v-model="email"
							class="ltr-rtl"
							placeholder="דואל:"
							required
							type="email"
							id="footer-form-mail"
						/>
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="footer-form-phone">טלפון</label>
						<b-input
							v-model="phone"
							class="ltr-rtl"
							placeholder="טלפון:"
							required
							type="tel"
							id="footer-form-phone"
						/>
					</div>
					<div class="col-md-3 mb-2">
						<b-button
							:disabled="loaded"
							type="submit"
							class="btn-block"
							variant="success"
						>
							<b-spinner
								v-show="loaded"
								class="sp"
								small
								type="grow"
							/>שליחה</b-button
						>
					</div>
				</div>
			</div>
		</b-form>
	</div>
</template>

<script>
import jsonToFormData from "json-form-data";
export default {
	name: "FooterForm",
	data() {
		return {
			loaded: false,
			phone: null,
			email: null,
			name: null,
			responseMessage: {
				error: false,
				message: ""
			}
		};
	},
	methods: {
		formSubmit() {
			this.loaded = true;
			if (!this.name && !this.email && !this.phone) {
				return;
			}
			const obj = {
				token: this.$store.state.crmToken,
				new_temp1: this.name,
				new_temp2: this.phone,
				new_temp3: this.email,
				new_temp4: "minisite",
				new_temp5: "משרדים, שטחים, חללי עבודה להשכרה קרית עתידים - מיניסייט",
				new_temp7: "https://atidim.co.il/atidim-newsletters/office-for-rent",
				new_temp9: "טופס יצירת קשר נמצא בכל עמוד"
			};
			this.$http
				.post(this.$store.state.crmUrl, jsonToFormData(obj))
				.then(response => {
					this.loaded = false;
					if (response.data === "Error!!!") {
						this.responseMessage = {
							error: true,
							message: "יש טעויות בטופס!"
						};
						return;
					}

					this.phone = null;
					this.email = null;
					this.name = null;
					this.responseMessage = {
						error: false,
						message: "נשלח בהצלחה, תודה!"
					};
					setTimeout(() => {
						this.responseMessage.message = null;
					}, 5000);
				})
				.catch(error => {
					this.loaded = false;
					console.error(error.message);
					this.responseMessage = {
						error: true,
						message: error.message
					};
				});
		}
	}
};
</script>

<style scoped>
.sp {
	top: 12px !important;
}
</style>
