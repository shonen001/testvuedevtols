<template>
  <button :class="mod" v-if="!link"><slot></slot></button>

  <router-link :class="mod" :to="to" v-else><slot></slot></router-link>
</template>
<script>
export default {
  props: {
    mod: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>
<style scoped>
.fsef{
    background-color: #361999;
    color: #78fff1;   
}
button,
a {
  text-decoration: none;
  padding: 0.50rem 1rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: #78fff1;
  cursor: pointer;
  border-radius: 15px;
  margin-right: 0.5rem;
  display: inline-block;

  margin-top: 10px;
}
a:hover,
a:active,
button:hover,
button:active {
 background-color: #60059cc9;
  border-color: #270041;
}
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #60059cc9;
  color: #0dffe7;
  transition: all 0.3s;
}
</style>
