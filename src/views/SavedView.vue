<template>
  <div>
    <br>
    <h3>Saved Products:</h3>
    <HeaderNavbar></HeaderNavbar>
    <br />
    <div v-for="item in items" :key="item.id">
      <b-card>
        <b-media>
          <template #aside>
            <div class="img-wrapper">
              <button
              @click="removeFromFavorites(item)"
              class="btn btn-sm outline-primary btn-like">
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

          <h5 class="mt-0">
            {{ item.name }} - {{ currency }} {{ item.price }}
          </h5>
          <div class="star-rating">
            <b-form-rating
              v-model="rate"
              variant="warning"
              class="mb-2"
              id="form-control"
            ></b-form-rating>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel ...</p>
          <b-row>
            <b-col lg="4" class="pb-2">
              <router-link to="/shop">
                <b-button size="sm" class="sb-btn" pill
                  ><i class="bx bx-shopping-bag"></i> Shop</b-button
                >
              </router-link>
            </b-col>
            <b-col lg="4" class="pb-2">
            <b-button
              variant="danger"
              size="sm"
              pill
              @click="removeFromFavorites(item)"
              ><i class="bx bxs-trash"></i> Remove</b-button
            >
          </b-col>
          </b-row>
        </b-media>
      </b-card>
      <br />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import HeaderNavbar from "@/components/HeaderNavbar.vue";

export default {
    name: "SavedView",
    computed: {
        ...mapGetters("favorites", {
            getFavorites: "getFavorites"
        })
    },
    mounted() {
        this.items = this.getFavorites;
    },
    data() {
        return {
            currency: "U$",
            items: []
        };
    },
    methods: {
        ...mapMutations("favorites", {
            removeFromFavorites: "removeFromFavorites"
        }),
    },
    components: { HeaderNavbar }
};
</script>
<style scoped>
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

#form-control {
  display: block;
  min-width: 150px;
  width: 26%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
