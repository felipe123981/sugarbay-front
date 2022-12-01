<template>
  <div>
    <br />
    <h3>Orders:</h3>
    <HeaderNavbar></HeaderNavbar>
    <br />
    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="My cart" active
            ><b-card-text>
              <div v-if="!getCartLength">
                <h5>Your cart is empty!</h5>
              </div>
              <b-card class="cart-item" v-for="item in getCart" :key="item.id">
                <b-media>
                  <template #aside>
                    <div class="img-wrapper">
                      <button
                        @click="addFavorite(product)"
                        class="btn btn-sm outline-primary btn-like"
                      >
                        <i class="bx bxs-heart"></i>
                      </button>
                      <b-img
                        class="img-responsive"
                        blank
                        blank-color="#ccc"
                        width="70"
                        alt="placeholder"
                      >
                        <div class="img-overlay"></div
                      ></b-img>
                    </div>
                  </template>

                  <h5 class="mt-0">{{ item.name }}</h5>

                  <p>
                    <b-row>
                      <b-col>
                        Price: {{ (item.price * item.quantity).toFixed(2) }}
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <div>
                          <label for="sb-inline">Quantity: </label><br />
                          <b-form-spinbutton
                            id="sb-inline"
                            v-model="item.quantity"
                            inline
                          ></b-form-spinbutton>
                        </div>
                      </b-col>
                    </b-row>
                  </p>
                  <b-row>
                    <b-col lg="4" class="pb-2">
                      <b-button size="sm" pill
                        ><i class="bx bx-cart-alt"></i> Checkout</b-button
                      ></b-col
                    >

                    <b-col lg="4" class="pb-2">
                      <b-button
                        variant="danger"
                        size="sm"
                        pill
                        @click.prevent="removeFromCart(item)"
                        ><i class="bx bxs-trash"></i> Remove</b-button
                      >
                    </b-col>
                  </b-row>
                </b-media>
              </b-card>
              <br />
              Total: {{ this.getTotal.toFixed(2) }}
              <div class="checkout-all">
                <b-button class="float" variant="warning"
                  ><i class="bx bx-cart-alt"></i> Checkout</b-button
                >
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Orders"
            ><b-card-text>
              <div v-if="pageWidth > 580">
                <b-table hover :items="items">
                  <template #cell(PAYMENT)="data">
                    <span v-html="data.value"></span>
                  </template>
                  <template #cell(SHIPMENT)="data">
                    <span v-html="data.value"></span>
                  </template>
                </b-table>
              </div>
              <div v-else>
                <b-table stacked hover :items="items">
                  <template #cell(PAYMENT)="data">
                    <span v-html="data.value"></span>
                  </template>
                  <template #cell(SHIPMENT)="data">
                    <span v-html="data.value"></span>
                  </template>
                </b-table>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <br />
    <br />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import HeaderNavbar from "@/components/HeaderNavbar.vue";
export default {
  name: "CartView",
  computed: {
    ...mapGetters("cart", {
      getCart: "getCart"
    }),
    ...mapGetters("cart", {
      getTotal: "getTotal"
    }),
    ...mapGetters("cart", {
      getCartLength: "getCartLength"
    })
  },
  mounted() {
    this.pageWidth = document.body.clientWidth;
  },
  data() {
    return {
      pageWidth: 0,
      items: [
        {
          ID: "#01",
          ORDER_DATE: "Yesterday",
          PAYMENT:
            "<button type='button' class='btn btn-warning btn-sm' style='border-radius:20px'>PENDING</button>",
          SHIPMENT:
            "<button type='button' class='btn btn-warning btn-sm' style='border-radius:20px'>OPEN</button>"
        },
        {
          ID: "#02",
          ORDER_DATE: "4 days ago",
          PAYMENT:
            "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>SEATLED</button>",
          SHIPMENT:
            "<button type='button' class='btn btn-warning btn-sm' style='border-radius:20px'>OPEN</button>"
        },
        {
          ID: "#03",
          ORDER_DATE: "11 days ago",
          PAYMENT:
            "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>SEATLED</button>",
          SHIPMENT:
            "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>SHIPPED</button>"
        },
        {
          ID: "#04",
          ORDER_DATE: "2 months ago",
          PAYMENT:
            "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>SEATLED</button>",
          SHIPMENT:
            "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>SHIPPED</button>"
        }
      ]
    };
  },
  methods: {
    ...mapMutations("cart", {
      fetchTotal: "fetchTotal"
    }),
    ...mapMutations("cart", {
      removeFromCart: "removeFromCart"
    }),
  },
  components: { HeaderNavbar }
};
</script>
<style scoped>
.float {
  position: fixed;
  width: 8rem;
  height: 40px;
  bottom: 30px;
  right: 20px;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}

.checkout-all {
  padding-left: 31vw;
}
.cart-item {
  width: 63vw;
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
</style>
