<template>
  <div>
    <HeaderNavbar headerTitle="Catalog:"></HeaderNavbar>
    <br />

    <div v-if="products.length == 0">
      <p>
        <b-icon
          style="color: var(--text-color)"
          icon="arrow-clockwise"
          animation="spin-pulse"
          font-scale="4"
        ></b-icon>
      </p>
      <strong style="color: var(--text-color)"> Loading Content... </strong>
    </div>

    <!--

    <slot>
      total in cart: {{ getCartLenght }}
    </slot>
    
    -->

    <Pagination
      v-if="filteredProducts.length > 0"
      :products="paginated_products[currentPage - 1]"
    />
    <div class="no-results" v-if="products.length > 0 && searchQuery && filteredProducts.length == 0">
      <b-img
        :src="require('@/assets/img/cat.png')"
        width="280vw"
        alt="placeholder"
      ></b-img>
      <div>
        <h2 style="color: var(--text-color)">No results for this search...</h2>
      </div>
    </div>

    <br />
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        prev-text="Previous"
        next-text="Next"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import HeaderNavbar from "../components/HeaderNavbar.vue";
import Pagination from "@/components/PaginationComponent.vue";
//import ProductDisplay from "@/components/ProductDisplay.vue";

export default {
  name: "HomeView",
  props: ["searchQuery"],
  components: {
    HeaderNavbar,
    Pagination
    //ProductDisplay
  },
  computed: {
    rows() {
      return this.products.length;
    },
    ...mapGetters("cart", {
      getCartLenght: "getCartLenght"
    }),
    ...mapGetters("products", {
      getProducts: "getProducts"
    }),
    filteredProducts() {
      if (!this.searchQuery) return this.products;

      const searchTerm = this.searchQuery.toUpperCase();
      return this.products.filter((product) =>
        product.name.toUpperCase().includes(searchTerm)
      );
    }
  },
  watch: {
    searchQuery() {
      this.paginated_products = this.paginate(
        this.filteredProducts,
        this.perPage
      );
    }
  },
  async mounted() {
    await this.fetchProducts();

    setTimeout(() => {
      this.products = this.getProducts;
      this.paginated_products = this.paginate(this.products, this.perPage);
    }, 500);
  },
  data() {
    return {
      paginated_products: [],
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      products: [],
      value: ["all"],
      perPage: 15,
      currentPage: 1,
      product: [],
      rate: 5,
      currency: "U$"
    };
  },
  methods: {
    ...mapMutations("cart", {
      addToCart: "addToCart"
    }),
    ...mapMutations("favorites", {
      addToFavorites: "addToFavorites"
    }),
    ...mapActions("products", {
      fetchProducts: "fetchProducts"
    }),
    makeToast(variant = null) {
      this.$bvToast.toast("🛒 Item sucessfuly added to cart!", {
        title: "Pushed!",
        variant: variant,
        solid: true
      });
    },
    paginate(base, max) {
      var result = [[]];
      var group = 0;

      for (var index = 0; index < base.length; index++) {
        if (result[group] === undefined) {
          result[group] = [];
        }

        result[group].push(base[index]);

        if ((index + 1) % max === 0) {
          group = group + 1;
        }
      }

      return result;
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
.sb-btn {
  background-color: rgb(0, 110, 255);
  border: 1px white solid;
}
.btn-like {
  position: absolute;
  padding-left: 3.05rem;
}
.btn-like:hover {
  color: rgb(216, 25, 25);
}

.img-wrapper {
  position: relative;
}

.img-responsive {
  height: auto;
}

.img-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.img-overlay:before {
  content: " ";
  display: block;
  height: 0;
}

#form-control {
  display: block;
  min-width: 150px;
  width: 26%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.product-display {
  width: 70vw;
}
</style>
