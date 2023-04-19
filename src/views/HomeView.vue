<template>
  <div>
    <br />
    <div>
      <h3 class="page-header">Product List:</h3>
    </div>
    <HeaderNavbar></HeaderNavbar>
    <br>
    
    <div v-if="products[0] == 0">
      <h3>Oops! there are no products...</h3>
    </div>
    
    <!--

    <slot>
      total in cart: {{ getCartLenght() }}
    </slot>
    
    -->

    <div v-for="product in products" :key="product.id">
      <div>
    <div class="product-display">
      <b-card>
        <b-media>
          <template #aside>
            <!--

            <b-img
              blank
              blank-color="#ccc"
              width="50"
              alt="placeholder"
            ></b-img>

            -->

              <div class="img-wrapper">
                <button @click="addToFavorites(product)" class="btn btn-sm outline-primary btn-like">
                  <i class='bx bxs-heart'></i>
                </button>
                <b-img class="img-responsive"
                blank
              blank-color="#ccc"
              width="70"
              alt="placeholder"
                >
                <div class="img-overlay">
                </div></b-img>
              </div>

            
          </template>

          <h5 class="mt-0">
            {{ product.name }} - {{ currency }} {{ product.price }}
          </h5>
          <div class="star-rating">
            <b-form-rating
              v-model="rate"
              variant="warning"
              class="mb-2"
              id="form-control"
            ></b-form-rating>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel ...</p>
          <b-row>
            <b-col lg="4" class="pb-2">
              <router-link :to="{ name: 'product', params: { productId: product.id } }">
                <b-button size="sm" class="sb-btn" pill
                ><i class="bx bx-shopping-bag"></i> Shop</b-button
              >
              </router-link>
              </b-col
            >
            <b-col lg="4" class="pb-2"
              ><b-button size="sm" class="sb-btn" pill @click="addToCart(product), makeToast('success')"
                ><i class="bx bx-cart-alt"></i> Add to cart</b-button
              ></b-col
            >
          </b-row>
        </b-media>
      </b-card>
    </div>
  </div>
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
import { mapMutations, mapGetters } from "vuex";
import HeaderNavbar from "../components/HeaderNavbar.vue"

export default {
  name: "HomeView",
  components: {
    HeaderNavbar
},
  computed: {
    ...mapGetters(
    "cart", {
      getCartLenght: "getCartLenght"
    }),
    ...mapGetters(
    "products", {
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
      product: [],
      rate: 5,
      currency: "U$",
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
    ...mapMutations('cart', {
      addToCart: 'addToCart'
    }),
    ...mapMutations('favorites', {
      addToFavorites: 'addToFavorites'
    }),
    ...mapMutations("products", {
      fetchProducts: "fetchProducts"
    }),
    makeToast(variant = null) {
      this.$bvToast.toast("🛒 Item sucessfuly added to cart!", {
        title: 'Pushed!',
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
  content: ' ';
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
