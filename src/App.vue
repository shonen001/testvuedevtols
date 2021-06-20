<template>
  <The-Header />

  

  <router-view />
</template>
<script>
import TheHeader from './components/layout/TheHeder.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;1,300&display=swap');
* {
  font-family: 'Fira Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>