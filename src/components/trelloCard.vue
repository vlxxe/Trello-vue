<template>

	<v-list-item class="item">
		<p class="subtitle-1">
			{{card.text}}
		</p>
	</v-list-item>
        
</template>

<script>
export default {
	props: ['card']
}
</script>

<style scoped>
	p {
		margin: 0!important;
	}
	.item {
		margin: 5px 0;
		background-color: #fff;
		transition-duration: .3s;
	}
	.item:hover {
		opacity: 0.8;
	}
</style>
