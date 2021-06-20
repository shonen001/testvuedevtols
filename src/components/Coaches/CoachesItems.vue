<template>

  <li class="">
    <h3>{{ FullName }}</h3>
    <h4>$ {{ hourlyRate }}/hour</h4>
    <div>
      <BaseBadge
        v-for="area in areas"
        :key="area"
        :class="area"
        :title="area"
      />
    </div>
    <div class="actions">
      <BaseButton link mod="outline" :to="contactMelike">Contact</BaseButton>
      <BaseButton link mod="" :to="ViewDetailslike">View Details</BaseButton>
    </div>
  </li>

</template>
<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'hourlyRate'],
  computed: {
    FullName() {
      return this.firstName + '-' + this.lastName;
    },
    contactMelike() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    ViewDetailslike() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>
<style scoped>
h4 {
  margin: 6px 0;
}
h3 {
  text-transform: uppercase;
  margin: 8px 0;
  color: #343232;
}
li {
  display: flex;
  list-style: none;
  flex-direction: column;

  border: 1px solid blueviolet;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;

  transform: all 0.3s ease;
}

.actions {
  border-top: 1px dashed;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
