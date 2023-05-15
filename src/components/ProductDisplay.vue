<template>
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
              <!--

                <router-link :to="`/product/` + product.id">
                <b-button size="sm" class="sb-btn" pill
                ><i class='bx bxs-edit'></i> Detail</b-button
              >
                </router-link>

              -->

              <a :href="`${url}:8080/product/` + product.id">
                <b-button size="sm" class="sb-btn" pill
                ><i class='bx bxs-edit'></i> Detail</b-button
              >
              </a>
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
  
</template>
<script>
//import axiosConfig from "@/modules/axiosConfig";
import axiosConfig from "@/modules/axiosConfig";
import { mapGetters, mapMutations } from "vuex";

export default {
  // eslint-disable-next-line
  name: "ProductDisplay",
  props: ["pid"],
  computed: {
    ...mapGetters("products", {
      getProductById: "getProductById"
    }),
  },
  async mounted() {
    this.fetchProducts();
    this.product = this.getProductById(this.pid);
    /*
     await axiosConfig
      .get(`/products/${this.pid}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
      });
      */
  },
  data() {
    return {
      url: axiosConfig.defaults.baseURL.replace(":3333/", ""),
      products: [],
      product: [],
      rate: 5,
      currency: "U$",
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
  },
};
</script>

<style scoped>
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
</style>
