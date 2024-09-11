<template>
  <div>
    <br />
    <div class="address">
      <div>
        <p class="container-sm1">
          <i class="bx bx-map"></i> Your postal code here...
          <i
            style="position: right"
            class="bx bxs-chevron-right chevron-right-sb"
          ></i>
        </p>
      </div>
    </div>
    <div>
      <b-card class="sb-cart">
        <b-media class="sb-media float-left">
          <h5 class="mt-0 product-name">{{ product.name }}</h5>
          <div class="img-wrapper" style="color: var(--text-color)">
            <input
              type="number"
              style="
                text-align: right;
                width: 30px;
                position: relative;
                border: 0;
                color: var(--text-color);
              "
              :placeholder="page"
              v-model="page"
              disabled
            />/{{ product.photos.length }}

            <VueSlickCarousel
              @swipe="getCurrentSlick(slides[0].childNodes)"
              @afterChange="getCurrentSlick(slides[0].childNodes)"
              v-bind="settings"
              class="VSCarrousel"
            >
              <div
                v-for="(image, index) in product.photos"
                :key="index"
                :class="'image-' + (index + 1)"
              >
                <img
                  width="200"
                  height="200"
                  :alt="'image-' + (index + 1)"
                  :src="`${api_url}files/` + image"
                />
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
                            <del style="color: var(--text-color)"
                              >U$ 400.00</del
                            >
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
                                  style="color: var(--text-color)"
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
                    <div class="info-content">
                      <strong> Vendor: </strong>
                    </div>
                    <div class="header">
                      <div class="avatar">
                        <b-avatar variant="secondary"></b-avatar>
                      </div>
                      <div class="username" v-b-modal="'my-modal' + cid">
                        @{{  getCustomerById(product.customer_id).name  }}
                        <br />
                      </div>
                      <!-- The modal -->
                      <b-modal centered ok-only :id="'my-modal' + cid">
                        <div class="modal-container">
                          <h1>{{ getCustomerById(product.customer_id).name  }}</h1>
                          <div class="modal-header">
                            <div class="customer-thumbnail">
                              <b-img
                                thumbnail
                                fluid
                                src="https://picsum.photos/70/70/?image=59"
                                alt="Image 3"
                              ></b-img>
                            </div>
                            <div class="customer-header-description">
                              <div class="customer-name">
                                <p>
                                  {{ getCustomerById(product.customer_id).name  }}
                                </p>
                              </div>
                              <div class="customer-description">
                                Sugarbay official vendor
                              </div>
                            </div>
                          </div>
                          <div class="customer-reputation">
                            <div class="customer-level market-leader">
                              <h3>Market leader</h3>
                            </div>
                            <p>Is a excellent vendor!</p>
                          </div>
                          <div class="ui-gauge">
                            <ul
                              aria-hidden="true"
                              class="ui-thermometer"
                              value="5"
                            >
                              <li
                                class="ui-thermometer__level ui-thermometer__level--1"
                              ></li>
                              <li
                                class="ui-thermometer__level ui-thermometer__level--2"
                              ></li>
                              <li
                                class="ui-thermometer__level ui-thermometer__level--3"
                              ></li>
                              <li
                                class="ui-thermometer__level ui-thermometer__level--4"
                              ></li>
                              <li
                                class="ui-thermometer__level ui-thermometer__level--5"
                              ></li>
                            </ul>
                          </div>

                          <div class="customer-qualities">
                            <div class="customer-sales">
                              <div class="sales-number">
                                <h4>+{{ sales_number }}</h4>
                              </div>
                              <div class="sales-time">
                                <p>sales in the last 60 days!</p>
                              </div>
                            </div>
                            <div class="customer-service">
                              <i class="bx bx-conversation modal-icon"></i>
                              <p>provides good service.</p>
                            </div>
                            <div class="deliver-on-time">
                              <i class="bx bx-timer modal-icon"></i>
                              <p>deliver products on time.</p>
                            </div>
                          </div>
                          <br />
                          <BR></BR>
                          <a href="#" class="about-vendor"
                            >More about this vendor</a
                          >
                        </div>
                      </b-modal>
                    </div>
                    <div v-if="brand" class="info-content">
                      <strong> Brand: </strong>
                    </div>
                    <div v-if="brand" class="description-details">
                      {{ brand }}
                    </div>
                    <div v-if="model" class="info-content">
                      <strong> Model: </strong>
                    </div>
                    <div v-if="model" class="description-details">
                      {{ model }}
                    </div>
                    <div v-if="publisher" class="info-content">
                      <strong> Publisher: </strong>
                    </div>
                    <div v-if="publisher" class="description-details">
                      {{ publisher }}
                    </div>
                    <div v-if="description" class="info-content">
                      <strong> Description: </strong>
                    </div>
                    <div v-if="description" class="description-details">
                      {{ description }}
                    </div>
                  </b-card-text>
                </b-tab>
                <b-tab>
                  <template #title>
                    <i class="bx bx-conversation"></i> Reviews
                  </template>
                  <b-card-text>
                    <!--<div class="catalog">
                      <div v-for="i in 3" :key="i" :id="i">
                        <Comment :cid="i"></Comment>
                        <br>
                      </div>
                    </div>
                    -->
                    <Reviews></Reviews>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-media>
      </b-card>
      <br />
      <div id="shop-buttons">
        <p>
          <router-link to="/checkout">
            <b-button pill class="sb-btn" variant="primary">
              <i class="bx bx-shopping-bag"></i> Buy
            </b-button>
          </router-link>
        </p>
        <p>
          <b-button
            pill
            class="sb-btn"
            variant="primary"
            @click.prevent.stop="
              addToCart(product), makeToast('success'), (product = fetch())
            "
          >
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
import { mapGetters, mapMutations, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axiosConfig from "@/modules/axiosConfig";
import Pagination from "@/components/PaginationComponent.vue";
//import Comment from "@/components/CommentComponent.vue";
import Reviews from "@/components/ReviewInput.vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, Pagination, /*Comment,*/ Reviews },
  data() {
    return {
      api_url: axiosConfig.defaults.baseURL,
      sales_number: 10000,
      username: "Donut_Lavigne",
      brand: "Chevrollet",
      model: "V12",
      publisher: null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      perPage: 15,
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
    }),
    ...mapGetters("customers", {
      getCustomerById: "getCustomerById"
    })
  },

  async mounted() {
    await this.fetchCustomers();
    await this.fetchProducts();
    await axiosConfig
      .get("/products/" + this.$route.params.productId)
      .then((resp) => {
        this.product = resp.data;
      })
      .catch((/*error*/) => {
        //console.log(error);
        return 0;
      });
    this.vendor_products = this.getProducts; // this method needs a filter like "getProductsByVendor(vendor: string): []"
    //console.log(this.vendor_products);
    this.paginated_products = this.paginate(this.vendor_products, this.perPage);
    //console.log(this.getCustomerById(this.product.customer_id));
  },
  methods: {
    ...mapActions("customers", {
      fetchCustomers: "fetchCustomers"
    }),
    ...mapActions("products", {
      fetchProducts: "fetchProducts"
    }),
    ...mapMutations("cart", {
      addToCart: "addToCart"
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
.description-details {
  padding: 1rem;
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
  color: var(--text-color);
  background-color: var(--primary-color-light);
  padding-left: 10px;
  border-radius: 15px;
  padding: 10px;
}
.price-content {
  min-width: 200px;
}
/*
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
*/
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
.ui-thermometer {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  height: auto;
  margin-left: -6px;
  overflow: hidden;
  width: 100%;
}
.modal-icon {
  display: flex;
  justify-content: center;
  font-size: 40px;
}
.sales-number {
  padding: 10px;
}
.deliver-on-time {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 10px;
  border-left: 1px solid black;
}
.customer-sales {
  padding-left: 5px;
  border-right: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.customer-service {
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.ui-thermometer__level {
  border-left: 6px solid #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
  height: 8px;
  margin-top: 2px;
  width: 20%;
}
.ui-thermometer__level--1 {
  background: #fff0f0;
}
.ui-thermometer__level--2 {
  background: #fff5e8;
}
.ui-thermometer__level--3 {
  background: #fffcda;
}
.ui-thermometer__level--4 {
  background: #f1fdd7;
}
.ui-thermometer__level--5 {
  background: #119933;
  height: 12px;
  margin: 0;
  /* 
    background: #edf8ee;
    */
}
.customer-qualities {
  display: flex;
  flex-flow: row nowrap;
}
.customer-reputation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding-left: 15px;
}
.market-leader {
  color: green;
}
.customer-name {
  font-weight: bold;
}
.customer-header-description {
  padding-left: 15px;
}
.modal-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.header {
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-flow: row wrap;
}
.username {
  padding-left: 1vw;
  font-weight: bold;
}
.username:hover {
  color: #822e81;
}
.username:active {
  color: #822e81;
}
.about-vendor {
  color: #822e81;
  cursor: pointer;
}
</style>
