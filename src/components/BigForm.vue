<template>
	<div>
		<b-form id="big-form">
			<div class="form-row">
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-name">שם מלא</label>
					<b-input required class="" id="big-form-name" placeholder="שם מלא" />
				</div>
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-mail">דואל</label>
					<b-input
						required
						class="ltr-rtl"
						id="big-form-mail"
						placeholder="דואל"
					/>
				</div>
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-phone">טלפון</label>
					<b-input
						required
						class="ltr-rtl"
						id="big-form-phone"
						placeholder="טלפון"
					/>
				</div>
				<div class="col-12 mb-2">
					<label class="sr-only" for="big-form-message">הודעה</label>
					<b-textarea
						rows="5"
						class=""
						id="big-form-message"
						placeholder="הודעה"
					/>
				</div>
				<div class="col-12 mb-2">
					<b-button class="btn-block" variant="success">שליחה</b-button>
				</div>
				<div class="col-12">
					<div class="ch-b">
						<b-form-checkbox
							button-variant="dark"
							checked="true"
							class="ch-b-1"
						/>
						הרינו להודיעך כי צורפת לרשימת תפוצה של נמענים לעדכונים הכוללים, בין
						היתר, הצעות שיווקיות ודברי פרסומת ביחס לפארק עתידים. אם אינך מעוניי
						לקבל עדכונים אלה, באפשרותך להסיר עצמך מרשימת התפוצה, בכל עת, באמצעות
						לחיצה כא.
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
