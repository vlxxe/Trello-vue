<template>
	<v-card class="list" width="250" outlined>
		<div>
			<h2>
				{{list.title}}
				<trelloIconMenu :contentType="'list'" :id="list.id">
					<v-icon class="icon-menu">mdi-pencil</v-icon>
				</trelloIconMenu>
			</h2>
		</div>

		<draggable
			v-model="CARDS"
			class="list-group"
			v-bind="dragOptions"
			@start="drag = true"
			@end="drag = false"
		>
			<transition-group class="list-group" type="transition" :name="!drag ? 'flip-list' : null">
				<trelloCard class="list-group-item" v-for="card in CARDS" :card="card" :key="card.id" />
			</transition-group>
		</draggable>
		<trelloActionButton :contentType="'card'" :id="id" />
	</v-card>
</template>

<script>
import draggable from 'vuedraggable'
import trelloCard from './trelloCard'
import trelloActionButton from './trelloActionButton'
import trelloIconMenu from './trelloIconMenu'
export default {
	props: ['list', 'index'],
	components: {
		draggable,
		trelloCard,
		trelloActionButton,
		trelloIconMenu,
	},
	data() {
		return {
			cards: this.list.cards,
			id: this.list.id,
			drag: false,
		}
	},
	computed: {
		dragOptions() {
			return {
				animation: 200,
				group: 'description',
				disabled: false,
				ghostClass: 'ghost',
			}
		},
		CARDS: {
			get() {
				return this.$store.getters.ALL_LISTS[this.index].cards
			},
			set(value) {
				this.$store.commit('updateCards', {
					listId: this.id,
					cards: value
				})
			},
		},
	},
}
</script>

<style scoped>
.list {
	padding: 5px;
	margin-right: 10px;
	background-color: rgb(167, 204, 198) !important;
}
.list-group {
	min-height: 20px;
	display: block;
	margin: 5px 0;
}
.flip-list-move {
	transition: transform 0.5s;
}
.no-move {
	transition: transform 0s;
}
.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
.list-group-item {
	cursor: move;
}
.list:hover .icon-menu {
	opacity: 0.6;
}
.list .icon-menu:hover {
	opacity: 1;
}
.icon-menu {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	opacity: 0;
}
</style>
