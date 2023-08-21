<template>
  <div>
    <div class="box1">
      <h3 class="header-title">Tell us about your product:</h3>
      <div class="box2">
        <Uploader
          name="photos"
          style="color: white"
          v-model="fileList"
          :url="`${api_url}products/photos/` + form.id"
          title="Upload atleast 3 pics or videos"
          @on-change="onChange"
          @on-cancel="onCancel"
          @on-success="onSuccess"
          @on-error="onError(fileList)"
          @on-delete="onDelete"
        ></Uploader>
      </div>
    </div>
    <br />
    <b-form @reset="onReset" v-if="show">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Product name:"
            class="form form-name"
            label-for="input-1"
            description="This is how your product will appear to customers."
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              placeholder="ex: ProductXYZ"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Quantity:"
            class="form form-quantity"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="input-1"
              v-model="form.quantity"
              type="number"
              placeholder="0"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            class="form form-price"
            label="Price:"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="input-1"
              v-model="form.price"
              type="text"
              placeholder="ex: 33.20"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button
        v-if="form.length == 0"
        @click="registerProduct(form)"
        variant="primary"
        >Register</b-button
      >
      <b-button v-else type="submit" @click="updateProduct" variant="primary"
        >Update</b-button
      >
    </b-form>
    {{ print }}
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";
import Uploader from "vux-uploader-component";

export default {
  name: "ProductRegister",
  components: {
    Uploader
  },
  computed: {},
  async mounted() {
    this.token = readCookie(document.cookie);
    await axiosConfig
      .get("/products/" + this.$route.params.productId)
      .then((resp) => {
        this.form = resp.data;
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });
  },
  data() {
    return {
      /*

      form: [
        {
          name: "",
          quantity: 0,
          price: "free",
          model: "",
          brand: "",
          box_dimensions: [
            {
              hight: 0,
              width: 0,
              lenght: 0
            }
          ]
        }
      ]
      */
      product_id: null,
      token: null,
      api_url: axiosConfig.defaults.baseURL,
      fileName: null,
      fileList: [],
      show: true,
      form: []
    };
  },
  methods: {
    ...mapMutations("products", {
      removeFromProducts: "removeFromProducts"
    }),
    async sendPhotos(fileList) {
      let formData = new FormData();

      fileList.forEach((file, index) => {
        console.log(`file ${index}:`, file);
        formData.append("photos", file.blob);
      });
      await axiosConfig
        .post(`products/photos/${this.form.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `token ${this.token}`
          }
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch(() => {
          
          this.removeFromProducts(this.form);
          this.$bvToast.toast("Cannot upload pics. Try again.", {
            title: "Failed",
            variant: "danger",
            solid: true
          });
        });
    },
    onError(event) {
      console.log(event);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.price = "";
      this.form.name = "";
      this.form.quantity = 0;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    //warning
    async registerProduct(form) {
      if (this.fileList.length >= 3) {
        await axiosConfig
          .post(
            "/products",
            {
              name: form.name,
              price: form.price,
              quantity: form.quantity
            },
            {
              headers: {
                Authorization: `token ${this.token}`
              }
            }
          )
          .then((resp) => {
            this.form.id = resp.data.id;
          })
          .catch((error) => {
            console.log(error);
          });

        await this.sendPhotos(this.fileList);

        const status = axiosConfig
          .get(`products/${this.form.id}`)
          .then((resp) => {
            return resp.status;
          });
        if (status == 200) {
          this.$bvToast.toast("Your product is now for sale!", {
            title: "Successfully registered",
            variant: "success",
            solid: true
          });
        }

        this.$route.params.productId = this.form.id;
      } else {
        this.$bvToast.toast("Upload atleast 3 pics of your product.", {
          title: "Failed",
          variant: "danger",
          solid: true
        });
      }
    },
    async updateProduct() {
      await axiosConfig
        .put(
          "products/" + this.form.id,
          {
            name: this.form.name,
            quantity: this.form.quantity,
            price: this.form.price
          },
          {
            headers: {
              Authorization: `token ${this.token}`
            }
          }
        )
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.header-title {
  padding-top: 8px;
  padding-left: 30px;
}
.form {
  color: var(--text-color);
}
.form-name {
  width: 60vw;
}
.form-number {
  width: 15vw;
}
.form-price {
  width: 20vw;
}
.box1 {
  background-color: #c6d8d3;
  width: 70vw;
}
.box2 {
  background-color: var(--secondary);
}
.uploader-title {
  color: white;
}

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
  content: " ";
  display: block;
  height: 0;
}
</style>
