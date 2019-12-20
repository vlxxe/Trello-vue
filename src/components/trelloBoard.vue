<template>
  <div class="d-flex flex-row justify-start align-start cnt">
			<draggable v-model="LISTS" class="d-flex flex-row justify-start align-start">
				<trelloList 
          v-for="(list, index) in LISTS" 
          :index="index" 
          :list="list" 
          :key="list.id"
        />
			</draggable>
			<trelloActionButton />
		</div>
</template>

<script>
import draggable from 'vuedraggable'
import trelloList from './trelloList'
import trelloActionButton from './trelloActionButton'
import { mapGetters } from 'vuex'
export default {
  components: {
		trelloList,
		trelloActionButton,
		draggable,
  },
  computed: {
		LISTS: {
			get() {
				return this.$store.getters.ALL_LISTS
			},
			set(value) {
				this.$store.commit('updateList', value)
			},
		},
		...mapGetters(['ALL_LISTS']),
	},
}
</script>

<style scoped>
.cnt {
	padding: 10px;
}
</style>