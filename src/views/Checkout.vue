<template>
	<div>
		<div class="container mt-5">
			<h1 class="text-center mb-4">Checkout</h1>
			<div class="row">
				<!-- Customer and Billing Details -->
				<div class=" col-xl-7 col-lg-7 col-md-12 col-sm-12 ">
					<form @submit.prevent="onSubmit" class="needs-validation" novalidate>
						<!-- Customer Information -->
						<div class="mb-4">
							<h4>Customer Information</h4>
							<div class="mb-3">
								<label for="email" class="form-label">Username or Email Address *</label>
								<input
									type="email"
									class="form-control"
									id="email"
									placeholder="Enter your email"
									required
									v-model="email"
								/>
								<div class="invalid-feedback">Please provide a valid email.</div>
							</div>
						</div>

						<!-- Billing Details -->
						<div>
							<h4>Billing Details</h4>
							<div class="row g-3">
								<div class="col-md-6">
									<label for="first-name" class="form-label">First Name *</label>
									<input
										type="text"
										class="form-control"
										id="first-name"
										placeholder="John"
										required
										v-model="firstName"
									/>
									<div class="invalid-feedback">First name is required.</div>
								</div>
								<div class="col-md-6">
									<label for="last-name" class="form-label">Last Name *</label>
									<input
										type="text"
										class="form-control"
										id="last-name"
										placeholder="Doe"
										required
										v-model="lastName"
									/>
									<div class="invalid-feedback">Last name is required.</div>
								</div>
							</div>

							<div class="my-3">
								<label for="company-name" class="form-label">Company Name (optional)</label>
								<input
									type="text"
									class="form-control"
									id="company-name"
									placeholder="Your Company"
									v-model="companyName"
								/>
							</div>

							<div class="my-3">
								<label for="country" class="form-label">Country/Region *</label>
								<select class="form-select" id="country" required v-model="country">
									<option selected disabled value="">Select...</option>
									<option>India</option>
									<option>United States</option>
									<option>United Kingdom</option>
									<!-- Add more countries as needed -->
								</select>
								<div class="invalid-feedback">Please select a country.</div>
							</div>

							<div class="row g-3">
								<div class="col-md-8">
									<label for="address" class="form-label">House Number and Street Name *</label>
									<input
										type="text"
										class="form-control"
										id="address"
										placeholder="123 Street Name"
										required
										v-model="address"
									/>
									<div class="invalid-feedback">Address is required.</div>
								</div>
								<div class="col-md-4">
									<label for="apartment" class="form-label">Apartment, Suite, etc. (optional)</label>
									<input
										type="text"
										class="form-control"
										id="apartment"
										placeholder="Suite 100"
										v-model="apartment"
									/>
								</div>
							</div>

							<div class="row g-3 my-3">
								<div class="col-md-6">
									<label for="city" class="form-label">Town/City *</label>
									<input
										type="text"
										class="form-control"
										id="city"
										placeholder="Mumbai"
										required
										v-model="city"
									/>
									<div class="invalid-feedback">City is required.</div>
								</div>
								<div class="col-md-3">
									<label for="state" class="form-label">State *</label>
									<select class="form-select" id="state" required v-model="state">
										<option selected disabled value="">Select...</option>
										<option>Maharashtra</option>
										<option>Delhi</option>
										<option>Karnataka</option>
										<!-- Add more states -->
									</select>
									<div class="invalid-feedback">Please select a state.</div>
								</div>
								<div class="col-md-3">
									<label for="zip" class="form-label">PIN Code *</label>
									<input
										type="text"
										class="form-control"
										id="zip"
										placeholder="400001"
										required
										v-model="zip"
									/>
									<div class="invalid-feedback">Please provide a valid PIN code.</div>
								</div>
							</div>

							<!-- Payment Information -->
							<div class="my-4">
								<h4>Payment Information</h4>
								<div class="mb-3">
									<label for="card-number" class="form-label">Card Number *</label>
									<input
										type="text"
										class="form-control"
										id="card-number"
										placeholder="1234 5678 9012 3456"
										required
										v-model="cardNumber"
									/>
									<div class="invalid-feedback">Card number is required.</div>
								</div>
								<div class="row g-3">
									<div class="col-md-6">
										<label for="expiry-date" class="form-label">Expiry Date *</label>
										<input
											type="text"
											class="form-control"
											id="expiry-date"
											placeholder="MM/YY"
											required
											v-model="expiryDate"
										/>
										<div class="invalid-feedback">Expiry date is required.</div>
									</div>
									<div class="col-md-6">
										<label for="cvv" class="form-label">CVV *</label>
										<input
											type="text"
											class="form-control"
											id="cvv"
											placeholder="123"
											required
											v-model="cvv"
										/>
										<div class="invalid-feedback">CVV is required.</div>
									</div>
								</div>
							</div>
						</div>

						<div class="d-flex justify-content-between my-4">
							<button
								type="button"
								class="btn btn-outline-success px-5 rounded-pill"
								@click="cancelOrder"
							>
								Cancel
							</button>
							<button type="submit" class="btn btn-danger px-5 rounded-pill">
								Confirm Order
							</button>
						</div>
					</form>
				</div>

				<!-- Order Summary -->
				<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
					<div class="card">
						<div class="card-header bg-info-subtle">
							<h4>Your Order</h4>
						</div>
						<ul class="list-group list-group-flush p-2">
							<li v-if="cart.length === 0" class="list-group-item text-center p-3">Your cart is empty</li>
							<li v-for="item in cart" :key="item.id" class="list-group-item p-3">
								<div class="d-flex justify-content-between w-100">
									<div>
										<img :src="item.image" alt="product image" style="width: 60px; height: 60px; object-fit: cover;">
										<span class="text-info mx-3">{{ item.name }} x {{	item.quantity }}</span>
									</div>
									<div class="">
										<span>${{ item.price }}</span>
									</div>
								</div>
							</li>
							<li class="list-group-item p-3">
									<div class=" d-flex justify-content-between w-100">
											<h5 class=" text-secondary fw-normal">SubTotal</h5>
											<h5 class=" text-secondary fw-normal">$ {{	subtotal }}</h5>
									</div>
							</li>
							<li class="list-group-item p-3">
									<div class=" d-flex justify-content-between w-100">
											<h5 class=" text-secondary fw-bold">Total</h5>
											<h5 class=" text-secondary fw-bold">$ {{	grandTotal }}</h5>
									</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2"; // Optional for alerts  
import { inject, computed } from "vue";  

// Inject the cart store  
const cartStore = inject("cartStore");  

// Reactive cart  
const cart = computed(() => cartStore?.cartItems || []);  

// Subtotal calculation (computed)  
const subtotal = computed(() => cartStore.getSubtotal());  

// Grand total calculation (computed)  
const grandTotal = computed(() => cartStore.getGrandTotal());

// Form data
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const companyName = ref('');
const country = ref('');
const address = ref('');
const apartment = ref('');
const city = ref('');
const state = ref('');
const zip = ref('');
const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');

// Form submit logic
const onSubmit = () => {
	const form = document.querySelector('form');
	if (form.checkValidity()) {
		Swal.fire({
			icon: 'success',
			title: 'Order Placed',
			text: 'Your order has been placed successfully!',
		});
	} else {
		form.classList.add('was-validated');
	}
};

// Cancel order
const cancelOrder = () => {
	Swal.fire({
		icon: 'warning',
		title: 'Order Canceled',
		text: 'The order process has been canceled.',
	});
};
</script>

<style scoped>
.container {
	background-color: #f8f9fa; /* Light background */
	border-radius: 8px;
	padding: 20px;
}

.container h1,
.container h4 {
	color: #010d1a; /* Primary color */
}

.btn-outline-secondary {
	color: #6c757d; /* Secondary color */
	border-color: #6c757d; /* Secondary color for border */
}

.list-group-item {
	display: flex;
	justify-content: space-between;
}
</style>
