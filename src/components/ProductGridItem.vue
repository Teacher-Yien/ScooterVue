<template>
	<div class=" ProductGridItem">
			<!-- ProductGridItem  -->
					<div class="card">
							<div class="image-container">
									<a :href="product.image" data-lightbox="product-gallery" :data-title="product.name">
											<img
													width="100%"
													height="100%"
													:src="product.image"
													@error="handleImageError(product)"
													class="card-img-top"
													:alt="product.name"
											/>
									</a>
									<span class="position-absolute top-0 start-0 mx-5 mt-4 p-2 px-3 translate-middle badge rounded-pill sale-badge">Sale!</span>
									<div class="overlay">
											<div class="icon-buttons">
													<button class="icon-button" @click="addToCart(product)">
															<i class="bi bi-cart-check-fill"></i>
													</button>
													<button class="icon-button" data-bs-toggle="modal" :data-bs-target="`#productModal-${product.id}`"  @click="openModal(product)">
															<i class="bi bi-eye-fill"></i>
													</button>
											</div>
									</div>
							</div>
							<div class="card-body">
									<div class="star-group">
											<i
													v-for="star in 5"
													:key="star"
													:class="star <= product.rating ? 'bi bi-star-fill' : 'bi bi-star'"
											></i>
									</div>
									<h5 class="card-title">{{ product.name }}</h5>
									<div class="price">
											<del>${{ product.originalPrice }}</del>
											<ins>${{ product.price }}</ins>
									</div>
							</div>
					
					</div>
	</div>
	<!-- Spinner -->
	<div v-if="isLoading" class="spinner-container">
					<div class="spinner-border text-dark" role="status">
							<span class="visually-hidden">Loading...</span>
					</div>
			</div>
			<!-- Product Detail Modal -->
			<ProductDetailModal
					v-if="selectedProduct && isModalVisible"
					:product="selectedProduct"
					:isVisible="isModalVisible"
					@close="closeModal"
			/>
</template>

<script setup>
import { inject, ref, defineProps } from 'vue';
import ProductDetailModal from './ProductDetailModal.vue';
import "../style/GridProduct.css";
import { useToast } from 'vue-toast-notification';

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Inject global cart store
const cartStore = inject('cartStore');

// Modal and loading states
const isModalVisible = ref(false);
const selectedProduct = ref(null);
const isLoading = ref(false);
const toast = useToast();

// Modal handling
const openModal = (product) => {
  isLoading.value = true; // Show spinner
  setTimeout(() => {
    // Simulate loading or perform async actions here
    selectedProduct.value = product;
    isLoading.value = false; // Hide spinner after loading
    isModalVisible.value = true; // Show modal
  }, 1500); // Simulated delay
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedProduct.value = null;
};

// Handle broken images
const defaultImage = "path/to/default/image.jpg"; // Define a fallback image path
const handleImageError = (product) => {
  product.image = defaultImage;
};

// Quantity state for product
const quantity = ref(1);
// Function to add product to cart and show success/error toast
const addToCart = (product) => {
  if (cartStore) {
    cartStore.addItem({...product,quantity:quantity.value}); // Call addItem method from cart store
    toast.success("Added to cart successfully!🥰", {
					timeout: 5000,           // Time in milliseconds before the toast disappears
					position: 'top-right',   // Position of the toast ('top-left', 'bottom-right', etc.)
					closeOnClick: true,      // Close the toast when clicked
					pauseOnHover: true,      // Pause the toast when hovered
			});

  } else {
    console.error("cartStore is not available.");
    toast.error("An error occurred! 😩", {
				timeout: 5000,
				position: 'bottom-left',
				closeOnClick: true,
				pauseOnHover: true,
		});

  }
};
</script>
