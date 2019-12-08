<template>
  <v-app>
    <div class="d-flex flex-row justify-start align-start cnt">
      <draggable class="d-flex flex-row justify-start align-start">
        <trelloList v-for="list in ALL_LISTS" :list="list" :key="list.id" />
      </draggable>
      <trelloActionButton />
    </div>
  </v-app>
</template>

<script>
import draggable from "vuedraggable";
import trelloList from "./components/trelloList";
import trelloActionButton from "./components/trelloActionButton";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    trelloList,
    trelloActionButton,
    draggable
  },
  computed: mapGetters(['ALL_LISTS']),
};
</script>

<style scoped>
  .cnt {
    padding: 10px;
  }
</style>
