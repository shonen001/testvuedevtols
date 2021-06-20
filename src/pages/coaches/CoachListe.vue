<template>
  <div class="mainpage">
    <div class="rigth">
      <BaseCard>
        <CoachFilter @chang-filter="updateHER"></CoachFilter>
      </BaseCard>
    </div>

    <div class="center">
      <BaseCard>
      <div class="top-center">
         <base-button mod="flat">refrech</base-button>
         <base-button link to='/register'>Register</base-button>
      </div>
        <div>
            <ul v-if="hasCoches">
              <coach-items
                v-for="coache in filterCoaches"
                :key="coache.id"
                :id="coache.id"
                :firstName="coache.firstName"
                :lastName="coache.lastName"
                :areas="coache.areas"
                :hourlyRate="coache.hourlyRate"
              />
            </ul>
            <h3 v-else>nocoaches</h3>
          
        </div>
      </BaseCard>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CoachItems from '../../components/Coaches/CoachesItems.vue';
import CoachFilter from '../../components/Coaches/coachFilter.vue';

export default {
  data() {
    return {
      visiblity: [],
      Filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachItems,
    CoachFilter,
  },
  computed: {
    ...mapGetters('coaches', ['listeCoches', 'hasCoches']),

    filterCoaches() {
      return this.listeCoches.filter((coach) => {
        if (this.Filters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.Filters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.Filters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });

      // return  this.listeCoches.filter((item) =>
      //  // value.includes(...item.areas)
      //      this.visiblity.indexOf(...item.areas) !== -1
      // );
    },
  },
  methods: {
    updateHER(NewData) {
      this.Filters = NewData;
      console.log(NewData);
    },

    test(value) {
      this.visiblity = value;
      console.log(value);

      //  let test222 = this.listeCoches.filter((item) => value.includes(...item.areas));
      //  console.log(test222);

      let test222 = this.listeCoches.filter(
        (item) =>
          // value.includes(...item.areas)
          this.visiblity.indexOf(...item.areas) !== -1
      );
      console.log(test222);
    },
  },
};
</script>
<style scoped>

.top-center {
 display: flex;
 justify-content: space-between;
}

.rigth > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.mainpage {
  display: flex;
  flex-direction: row;
}
.rigth {
  flex: 30%;
}
.center {
  flex: 80%;
}
</style>
