<template>
		<v-list-item class="item">
			<v-list-item-subtitle>{{card.text}}</v-list-item-subtitle>
			<trelloIconMenu :contentType="'card'" :id="card.id">
				<v-icon class="icon-menu">mdi-pencil</v-icon>
			</trelloIconMenu>
		</v-list-item>
</template>

<script>
import trelloIconMenu from './trelloIconMenu'
export default {
	components: {
		trelloIconMenu,
	},
	props: ['card'],
}
</script>

<style lang="scss" scoped>
	p {
		margin: 0 !important;
	}
	.item {
		background-color: #fff;
		transition-duration: 0.2s;
		&:hover {
			opacity: 0.8;
		}
	}
	.item:hover .icon-menu {
		opacity: 0.8;
	}
	.item .icon-menu:hover {
		opacity: 1;
		background-color: #f4f5f7;
	}
	.icon-menu {
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		opacity: 0;
	}
</style>
