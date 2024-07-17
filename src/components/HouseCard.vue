<script setup>
import { House } from "../models/House";


defineProps({ house: { type: House } })
</script>


<template>
  <div class="row house-card rounded mb-2 px-0">
    <div class="col-12 px-0">
      <img :src="house.imgUrl" :alt="`${house.creator.name}'s home`" class="img-fluid house-img px-0 rounded-top mb-2"
        :title="`${house.creator.name}'s home`">
      <div>
        <div class="row justify-content-center pb-2">
          <div class="col-3 d-flex flex-column justify-content-between">
            <h4>Selling for: {{ '$' + house.price }}</h4>
            <small>Listed: {{ house.createdAt.toLocaleDateString() }}</small>
          </div>
          <div class="col-7">
            <p>{{ house.levels == 1 ? `${house.levels} story` : `${house.levels} stories` }}</p>
            <div class="d-flex">
              <p>{{ house.bathrooms }} bath,</p>
              <p class="ps-1">{{ house.bedrooms == 1 ? `${house.bedrooms} bedroom` : `${house.bedrooms} bedrooms` }}</p>
            </div>
            <p>{{ house.description }}</p>
            <div class="text-end">
              <img :src="house.creator.picture" :alt="house.creator.name" :title="`Posted by ${house.creator.name}`"
                class="creator-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.house-img {
  max-height: 60vh;
  width: 100%;
  object-fit: cover;
  object-position: center;

}

.house-card {
  background-color: whitesmoke;
}

.creator-img {
  height: 5vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>