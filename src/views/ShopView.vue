<template>
  <div>
    <br>
    <h3>Product info:</h3>
    <br>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div>
        <img src="https://placekitten.com/g/150/150" alt="" />
      </div>
      <div>
        <img src="https://placekitten.com/150/150" alt="" />
      </div>
      <div>
        <img src="https://placekitten.com//150/150" alt="" />
      </div>
      <div>
        <img src="https://placekitten.com/g/150/150" alt="" />
      </div>
      <div>
        <img src="https://placekitten.com/150/150" alt="" />
      </div>
      <div>
        <img src="https://placekitten.com//150/150" alt="" />
      </div>
    </VueSlickCarousel>
    <hr>
    <div>
  <b-card>
    <b-media>
      <template #aside>
        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0"> {{ $route.params.productId }} </h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>

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
      product: [],
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5
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
  }
};
</script>
