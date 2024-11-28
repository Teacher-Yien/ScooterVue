<template>
	<!-- accessories.vue -->
	<div class="container bg-light mt-5" style="min-height: 100vh;">
			<div class="row align-items-center">
					<!-- Breadcrumb -->
					<div class="col-lg-6 col-md-6 col-sm-12 mb-3">
							<div class="breadcrumb">
									<router-link class="text-decoration-none text-secondary" to="/home">Home</router-link>
									<span class="mx-1">/</span>
									<span class="text-muted">Shop-All</span>
							</div>
							<div class="d-flex align-items-center mt-2">
									<p class="mb-0">Showing {{ totalProducts }} results</p>
									<a
											class="d-flex align-items-center ms-3 text-decoration-none text-secondary"
											data-bs-toggle="offcanvas"
											data-bs-target="#filter_sidebar"
											style="cursor: pointer;"
									>
											<i class="bi bi-list-ul me-2 fs-4"></i>
											<p class="mb-0">Filters</p>
									</a>

							</div>
					</div>
					

					<!-- Sorting and View Options -->
					<div class="col-lg-6 col-md-6 col-sm-12 text-lg-end mb-3">
							<div class="d-flex justify-content-lg-end align-items-center">
									<select
											v-model="sortOption"
											@change="sortProducts"
											class="form-select me-3"
											style="width: auto;"
									>
											<option value="default">Default sorting</option>
											<option value="popularity">Sort by popularity</option>
											<option value="rating">Sort by average rating</option>
											<option value="date">Sort by latest</option>
											<option value="priceLowToHigh">Sort by price: low to high</option>
											<option value="priceHighToLow">Sort by price: high to low</option>
									</select>
									<div class="view-options">
											<i
													class="bi bi-grid-fill me-2"
													@click="viewMode = 'grid'"
													:class="{ active: viewMode === 'grid' }"
													style="font-size: 22px; cursor: pointer;"
											></i>
											<i
													class="bi bi-list-ul"
													@click="viewMode = 'list'"
													:class="{ active: viewMode === 'list' }"
													style="font-size: 24px; cursor: pointer;"
											></i>
									</div>
							</div>
					</div>
			</div>

			<!-- Loading State -->
			<div v-if="loading" class="spinner-container">
					<div class="spinner-border text-primary" role="status">
							<span class="visually-hidden">Loading...</span>
					</div>
			</div>

			<!-- Error Message -->
			<div v-if="error" class="alert alert-danger mt-4 text-center">
					<p>Failed to load products. Please try again later.</p>
					<button @click="fetchProducts" class="btn btn-primary">Retry</button>
			</div>
			<!-- Search Input -->
			<form class="search-form mb-3">
      <input
        class="form-control"
        type="search"
        v-model="searchQuery"
        placeholder="Search products..."
        aria-label="Search"
      />
    </form>
			<!-- Products Section -->
			<div v-if="!loading && !error">
					<!-- Grid View -->
					<div v-if="viewMode === 'grid'" class="row">
							<div
									v-for="product in filteredResults"
									:key="product.id"
									class="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4"
							>
									<ProductGridItem :product="product" />
							</div>
					</div>

					<!-- List View -->
					<div v-if="viewMode === 'list'" class=" row">
							<div
									v-for="product in filteredListResults"
									:key="product.id"
									class="col-xl-6 col-lg-12 col-md-12 col-sm-12  mb-4 p-2"
							>
									<product-list-item :product="product" />
							</div>
					</div>
			</div>
	</div>
	<!-- Filter Sidebar Component -->
	 <!-- Offcanvas Sidebar -->
		<filter-sidebar
      @apply-filters="handleFilters"
						:search-query="searchQuery"
    />


</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue";
import ProductGridItem from "../components/ProductGridItem.vue";
import ProductListItem from "../components/ProductListItem.vue";
import FilterSidebar from "../components/FilterSidebar.vue";
import debounce from "lodash/debounce"; // Add lodash for debounce functionality

// Data Variables
const accessories = ref([]);
const filteredAccessories = ref([]);
const searchQuery = ref("");
const debouncedSearchQuery = ref(""); // Debounced version of the search query
const filters = ref({}); // Hold applied filters
const loading = ref(true);
const error = ref(false);
const sortOption = ref("default");
const viewMode = ref("grid");

// Computed Property: Filter and Search Logic
const filteredResults = computed(() => {
  const search = debouncedSearchQuery.value.toLowerCase();
  const filterItems = (list) =>
    list.filter(
      (item) =>
        (!filters.value.categories ||
          filters.value.categories[item.category]) &&
        (!filters.value.priceRange ||
          (item.price >= filters.value.priceRange.min &&
            item.price <= filters.value.priceRange.max)) &&
        (item.name.toLowerCase().includes(search) ||
          item.description?.toLowerCase().includes(search))
    );

  return [...filterItems(accessories.value)];
});
// Computed Property: Filter and Search Logic
const filteredListResults = computed(() => {
  const search = debouncedSearchQuery.value.toLowerCase();
  const filterItems = (list) =>
    list.filter(
      (item) =>
        (!filters.value.categories ||
          filters.value.categories[item.category]) &&
        (!filters.value.priceRange ||
          (item.price >= filters.value.priceRange.min &&
            item.price <= filters.value.priceRange.max)) &&
        (item.name.toLowerCase().includes(search) ||
          item.description?.toLowerCase().includes(search))
    );

  return [ ...filterItems(filteredAccessories.value)];
});
// Computed property to get total products
const totalProducts = computed(() => filteredResults.value.length);
// Update Search Query with Debounce
watch(searchQuery, debounce((value) => (debouncedSearchQuery.value = value), 300));

// Sorting Logic
const sortProducts = () => {
  const sortFunction = {
    priceLowToHigh: (a, b) => a.price - b.price,
    priceHighToLow: (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    date: (a, b) => new Date(b.date) - new Date(a.date),
  }[sortOption.value];

  if (sortFunction) {
    accessories.value.sort(sortFunction);
				filteredAccessories.value.sort(sortFunction);

  }
};

// Fetch Products
const fetchProducts = async () => {
  loading.value = true;
  error.value = false;
  try {
    const [productsResponse, accessoriesResponse] = await Promise.all([
      fetch("https://scooterproducts.onrender.com/scooterProducts"),
      fetch("https://scooterproducts.onrender.com/Accessories"),
    ]);

    if (!productsResponse.ok || !accessoriesResponse.ok) {
      throw new Error("Failed to fetch");
    }

    const dataAccessories = await accessoriesResponse.json();

    accessories.value = dataAccessories;

    // Apply initial filtering
    filteredAccessories.value = dataAccessories.slice(0,6);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const handleFilters = (filterData) => {
  if (!filterData || typeof filterData !== "object") {
    console.error("Invalid filterData received:", filterData);
    return;
  }

  console.log("Applied Filters:", filterData);

  // Update filters object immutably
  filters.value = {
    categories: filterData.categories || {},
    priceRange: filterData.priceRange || null,
  };

  // Trim and update searchQuery
  searchQuery.value = (filterData.search || "").trim();
};


// Fetch on Mount
onMounted(fetchProducts);
</script>


<style  scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.view-options .active {
  color: #fd310d;
}

.view-options i:hover {
  color: #fd310d;
}

</style>