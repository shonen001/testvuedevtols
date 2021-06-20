import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            DataCoaches: [
                {
                    id: 'c0',
                    firstName: 'Achraf',
                    lastName: 'nfaoui',
                    areas: ['backend'],
                    description:
                        "I'm Achraf and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30,
                    tols: ['vue', 'HTML5', 'CSS3', 'JavaScript', 'Reactjs', 'BootStrap', 'SASS']

                },
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend','career','backend'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30,
                    tols: ['vue', 'HTML5', 'CSS3', 'JavaScript', 'Reactjs', 'BootStrap', 'SASS']
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30,
                    tols: ['vue', 'HTML5', 'CSS3', 'JavaScript', 'Reactjs', 'BootStrap', 'SASS']
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};
