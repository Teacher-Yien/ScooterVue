<template>
	<div class=" Contact container">
		<div class="row p-5">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
							<h1 class=" text-center fs-1 fw-bold">Contact us</h1>
							<div class="Description  text-center " >
									<h4 class="fw-bold" >If you have any questions, please feel free to get in touch with us, we’ll get back to you shortly.</h4>
							</div>
				</div>
		</div>
		<div class="row">
			 <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<p>Contact Details</p>
						<h5  class=" fw-bold text-danger">E: contact@info.com</h5>
						<h5 class=" fw-bold">P: +1 234 567 890</h5>
						<h5 class=" fw-bold">A: 123 Fifth Avenue, New York, NY 10160</h5>
						<h5 class=" fw-bold">Follow Us</h5>
						<div class=" box-icon  mt-3 d-flex">
								<div class=" icon "><i class=" bi bi-facebook   text-light"></i></div>
							 <div class=" icon"><i class=" bi bi-twitter   text-light"></i></div>
								<div class=" icon"><i class=" bi bi-youtube   text-light  "></i></div>
						</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
					 <form action="" class=" form-contact">
							 <div class=" group-full-name d-flex justify-content-between">
							 <div class="First " style=" width: 49%;">
										<label for="name">Name <span class=" text-danger">*</span></label> <br>
										<input type="text" style=" width: 100%;"> <br>
										<span>First</span>
								</div>
								<div class="last" style=" width: 49%;">
									 <br>
										<input type="text" style=" width: 100%;"> <br>
										<span>Last</span>
								</div>
							</div>
							<br>
							<label for="Email">Email <span class=" text-danger">*</span></label>
							<input type="email" style=" width: 100%;">
						
							<label for="message" class=" mt-3">Message <span class=" text-danger">*</span></label> <br>
							<textarea name="" id="" cols="30" rows="5" style=" width: 100%;"></textarea>
							<button type="submit" class=" btn btn-danger p-3 px-4  mt-3 text-uppercase">Send</button>
						</form>
				</div>
		</div>
		<div class=" row p-5 Useful-Links">
			  <h2  class=" text-center fs-1 fw-bold">Useful Links</h2>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
						 <div class=" text-center ">
										<div class="icon m-auto"><i class=" bi bi-hand-thumbs-up f-3 text-light"></i></div>
										<h3 class=" fw-bold mt-2">Partnerships</h3>
										<p>Interested in a partnership with us?</p>
										<button class=" text-uppercase btn btn-danger px-5 py-3">Apply here</button>
							</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
						 <div class=" text-center ">
										<div class="icon m-auto"><i class=" bi bi-question fs-3 text-light"></i></div>
										<h3 class=" fw-bold mt-2">FAQ</h3>
										<p>Most questions can be answered here.</p>
										<button class=" text-uppercase btn btn-danger px-5 py-3">go to FAQ</button>
							</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
						 <div class=" text-center ">
										<div class="icon m-auto"><i class=" bi bi-envelope-exclamation fs-3 text-light"></i></div>
										<h3 class=" fw-bold mt-2">Store Locations</h3>
										<p>Find your nearest Electric Scooter store.</p>
										<button class=" text-uppercase btn btn-danger px-5 py-3">FIND FAQ</button>
							</div>
					</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.Description{
				width: 40%;
				height: 200px;
				margin: auto;
			}
	.box-icon .icon{
		width: 42px;
		height: 42px;
		background-color: #000;
		margin-left: 4px;
		display: grid;
		place-items: center;
		border-radius: 50%;
	}
	.Useful-Links .icon{
		width: 42px;
		height: 42px;
		background-color: #000;
		margin-left: 4px;
		display: grid;
		place-items: center;
		border-radius: 50%;
	}

	.form-contact input{
		height: 40px;
	}
@media(max-width: 600px) {
	.Description{
				width: 80%;
				height: 200px;
				margin: auto;
			}
}

</style>