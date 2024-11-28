<template>
	<div class=" row bg-light p-5 w-100 m-0 " >
			<div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-5">
					<img src="../assets/logo-footer.png" alt="">
					<p>Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<div class="box-icon mt-2">
							<i class=" bi bi-facebook text-light p-2 bg-dark mx-2" ></i>
							<i class=" bi bi-twitter text-light p-2 bg-dark mx-2" ></i>
							<i class=" bi bi-youtube text-light p-2 bg-dark mx-2" ></i>
					</div>
			</div>
			<div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-5">
				  <h3 style=" font-weight: 900;">Contact us</h3>
						<h6>E: info@example.com</h6>
						<h6>P: +1 234 567 890</h6>
						<h6>A: 123 Fifth Avenue, New York,NY 10160</h6>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-5">
				<h3 style=" font-weight: 900;">Useful links</h3>
				<router-link class=" text-decoration-none  text-danger" to="/shop-all">Shop All</router-link> <br>
				<router-link class=" text-decoration-none  text-danger" to="/electric-scooters">Electric-scooters</router-link> <br>
				<router-link class=" text-decoration-none  text-danger" to="/accessories">Accessories</router-link> <br>
				<router-link class=" text-decoration-none  text-danger" to="/about">About</router-link> <br>
				<router-link class=" text-decoration-none  text-danger" to="/contact">Contact</router-link>
			</div>
			<div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-5">
					<h4 style=" font-weight: 900;">Sign up for special offers</h4>
					<input class=" p-2" type="email" style=" width: 100%; " placeholder=" Enter Email">
					<button class=" btn btn-danger mt-2 px-5 rounded-pill">SUBSCRIPT</button>
			</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style  scoped>

</style>