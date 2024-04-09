<template>
  <div class="catalog">
    <div v-for="product in products" :key="product.id">
        <ProductDisplay :pid="product.id" ></ProductDisplay>
        <!--
        <div class="product-display">
            <b-card>
              <b-media>
                <template #aside>
                  <b-img
                    blank
                    blank-color="#ccc"
                    width="64"
                    alt="placeholder"
                  ></b-img>
                </template>

                <h5 class="mt-0">{{ product.name }} - {{ product.price }}</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin.
                </p>
                <b-row>
                  <b-col lg="4" class="pb-2">
                    <router-link
                      :to="{
                        name: 'product',
                        params: { productId: product.id }
                      }"
                    >
                      <b-button size="sm" class="sb-btn" pill
                        ><i class="bx bxs-edit"></i> Detail</b-button
                      >
                    </router-link>
                  </b-col>
                  <b-col lg="4" class="pb-2"
                    ><b-button
                      size="sm"
                      class="sb-btn"
                      pill
                      @click="addToCart(product), makeToast('success')"
                      ><i class="bx bx-cart-alt"></i> Add to cart</b-button
                    ></b-col
                  >
                </b-row>
              </b-media>
            </b-card>
          </div>
        -->
          <br />
    </div>
  </div>
</template>
<script>
import ProductDisplay from './ProductDisplay.vue';
import { mapMutations } from 'vuex';
export default {
  props: {
    products: null
  },
  components: { ProductDisplay },
  name: "PaginationComponent",
  methods: {
    ...mapMutations('cart', {
      addToCart: 'addToCart'
    }),
  }
};
</script>
<style scoped>

.catalog {
      /* From https://css.glass */
background: rgba(255, 255, 255, 0.07);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.7px);
-webkit-backdrop-filter: blur(1.7px);
border: 1px solid rgba(255, 255, 255, 0.25);
overflow-y: scroll;
height: 490px;
padding: 2px;
  /*
            height: 490px;
            overflow-y: scroll;
            
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            
            padding: 5px;
            background-color: var(--body-color);
        */
          }
</style>
