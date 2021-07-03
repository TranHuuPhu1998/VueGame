import { createStore } from 'vuex';

import pokemon from './modules/pokemon'
import learnEnglish from './modules/learnEnglish'
// Create a new store instance.

export const store = createStore({
    modules: {
        pokemon,
        learnEnglish
    }
})
