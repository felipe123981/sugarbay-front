<template>
  <div>
    <br />
    <div class="address">
      <div>
        <p class="container-sm1">
          <i class="bx bx-map"></i> Your zipcode here...
          <i
            style="position: right"
            class="bx bxs-chevron-right chevron-right-sb"
          ></i>
        </p>
      </div>
    </div>
    <br />
    <div>
      <b-card>
        <b-media>
          <h5 class="mt-0">{{ product.name }}</h5>
          <VueSlickCarousel v-bind="settings" arrows="true" class="VSCarrousel">
            <div v-for="(image, index) in images" :key="index">
              <img :alt="'image-' + (index + 1)" :src="image" />
            </div>
          </VueSlickCarousel>
          <hr />
          <div>
            <b-card no-body>
              <b-tabs card>
                <b-tab active>
                  <template #title>
                    <i class="bx bx-info-circle"></i> Info
                  </template>
                  <b-card-text>
                    <b-row>
                      <b-col>
                        <div class="price-label">
                          <p class="price-header">Price:</p>
                          <p class="price-content info-content">
                            U$ {{ (product.price * item_quantity).toFixed(2) }}
                            <del>U$ 400.00</del>
                          </p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="color-label">
                          <p class="color-header">Color:</p>
                          <p class="color-content info-content">
                            <b-form-group label="" v-slot="{ ariaDescribedby }">
                              <b-form-radio-group
                                :aria-describedby="ariaDescribedby"
                                name="radio-inline"
                              >
                                <b-form-radio
                                  v-for="(color, index) in colors"
                                  :key="index"
                                  :value="'option' + (index + 1)"
                                  :name="'option' + (index + 1)"
                                  :class="'radio-' + (index + 1)"
                                >
                                  {{ color }}
                                </b-form-radio>
                              </b-form-radio-group>
                            </b-form-group>
                          </p>
                        </div>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <div class="quantity-label">
                          <p class="quantity-header">Quantity:</p>
                          <p class="size-content info-content">
                            <b-form-group class="input-num">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    @click="decrement"
                                  >
                                    -
                                  </button>
                                </div>
                                <b-form-input
                                  type="number"
                                  v-model="item_quantity"
                                  min="0"
                                  :max="product.quantity"
                                  :disabled="disabled"
                                ></b-form-input>
                                <div class="input-group-append">
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    @click="increment"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </b-form-group>
                          </p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="size-label">
                          <p class="size-header">Size:</p>
                          <p class="size-content info-content">
                            <b-form-select
                              class="size-select"
                              v-model="selected"
                              :options="options"
                            ></b-form-select>
                          </p>
                        </div>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <div class="stock-label">
                          <p class="stock-header">Stock:</p>
                          <p v-if="product.quantity - item_quantity > 0" class="size-content info-content">
                            {{ product.quantity - item_quantity }}
                          </p>
                          <p v-else class="size-content info-content">
                            Empty!
                          </p>
                        </div>
                      <br>
                        <div class="total-label">
                          <p class="total-header">Total with freight:</p>
                          <p
                            class="total-content info-content"
                            v-if="item_quantity > 0"
                          >
                            U$
                            {{
                              (
                                product.price * item_quantity +
                                product.price * item_quantity * 0.1 +
                                30
                              ).toFixed(2)
                            }}
                          </p>
                          <p class="total-content info-content" v-else>0</p>
                        </div>
                      </b-col>
                    </b-row>

                    <!--
                    <div class="price-label">
                      <p class="price-header">Price:</p>
                      <p class="price-content info-content">
                        U$ {{ (product.price * item_quantity).toFixed(2) }}
                        <del>U$ 400.00</del>
                      </p>
                    </div>

                    <div class="color-label">
                      <p class="color-header">Color:</p>
                      <p class="color-content info-content">
                        <b-form-group label="" v-slot="{ ariaDescribedby }">
                          <b-form-radio-group
                            :aria-describedby="ariaDescribedby"
                            name="radio-inline"
                          >
                            <b-form-radio
                              v-for="(color, index) in colors"
                              :key="index"
                              value="option1"
                              name="option1"
                              :class="'radio-' + (index + 1)"
                            >
                              {{ color }}
                            </b-form-radio>
                          </b-form-radio-group>
                        </b-form-group>
                      </p>
                    </div>

                    <div class="size-label">
                      <p class="size-header">Size:</p>
                      <p class="size-content info-content">
                        <b-form-select
                          class="size-select"
                          v-model="selected"
                          :options="options"
                        ></b-form-select>
                      </p>
                    </div>

                    <div class="quantity-label">
                      <p class="quantity-header">Quantity:</p>
                      <p class="size-content info-content">
                        <b-form-group class="input-num">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                @click="decrement"
                              >
                                -
                              </button>
                            </div>
                            <b-form-input
                              type="number"
                              v-model="item_quantity"
                              min="0"
                              :max="product.quantity"
                              :disabled="disabled"
                            ></b-form-input>
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                @click="increment"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </b-form-group>
                      </p>
                    </div>

                    <div class="stock-label">
                      <p class="stock-header">Stock:</p>
                      <p class="size-content info-content">
                        {{ product.quantity - item_quantity }}
                      </p>
                    </div>

                    <div class="total-label">
                      <p class="total-header">Total with freight:</p>
                      <p
                        class="total-content info-content"
                        v-if="item_quantity > 0"
                      >
                        U$
                        {{
                          (
                            product.price * item_quantity +
                            product.price * item_quantity * 0.1 +
                            30
                          ).toFixed(2)
                        }}
                      </p>
                      <p class="total-content info-content" v-else>0</p>
                    </div>
                    -->
                  </b-card-text>
                </b-tab>
                <b-tab>
                  <template #title>
                    <i class="bx bxs-purchase-tag"></i> Description
                  </template>
                  <b-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </b-card-text>
                </b-tab>
                <b-tab>
                  <template #title>
                    <i class="bx bx-conversation"></i> Reviews
                  </template>
                  <b-card-text>Tab contents 3</b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-media>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axiosConfig from "@/modules/axiosConfig";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      disabled: false,
      item_quantity: 1,
      selected: 2,
      options: [
        { value: 1, text: "P" },
        { value: 2, text: "M" },
        { value: 3, text: "G" }
      ],
      colors: ["white", "grey", "black"],
      images: [
        "https://placekitten.com/g/200/200",
        "https://placekitten.com/200/200",
        "https://placekitten.com/200/200",
        "https://placekitten.com/g/200/200",
        "https://placekitten.com/200/200",
        "https://placekitten.com/200/200",
        "https://placekitten.com/g/200/200",
        "https://placekitten.com/200/200"
      ],
      product: [],
      settings: {
        touchMove: true,
        useCSS: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters("products", {
      getProductById: "getProductById"
    })
  },
  async mounted() {
    await axiosConfig
      .get("/products/" + this.$route.params.productId)
      .then((resp) => {
        this.product = resp.data;
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });
    console.log(this.product);
  },
  methods: {
    increment() {
      if (this.item_quantity < this.product.quantity) {
        this.item_quantity++;
      }
    },
    decrement() {
      if (this.item_quantity > 0) {
        this.item_quantity--;
      }
    }
  }
};
</script>
<style scoped>
.VSCarrousel {
  width: 80vw;
  padding-left: 10px;
}
.container-sm1 {
  color: var(--text-color);
  position: relative;
  padding: 8px;
  background-color: var(--primary-color);
  border-radius: 15px;
}
.chevron-right-sb {
  position: absolute;
  right: 0;
  padding-right: 10px;
  bottom: 1;
}
.size-select {
  width: 15vh;
}
.input-num {
  width: 22vh;
}
.info-content {
  background-color: #eff6e0;
  padding-left: 10px;
  border-radius: 15px;
  padding: 10px;
}
.price-content {
  min-width: 200px;
}
.color-content {
  min-width: 230px;
}
.size-content {
}
.quantity-content {
}
.stock-content {
}
.total-content {
}
</style>
