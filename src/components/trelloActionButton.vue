<template>
	<div class="nn">
		<v-btn
			class="btn"
			outlined
			color="secondary"
			v-if="!isFormOpen"
			v-on:click="clickForm"
		>+ Add another {{contentType}}</v-btn>

		<v-form v-else>
			<v-textarea
				class="my-2"
				solo
				:hide-details="true"
				:autofocus="true"
				:auto-grow="true"
				:row-height="8"
				:label="'Enter a title for ' + contentType"
				v-model="titleForm"
				:value="titleForm"
				@blur.capture="closeForm"
			></v-textarea>
			<v-btn color="success" dark @mousedown.prevent="addForm">Add {{contentType}}</v-btn>
			<v-icon class="mx-1 my-2 icon-close" @mousedown="clearForm">mdi-close</v-icon>
		</v-form>
	</div>
</template>

<script>
export default {
	props: {
		contentType: {
			default: 'list',
			type: String,
		},
		id: Number
	},
	data() {
		return {
			isFormOpen: false,
			titleForm: '',
		}
	},
	methods: {
		clickForm() {
			this.isFormOpen = !this.isFormOpen
		},
		closeForm() {
			this.isFormOpen = false
		},
		addForm() {
			if (this.titleForm.trim()) {
				if (this.contentType === 'card') {
					this.addCard()
				} else {
					this.addList()
				}
				this.titleForm = ''
				this.isFormOpen = false
			}
		},
		addCard() {
			this.$store.dispatch('ADD_CARD', {
				id: this.id,
				text: this.titleForm
			})
		},
		addList() {
			this.$store.dispatch('ADD_LIST', this.titleForm)
		},
		clearForm() {
			this.titleForm = ''
		},
	},
}
</script>

<style scoped>
	p {
		margin: 0 !important;
	}
	.btn {
		width: 250px;
	}
	.icon-close:hover {
		opacity: 0.5;
	}
</style>