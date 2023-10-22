<template>
  <div>
    <SortingOptions/>
    <h1>Lesson List</h1>
    <div class="lessons-grid">
      <div class="lessons-card" v-for="lesson in lessons" :key="lesson.subject">
        <div class="lesson-content">
          <div class="text">
            <h2>{{ lesson.subject }}</h2>
            <p>Location: {{ lesson.location }}</p>
            <p>Price: ${{ lesson.price }}</p>
            <p>Spaces: {{ lesson.spaces }}</p>
            <button v-on:click="addToCart(lesson)" :disabled="lesson.spaces <= 0">Add to Cart</button>
          </div>
          <div class="image">
            <font-awesome-icon :icon="lesson.icon" class="image_size" />
          </div>
        </div>
      </div>
    </div>   
  </div>
  <div>
    <h2>ShoppingCart</h2>
    <p>Total Space in the Cart: {{ spacesInCart }}</p>
  </div>
</template>
  
<script>
import { lessons } from '@/data/Lessons.js';
import SortingOptions from './SortingOptions.vue';

export default {
    data() {
        return {
            lessons: [],
            spacesInCart: 0,
        };
    },
    mounted() {
        this.lessons = lessons;
    },
    methods: {
        addToCart(lesson) {
            if (lesson.spaces > 0) {
                this.spacesInCart++;
                lesson.spaces--;
            }
        },
    },
    components: { SortingOptions }
};
</script>




<style scoped>
.lessons-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 1fr));
  grid-gap: 20px;
}

.lessons-card {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.lesson-content {
  display: flex; /* Use flexbox to arrange text and image side by side */
  align-items: center; /* Vertically center content */
  justify-content: space-between; /* Create space between text and image */
}

.text {
  flex: 1; /* Allow text to take available space */
  padding: 0 10px; /* Add padding to text for spacing */
}

.image {
  width: 30%; /* Set a fixed width for the image (adjust as needed) */
  margin-right: 10px; /* Add margin between text and image */
  object-fit: cover;
}

.image_size{
  width: 100px;
  height: 100px;

}
</style>

 