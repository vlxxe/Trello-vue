<template>
	<div class="text-center">
		<v-menu absolute offset-y>
			<template v-slot:activator="{ on: menu }">
				<div v-on="menu">
					<slot></slot>
				</div>
			</template>
			<v-list>

				<v-list-item :ripple="false" dense @click="deleteItem">
					<v-list-item-title>Delete {{contentType}}</v-list-item-title>
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
	props: {
		contentType: {
			type: String,
			required: true,
			validator(value) {
				return ['list', 'card'].indexOf(value) !== -1
			},
		},
		id: {
			type: Number,
			required: true
		}
	},
	methods: {
		deleteItem() {
			if (this.contentType === 'card') {
				this.$store.dispatch('DELETE_CARD', this.id)
			}
			if (this.contentType === 'list') {
				this.$store.dispatch('DELETE_LIST', this.id)
			}
		},
	},
}
</script>