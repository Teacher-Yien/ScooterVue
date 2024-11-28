
import Home from '../views/Home.vue';
import ShopAll from '../views/ShopAll.vue'
import ElectricScooters from '../views/ElectricScooters.vue'

import { createRouter, createWebHistory } from 'vue-router';  

const routes = [  
    { path: '/', name: 'Home', component: Home },  
    { path: '/shop-all', name: 'ShopAll', component: ShopAll },  
    { path: '/electric-scooters', name: 'ElectricScooters', component: ElectricScooters },  
    { path: '/accessories', name: 'Accessories', component: () => import('../views/Accessories.vue') },  
    { path: '/about', name: 'About', component: () => import('../views/About.vue') },  
    { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },  
    { path: '/viewCart', name: 'Cart', component: () => import('../views/ViewCart.vue') },  
    { path: '/checkout', name: 'checkout', component: () => import('../views/Checkout.vue') },
    { path: '/product', name: 'product', component: () => import('../views/Product.vue') },
];  

const router = createRouter({  
    history: createWebHistory(),  
    routes,  
});  

export default router;