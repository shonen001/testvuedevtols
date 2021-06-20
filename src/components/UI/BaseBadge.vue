<template>
  <span class="badge" :class="type">
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.vue::before{
content:'Vuejs';
}
.HTML5::before{
content:'HTML5';
}
.CSS3::before{
content:'CSS3';
}
.JavaScript::before{
content:'JavaScript';
}
.Reactjs::before{
content:'Reactjs';
}
.BootStrap::before{
content:'BootStrap';
}
.SASS::before{
content:'SASS';
}




.frontend::before {
  content:'FRONTEND</>';
  width: 1.25em;
  line-height: 0;
}
.backend::before {
  content:'BACKEND</>';
  width: 1.25em;
  line-height: 0;
}
.career::before {
  content:'CAREER';
  width: 1.25em;
  line-height: 0;
}

.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 3px;
}
.frontend {
  background-color: #3d008d;
  color: white;
}
.backend {
  background-color: #71008d;
  color: white;
}
.career {
  background-color: #8d006e;
  color: white;
}
</style>
