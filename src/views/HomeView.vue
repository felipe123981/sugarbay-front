<template>
  <div>
    <br />
    <div>
      <h3 class="page-header">Product List:</h3>
    </div>
    <br />
    <div>
      <b-navbar
        toggleable="lg"
        id="dropdown-left"
        type="dark"
        class="my-navbar"
      >
        <b-navbar-brand href="#"> </b-navbar-brand>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2 search-input"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em><i class="bx bx-filter-alt"></i> Filter</em>
            </template>
            <b-dropdown-item href="#"
              ><i class="bx bx-dollar"></i> Best sellers</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><i class="bx bx-sort"></i> Sort A to Z</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><i class="bx bx-calendar-week"></i> Last week</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><i class="bx bx-calendar"></i> Date to date</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><i class="bx bx-x-circle"></i> Clear</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <br />
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

export default {
  name: "HomeView",
  computed: {
    ...mapGetters("products", {
      getProducts: "getProducts"
    })
  },
  mounted() {
    this.fetchProducts();
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
  components: {
    ProductDisplay
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
.search-input {
  width: 95px;
}
.page-header {
  color: var(--text-color);
}
.my-navbar {
  background-color: var(--primary-color);
}
body {
  background: #eee;
}
.product_block {
  width: 70vw;
  min-width: 250px;
}
.ratings i {
  font-size: 16px;
  color: red;
}
.strike-text {
  color: red;
  text-decoration: line-through;
}
.product-image {
  width: 100%;
}
.dot {
  height: 7px;
  width: 7px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 3px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block;
}
.spec-1 {
  color: #938787;
  font-size: 15px;
}
h5 {
  font-weight: 400;
}
.para {
  font-size: 16px;
}
</style>
