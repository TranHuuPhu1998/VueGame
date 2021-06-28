import { createStore } from 'vuex';

import pokemon from './modules/pokemon'
// Create a new store instance.

export const store = createStore({
    modules: {
        pokemon
    }
})
