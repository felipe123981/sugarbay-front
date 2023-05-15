<template>
  <div>
    <div class="box1">
      <h3 class="header-title">Tell us about your product:</h3>
      <div class="box2">
        <Uploader
          style="color: white"
          v-model="fileList"
          :url="remoteUrl"
          title="Upload atleast 3 pics or videos"
          @on-change="onChange"
          @on-cancel="onCancel"
          @on-success="onSuccess"
          @on-error="onError"
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
            label-for="input-1"
            description="This is how your product will appear to customers."
          >
            <b-form-input
              class="form"
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
            label-for="input-1"
            description=""
          >
            <b-form-input
              class="form-number"
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
            label="Price:"
            label-for="input-1"
            description=""
          >
            <b-form-input
              class="form-price"
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
        type="submit"
        @click="registerProduct"
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
import axiosConfig from "@/modules/axiosConfig";
import Uploader from "vux-uploader-component";

export default {
  name: "ProductRegister",
  components: {
    Uploader
  },
  async mounted() {
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
      fileList: [],
      show: true,
      form: []
    };
  },
  methods: {
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
    async registerProduct() {
      await axiosConfig
        .post("/products", {
          name: this.form.name,
          price: this.form.price,
          quantity: this.form.quantity
        })
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateProduct() {
      await axiosConfig
        .put("products/" + this.product.id, {
          name: this.form.name,
          quantity: this.form.quantity,
          price: this.form.price
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};
</script>
<style scoped>
.header-title {
  padding-top: 8px;
  padding-left: 30px;
}
.form {
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
