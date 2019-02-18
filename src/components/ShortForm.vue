<template>
	<div>
		<b-form @submit.prevent="formSubmit">
			<div class="container">
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
					new_temp4: "Minisite short form 1",
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
