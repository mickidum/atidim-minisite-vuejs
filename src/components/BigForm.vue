<template>
	<div>
		<b-form>
			<div class="container">
				<div class="form-row">
					<div class="col-12 mb-2">
						<label class="sr-only" for="big-form-name">שם מלא</label>
						<b-input class="" id="big-form-name" placeholder="שם מלא" />
					</div>
					<div class="col-12 mb-2">
						<label class="sr-only" for="big-form-mail">דואל</label>
						<b-input class="" id="big-form-mail" placeholder="דואל" />
					</div>
					<div class="col-12 mb-2">
						<label class="sr-only" for="big-form-phone">טלפון</label>
						<b-input class="" id="big-form-phone" placeholder="טלפון" />
					</div>
					<div class="col-12 mb-2">
						<label class="sr-only" for="big-form-message">הודעה</label>
						<b-textarea class="" id="big-form-message" placeholder="הודעה" />
					</div>
					<div class="col-12 mb-2">
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
