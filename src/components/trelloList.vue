<template>
  <v-card class="list" width="250" outlined>
    <h2>{{list.title}}</h2>
    <trelloCard v-for="card in list.cards" v-bind:card="card" v-bind:key="card.id" />
		<trelloActionButton :contentType="'card'" v-bind:id="list.id" />
  </v-card>
</template>

<script>
import trelloCard from "./trelloCard";
import trelloActionButton from "./trelloActionButton";
export default {
	props: ['list'],
  components: {
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
