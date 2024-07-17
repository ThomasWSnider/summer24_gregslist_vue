<script setup>
import { onMounted } from "vue";
import HouseCard from "../components/HouseCard.vue";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";



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

    <HouseCard />

  </section>
</template>


<style lang="scss" scoped></style>