<template>
  <base-card>
    <h3>Rrgister as a coach now</h3>
    <form @submit.prevent="">
      <label for="Firstname">Firstname</label>
      <input
        v-model.trim="firstName.val"
        type="text"
        id="Firstname"
        :class="{ red: !firstName.valid }"
        @blur="removInvalid('firstName')"
      />
      <p v-if="!firstName.valid">this name is not invalid</p>

      <label for="lastname">lastname</label>
      <input
        v-model="lastName.val"
        type="text"
        id="lastname"
        :class="{ red: !lastName.valid }"
        @blur="removInvalid('lastName')"
      />

      <label for="Discription">Discription</label>
      <textarea
        v-model="description.val"
        name="Discription"
        id="Discription"
        cols="5"
        rows="5"
        :class="{ red: !description.valid }"
        @blur="removInvalid('description')"
      >
Discription</textarea
      >

      <label for="hourlyRate">hourlyRate</label>
      <input
        v-model="hourlyRate.val"
        type="number"
        id="hourlyRate"
        :class="{ red: !hourlyRate.valid }"
        @blur="removInvalid('hourlyRate')"
      />

      <div class="">
        <div class="">
          <label :class="{ red: !areas.valid }" for="forntend">frontend</label>
          <input
            v-model="areas.val"
            type="checkbox"
            id="frontend"
            value="frontend"
            @blur="removInvalid('areas')"
          />
        </div>

        <div class="">
          <label :class="{ red: !areas.valid }" for="forbacendntend"
            >backend
          </label>
          <input
            v-model="areas.val"
            type="checkbox"
            id="backend"
            value="backend"
             @blur="removInvalid('areas')"
          />
        </div>

        <div class="">
          <label :class="{ red: !areas.valid }" for="career">career</label>
          <input
            v-model="areas.val"
            type="checkbox"
            value="career"
            id="career"
             @blur="removInvalid('areas')"
          />
        </div>
      </div>
      <base-button @click="submitform">Rrgister</base-button>

      <p v-if="!validForm">this form is not invalid</p>
    </form>
  </base-card>
</template>
<script>
//import { mapActions } from 'vuex';

export default {
  data() {
    return {
      validForm: true,

      firstName: {
        val: '',
        valid: true
      },
      lastName: {
        val: '',
        valid: true
      },
      areas: {
        val: [],
        valid: true
      },
      description: {
        val: '',
        valid: true
      },
      hourlyRate: {
        val: '',
        valid: true
      }
    };
  },
  methods: {
    // ...mapActions('coaches', ['addNewCoacdhe']),

    removInvalid(ipur) {
      this[ipur].valid = true;
    },
    valiDation() {
      if (this.firstName.val === '') {
        this.firstName.valid = false;
        this.validForm = false;
      }
      if (this.lastName.val === '') {
        this.lastName.valid = false;
        this.validForm = false;
      }
      if (this.areas.val.length == 0) {
        this.areas.valid = false;
        this.validForm = false;
      }
      if (this.description.val === '') {
        this.description.valid = false;
        this.validForm = false;
      }
      if (this.hourlyRate.val === '' || this.hourlyRate.val < 0) {
        this.hourlyRate.valid = false;
        this.validForm = false;
      }
    },
    submitform() {
      this.validForm = true;

      this.valiDation();

      if (!this.validForm) {
        return;
      }

      let newCoshe = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        areas: this.areas.val,
        description: this.description.val,
        hourlyRate: this.hourlyRate.val
      };
      console.log(newCoshe);

      this.$store.dispatch('coaches/addNewCoacdhe', newCoshe);
      this.$router.replace('/coaches');
      //this.addNewCoacdhe(newCoshe);
    }
  }
};
</script>

<style scoped>
/* .red label {
  color: red;
}

.red input[type='text'] {
  border: 1px solid red;
} */

.red {
  border: 1px solid red;
  color: red;
}

.cardss > form:nth-child(2) > div:nth-child(9) {
  font-size: 0px;
  line-height: 1.6;
  letter-spacing: 0.367em;
  font-weight: 600;
  font-style: italic;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;

  margin: 0 0 0 0.5rem;
}

input,
textarea {
  border: 1px solid #ccc;
  font: inherit;
  padding: 5px;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

/*---*/
label {
  margin: 9px 3px;
  font-size: 16px;
  color: #0d0d0d;
}

.cardss > form:nth-child(2) {
  display: flex;
  flex-direction: column;
}
</style>
