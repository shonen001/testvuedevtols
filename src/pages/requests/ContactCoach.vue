<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="">Your Email</label>
        <input v-model.trim="email" type="email" id="email" />
        <p class="errors" v-if="!frmValid">Enter a valid email</p>
      </div>
      <div class="form-control">
        <label for="">Message</label>
        <textarea
          v-model.trim="message"
          id="message"
          cols="30"
          rows="5"
        ></textarea>
        <p class="errors" v-if="!frmValid">Enter a valid message</p>
      </div>
      <div class="actions">
        <base-button @click="testvalid">Send Message</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      frmValid: true,
      email: '',
      message: '',
    };
  },
  methods: {
    testvalid() {
      this.frmValid = true;

      if (this.email == '' && this.message == '') {
        this.frmValid = false;
        return;
      }
      let newOne = {
        idCoache: 'this.$router.params.id',
        email: this.email,
        text: this.message,
      };
      // this.$store.dispatch('requests/NewAddrequest', newOne);
      // this.$router.replace('/coaches');

      console.log(newOne);
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>