import { createRouter, createWebHashHistory } from 'vue-router';

/**/
import NotFound from './pages/NotFound.vue';
import CoachListe from './pages/coaches/CoachListe.vue';
import RegisterCoach from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import RequestReceved from './pages/requests/RequestReceved.vue';

/**/

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {path:'/coaches',component:null},

      { path: '/'       , redirect: '/coaches' },
      { path: '/coaches', component: CoachListe },
      {
         path: '/coaches/:id',
         component: CoachDetails,
         props:true,
         children: [{ path: 'contact', component: ContactCoach }],
      },
       { path: '/requests', component: RequestReceved },
       { path: '/register', component: RegisterCoach },
       { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router;
