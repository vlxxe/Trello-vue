<template>
  <v-app>
    <div class="d-flex flex-row justify-start align-start cnt">
      <trelloList v-for="list in ALL_LISTS" v-bind:list="list" v-bind:key="list.id" />
      <trelloActionButton />
    </div>
  </v-app>
</template>

<script>
import trelloList from "./components/trelloList";
import trelloActionButton from "./components/trelloActionButton";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    trelloList,
    trelloActionButton
  },
  computed: mapGetters(['ALL_LISTS']),
};
</script>

<style scoped>
  .cnt {
    padding: 10px;
  }
</style>
