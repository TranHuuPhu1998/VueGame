import axios from "axios";

const baseUrl = 'https://5e68a46bd426c00016b7e272.mockapi.io/data/'

const learnEnglish = {
    state : {
        course : [
            {
                id : 1,
                type : 'enTovn'
            },
        ],
        vocabularys : []
    },
    getters : {
        vocabularys : state => state.vocabularys,
        course : state => state.course
    },
    actions : {
        async AddVocabulary({commit} , vocabulary) {
            try {
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
        }
       
    },
    mutations : {
        ADD_VOCABULARY(state ,vocabulary) {
            state.vocabularys.push(vocabulary)
        },
        GET_VOCABULARY(state , vocabularys) {
            state.vocabularys = vocabularys
        }
    }
}

export default learnEnglish