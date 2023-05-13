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
      <b-card class="sb-cart">
        <b-media class="sb-media float-left">
          <h5 class="mt-0 product-name">{{ product.name }}</h5>
          <div class="img-wrapper">
            <input
              type="number"
              style="
                text-align: right;
                width: 30px;
                position: relative;
                border: 0;
              "
              :placeholder="page"
              v-model="page"
              disabled
            />/{{ images.length }}

            <VueSlickCarousel
              @swipe="getCurrentSlick(slides[0].childNodes)"
              @afterChange="getCurrentSlick(slides[0].childNodes)"
              v-bind="settings"
              class="VSCarrousel"
            >
              <div
                v-for="(image, index) in images"
                :key="index"
                :class="'image-' + (index + 1)"
              >
                <img :alt="'image-' + (index + 1)" :src="image" />
              </div>
            </VueSlickCarousel>
          </div>
          <!--

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

          -->
          <hr />
          <div>
            <b-card no-body>
              <b-tabs card style="background-color: var(--primary-color-light)">
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
                            <del style="color: gray">U$ 400.00</del>
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
                                  style="color: gray"
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
                          <p class="quantity-content quantity-content">
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
                          <p
                            v-if="product.quantity - item_quantity > 0"
                            class="stock-content info-content"
                          >
                            {{ product.quantity - item_quantity }}
                          </p>
                          <p v-else class="stock-content info-content">
                            Empty!
                          </p>
                        </div>
                        <br />
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
      <br />
      <div id="shop-buttons">
        <p>
          <b-button pill class="sb-btn" variant="primary">
            <i class="bx bx-shopping-bag"></i> Buy
          </b-button>
        </p>
        <p>
          <b-button pill class="sb-btn" variant="primary">
            <i class="bx bx-cart-alt"></i> Add to cart
          </b-button>
        </p>
      </div>

      <div id="sugestions">
        <p style="font-size: 18px">More from this vendor:</p>
        <Pagination :products="paginated_products[currentPage - 1]" />
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
      <br />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axiosConfig from "@/modules/axiosConfig";
import Pagination from "@/components/PaginationComponent.vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, Pagination },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      paginated_products: [],
      page: 1,
      slides: document.getElementsByClassName("slick-dots"),
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
        arrows: true,
        touchMove: true,
        useCSS: true,
        dots: true,
        infinite: true,
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
    rows() {
      return this.vendor_products.length;
    },
    ...mapGetters("products", {
      getProductById: "getProductById"
    }),
    ...mapGetters("products", {
      getProducts: "getProducts"
    })
  },
  async mounted() {
    this.fetchProducts();
    await axiosConfig
      .get("/products/" + this.$route.params.productId)
      .then((resp) => {
        this.product = resp.data;
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });
    this.vendor_products = this.getProducts; // this method needs a filter like "getProductsByVendor(vendor: string): []"
    //console.log(this.vendor_products);
    this.paginated_products = this.paginate(this.vendor_products, this.perPage);
    //console.log(this.paginated_products);
  },
  methods: {
    ...mapMutations("products", {
      fetchProducts: "fetchProducts"
    }),
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
    },
    getCurrentSlick(childNodes) {
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].className.endsWith("slick-active")) {
          this.page = i + 1;
          return i + 1;
        }
      }
    },
    currentPosition() {
      const currentSlide = this.$refs.carousel.currentSlide;
      return `${currentSlide + 1}/${this.images.length}`;
    },
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
  color: gray;
  background-color: #eff6e0;
  padding-left: 10px;
  border-radius: 15px;
  padding: 10px;
}
.price-content {
  min-width: 200px;
}
.color-content {
}
.size-content {
}
.quantity-content {
}
.stock-content {
}
.total-content {
}
.sb-media {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.23);
}
.product-name {
  padding: 10px;
  color: var(--text-color);
}
.sb-cart {
  background-color: var(--primary-color-light);
}

*-content {
  color: gray;
}
#shop-buttons {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.sb-btn {
  background-color: rgb(0, 110, 255);
  border: 1px white solid;
  width: 25vh;
}
.pagination-component {
  float: right;
  width: 100%;
}
</style>
