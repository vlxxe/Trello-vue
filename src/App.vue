<template>
	<v-app>
		<trelloBoard />
	</v-app>
</template>

<script>
import trelloBoard from './components/trelloBoard'
export default {
	name: 'App',
	components: {
		trelloBoard,
	},
}
</script>