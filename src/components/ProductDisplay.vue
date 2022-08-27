<template>
  <div>
    <div>
      <b-card>
        <b-media>
          <template #aside>
            <b-img
              blank
              blank-color="#ccc"
              width="50"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">Product Title</h5>
          <div class="star-rating">
            <span>&starf;</span>
            <span>&starf;</span>
            <span>&starf;</span>
            <span>&starf;</span>
            <span>&starf;</span>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel ...</p>
          <b-row>
            <b-col lg="4" class="pb-2"
              ><b-button size="sm" pill
                ><i class="bx bx-shopping-bag" ></i> Shop now</b-button
              ></b-col
            >
            <b-col lg="4" class="pb-2"
              ><b-button size="sm" pill 
                ><i class="bx bx-cart-alt"></i> Add t cart</b-button
              ></b-col
            >
          </b-row>
        </b-media>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductDisplay",
};
</script>
