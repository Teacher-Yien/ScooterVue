<template>
	<div class="container p-5" style="height: auto;">
			<div class="row">
					<!-- Product Table Section -->
					<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
							<table class="table text-center">
									<thead>
											<tr>
													<th>Product</th>
													<th>Price</th>
													<th>Quantity</th>
													<th>Subtotal</th>
													<th>Action</th>
											</tr>
									</thead>
									<tbody>
											<tr v-for="(item, index) in cart" :key="item.id">
													<td>
															<img
																	:src="item.image"
																	alt="Product"
																	style="width: 50px; height: auto; margin-right: 10px;"
															/>
															<span class="text-danger">{{ item.name }}</span>
													</td>
													<td>${{ item.price }}</td>
													<td>
															<div class="d-flex justify-content-center align-items-center">
																	<button
																			class="btn btn-outline-secondary btn-sm"
																			@click="updateQuantity(index, -1)"
																	>
																			-
																	</button>
																	<input
																			type="text"
																			:value="item.quantity"
																			readonly
																			class="form-control text-center mx-1"
																			style="width: 50px;"
																	/>
																	<button
																			class="btn btn-outline-secondary btn-sm"
																			@click="updateQuantity(index, 1)"
																	>
																			+
																	</button>
															</div>
													</td>
													<td>${{ (item.price * item.quantity).toFixed(2) }}</td>
													<td>
															<button
																	class="btn btn-outline-danger btn-sm"
																	@click="removeItem(index)"
															>
																	Remove
															</button>
													</td>
											</tr>
											<tr v-if="cart.length === 0">
													<td colspan="5" class="text-center">Your cart is empty</td>
											</tr>
									</tbody>
							</table>
					</div>

					<!-- Cart Summary Section -->
					<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
							<div class="border bg-light">
									<div class="bg-info-subtle p-3">
											<h5 class="fw-bold">Cart totals</h5>
									</div>
									<div class="p-4">
											<hr />
											<div class="d-flex justify-content-between mt-3">
													<span>Subtotal</span>
													<span>${{ subtotal }}</span>
											</div>
											<hr />
											<div class="d-flex justify-content-between mt-3">
													<span>Total</span>
													<span class="fw-bold">${{ grandTotal }}</span>
											</div>
											<hr />
											<router-link to="/checkout">
												<button class="btn btn-danger w-100">CHECKOUT</button>
											</router-link>
									</div>
							</div>
					</div>
			</div>
	</div>
</template>

<script setup>
import Swal from "sweetalert2";
import { inject, computed } from "vue";

// Inject the cart store
const cartStore = inject("cartStore");

// Reactive cart
const cart = computed(() => cartStore?.cartItems || []);

// Subtotal calculation (computed)
const subtotal = computed(() => cartStore.getSubtotal());

// Grand total calculation (computed)
const grandTotal = computed(() => cartStore.getGrandTotal());

// Update quantity
const updateQuantity = (index, delta) => {
  const item = cart.value[index];
  if (item) {
    item.quantity += delta;
    if (item.quantity < 1) item.quantity = 1; // Prevent quantity from going below 1
  }
};

// Remove item
const removeItem = (index) => {
  const item = cart.value[index];
  if (item) {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to remove "${item.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        cartStore.removeFromCart(item.id); // Remove item
        Swal.fire("Removed!", `"${item.name}" has been removed.`, "success");
      }
    });
  }
};
</script>


<style scoped>
/* Add your custom styles here */
</style>
