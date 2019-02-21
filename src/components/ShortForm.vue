<template>
	<div>
		<b-form @submit.prevent="formSubmit">
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
						<label class="sr-only" for="short-form-name">שם מלא</label>
						<b-input
							v-model="name"
							class=""
							id="short-form-name"
							placeholder="שם מלא:"
							required
						/>
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="short-form-mail">דואל</label>
						<b-input
							v-model="email"
							class="ltr-rtl"
							id="short-form-mail"
							placeholder="דואל:"
							required
							type="email"
						/>
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="short-form-phone">טלפון</label>
						<b-input
							v-model="phone"
							class="ltr-rtl"
							id="short-form-phone"
							placeholder="טלפון:"
							required
							type="tel"
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
				new_temp9: "טופס יצירת קשר נמצא בעמוד הבית"
			};
			this.$http
				.post(this.$store.state.crmUrl, jsonToFormData(obj))
				.then(response => {
					this.loaded = false;
					console.log(response);
					if (response.data === "Error!!!") {
						this.responseMessage = {
							error: true,
							message: "יש טעויות בטופס!"
						};
						return;
					}
					this.loaded = false;
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
