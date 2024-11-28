<template>
  <!-- Offcanvas Sidebar (Bootstrap) -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="filter_sidebar"
    aria-labelledby="offcanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">Filter by Price</h5>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        data-bs-dismiss="offcanvas"
        @click="closeSidebar"
      ></button>
    </div>

    <div class="offcanvas-body">
      <!-- Price Filter -->
      <div class="mb-3">
        <label for="minPrice" class="form-label">Select Minimum Price</label>
        <input
          type="range"
          id="minPrice"
          v-model="minPrice"
          :max="maxPrice"
          class="form-range"
        />
        <label for="maxPrice" class="form-label mt-2">Select Maximum Price</label>
        <input
          type="range"
          id="maxPrice"
          v-model="maxPrice"
          :min="minPrice"
          max="1000"
          class="form-range"
        />
        <div class="d-flex justify-content-between mt-2">
          <span>Min: {{ minPrice }}</span>
          <span>Max: {{ maxPrice }}</span>
        </div>
      </div>

      <!-- Categories Filter -->
      <div class="mb-3">
        <h5>Categories</h5>
        <ul class="list-unstyled">
          <li class="form-check" v-for="(label, key) in categoryLabels" :key="key">
            <input
              type="checkbox"
              :id="key"
              v-model="filters[key]"
              class="form-check-input"
            />
            <label class="form-check-label" :for="key">
              {{ label }} ({{ categoryCounts[key] || 0 }})
            </label>
          </li>
        </ul>
      </div>

      <!-- Search Bar -->
      <div class="mb-3">
        <label for="searchQuery" class="form-label">Search Products</label>
        <input
          type="text"
          id="searchQuery"
          v-model="searchQuery"
          placeholder="Search products..."
          class="form-control"
        />
      </div>
      
      <!-- Apply Filters Button -->
      <button class="btn btn-danger w-100" @click="applyFilters">Search</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineEmits, defineProps } from "vue";

// Define props
const props = defineProps({
  initialSearchQuery: String, // Allow parent to pass initial query
});

// Emit events to parent
const emit = defineEmits(["close", "apply-filters"]);

// State for offcanvas visibility
const isVisible = ref(false);

// Price range state
const minPrice = ref(60);
const maxPrice = ref(870);

// Filters state
const filters = ref({
  accessories: false,
  scooters: false,
});

// Categories and counts
const categoryLabels = {
  accessories: "Accessories",
  scooters: "Electric Scooters",
};
const categoryCounts = {
  accessories: 6,
  scooters: 12,
};

// Search state
const searchQuery = ref(props.initialSearchQuery || "");

// Emit applied filters and close sidebar
const applyFilters = () => {
  // Ensure all filters are valid before emitting
  emit("apply-filters", {
    priceRange: {
      min: Math.min(minPrice.value, maxPrice.value),
      max: Math.max(minPrice.value, maxPrice.value),
    },
    categories: { ...filters.value },
    search: searchQuery.value.trim(), // Remove leading/trailing spaces
  });
  closeSidebar(); // Optionally close after applying filters
};

// Close sidebar and emit close event
const closeSidebar = () => {
  const offcanvasElement = document.getElementById("filter_sidebar");
  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
  if (bsOffcanvas) {
    bsOffcanvas.hide(); // Explicitly close the Bootstrap offcanvas
  }
  emit("close");
};

// Watch to ensure price constraints
watch([minPrice, maxPrice], ([newMin, newMax]) => {
  if (newMin > newMax) {
    maxPrice.value = newMin;
  }
});

// Sync visibility with Bootstrap events
onMounted(() => {
  const offcanvas = document.getElementById("filter_sidebar");
  offcanvas.addEventListener("shown.bs.offcanvas", () => (isVisible.value = true));
  offcanvas.addEventListener("hidden.bs.offcanvas", () => (isVisible.value = false));
});
</script>


<style scoped>
.offcanvas-body {
  font-family: Arial, sans-serif;
}
.form-check {
  margin-bottom: 10px;
}
</style>
