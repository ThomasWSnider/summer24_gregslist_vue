<script setup>
import { computed, onMounted, } from "vue";
import HouseCard from "../components/HouseCard.vue";
import FormModal from "../components/FormModal.vue";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import HouseForm from "../components/HouseForm.vue";

// const start = ref(0)
// const end = ref(10)
const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

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
        <div class="d-flex justify-content-between align-items-center">
          <h1>Houses</h1>
          <button v-if="account" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#carFormModal">Create
            House
            Listing</button>
        </div>
      </div>
    </div>
    <div v-for="house in houses" :key="house.id" class="row">
      <HouseCard :house="house" />
    </div>
  </section>

  <FormModal>
    <template #modalHeader>
      House Submission Form
    </template>
    <template #modalBody>
      <HouseForm modalId="houseFormModal" />
    </template>
  </FormModal>
</template>


<style lang="scss" scoped></style>