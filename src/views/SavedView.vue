<template>
  <div>
    <h1>SavedView</h1>
    <pre>
    {{ getFavorites }}
  </pre
    >
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "SavedView",
  computed: {
    ...mapGetters({
      getFavorites: 'getFavorites'
    })
  }
};
</script>
