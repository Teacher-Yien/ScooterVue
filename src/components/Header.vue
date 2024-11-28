<template>
	<!-- Header.vue -->
	<header>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container d-flex justify-content-between">
							<!-- Hamburger Menu for Small Screens -->
							<button class="btn btn-danger d-lg-none" @click="toggleSidebar('menu')">
									<i class="bi bi-list"></i>
							</button>

							<!-- Left Navigation Links -->
							<ul class="d-none d-lg-flex navbar-nav me-auto">
									<li class="nav-item">
											<router-link class="nav-link" to="/shop-all">Shop All</router-link>
									</li>
									<li class="nav-item">
											<router-link class="nav-link" to="/electric-scooters">Electric Scooters</router-link>
									</li>
									<li class="nav-item">
											<router-link class="nav-link" to="/accessories">Accessories</router-link>
									</li>
									<li class="nav-item">
											<router-link class="nav-link" to="/about">About</router-link>
									</li>
									<li class="nav-item">
											<router-link class="nav-link" to="/contact">Contact</router-link>
									</li>
							</ul>

							<!-- Centered Logo -->
							<router-link to="/" class="navbar-brand text-center">
									<div style="line-height: 1; font-size: 0.8rem; color: gray;">ELECTRIC</div>
									<strong style="font-size: 1.5rem; font-weight: bold;">SCOOTERS</strong>
							</router-link>

							<!-- Cart Button for Small Screens -->
							<a class="btn btn-link position-relative d-lg-none" @click="toggleSidebar('cart')">
									<i class="bi bi-cart4 text-danger"></i>
									<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
											{{ cartStore.cartItems.length }}
									</span>
							</a>

							<!-- User Actions -->
							<ul class="navbar-nav ms-auto d-none d-lg-block">
									<li class="nav-item d-flex align-items-center">
											<form class="d-flex align-items-center me-2" @submit.prevent="emitSearch">
													<input
															class="form-control me-2"
															type="search"
															placeholder="Search products..."
															aria-label="Search"
															v-model="localSearchQuery"
													/>
													<button class="btn btn-danger" type="submit"><i class="bi bi-search"></i></button>
											</form>
											<a class="btn btn-link position-relative" @click="toggleSidebar('cart')">
													<i class="bi bi-cart4 text-danger"></i>
													<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
															{{ cartStore.cartItems.length }}
													</span>
											</a>
											<router-link to="/" class="btn btn-link"><i class="bi bi-person"></i></router-link>
									</li>
							</ul>
					</div>
			</nav>
	</header>

	<!-- Shopping Cart Offcanvas -->
	<div class="offcanvas offcanvas-end p-2" tabindex="-1" id="cartOffcanvas" :class="{ show: isCartVisible }">
			<div class="offcanvas-header">
					<h5 class="offcanvas-title">Shopping Cart</h5>
					<button type="button" class="btn-close" @click="toggleSidebar('cart')"></button>
			</div>
			<div class="offcanvas-body">
					<div v-if="cartStore.cartItems.length === 0" class="text-center">
							<h6 class="empty-message">No products in the cart.</h6>
							<p>Start adding items to your cart!</p>
					</div>
					<div v-else>
							<ul class="list-group">
									<li class="list-group-item d-flex justify-content-between align-items-center mt-2 border border-0 " v-for="item in cartStore.cartItems" :key="item.id">
											<div class=" d-flex">
													<img  width="60px" height="80px" :src="	item.image " alt="">
													<div class=" mx-2">
														<h6>{{ item.name }}</h6>
														<!-- Quantity Selector -->
													<div class="d-flex align-items-center gap-2 my-3 border border-1 ">
															<button class="btn border border-0" @click="updateQuantity(item, 'decrease')">-</button>
															<span class="fw-bold">{{ item.quantity }}</span>
															<button class="btn border border-0" @click="updateQuantity(item, 'increase')">+</button>
													</div>
													</div>
											</div>
											<div class=" d-flex flex-column ">
												<button class="btn btn-close mt-2 mx-3" @click="deleteItem(item)"></button>
													<span class="badge bg-primary rounded-pill mt-2">${{ (item.price * item.quantity).toFixed(2) }}</span>
											</div>
									</li>
							</ul>
					</div>
			</div>
			<div class=" subTotal">
				 <div>
						<hr>
							<div class=" d-flex justify-content-between p-2">
								<span class=" fw-bold text-start">Subtotal:</span>
								<span >${{	grandTotal }}</span>
							</div>
						<hr>
					</div>
			</div>
			<div class="">
				<router-link to="/viewCart">
							<button class="btn btn-danger form-control  text-uppercase mt-2" >VIEW Cart</button>
				</router-link>
				<router-link to="/checkout">
							<button class="btn btn-danger form-control  text-uppercase mt-2" >check out</button>
				</router-link>
			</div>
	</div>

	<!-- Menu Links Offcanvas -->
	<div class="offcanvas offcanvas-start" tabindex="-1" id="menuLinkOffcanvas" :class="{ show: isMenuVisible }">
			<div class="offcanvas-header">
					<h5 class="offcanvas-title"><i class="bi bi-person"></i></h5>
					<button type="button" class="btn-close" @click="toggleSidebar('menu')"></button>
			</div>
			<div class="offcanvas-body d-flex flex-column">
					<form class="search-form mb-3 d-flex " @submit.prevent="emitSearch">
							<input
									class="form-control w-75 me-2 search-input"
									type="search"
									v-model="localSearchQuery"
									placeholder="Search products..."
									aria-label="Search"
							/>
							<button class="btn btn-danger" type="submit"><i class="bi bi-search"></i></button>
					</form>
					<ul class="menu-list navbar-nav  text-center ">
							<li class=" nav-item p-2 bg-info-subtle mt-1"><router-link class=" text-dark text-decoration-none fw-bold" to="/shop-all">Shop All</router-link></li>
							<li class=" nav-item p-2 bg-info-subtle mt-1"><router-link class=" text-dark text-decoration-none fw-bold" to="/electric-scooters">Electric Scooters</router-link></li>
							<li class=" nav-item p-2 bg-info-subtle mt-1"><router-link class=" text-dark text-decoration-none fw-bold" to="/accessories">Accessories</router-link></li>
							<li class="text-danger p-2 bg-info-subtle mt-1"><router-link class=" text-dark text-decoration-none fw-bold" to="/about">About</router-link></li>
							<li class=" nav-item p-2 bg-info-subtle mt-1"><router-link class=" text-dark text-decoration-none fw-bold" to="/contact">Contact</router-link></li>
					</ul>
			</div>
	</div>
</template>
<script setup>
import Swal from "sweetalert2"
import { inject, ref, computed } from "vue";

const cartStore = inject("cartStore"); // Inject the cart store

// Local reactive variables
const isCartVisible = ref(false);
const isMenuVisible = ref(false);
const localSearchQuery = ref("");

// Toggle Sidebar visibility
const toggleSidebar = (sidebar) => {
  if (sidebar === "cart") {
    isCartVisible.value = !isCartVisible.value;
    isMenuVisible.value = false;
  } else if (sidebar === "menu") {
    isMenuVisible.value = !isMenuVisible.value;
    isCartVisible.value = false;
  }
};

// Grand total calculation
const grandTotal = computed(() => {
  return cartStore.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
});

// Update quantity
const updateQuantity = (item, action) => {
  if (action === "increase") {
    item.quantity++;
  } else if (action === "decrease" && item.quantity > 1) {
    item.quantity--;
  }
};



const deleteItem = (item) => {
  // Show a confirmation dialog using SweetAlert2
  Swal.fire({
    title: 'Are you sure?',
    text: `Do you really want to delete "${item.name}" from the cart?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    preConfirm: () => {
      return new Promise((resolve) => {
        // Optional: Add a loading indicator to the confirm button
        const confirmButton = Swal.getConfirmButton();
        if (confirmButton) {
          confirmButton.innerHTML = '<i class="spinner-border spinner-border-sm"></i> Deleting...';
          confirmButton.disabled = true; // Disable the button temporarily
        }
        setTimeout(resolve, 1000); // Simulate an API call or delay
      });
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // Proceed with deletion if confirmed
      const index = cartStore.cartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        cartStore.cartItems.splice(index, 1);
        Swal.fire('Deleted!', `"${item.name}" has been removed from the cart.`, 'success');
      }
    }
  });
};;

// Emit search query update to parent component
const emitSearch = () => {
  emit("update:searchQuery", localSearchQuery.value);
};
</script>
<style scoped>

</style>

