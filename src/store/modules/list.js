export default {
	actions: {
		ADD_LIST(context, payload) {
			context.commit('updateLists', payload)
		},
		ADD_CARD(context, payload) {
			context.commit('updateCards', payload)
		}
	},
	mutations: {
		updateLists(state, payload) {
			const newList = {
				id: Date.now(),
				title: payload,
				cards: [],
			}
			state.lists.push(newList)
		},
		updateCards(state, payload) {
			const newCard = {
				id: Date.now(),
				text: payload.text,
			}
			state.lists.map(list => {
				if (list.id === payload.id) {
					list.cards.push(newCard)
				}
			})
		}
	},
	state: {
		lists: [
			{
				id: 0,
				title: 'Title for cards 1',
				cards: [
					{
						id: 0,
						text: 'Simple text 1',
					},
					{
						id: 1,
						text: 'Simple text 2',
					},
				],
			},
			{
				id: 1,
				title: 'Title for cards 2',
				cards: [
					{
						id: 0,
						text: 'Simple second text 1',
					},
					{
						id: 1,
						text: 'Simple second text 2',
					},
					{
						id: 2,
						text: 'Simple second text 3',
					},
				],
			},
		],
	},
	getters: {
		ALL_LISTS(state) {
			return state.lists
		},
	},
}
