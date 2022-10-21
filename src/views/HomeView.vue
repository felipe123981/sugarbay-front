<template>
  <div>
    <br />
    <div>
      <h3 class="page-header">Product List:</h3>
    </div>
    <HeaderNavbar></HeaderNavbar>
    <br>
    <div v-if="products.lenght == 0">
      <h3>Oops! there are no products...</h3>
    </div>
    <div v-for="product in products" :key="product.id">
      <ProductDisplay
        v-once
        :pid="product.id"
        style="width: 70vw"
      ></ProductDisplay>
      <br />
    </div>
    <br />
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <span class="page-link">Previous</span>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item">
          <span class="page-link">
            2
            <span class="sr-only">(current)</span>
          </span>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ProductDisplay from "@/components/ProductDisplay.vue";
import { mapMutations, mapGetters } from "vuex";
import headerNavbar from "@/components/HeaderNavbar.vue"
import HeaderNavbar from "../components/HeaderNavbar.vue"

export default {
  name: "HomeView",
  components: {
    headerNavbar,
    ProductDisplay,
    HeaderNavbar
},
  computed: {
    ...mapGetters("products", {
      getProducts: "getProducts"
    })
  },
  mounted() {
    if(this.getProducts.length == 0) {
      this.fetchProducts();
    }
    
    setTimeout(() => {
      this.products = this.getProducts;
    }, 500);
  },
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      products: [],
      value: ["all"],
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  methods: {
    ...mapMutations("products", {
      fetchProducts: "fetchProducts"
    }),
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    }
  }
};
</script>
<style scoped>
.page-header {
  color: var(--text-color);
}
body {
  background: #eee;
}

h5 {
  font-weight: 400;
}
</style>
