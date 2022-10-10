<template>
  <div>
    <h1>OrderView</h1>
    <pre>
      {{ getCart }}
    </pre>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "OrderView",
  computed: {
    ...mapGetters({
      getCart: 'getCart'
    }),
  }
};
</script>
