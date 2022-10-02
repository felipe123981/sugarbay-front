<template>
  <div>
    <h1>SavedView</h1>
    <pre>
    {{ $store.state.favorites }}
  </pre
    >
  </div>
</template>
<script>
export default {
  name: "SavedView",
};
</script>
