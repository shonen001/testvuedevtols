<template>

  <router-view/>

  <base-card>
    <header>
      <h1>{{ FullName }}</h1>
      <h3>$ {{ Rate }} /hour</h3>
    </header>
    <section>
      <p>{{ discript }}</p>
      <div>
        <base-badge v-for="area in Areas" :key="area" :type="area" />
      </div>

      <div>
        <base-badge v-for="tol in Tols" :key="tol" :type="tol" />
      </div>

      <div class="but">
        <base-button link :to="Like">Contact</base-button>
      </div>
    </section>
  </base-card>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: ['id'],
  data() {
    return {
      coachSelected: null
    };
  },
  computed: {
    ...mapGetters('coaches', ['listeCoches', 'hasCoches']),
    FullName() {
      return (
        this.coachSelected.firstName.toUpperCase() +
        ' ' +
        this.coachSelected.lastName.toUpperCase()
      );
    },
    Rate() {
      return this.coachSelected.hourlyRate;
    },
    discript() {
      return this.coachSelected.description;
    },
    Areas() {
      return this.coachSelected.areas;
    },
    Tols() {
      return this.coachSelected.tols;
    },
    Like() {
       return this.$route.path+ '/contact';
    }
  },
  created() {
    this.coachSelected = this.listeCoches.find(item => item.id === this.id);
    console.log(this.coachSelected);
  }
};
</script>
<style scoped>
.but {
  display: flex;
  justify-content: flex-end;
}

.cardss > section:nth-child(2) > div:nth-child(2) {
  margin: 31px 15px;
  font-size: 10px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0.176em;
  line-height: 1.6;
}

.cardss > header:nth-child(1) {
  padding: 10px;
}
.cardss > header:nth-child(1) > h3:nth-child(2) {
  margin-top: 14px;
}
.cardss {
  display: flex;
  flex-flow: column;
}
.cardss > section:nth-child(2) > p:nth-child(1) {
  font-size: 18px;
  margin: 10px;
  border: 1px dotted;
  background: #f0f0f0;
  padding: 11px;
  border-radius: 10px;
  color: #4d4b4b;
  line-height: 1.4;
  letter-spacing: 0.026em;
  font-weight: 300;
}
</style>
