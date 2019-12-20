export default {
	actions: {
		ADD_LIST(context, payload) {
			context.commit('addList', payload)
		},
		ADD_CARD(context, payload) {
			context.commit('addCard', payload)
		},
		DELETE_CARD(context, payload) {
			context.commit('deleteCard', payload)
		},
		DELETE_LIST(context, payload) {
			context.commit('deleteList', payload)
		},
	},
	mutations: {
		addList(state, payload) {
			const newList = {
				id: Date.now(),
				title: payload,
				cards: [],
			}
			state.lists.push(newList)
		},
		addCard(state, payload) {
			const newCard = {
				id: Date.now(),
				text: payload.text,
			}
			state.lists.map(list => {
				if (list.id === payload.id) {
					list.cards.push(newCard)
				}
			})
		},
		deleteCard(state, payload) {
			state.lists.map(list => {
				let index = list.cards.findIndex(card => card.id === payload)
				if (index >= 0) {
					list.cards.splice(index, 1)
				}
			})
		},
		deleteList(state, payload) {
			let index = state.lists.findIndex(list => list.id === payload)
			if (index >= 0) {
				state.lists.splice(index, 1)
			}
		},
		updateList(state, payload) {
			console.log('updateList ', payload);
			state.lists = payload
		},
		updateCards(state, payload) {
			console.log('updateCards ', payload);
			state.lists.map(list => {
				if (list.id === payload.listId) {
					list.cards = payload.cards
				}
			})
		}
	},
	state: {
		lists: [
			{
				id: 1,
				title: 'List title 1',
				cards: [
					{
						id: 10,
						text: 'Card title 1 from list 1',
					},
					{
						id: 100,
						text: 'Card title 2 from list 1',
					},
				],
			},
			{
				id: 2,
				title: 'List title 2',
				cards: [
					{
						id: 20,
						text: 'Card title 1 from list 2',
					},
					{
						id: 200,
						text: 'Card title 2 from list 2',
					},
					{
						id: 2000,
						text: 'Card title 3 from list 2',
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
