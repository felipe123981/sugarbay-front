<template>
  <div>
    <div>
      <b-card no-body style="background-color: var(--primary-color-light)">
        <b-tabs pills card vertical>
          <b-tab title="Account" active
            ><b-card-text>
              <b-row>
                <b-col lg="4" class="pb-2">
                  <h3>Edit profile</h3>
                </b-col>
                <b-col lg="4" class="pb-2">
                  <div>
                    <b-dropdown variant="primary">
                      <template #button-content>
                        <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                        Settings
                      </template>
                      <b-dropdown-item-button
                        v-if="lockform"
                        @click="lockUnlockForm"
                      >
                        <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                        Locked <span class="sr-only">(Click to unlock)</span>
                      </b-dropdown-item-button>
                      <b-dropdown-item-button v-else @click="lockUnlockForm">
                        <b-icon icon="unlock-fill" aria-hidden="true"></b-icon>
                        Unlocked
                        <span class="sr-only"
                          >(Click to unlock)</span
                        > </b-dropdown-item-button
                      ><!--
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-group header="Choose options" class="small">
                        <b-dropdown-item-button>
                          <b-icon icon="blank" aria-hidden="true"></b-icon>
                          Option A <span class="sr-only">(Not selected)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-item-button>
                          <b-icon icon="check" aria-hidden="true"></b-icon>
                          Option B <span class="sr-only">(Selected)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-item-button>
                          <b-icon icon="blank" aria-hidden="true"></b-icon>
                          Option C <span class="sr-only">(Not selected)</span>
                        </b-dropdown-item-button>
                      </b-dropdown-group>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item-button
                        >Some action</b-dropdown-item-button
                      >
                      <b-dropdown-item-button
                        >Some other action</b-dropdown-item-button
                      >
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item-button variant="danger">
                        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                        Delete
                      </b-dropdown-item-button>
                      -->
                    </b-dropdown>
                  </div>
                </b-col>
              </b-row>
              <hr />

              <p>User information:</p>
              <b-row>
                <AvatarInput></AvatarInput>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="CPF:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb"
                      id="input-1"
                      v-model="form.pid"
                      type="cpf"
                      placeholder="888.888.888-88"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Phone number:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb"
                      id="input-1"
                      v-model="form.phome"
                      type="phone"
                      placeholder="(555) 555-1234"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Username:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb"
                      id="input-1"
                      v-model="form.name"
                      type="text"
                      placeholder="ex: Michael123"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      class="form-sb"
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      placeholder="Enter email"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="First name:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb"
                      id="input-1"
                      v-model="form.firstname"
                      type="text"
                      placeholder="ex: Michael"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Last name:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb"
                      id="input-1"
                      v-model="form.lastname"
                      type="text"
                      placeholder="ex: Morris"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <hr />
              <p>Contact information:</p>
              <b-form-group
                id="input-group-1"
                label="Address:"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  style="min-width: 235px"
                  id="input-1"
                  v-model="form.address"
                  type="text"
                  placeholder="ex: Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  :disabled="lockform"
                  required
                ></b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="City:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb-2"
                      id="input-1"
                      v-model="form.city"
                      type="text"
                      placeholder="ex: New York"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Country:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb-2"
                      id="input-1"
                      v-model="form.country"
                      type="text"
                      placeholder="ex: United States"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Zipcode:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      class="form-sb-2"
                      id="input-1"
                      v-model="form.zipcode"
                      type="text"
                      placeholder="ex: 437300"
                      :disabled="lockform"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row> </b-card-text
          ></b-tab>
          <b-tab title="My products"
            ><b-card-text>
              <h3>Your product list:</h3>
              <br />
              <b-col cols="4">
                <div class="card-alt h-100">
                  <img
                    src="@/assets/img/product.png"
                    width="150px"
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <div>
                      <b-button
                        v-b-modal.modal-1
                        class="add_new"
                        variant="primary"
                        ><i class="bx bxs-plus-circle"></i> Add new</b-button
                      >
                      <b-modal id="modal-1" title="Type of your product">
                        <p class="my-4">
                          <b-container>
                            <b-row>
                              <b-col cols="4" style="padding-left: 1px">
                                <div class="card-alt h-100">
                                  <img
                                    src="@/assets/img/product.png"
                                    width="150px"
                                    class="card-img-top"
                                  />
                                  <div class="card-body">
                                    <div>
                                      <router-link to="/register">
                                        <b-button
                                          class="add_new"
                                          variant="primary"
                                          size="sm"
                                          >Product
                                        </b-button>
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                              </b-col>
                              <b-col cols="4" style="padding-left: 10vh">
                                <div class="card-alt h-100">
                                  <img
                                    src="@/assets/img/vehicle.png"
                                    width="150px"
                                    class="card-img-top"
                                  />
                                  <div class="card-body">
                                    <div>
                                      <b-button
                                        class="add_new"
                                        variant="primary"
                                        size="sm"
                                        >Vehicle</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </b-col>
                            </b-row>
                          </b-container>
                          <b-container>
                            <b-row>
                              <b-col cols="4" style="padding-left: 1px">
                                <div class="card-alt h-100">
                                  <img
                                    src="@/assets/img/house.png"
                                    width="150px"
                                    class="card-img-top"
                                  />
                                  <div class="card-body">
                                    <div>
                                      <b-button
                                        class="add_new"
                                        variant="primary"
                                        size="sm"
                                        >House</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </b-col>
                              <b-col cols="4" style="padding-left: 10vh">
                                <div class="card-alt h-100">
                                  <img
                                    src="@/assets/img/customer-service.png"
                                    width="150px"
                                    class="card-img-top"
                                  />
                                  <div class="card-body">
                                    <div>
                                      <b-button
                                        class="add_new"
                                        variant="primary"
                                        size="sm"
                                        >Service</b-button
                                      >
                                    </div>
                                  </div>
                                </div>
                              </b-col>
                            </b-row>
                          </b-container>
                        </p>
                      </b-modal>
                    </div>
                  </div>
                </div>
              </b-col>
              <br />
              <div class="catalog">
                <div
                  v-for="product in paginated_products[currentPage - 1]"
                  :key="product.id"
                >
                  <div class="product-display">
                    <b-card style="background-color: var(--sidebar-color)">
                      <b-media>
                        <template #aside>
                          <div class="img-wrapper">
                            <button
                              @click="addToFavorites(product)"
                              class="btn btn-sm outline-primary btn-like"
                            >
                              <i class="bx bxs-heart"></i>
                            </button>
                            <b-img
                              class="img-responsive"
                              :src="`${api_url}files/` + product.photos[0]"
                              alt="placeholder"
                            >
                              <div class="img-overlay"></div
                            ></b-img>
                          </div>
                        </template>

                        <h5 class="mt-0">
                          {{ product.name }} - U$ {{ product.price }}
                        </h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </p>
                        <b-row>
                          <b-col lg="4" class="pb-2">
                            <router-link :to="'/register/' + product.id">
                              <b-button
                                size="sm"
                                class="registered-products-button"
                                pill
                                variant="primary"
                                ><i class="bx bx-edit-alt"></i> Edit</b-button
                              >
                            </router-link>
                          </b-col>

                          <b-col lg="4" class="pb-2">
                            <b-button
                              @click="
                                removeElement(paginated_products, product)
                              "
                              size="sm"
                              class="registered-products-button"
                              pill
                              variant="danger"
                              ><i class="bx bx-trash"></i> Remove</b-button
                            >
                          </b-col>
                        </b-row>
                      </b-media>
                    </b-card>
                  </div>
                  <br />
                </div>
              </div>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                prev-text="Prev"
                next-text="Next"
              ></b-pagination> </b-card-text
          ></b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
//import { removeElement } from "@/modules/pagination"
//import Pagination from "@/components/PaginationComponent.vue";
import { mapGetters, mapMutations, mapState, mapActions } from "vuex";
import AvatarInput from "@/components/AvatarInput.vue";
//import TypeSelector from "@/components/TypeSelector.vue";
import axiosConfig from "@/modules/axiosConfig";
export default {
  name: "UserView",
  components: {
    AvatarInput
    // Pagination
  },
  async mounted() {
    this.fetchProducts();
    await this.fetchProfile();
    setTimeout(() => {
      this.my_products = this.getProducts;
      this.paginated_products = this.paginate(this.my_products, this.perPage);
    }, 500);
    if (this.getProfile != undefined) {
      this.form = this.getProfile;
    }
  },
  data() {
    return {
      api_url: axiosConfig.defaults.baseURL,
      currentPage: 1,
      perPage: 5,
      my_products: [],
      paginated_products: [],
      lockform: true,
      form: {
        phone: "",
        id: "",
        city: "",
        country: "",
        zipcode: "",
        address: "",
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        name: "",
        food: null,
        checked: []
      },
      show: true,
      isHovered: false
    };
  },
  watch: {
    token(newValue) {
      if (newValue == "") {
        this.form = {
          phone: "",
          id: "",
          city: "",
          country: "",
          zipcode: "",
          address: "",
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          name: "",
          food: null,
          checked: []
        };
      }
    }
  },
  computed: {
    rows() {
      return this.my_products.length;
    },
    ...mapState({
      token: (state) => state.session.token
    }),
    ...mapGetters("products", {
      getProducts: "getProducts"
    }),
    ...mapGetters("profile", {
      getProfile: "getProfile"
    })
  },
  methods: {
    ...mapActions("profile", {
      fetchProfile: "fetchProfile"
    }),
    ...mapMutations("favorites", {
      addToFavorites: "addToFavorites"
    }),
    ...mapMutations("products", {
      fetchProducts: "fetchProducts"
    }),
    ...mapMutations("products", {
      removeFromProducts: "removeFromProducts"
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
    removeElement(array, element) {
      if (!this.token) {
        alert("Login required.");
      } else {
        if (confirm("Are you sure?")) {
          const idx = array[this.currentPage - 1].findIndex(
            (o) => o.id === element.id
          );
          array[this.currentPage - 1].splice(idx, 1);
          this.removeFromProducts(element);
        }
      }
    },
    lockUnlockForm() {
      this.lockform = this.lockform ? false : true;
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.phone = "";
      this.form.id = "";
      this.form.city = "";
      this.form.country = "";
      this.form.zipcode = "";
      this.form.address = "";
      this.form.firstname = "";
      this.form.lastname = "";
      this.form.username = "";
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
.text-muted {
  color: var(--text-color);
}
.catalog {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.7px);
  -webkit-backdrop-filter: blur(1.7px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  overflow-y: scroll;
  height: 490px;
  padding: 2px;
}
.btn-like {
  position: absolute;
  padding-left: 3.05rem;
  color: #ccc;
}
.btn-like:hover {
  color: rgb(216, 25, 25);
}
.img-wrapper {
  position: relative;
}

.img-responsive {
  height: 70px;
  width: 70px;
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
.form-sb {
  width: 28vw;
  min-width: 230px;
}
.form-sb-2 {
  width: 20vw;
  min-width: 236px;
}
.row-alt {
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.add_new {
  width: 50%;
  min-width: 120px;
}
.card-alt {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 160px;
  word-wrap: break-word;
  background-color: var(--sidebar-color);
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.add_new-modal {
  width: 100%;
  min-width: 147px;
}
.card-modal {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 195px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.registered-products-button {
  width: 115px;
}
.product-display {
  width: 70vw;
}
.myProducts {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.7px);
  -webkit-backdrop-filter: blur(1.7px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  overflow-y: scroll;
  height: 490px;
  padding: 2px;
}
</style>
