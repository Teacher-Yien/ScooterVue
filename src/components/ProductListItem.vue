<template>
	<div class="product-list-item card ">
		 <div class="row">
			<div class="image-container col-lg-5 col-md-4">
					<a :href="product.image" data-lightbox="product-gallery" :data-title="product.name">
							<img
									:src="product.image"
									alt="Product image"
									@error="handleImageError"
									width="100%"
									height="100%"
							/>
					</a>
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
			<div class="card-body  p-3  col-lg-7 col-md-8">
				<div class="star-group">
						<i
								v-for="star in 5"
								:key="star"
								:class="star <= product.rating ? 'bi bi-star-fill' : 'bi bi-star'"
						></i>
					</div>
					<h6 class="card-title">{{ product.name }}</h6>
					<div class="price">
							<del v-if="product.originalPrice">${{ product.originalPrice }}</del>
							<ins>${{ product.price }}</ins>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
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
import { ref,defineProps,inject} from "vue"
import { useToast} from "vue-toast-notification"
import ProductDetailModal from './ProductDetailModal.vue';
import "../style/ListProduct.css"
defineProps({
	product: {
			type: Object,
			required: true,
	},
});
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



function handleImageError(event) {
	event.target.src = "/path/to/default-image.jpg"; // Replace with your default image path
}

// Quantity state for product
const quantity = ref(1);
// Inject global cart store
const cartStore = inject('cartStore');
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


<!-- <style scoped>
.product-list-item {
	border: none;
	border-radius: 10px;
	overflow: hidden;
	/* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); */
}

.image-container {
	position: relative;
}

.image-container img {
	object-fit: cover;
	height: 100%;
}
.card-title{
	font-size: medium;
}

.sale-badge {
	position: absolute;
	top: 10px;
	left: 10px;
	background-color: #ff0000;
	color: #fff;
	padding: 5px 10px;
	font-size: 12px;
	border-radius: 5px;
}

.rating i {
	color: #f39c12;
	margin-right: 3px;
}

.price del {
	color: #999;
	margin-right: 5px;
	font-size:small ;
}

.price ins {
	color: #e44d26;
	font-weight: bold;
	font-size:small ;
}
</style> -->
