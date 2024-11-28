<template>
	<div
			class="modal fade"
			tabindex="-1"
			:id="`productModal-${product.id}`"
			aria-hidden="true"
	>
			<div class="modal-dialog modal-lg">
					<div class="modal-content">
							<div class="modal-header">
									<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
									></button>
							</div>
							<div class="modal-body">
									<div class="row">
											<!-- Product Image Slider -->
											<div class="col-md-6 col-sm-12">
													<swiper
															:spaceBetween="10"
															:centeredSlides="true"
															:autoplay="{ delay: 2500, disableOnInteraction: false }"
															:pagination="{ clickable: true }"
															:navigation="true"
															:modules="[Autoplay, Pagination, Navigation]"
															class="swiper"
													>
															<!-- Loop over the product images to create slides -->
															<swiper-slide
																	v-for="(image, index) in product.images"
																	:key="index"
															>
																	<img
																			width="100%"
																			height="100%"
																			:src="image"
																			class="img-fluid rounded object-fit-contain"
																			alt="Product Image"
																	/>
															</swiper-slide>
													</swiper>
											</div>

											<!-- Product Details -->
											<div class="col-md-6 col-sm-12 overflow-y-scroll">
													<p class="text-danger">Electric Scooters</p>
													<h2 style="font-weight: 900;">{{ product.name }}</h2>
													<div class="d-flex align-items-center gap-2">
															<del class="text-muted">${{ product.originalPrice }}</del>
															<ins class="fw-bold text-danger">${{ product.price }}</ins>
															<span>& Free Shipping</span>
													</div>
													<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
															eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
															ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
															accumsan lacus vel facilisis.
													</p>

													<!-- Quantity Selector -->
													<div class="d-flex align-items-center gap-2 my-3">
															<button class="btn btn-outline-secondary" @click="decreaseQuantity">
																	-
															</button>
															<span class="fw-bold">{{ quantity }}</span>
															<button class="btn btn-outline-secondary" @click="increaseQuantity">
																	+
															</button>
															<!-- Add to Cart Button -->
															<button class="btn btn-danger w-50 mx-2" @click="addToCart(product)">
																	Add to Cart
															</button>
													</div>
													<!-- Payment Options -->
													<div class="payment">
															<fieldset class="border border-danger p-2 rounded">
																	<legend class="w-auto">Guaranteed Safe Checkout</legend>
																	<ul class="d-flex list-unstyled m-auto">
																			<li class="nav-item">
																					<img
																							width="100%"
																							height="50px"
																							class="rounded mx-2"
																							src="../assets/visa-svgrepo-com.svg"
																							alt=""
																					/>
																			</li>
																			<li class="nav-item">
																					<img
																							width="100%"
																							height="50px"
																							class="rounded mx-2"
																							src="../assets/mastercard-2-logo-svgrepo-com.svg"
																							alt=""
																					/>
																			</li>
																			<li class="nav-item">
																					<img
																							width="100%"
																							height="50px"
																							class="rounded mx-2"
																							src="../assets/aba.png"
																							alt=""
																					/>
																			</li>
																			<li class="nav-item">
																					<img
																							width="100%"
																							height="50px"
																							class="rounded mx-2"
																							src="../assets/ac-Mastercard.png"
																							alt=""
																					/>
																			</li>
																	</ul>
															</fieldset>
													</div>
													<div class="description-check-it mt-2">
															<p><i class="bi bi-check-circle-fill mx-2"></i>No-Risk Money Back Guarantee!</p>
															<p><i class="bi bi-check-circle-fill mx-2"></i>No Hassle Refunds</p>
															<p><i class="bi bi-check-circle-fill mx-2"></i>Secure Payments</p>
													</div>
											</div>
									</div>
							</div>
					</div>
			</div>
	</div>
</template>

<script setup>
// Import necessary functions from Vue
import { ref,inject, defineProps, defineEmits, onMounted } from 'vue';
import { useToast} from "vue-toast-notification"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Define props and emits
const props = defineProps(['product', 'isVisible']);
const emit = defineEmits(['close']);
const toast = useToast();

// Quantity state for product
const quantity = ref(1);

// Inject global cart store
const cartStore = inject('cartStore');
// Methods to modify the quantity
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Function to add product to cart and show success/error toast
const addToCart = (product) => {
  if (cartStore) {
			cartStore.addItem({ ...product, quantity: quantity.value });
    toast.success("Added to cart successfully!🥰", {
					timeout: 5000,           // Time in milliseconds before the toast disappears
					position: 'top-right',   // Position of the toast ('top-left', 'bottom-right', etc.)
					closeOnClick: true,      // Close the toast when clicked
					pauseOnHover: true,      // Pause the toast when hovered
			});

  } else {
    console.error("cartStore is not available.");
    toast.error("An error occurred! 🤕", {
				timeout: 5000,
				position: 'bottom-left',
				closeOnClick: true,
				pauseOnHover: true,
		});

  }
};
</script>


<style scoped>
.swiper {
	width: 100%;
	height: 500px; /* Adjust the height if needed */
}
.swiper img{
	object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
	color: #000; /* Customize the navigation buttons */
}

.swiper-pagination {
	bottom: 10px;
}

.sale-badge {
	background-color: #ff0000;
	color: #fff;
	padding: 5px 10px;
	border-radius: 20px;
	font-weight: bold;
	font-size: 14px;
}
</style>
