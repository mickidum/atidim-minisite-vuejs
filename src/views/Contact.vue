<template>
	<div class="contact">
		<div class="service-banner">
			<img src="@/assets/banner1.jpg" alt="service" />
		</div>
		<div class="header-container container">
			<h1 class="text-green my-3 header-border">צרו קשר</h1>
		</div>
		<div class="contacts-block short-form">
			<BigForm />
		</div>
	</div>
</template>

<script>
import BigForm from "@/components/BigForm";
export default {
	components: {
		BigForm
	}
};
</script>
