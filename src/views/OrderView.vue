<template>
  <div>
    <h1>OrderView</h1>
    <pre>
      {{ $store.state.cart }}
    </pre>
  </div>
</template>
<script>
export default {
  name: "OrderView",
};
</script>
