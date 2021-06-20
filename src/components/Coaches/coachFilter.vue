<template>
 
  <span class="filter-option">
    <h2>Find your Coach</h2>
    <input
        checked
      @change="setFilter"
      class="Frontend"
      type="checkbox"
      name="frontend"
      id="frontend"
    />
    <label for="">Frontend</label>
  </span>

  <span class="filter-option">
    <input
        checked
      @change="setFilter"
      class="Backend"
      type="checkbox"
      name="backend"
      id="backend"
    />
    <label for="Backend">Backend</label>
  </span>

  <span class="filter-option">
    <input
    checked
      @change="setFilter"
      class="career"
      type="checkbox"
      name="career"
      id="career"
    />
    <label for="">career</label>
  </span>
</template>

<script>
export default {
    emits:['chang-filter'],
  data() {
    return {
      Filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {

      const inputId = event.target.id;

      let isActive = event.target.checked;

      let updareFilters = {...this.Filters,[inputId]:isActive};
      this.Filters = updareFilters;
      this.$emit('chang-filter',updareFilters);
    },
  },
};
</script>

<style scoped>


h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>