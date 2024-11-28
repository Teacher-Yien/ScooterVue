<template>
	<div class="row">
			<!-- Product List -->
			<div
					v-for="product in relatedProducts"
					:key="product.id"
					class="col-lg-3 col-md-6 col-sm-12 mb-4"
			>
					<div class="card border border-0">
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
									<span class="position-absolute top-0 start-0 mx-5 mt-4 p-2 px-3  translate-middle badge rounded-pill sale-badge">Sale!</span>
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
	</div>
</template>


<script setup>
import { ref, onMounted ,inject} from 'vue';
import { useToast } from 'vue-toast-notification';
import ProductDetailModal from './ProductDetailModal.vue';
import "../style/GridProduct.css"

const relatedProducts = ref([]);
const isModalVisible = ref(false);
const selectedProduct = ref(null);
const isLoading = ref(false);
const loading = ref(false); // Add this to fix the error
const error = ref(false); // Add this for error handling

// Fetch products
async function fetchProducts() {
  loading.value = true;
  error.value = false;
  try {
    const response = await fetch("https://scooterproducts.onrender.com/scooterProducts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Limit to 4 products
    relatedProducts.value =  data.slice(0, 4);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
}

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

const handleImageError = (product) => {
  product.image = defaultImage;
};


// Quantity state for product
const quantity = ref(1);
const toast = useToast();
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

// Fetch products on mount
onMounted(() => {
  fetchProducts();
});
</script>



<!-- <style scoped>  
.card {  
  border: none;  
  border-radius: 10px;  
  position: relative; /* Ensure overlay is positioned correctly */  
}  

.image-container {  
  position: relative;  
}  

.card-img-top {  
  object-fit: cover;  
}  

.overlay {  
  position: absolute;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  /* background-color: rgba(0, 0, 0, 0.6);   */
  display: flex;  
  justify-content: end;  
  padding: 10px;  
  opacity: 0;  
  transition: opacity 0.3s ease;  
}  

.card:hover .overlay {  
  opacity: 1;  
}  

.sale-badge {  
  background-color: #ff0000;  
		/* background-color: #888; */
  color: #fff;  
  padding: 5px 10px;  
  border-radius: 20px;  
  font-weight: bold;  
  font-size: 14px;  
}  

.icon-buttons {  
  display: flex;
		flex-direction: column;
  gap: 10px;  
}  

.icon-button {  
  background: none;  
  border: none;  
  color: #545353;  
  font-size: 20px;  
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 1px 1px 1px #000;
  cursor: pointer;  
  transition: transform 0.2s;  
}  

.icon-button:hover {  
  transform: scale(1.1);  
}  

.card-body {  
  padding: 15px; /* Add some padding to the card body */  
}  

.card-title {  
  font-size: 16px;  
}  

.star-group {  
  font-size: 20px; /* Adjust star size */  
  color: #f39c12; /* Star color */  
}  

.price {  
  margin-top: 10px;  
  font-size: 18px; /* Font size for prices */  
}  

.price del {  
  color: #999; /* Color for original price */  
}  

.price ins {  
  color: #e44d26; /* Color for current price */  
  font-weight: bold; /* Bold the current price */  
}  
.spinner-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
		width: 100%;
		height: 100%;
		background-color: #0000002c;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style> -->