<template>
	<div>
		<b-form>
			<div class="container">
				<div class="form-row">
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="footer-form-name">שם מלא</label>
						<b-input class="" id="footer-form-name" placeholder="שם מלא:" />
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="footer-form-mail">דואל</label>
						<b-input class="" id="footer-form-mail" placeholder="דואל:" />
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="footer-form-phone">טלפון</label>
						<b-input class="" id="footer-form-phone" placeholder="טלפון:" />
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
export default {
	data() {
		return {};
	}
};
</script>
