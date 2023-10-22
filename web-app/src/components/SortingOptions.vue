<template>
  <div>
    <label for="sort">Sort by:</label>
    <select v-model="sortAttribute" @change="sortLessons">
      <option value="subject">Subject</option>
      <option value="location">Location</option>
      <option value="price">Price</option>
      <option value="spaces">Spaces</option>
    </select>
    <label for="order">Order:</label>
    <select v-model="sortOrder" @change="sortLessons">
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
</template>

<script>

export default {  
  data() {
    return {
      sortAttribute: 'subject',
      sortOrder: 'asc',
    };
  },
  methods: {
    sortLessons() {
      const attribute = this.sortAttribute;
      const order = this.sortOrder === 'asc' ? 1 : -1;

      this.$parent.lessons.sort((a, b) => {
        if (a[attribute] < b[attribute]) return -1 * order;
        if (a[attribute] > b[attribute]) return 1 * order;
        return 0;
      });
    },
  },
};
</script>
