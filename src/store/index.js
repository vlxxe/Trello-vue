import Vue from 'vue'
import Vuex from 'vuex'

import trelloBoard from './modules/trelloBoard'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		trelloBoard,
	},
})
