<template>
	<div class="text-center">
		<v-menu absolute offset-y>
			<template v-slot:activator="{ on: menu }">
				<div v-on="menu">
					<slot></slot>
				</div>
			</template>
			<v-list>

				<v-list-item :ripple="false" dense @click="deleteCard">
					<v-list-item-title>Delete card</v-list-item-title>
				</v-list-item>
				<v-list-item :ripple="false" dense @click="">
					<v-list-item-title>Change title card</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
export default {
	props: ['id'],
	methods: {
		deleteCard() {
			this.$store.dispatch('DELETE_CARD', this.id)
		},
	},
}
</script>