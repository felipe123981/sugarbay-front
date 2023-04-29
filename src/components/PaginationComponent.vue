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
.sb-btn {
  background-color: rgb(0, 110, 255);
  border: 1px white solid;
  width: auto;
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
.product-display {
  width: 70vw;
}
.catalog {
            height: 490px;
            overflow-y: scroll;
            
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            
            padding: 5px;
            background-color: var(--body-color);
        }
</style>
