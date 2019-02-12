<template>
	<div class="home">
		<div class="home-banner">
			<img src="../assets/home-banner.jpg" alt="home" />
		</div>
		<div class="filter">
			<div class="container">
				<h1 class="text-green pt-3 pb-2">משרדים להשכרה</h1>
			</div>
			<img src="../assets/home2.jpg" alt="home2" />
		</div>
		<div class="short-form">
			<div class="container">
				<h2>צור קשר</h2>
				<ShortForm />
			</div>
		</div>
	</div>
</template>

<script>
import ShortForm from "@/components/ShortForm";

export default {
	name: "home",
	components: {
		ShortForm
	}
};
</script>

<style lang="scss">
.short-form {
	position: relative;
	padding: 40px 0;
	background-color: #006634;
	h2 {
		text-align: center;
		color: #fff;
		margin-bottom: 20px;
		font-size: 2.8rem;
	}
	input,
	button {
		height: 60px;
		border-radius: 0;
		border: solid 4px white !important;
		color: white;
		font-weight: bold;
		font-size: 24px;
		line-height: 1;
	}
	input {
		background-color: #000;
	}
	button {
	}
	::placeholder {
		color: #fff;
		font-weight: bold;
		font-size: 24px;
	}
}
.filter {
	img {
		opacity: 0.8;
	}
}
</style>
