<script setup>

</script>


<template>
  <form>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="bedrooms" placeholder="Number of Bedrooms" min="0" max="500" required>
      <label for="bedrooms">Number of Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="bathrooms" placeholder="Number of Bathrooms" min="0" max="500"
        required>
      <label for="bathrooms">Number of Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="levels" placeholder="Number of Levels" min="1" max="500" required>
      <label for="levels">Number of Levels</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="imgUrl" placeholder="Image URL of Home" maxlength="500">
      <label for="imgUrl">Image URL of Home</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="year" placeholder="Year House Was Built" max="2024" required>
      <label for="year">Year House Was Built</label>
    </div>
    <div class="form-floating mb-3">
      <label for="price" class="form-label">Selling Price</label>
      <input type="range" class="form-range" min="0" max="800000" step="500" id="price" required>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description of House</label>
      <textarea class="form-control" id="description" rows="3" maxlength="5000"></textarea>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>