<template>
  <div>
    <div>
    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

    <!-- Plain mode -->
    <b-form-file v-model="file2" class="mt-3" plain>
        
    </b-form-file>
    <div class="mt-3">
        <img src="@/assets/img/istockphoto-931643150-612x612.jpg" alt="">
        : {{ file2 ? file2.name : '' }}</div>
  </div>
  </div>
</template>
<script>
export default {
  name: "ProductRegister",
  data() {
    return {
        file1: null,
        file2: null,
    }
  }
};
</script>
<style scoped></style>
