<template>
	<div class>
		<v-list-item class="item">
			<p class="subtitle-1">{{card.text}}</p>
			<trelloCardMenu :id="card.id">
				<v-icon class="icon-menu">mdi-pencil</v-icon>
			</trelloCardMenu>
		</v-list-item>
	</div>
</template>

<script>
import trelloCardMenu from './trelloCardMenu'
export default {
	components: {
		trelloCardMenu,
	},
	props: ['card'],
}
</script>

<style lang="scss" scoped>
p {
	margin: 0 !important;
}
.item {
	margin: 5px 0;
	background-color: #fff;
	transition-duration: 0.2s;
	&:hover {
		opacity: 0.8;
	}
}
.item:hover .icon-menu {
	opacity: 0.6;
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
