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
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
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
  }
};
</script>
