<template>
  <v-card class="list" width="250" outlined>
    <h2>{{list.title}}</h2>
		<draggable :list="list.cards">
			<trelloCard v-for="card in list.cards" :card="card" :key="card.id" />
		</draggable>
		<trelloActionButton :contentType="'card'" :id="list.id" />
  </v-card>
</template>

<script>
import draggable from "vuedraggable";
import trelloCard from "./trelloCard";
import trelloActionButton from "./trelloActionButton";
export default {
	props: ['list'],
  components: {
		draggable,
		trelloCard,
		trelloActionButton
	},
};
</script>

<style scoped>
	.list {
		padding: 5px;
		margin-right: 10px;
		background-color: rgb(167, 204, 198)!important;
	}
</style>
