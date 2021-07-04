import { createRouter , createWebHistory } from 'vue-router'

import Pokemon from '../pages/pokemon'
import PingPong from '../pages/ping-pong'
import PageHome from '../pages'
import ResultGame from '../pages/pokemon/game-result'
import LearningEnglish from '../pages/learn-english'
import ListVocabulary from '../components/ListVocabulary.vue'

const routes = [
    {path:'/' , name : 'homepage',component:PageHome},
    {path: '/pokemon', name : 'pokemon',component:Pokemon},
    {path: '/ping-pong' , name : 'pingpong', component:PingPong},
    {path: '/pokemon/result', name: 'result', component:ResultGame},
    {path: '/learning-english', name: 'LearningEnglish', component:LearningEnglish},
    {path: '/list-vocabulary/:type', name: 'listvocabulary', component:ListVocabulary},

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;