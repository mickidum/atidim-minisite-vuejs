<template>
	<div>
		<b-form>
			<div class="container">
				<div class="form-row">
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="inlineFormInputName2">שם מלא</label>
						<b-input class="" id="inlineFormInputName2" placeholder="שם מלא:" />
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="inlineFormInputName2">דואל</label>
						<b-input class="" id="inlineFormInputName2" placeholder="דואל:" />
					</div>
					<div class="col-md-3 mb-2">
						<label class="sr-only" for="inlineFormInputName2">טלפון</label>
						<b-input class="" id="inlineFormInputName2" placeholder="טלפון:" />
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
