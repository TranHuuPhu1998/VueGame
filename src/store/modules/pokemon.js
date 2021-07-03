  
import axios from 'axios'

const pokemon = {
	state: {
		players: []
	},
	getters: {
		players: state => state.players,
	},
	actions: {
		async addPlayer({ commit }, player) {
			try {
				await axios.post('https://5e68a46bd426c00016b7e272.mockapi.io/data/player', player)
				commit('ADD_PLAYER', player)
			} catch (error) {
				console.log(error)
			}
		},
		async getPlayer({ commit }) {
			try {
				const response = await axios.get(
					'https://5e68a46bd426c00016b7e272.mockapi.io/data/player'
				)
				commit('GET_PLAYER', response.data)
			} catch (error) {
				console.log(error)
			}
		}
	},
	mutations: {
		ADD_PLAYER(state, player) {
			state.players.push(player)
		},
		GET_PLAYER(state, players) {
			state.players = players
		}
	}
}

export default pokemon