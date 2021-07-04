import axios from "axios";

const baseUrl = 'https://5e68a46bd426c00016b7e272.mockapi.io/data/'

const learnEnglish = {
    state : {
        courses : [],
        vocabularys : []
    },
    getters : {
        vocabularys : state => state.vocabularys,
        courses : state => state.courses
    },
    actions : {
        async AddVocabulary({commit} , vocabulary) {
            try {
                await axios.post(`${baseUrl}vocabularys`,vocabulary)
                commit('ADD_VOCABULARY',vocabulary) 
            } catch (error) {
                console.log(error)
            }
        },
       
        async GetVocabulary({commit}) {
            try {
                const response = await axios.get(`${baseUrl}vocabularys`)
                commit('GET_VOCABULARY' , response.data) 
            } catch (error) {
                console.log(error)
            }
        },

        async GetSourse({commit}){
            try {
                const response = await axios.get(`${baseUrl}course`)
                commit('GET_COURSE' , response.data)
            } catch (error) {
                console.log(error)
            }
        },

        async AddSourse({commit} , course) {
            try {
                await axios.post(`${baseUrl}course` , course)
                commit('ADD_COURSE',course)
            } catch (error) {
                console.log(error)
            }
        }
       
    },
    mutations : {
        ADD_VOCABULARY(state ,vocabulary) {
            state.vocabularys.push(vocabulary)
        },
        GET_VOCABULARY(state , vocabularys) {
            state.vocabularys = vocabularys
        },
        GET_COURSE(state , courses){
            state.courses = courses
        },
        ADD_COURSE(state, course){
            state.courses.push(course)
        }
    }
}

export default learnEnglish