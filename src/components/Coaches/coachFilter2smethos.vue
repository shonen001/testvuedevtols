<template>
  <base-card>
    <h2>Find your Coach</h2>
  </base-card>

  <span class="filter-option">
    <input
    @change="setFilter"
    v-model="checkedNames"
      class="Frontend"
      type="checkbox"
     
      value="frontend"
      id="frontend"
    />
    <label for="">Frontend</label>
  </span>

  <span class="filter-option">
    <input
    @change="setFilter"
    v-model="checkedNames"
      class="Backend"
      type="checkbox"
     
      value="backend"
      id="backend"
    />
    <label for="Backend">Backend</label>
  </span>

  <span class="filter-option">
    <input
    @change="setFilter"
    v-model="checkedNames"
      class="career"
      type="checkbox"

      id="career"
      value="career"
    />
    <label for="">career</label>
  </span>
</template>

<script>
export default {
    emits:['chang-boxes'],
  data() {
    return {
         checkedNames: [],
    };
  },
  methods: {
      setFilter()
      { 
          let data = this.checkedNames;
          console.log(data);
          this.$emit('chang-boxes',data);
      }

    // setFilter(event) {

    //   const inputId = event.target.id;
    //   let isActive = event.target.checked;
    //   let updareFilters = {
    //     ...this.Filters,[inputId]:isActive,
    //   };
    //   this.Filters = updareFilters;
    //   this.$emit('chang-filter',updareFilters);
    // },
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