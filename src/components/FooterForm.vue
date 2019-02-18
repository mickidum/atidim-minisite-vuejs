<template>
	<div>
		<b-form @submit.prevent="formSubmit" id="footer-form">
			<div class="container">
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
						<b-button type="submit" class="btn-block" variant="success"
							>שליחה</b-button
						>
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
					new_temp4: "Minisite short form Footer",
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
				})
				.catch(error => {
					this.loaded = false;
					console.error(error.message);
				});
		}
	}
};
</script>
