import { reactive, computed, watchEffect, onMounted } from 'vue';

export const cartStore = reactive({
  cartItems: [],

  // Add or update an item in the cart
  addItem(product) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity; // Add the selected quantity
    } else {
      this.cartItems.push({ ...product, quantity: product.quantity });
    }
  },

  // Remove an item from the cart by ID
  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  },

  // Clear all items from the cart
  clearCart() {
    this.cartItems = [];
  },

  // Load cart items from localStorage
  loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        this.cartItems = JSON.parse(savedCart);
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
      }
    }
  },

  // Calculate the subtotal
  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  },

  // Calculate the grand total
  getGrandTotal() {
    return this.getSubtotal(); // You can add taxes, discounts, etc., here if needed
  }
});

// Use `onMounted` to load the cart items when the component is mounted
onMounted(() => {
  cartStore.loadCart(); // Ensure data is loaded after store is initialized
});

// Save cart items to localStorage whenever they change
watchEffect(() => {
  if (cartStore.cartItems.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cartStore.cartItems));
  }
});
