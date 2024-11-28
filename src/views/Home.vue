<template>
  <div class="home">
  <div class=" container-fluid m-0 p-0 bg-light">
	<div class="product-page container mt-5 ">
		<div class="row info-section ">
				<div 
        v-for="product in filteredListResults"
				:key="product.id"
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5">
					<h1 class="head">Libero X250</h1>  
					<h2 class="mt-2">250 Watt Electric Scooter</h2>  
					<h4>Informations:</h4>
					<div class="specs">
							<div class="spec-item"> <h1> 30 <br> km</h1> <span>BATTERY</span></div>  
							<div class="spec-item"> <h1>13.5 <br/>  kg</h1>  <span>WEIGHT</span></div>  
							<div class="spec-item"> <h1> 25 <br> km/h</h1> <span>SPEED</span></div>  
					</div>
					<div class=" d-flex mt-5 ">
						<p class="price mx-3 mt-4">$750.00</p>  
						<button class="add-to-cart  px-5"  @click="addToCart(product)" >ADD TO CART</button> 
					</div>
				</div>
				<div class="col-xl-6 col-lg-4 col-md-6 col-sm-12 mt-5 ">
					<div class="image-section">  
							<img width="100%" height="100%" src="../assets/scooter-01.png" alt="Libero X250 Electric Scooter" />  
					</div> 
				</div>
				<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 mt-5 text-lg-start text-sm-center">
					<div class="description  p-sm-3">
							<h3>Description</h3>  
							<p>The Fully Loaded Libero X250 is a high-performance, extremely durable, high-speed, lightweight electric scooter with a huge battery.</p>  
					</div>  
					 
					<div class="share p-3 ">  
							<h4>Share:</h4> <br>
							<a href="#"><i class=" bi bi-facebook mt-3"></i></a>  
							<a href="#"><i class=" bi bi-twitter mt-3"></i></a>  
							<a href="#"><i class=" bi bi-youtube mt-3"></i></a>  
					</div>  
				</div>
		</div>
	</div>
  <div class=" container card-products  mt-5">
    <RelatedProducts />
  </div>
  <div class=" about mt-5 p-3">
    <div class="demo">
      <div class=" m-auto" style="height: 60px; width: 1px; background-color: red;"></div>
      <p class=" text-center">about us</p>
    </div>
    <div class=" text-center w-50 m-auto">
      <h1 style="font-weight: 900;">If you’re looking for a brand new electric scooter, you’re in the right place</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    </div>
  </div>
</div>
<div class=" no-bg position-relative" style=" height: 110vh;">
  <div class="row  position-absolute w-100 p-5" style="  bottom: -150px; ">
    <div class="col-md-6 col-sm-12 bg-light p-5  shadow">
       <div class="w-100  p-5 text-center">
         <img class=" img-fluid" src="../assets/scooter-02.png" alt="">
         <p>CITY</p>
         <h3>Electric Scooter Z400</h3>
         <h6 class=" text-danger" style=" font-weight: 900;">$650</h6>
       </div>
    </div>
  </div>
</div>
<div class=" lorem bg-light" style=" height: 100vh;">
<div class=" mt-xl-5 d-flex align-items-center justify-content-center w-100 h-100">
  <div class=" w-50  text-center ">
    <i class=" bi bi-quote text-danger " style=" font-size: 4rem;"></i>
    <h3 style=" font-weight: 900;"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.”</h3>
    <img class=" mt-3" src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/signature-01.png" alt="">
    <p>MARIA OLIVER</p>
  </div>
</div>
</div>
<div class=" shop-Accessories  bg-light " style=" height: 100vh;">
<div class="  p-5 bg-light-subtle">
<div class="row  m-auto" style="width: 90%;">
  <div class="col-md-6 col-sm-12 d-flex  align-items-center">
    <div class=" bg-light">
    <h1 style="font-weight: 900; font-size: 2.5rem;">Shop Electric Scooter Accessories</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    <button class=" btn btn-danger px-5  text-uppercase" style=" font-size: medium;">Shop Accessories</button>
    </div>
  </div>
  <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
    <img width="100%" height="100%" src="../assets/accessories-01.png" alt="">
  </div>
</div>
</div>
</div>
</div>
<!-- choose -->
<div class="choose bg-light">
    <div class="descriptions text-center w-25 m-auto">
      <h1 style=" font-weight: 900;">Why choose us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
    <div class="Fast-Delivery container">
       <div class="row">
          <div class="col-xl-4 col-md-6 col-sm-12 p-5 text-center">
              <div class="box-icon m-auto"><i class=" bi bi-truck" ></i></div> 
              <h3 class=" mt-3" style=" font-weight: 900;"> Fast Delivery</h3>
              <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore</p>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-12 p-5 text-center">
              <div class="box-icon m-auto"><i class=" bi bi-arrow-90deg-up" ></i></div> 
              <h3 class=" mt-3" style=" font-weight: 900;"> Fast Delivery</h3>
              <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore</p>
          </div>
          <div class="col-xl-4 col-md-12 col-sm-12 p-5 text-center">
              <div class="box-icon m-auto"><i class=" bi bi-lock" ></i></div> 
              <h3 class=" mt-3" style=" font-weight: 900;"> Fast Delivery</h3>
              <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore</p>
          </div>
       </div>
    </div>
    <div class="SilverPath p-xl-5 p-sm-4" style=" height: 100vh; width: 100%;">
        <div class="row">
           <div class="col-xl-6 col-md-6"></div>
           <div class="col-xl-6 col-md-6 " >
              <div class="SilverPathBox bg-light " style=" padding: 20%;" >
                  <p>$650</p>
                  <h1 style=" font-weight: 900;">SilverPath Y100</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                  <button class=" btn btn-danger p-3 px-5 text-uppercase" style=" font-size: 1rem;">Shop Now</button>
              </div>
           </div>
        </div>
    </div>
</div>
</template>
<script setup>
import RelatedProducts from '../components/RelatedProducts.vue';
import { useToast } from 'vue-toast-notification';
import { inject, ref, defineProps, onMounted, computed } from 'vue';
import debounce from "lodash/debounce";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const error = ref(false);
const products = ref([]);
const filters = ref({}); // Hold applied filters
const debouncedSearchQuery = ref("");

// Computed Property: Filter and Search Logic
const filteredListResults = computed(() => {
  const search = debouncedSearchQuery.value.toLowerCase();
  const filterItems = (list) =>
    list.filter(
      (item) =>
        (!filters.value?.categories ||
          filters.value.categories[item.category]) &&
        (!filters.value?.priceRange ||
          (item.price >= filters.value.priceRange.min &&
            item.price <= filters.value.priceRange.max)) &&
        (item.name.toLowerCase().includes(search) ||
          item.description?.toLowerCase().includes(search))
    );

  return [...filterItems(products.value)];
});

// Fetch Products
const fetchProducts = async () => {
  error.value = false;
  try {
    const [productsResponse, accessoriesResponse] = await Promise.all([
      fetch("https://scooterproducts.onrender.com/scooterProducts"),
      fetch("https://scooterproducts.onrender.com/Accessories"),
    ]);

    if (!productsResponse.ok || !accessoriesResponse.ok) {
      throw new Error("Failed to fetch");
    }

    const dataProducts = await productsResponse.json();
    products.value = dataProducts.slice(0,1);

    // Apply initial filtering
    
  } catch (err) {
    console.error("Failed to fetch products:", err);
    error.value = true;
  }
};

// Quantity state for product
const quantity = ref(1);
const toast = useToast();
const cartStore = inject('cartStore');

// Function to add product to cart and show success/error toast
const addToCart = (product) => {
  if (cartStore) {
    cartStore.addItem({ ...product, quantity: quantity.value });
    toast.success("Added to cart successfully! 🥰", {
      timeout: 5000,
      position: 'top-right',
      closeOnClick: true,
      pauseOnHover: true,
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

// Properly pass the function reference
onMounted(fetchProducts);
</script>


<style scoped>
.home {  
  background-image: url(../assets/bg-03.jpg);  
  background-size: cover; /* Changed to cover to fill the area */  
  background-repeat: no-repeat;  
  background-attachment: fixed; /* This makes the background fixed */  
  background-position: center; /* Optional: centers the background image */  
}
.SilverPath{
  background-image: url(../assets/bg-02.jpg);  
  background-size: cover; /* Changed to cover to fill the area */  
  background-repeat: no-repeat;  
  background-attachment: fixed; /* This makes the background fixed */  
  background-position: center; /* Optional: centers the background image */  
}
.Fast-Delivery .box-icon{
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: crimson;
}
.Fast-Delivery i{
    color: #fff;
    font-size: 20px;
}
.product-page {
  background-image: url(../assets/bg-01.png);
  background-size: cover;
  display: flex;  
  justify-content: space-between;  
  padding: 20px;
  background-color: aliceblue;
}  

.image-section {  
  flex: 1;  
  margin-right: 20px;  
}  

.image-section img {  
  width: 100%; /* Responsive image */  
  border-radius: 8px;  
}  

.info-section .head {  
  font-size: 3.1em;  
  margin: 0;  
		font-weight:bold ;
}  



.info-section h2 {  
  font-size: 1.5em;  
  color: #888;  
}  

.info-section .specs {  
  display: flex;  
  gap: 20px;  
  margin: 20px 0;  
}  

.info-section .specs .spec-item {  
  
  padding: 10px 20px;  
		border: 1px solid #000;
  border-radius: 5px;  
  text-align: center;  
}  
.info-section .specs .spec-item h1 {  
  font-size: 1.5em;  
  color: #000;  
}  
.info-section .specs .spec-item span {  
  display: block;  
  font-size: .8em;  
  color: #888;  
}  

.info-section .price {  
  font-size: 0.9em;  
  color: #333;  
}  

.info-section .add-to-cart {  
  background :rgb(207, 48, 48);  
  color: white;  
  padding: 10px 20px;  
  border: none;  
  border-radius: 5px;  
  cursor: pointer;  
  margin-top: 10px;  
}  
.info-section .add-to-cart:hover{
  background-color: #000;
}

.info-section .description {  
  margin: 20px 0;  
}  

.info-section .description h3 {  
  margin-bottom: 10px;  
}  

.info-section .description p {  
  line-height: 1.5;  
}  

.info-section .customize button {  
  background: #007bff;  
  color: white;  
  padding: 10px;  
  border: none;  
  border-radius: 5px;  
  margin-top: 10px;  
  cursor: pointer;  
}  


.info-section .share a {  
  margin-right: 10px;  
  text-decoration: none;  
  color: #fff; 
	 padding: 12px;
		border-radius: 50%;
		background-color: #000; 
}  
.info-section .share a i{
	font-size: 1.2rem;
}
</style>