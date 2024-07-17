<script setup>
import { computed, onMounted } from "vue";
import HouseCard from "../components/HouseCard.vue";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { House } from "../models/House";

const houses = computed(() => AppState.houses)

onMounted(() => {
  getHouses()
})

async function getHouses() {
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.toast(`Couldn't get Houses`, 'error')
    logger.log(error)
  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1>Houses</h1>
      </div>
    </div>
    <div v-for="house in houses" :key="house.id" class="row">
      <HouseCard :house="house" />
    </div>

  </section>
</template>


<style lang="scss" scoped></style>