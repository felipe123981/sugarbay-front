<template>
  <div>
    <div>
      <b-card no-body style="background-color: var(--primary-color-light)">
        <b-tabs pills card vertical>
          <b-tab title="Account" active
            ><b-card-text>
              <!--

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
                      >
                    </b-dropdown>
                  </div>
                </b-col>

                -->

              <h5><i class="bx bxs-user-account"></i> User info:</h5>
              <b-row>
                <AvatarInput @pick_image="setImage"></AvatarInput>
              </b-row>
              <br />
              <b-form autocomplete="off" id="form" name="form" method="post">
                <b-form-input
                  autocomplete="false"
                  name="hidden"
                  type="text"
                  style="display: none"
                ></b-form-input>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-1"
                      label="Nickname:"
                      label-for="input-1"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
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
                      id="input-group-2"
                      label="First name:"
                      label-for="input-2"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb"
                        id="input-2"
                        v-model="form.firstname"
                        type="text"
                        placeholder="ex: Michael"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-11"
                      label="Last name:"
                      label-for="input-11"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb"
                        id="input-11"
                        v-model="form.lastname"
                        type="text"
                        placeholder="ex: Morris"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="input-group-3"
                      label="Gender:"
                      label-for="input-3"
                      description=""
                    >
                      <div>
                        <b-dropdown
                          id="dropdown-1"
                          :text="selected_gender"
                          class="gender-select"
                          :disabled="lockform"
                        >
                          <b-dropdown-item
                            v-for="gender in gender"
                            :key="gender"
                            @click="selectGender(gender)"
                            >{{ gender }}</b-dropdown-item
                          >
                        </b-dropdown>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-12"
                      label="Birthday:"
                      label-for="input-12"
                      description=""
                    >
                      <div>
                        <DataPicker
                          :disabled="lockform"
                          @birthdate-changed="changeDate"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>

                <hr />
                <h5><i class="bx bxs-notepad"></i> Contact info:</h5>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-4"
                      label="Email address:"
                      label-for="input-4"
                      description="We'll never share your email with anyone else."
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb"
                        id="input-4"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="input-group-5"
                      label="Phone number:"
                      label-for="input-5"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb"
                        id="input-5"
                        v-model="form.phone"
                        type="phone"
                        placeholder="(555) 555-1234"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <hr />
                <h5><i class="bx bxs-map-pin"></i> Shippment info:</h5>
                <b-form-group
                  id="input-group-6"
                  label="Zipcode:"
                  label-for="input-6"
                  description=""
                >
                  <b-form-input
                    autocomplete="off"
                    readonly
                    @focus="enableInput"
                    class="form-sb-2"
                    id="input-6"
                    v-model="form.zipcode"
                    type="text"
                    placeholder="ex: 437300"
                    :disabled="lockform"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-7"
                  label="Address:"
                  label-for="input-7"
                  description=""
                >
                  <b-form-input
                    autocomplete="off"
                    readonly
                    @focus="enableInput"
                    style="min-width: 235px"
                    id="input-7"
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
                      id="input-group-8"
                      label="City:"
                      label-for="input-8"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb-2"
                        id="input-8"
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
                      id="input-group-9"
                      label="State:"
                      label-for="input-9"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb-2"
                        id="input-9"
                        v-model="form.state"
                        type="text"
                        placeholder="ex: Missoury"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-10"
                      label="Country:"
                      label-for="input-10"
                      description=""
                    >
                      <b-form-input
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        class="form-sb-2"
                        id="country"
                        name="country"
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
                      label="Pick up method"
                      v-slot="{ ariaDescribedby }"
                    >
                      <b-form-radio-group
                        id="radio-group-1"
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="radio-sub-component"
                      >
                        <b-form-radio :disabled="lockform" value="at home"
                          >at home</b-form-radio
                        >
                        <br />
                        <b-form-radio :disabled="lockform" value="post office"
                          >post office</b-form-radio
                        >
                      </b-form-radio-group>
                    </b-form-group>
                  </b-col>
                </b-row>
                <br />
                <hr />
                <h5><i class="bx bx-lock-open"></i> Security:</h5>
                <b-row>
                  <b-col>
                    <b-form-group
                      autocomplete="off"
                      readonly
                      @focus="enableInput"
                      id="input-group-13"
                      label="New password:"
                      label-for="password"
                      description=""
                    >
                      <b-form-input
                        class="form-sb-2"
                        name="new-password"
                        id="new-password"
                        autocomplete="off"
                        readonly
                        v-model="form.password"
                        @focus="enableInput"
                        type="password"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group
                      aria-autocomplete="off"
                      id="input-group-14"
                      label="Confirm password:"
                      label-for="confirm_password"
                      description=""
                    >
                      <b-form-input
                        class="form-sb-2"
                        name="confirm-password"
                        id="confirm-password"
                        autocomplete="off"
                        readonly
                        v-model="form.password_confirmation"
                        @focus="enableInput"
                        type="password"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group
                      aria-autocomplete="off"
                      id="input-group-15"
                      label="Old password:"
                      label-for="old_password"
                      description=""
                    >
                      <b-form-input
                        class="form-sb-2"
                        name="old-password"
                        id="old-password"
                        v-model="form.old_password"
                        autocomplete="off"
                        readonly
                        @focus="enableInput"
                        type="password"
                        :disabled="lockform"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-button pill variant="primary">Save</b-button>
              </b-form>
            </b-card-text></b-tab
          >
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
import DataPicker from "@/components/DataPicker.vue";
//import TypeSelector from "@/components/TypeSelector.vue";
import axiosConfig from "@/modules/axiosConfig";
export default {
  name: "UserView",
  props: {
    searchQuery: undefined
  },
  components: {
    AvatarInput,
    DataPicker
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
      perPage: 15,
      my_products: [],
      paginated_products: [],
      lockform: false,
      gender: ["Male", "Female", "Other"],
      form: {
        name: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        avatar: "",
        gender: "",
        birthdate: "",
        zipcode: "",
        state: "",
        city: "",
        country: "",
        pick_up_method: "at home",
        password: "",
        password_confirmation: "",
        old_password: ""
      },
      selected_gender: "Select one",
      selected: "at home",
      show: true,
      isHovered: false
    };
  },
  watch: {
    selected(newValue) {
      this.form.pick_up_method = newValue;
    },
    token(newValue) {
      if (newValue == "") {
        this.form = {
          name: "",
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          avatar: "",
          birthdate: "",
          zipcode: "",
          state: "",
          city: "",
          country: "",
          password: "",
          password_confirmation: "",
          old_password: ""
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
    selectGender(value) {
      this.selected_gender = value;
      this.form.gender = value;
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
    changeDate(value) {
      this.form.birthdate = value;
    },
    setImage(value) {
      this.form.avatar = value;
    },
    enableInput(event) {
      event.target.removeAttribute("readonly");
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
.security {
  width: 70vw;
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
