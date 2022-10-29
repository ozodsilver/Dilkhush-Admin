<template>
  <div id="pizzas">


<div class="w-100  d-flex justify-content-center align-items-center position-relative" style="height: 100vh; z-index:88888" v-if="loade">
    <div class="spinner-grow text-white" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden"></span>
</div>
</div>



    <div class="row">
      <div class="col-12" style="min-height: 100vh;">
        <div v-for="pizza in Pizzas" :key="pizza._id">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  :src="`https://dilkhush-fayz.herokuapp.com${pizza.image}`"
                  alt="rasm yuklanishida xatolik yuzaga keldi"
                  class="img-fluid w-100 rounded-start"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title">{{ pizza.name }}</h3>
                  <p class="card-text">
                    {{ pizza.description }}
                  </p>

                  <p class="card-text d-flex align-items-center">
                    <b class="badge bg-warning">Narx</b>
                    <b class="ml-2">{{ pizza.price }}</b>
                  </p>
                  <p class="card-text">
                    <b class="badge bg-warning">Details</b>
                    {{ pizza.details }}
                  </p>
                  <p class="card-text">
                    <b class="badge bg-warning">Chegirma</b>
                    {{ pizza.chegirma }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted"
                      >oxirgi yangilanish {{ pizza.updatedAt }}</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Pizzas: [],
      loade:true
    };
  },

  async mounted() {
    await axios
      .get(
        `https://dilkhush-fayz.herokuapp.com/api/product/byCategory?category=pizzas`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        this.loade = false;
        res.data.data.forEach((el) => {
            console.log(el)
          this.Pizzas.push(el);
        });
      });
  },
};
</script>

<style scoped>
</style>