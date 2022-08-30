<template>
  <div>
    <div>
      <b-card no-body>
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
                      <b-dropdown-item-button>
                        <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                        Locked <span class="sr-only">(Click to unlock)</span>
                      </b-dropdown-item-button>
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
                    </b-dropdown>
                  </div>
                </b-col>
              </b-row>
              <hr />

              <p>User information:</p>

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
                      v-model="form.username"
                      type="text"
                      placeholder="ex: Michael123"
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
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row> </b-card-text
          ></b-tab>
          <b-tab title="My products"
            ><b-card-text>
              <h3>Tell us the type of product you want to register:</h3>
              <b-container>
                <b-row>
                  <b-col>
                    <div class="container">
                      <div class="row-alt">
                        <div class="col-md-3 col-6 my-1">
                          <div class="card h-100">
                            <img
                              src="@/assets/img/product.png"
                              width="150px"
                              class="card-img-top"
                            />
                            <div class="card-body">
                              <div>
                                <b-button variant="primary">Product</b-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <TypeSelector></TypeSelector> -->

                    <b-container>
                      <b-row>
                        <b-col>col</b-col>
                        <b-col>col</b-col>
                        <b-col>col</b-col>
                        <b-col>col</b-col>
                      </b-row>
                      <!--
                      <div class="row-alt">
                        <div class="col-md-3 col-6 my-1">
                          <div class="card h-100">
                            <img
                              src="@/assets/img/vehicle.png"
                              width="150px"
                              class="card-img-top"
                            />
                            <div class="card-body">
                              <div>
                                <b-button variant="primary">Vehicle</b-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      -->
                    </b-container>
                  </b-col>
                </b-row>
              </b-container>
            </b-card-text></b-tab
          >
          <b-tab title="Preferences"
            ><b-card-text>Tab contents 2</b-card-text></b-tab
          >
          <b-tab title="Privacy and security"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
//import TypeSelector from "@/components/TypeSelector.vue";
export default {
  name: "UserView",
  components: {
    //TypeSelector,
  },

  data() {
    return {
      form: {
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
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      isHovered: false,
    };
  },
  methods: {
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
    },
  },
};
</script>
<style scoped>
.form-sb {
  width: 28vw;
  min-width: 230px;
}
.form-sb-2 {
  width: 20vw;
  min-width: 230px;
}
.row-alt {
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
