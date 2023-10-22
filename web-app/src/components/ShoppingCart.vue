<template>
    <div>
      <h1>Shopping Cart</h1>
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="lesson in cart" :key="lesson.subject">
          <h2>{{ lesson.subject }}</h2>
          <!-- Add other details of the lesson -->
          <button @click="removeFromCart(lesson)">Remove</button>
        </div>
      </div>
      <button @click="toggleCart">Go Back to Lessons</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const cart = ref([]);
  
      const toggleCart = () => {
        // Toggle cart visibility or use router to navigate
      };
  
      const removeFromCart = (lesson) => {
        cart.value = cart.value.filter((item) => item !== lesson);
        // Add the removed lesson back to the lessons list if needed
      };
  
      return {
        cart,
        toggleCart,
        removeFromCart,
      };
    },
  };
  </script>
  