<template>
	<div v-if="page" class="contact">
		<div class="service-banner text-center">
			<img :src="page.main_image.path" :alt="page.title" />
		</div>
		<div class="container">
			<h1 class="text-green my-4 header-border">{{ page.title }}</h1>
		</div>
		<div class="contacts-block short-form big-form">
			<div class="container">
				<div class="row">
					<div v-html="page.content" class="col-md-6">
						<!-- <div class="contact-text">
							<div class="b-1">
								<h3>אורטל גולדברגר, <br />מנהלת מכירות</h3>
								<a href="tel:03-7690849">טל': 03-7690849</a><br />
								<a href="tel:050-4455074">נייד: 050-4455074</a><br />
								<a href="mailto:ortalg@atidim.co.il">ortalg@atidim.co.il</a>
							</div>
							<div class="b-1">
								<h3>משרדי הנהלת עתידים</h3>
								<span class="s-t">בכל שעות היממה 8485*</span><br />
								<a href="tel:03-7690800">טל': 03-7690800</a><br />
								<a href="tel:03-6481253">פקס: 03-6481253</a>
							</div>
						</div> -->
					</div>
					<div class="col-md-6">
						<BigForm />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BigForm from "@/components/BigForm";
export default {
	name: "contact",
	components: {
		BigForm
	},
	computed: {
		page() {
			return this.$store.getters.getPage(this.$route.name);
		}
	}
};
</script>
