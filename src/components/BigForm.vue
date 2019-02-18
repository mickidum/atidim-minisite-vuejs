<template>
	<div>
		<b-form @submit.prevent="formSubmit" id="big-form">
			<div class="form-row">
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-name">שם מלא</label>
					<b-input
						v-model="name"
						required
						placeholder="שם מלא:"
						required
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
					<b-button type="submit" class="btn-block" variant="success"
						>שליחה</b-button
					>
				</div>
				<div class="col-12">
					<div class="ch-b">
						<b-form-checkbox
							button-variant="dark"
							checked="allowSpam"
							class="ch-b-1"
							v-model="allowSpam"
						/>
						הרינו להודיעך כי צורפת לרשימת תפוצה של נמענים לעדכונים הכוללים, בין
						היתר, הצעות שיווקיות ודברי פרסומת ביחס לפארק עתידים. אם אינך מעוניין
						לקבל עדכונים אלה, באפשרותך להסיר עצמך מרשימת התפוצה, בכל עת, באמצעות
						לחיצה כאן.
					</div>
				</div>
			</div>
		</b-form>
		<Preloader v-if="loaded" />
	</div>
</template>

<script>
import axios from "axios";
import Preloader from "@/components/Preloader";
const crmUrl = "https://crmplugin.weboxcloud.com/atidim_Lead/leadapi.aspx";
const crmToken = "20180424";
export default {
	components: {
		Preloader
	},
	data() {
		return {
			loaded: false,
			phone: null,
			email: null,
			message: null,
			allowSpam: true,
			name: null
		};
	},
	methods: {
		formSubmit() {
			this.loaded = true;
			if (!this.name && !this.email && !this.phone) {
				return;
			}
			axios
				.post(crmUrl, {
					token: crmToken,
					new_temp4: "Minisite big form Contact Page",
					new_temp5: "משרדים, שטחים, חללי עבודה להשכרה קרית עתידים.",
					new_temp1: this.name,
					new_temp2: this.phone,
					new_temp3: this.email
				})
				.then(response => {
					console.log(response);
					this.loaded = false;
					this.phone = null;
					this.email = null;
					this.name = null;
					this.message = null;
					this.allowSpam = true;
				})
				.catch(error => {
					this.loaded = false;
					console.error(error.message);
				});
		}
	}
};
</script>
