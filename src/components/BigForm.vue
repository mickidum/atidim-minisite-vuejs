<template>
	<div>
		<b-form @submit.prevent="formSubmit" id="big-form">
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
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-name">שם מלא</label>
					<b-input
						v-model="name"
						required
						placeholder="שם מלא:"
						id="big-form-name"
					/>
				</div>
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-mail">דואל</label>
					<b-input
						v-model="email"
						type="email"
						required
						class="ltr-rtl"
						id="big-form-mail"
						placeholder="דואל"
					/>
				</div>
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-phone">טלפון</label>
					<b-input
						v-model="phone"
						class="ltr-rtl"
						type="tel"
						required
						id="big-form-phone"
						placeholder="טלפון"
					/>
				</div>
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-message">הודעה</label>
					<b-textarea
						rows="5"
						id="big-form-message"
						placeholder="הודעה"
						v-model="message"
						required
					/>
				</div>
				<div class="col-12 mb-2">
					<b-button
						:disabled="loaded"
						type="submit"
						class="btn-block"
						variant="success"
					>
						<b-spinner v-show="loaded" class="sp" type="grow" />שליחה</b-button
					>
				</div>
				<div class="col-12">
					<div class="ch-b">
						<b-checkbox
							button-variant="secondary"
							:checked="allowSpam"
							class="ch-b-1"
						/>
						הרינו להודיעך כי צורפת לרשימת תפוצה של נמענים לעדכונים הכוללים, בין
						היתר, הצעות שיווקיות ודברי פרסומת ביחס לפארק עתידים. אם אינך מעוניין
						לקבל עדכונים אלה, באפשרותך להסיר עצמך מרשימת התפוצה, בכל עת, באמצעות
						לחיצה כאן.
					</div>
				</div>
			</div>
		</b-form>
		<!-- <Preloader v-if="loaded" /> -->
	</div>
</template>

<script>
// import axios from "axios";
// import Preloader from "@/components/Preloader";
import jsonToFormData from "json-form-data";
export default {
	name: "bigForm",
	components: {
		// Preloader
	},
	data() {
		return {
			loaded: false,
			phone: null,
			email: null,
			message: null,
			allowSpam: true,
			name: null,
			responseMessage: {
				error: false,
				message: null
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
				new_temp8: this.message,
				new_temp9: "טופס יצירת קשר נמצא בעמוד הבית",
				new_temp10: this.allowSpam
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
					this.message = null;
					this.allowSpam = true;
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
