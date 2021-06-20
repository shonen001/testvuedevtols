export default {

        listeCoches(state) {
            return state.DataCoaches;
        },
        hasCoches(state) {
            return state.DataCoaches && state.DataCoaches.length > 0;
        }
   
};