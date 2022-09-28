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
    <b-form  @reset="onReset" v-if="show">
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
      <b-button type="submit" @click="registerProduct" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>
<script>
  import axios from "axios";
  import Uploader from "vux-uploader-component";

export default {
  name: "ProductRegister",
  components: {
    Uploader,
  },
  data() {
    return {
      fileList: [],
      show: true,
      form: [
        {
          name: "",
          quantity: 0,
          price: "free",
        },
      ],
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
    async registerProduct() {
      await axios.post("http://localhost:3333/products", {
        name: this.form.name,
        price: this.form.price,
        quantity: this.form.quantity,
      })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
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
  background-color: darkslategray;
}
.uploader-title {
  color: white;
}
</style>
