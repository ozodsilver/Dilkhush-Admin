<template>
  <div id="fast_foods">
    <div
      class="w-100 d-flex justify-content-center align-items-center"
      style="height: 100vh"
      v-if="loade"
    >
      <div
        class="spinner-grow text-danger"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="visually-hidden"></span>
      </div>
    </div>

    <div class="row">
      <div class="col-12" style="min-height: 100vh">
        <div v-for="foods in FastFoods" :key="foods._id">
          <div class="card mb-3 shadow-lg">
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  :src="`https://dilkhush-fayz.herokuapp.com${foods.image}`"
                  alt="Maxsulot Rasmi Mavjud emas"
                  class="img-fluid w-100 rounded-start rounded-lg"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 class="card-title">{{ foods.name }}</h3>
                  <p class="card-text">
                    {{ foods.description }}
                  </p>

                  <p class="card-text d-flex align-items-center">
                    <b class="badge bg-warning">Narx</b>
                    <b class="ml-2">{{ foods.price }}</b>
                  </p>
                  <p class="card-text">
                    <b class="badge bg-warning">Details</b>
                    {{ foods.details }}
                  </p>
                  <p class="card-text">
                    <b class="badge bg-warning">Chegirma</b>
                    {{ foods.chegirma }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted"
                      >oxirgi yangilanish {{ foods.updatedAt }}</small
                    >
                  </p>

                  <p class="card-text">
                    <small class="text-muted"
                      >Mahsulot holati: <b class="fs-5">{{ foods.isExist ? 'Faol': 'Nofaol' }}</b> </small
                    >
                  </p>

                  <div class="d-flex justify-content-end gap-2">
                    <button
                      class="btn-warning border-0 p-2 rounded"
                      @click="Isactive(foods._id)"
                    >
                      Mahsulotni holatini o'zgartirish
                    </button>
                    <button
                      class="btn-danger border-0 p-2 rounded"
                      @click="DeleteProduct(foods._id)"
                    >
                      O'chirish
                    </button>
                  </div>
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
      FastFoods: [],
      loade: true,
    };
  },

  async mounted() {
    await axios
      .get(
        `https://dilkhush-fayz.herokuapp.com/api/product/byCategory?category=fast_foods`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.loade = false;
        res.data.data.forEach((el) => {
          this.FastFoods.push(el);
        });
      });
  },

  methods: {
    async DeleteProduct(id) {
      console.log(id);
      await axios.delete(
        `https://dilkhush-fayz.herokuapp.com/api/product/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("jwt")}`,
          },
        }
      );

      setTimeout(() => {
        this.$router.replace("/Home");
      }, 10);

      setTimeout(() => {
        this.$router.replace("/profile");
      }, 500);
    },

    async Isactive(id2) {
      await axios
        .put(
          `https://dilkhush-fayz.herokuapp.com/api/product/isExist/${id2}`,
          {
           
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((el) => {
          console.log(el);
          if (el.data.data.isExist == false) {
            alert("Mahsulot nofaol holatga keltirildi");
          }

          setTimeout(() => {
        this.$router.replace("/Home");
      }, 10);

      setTimeout(() => {
        this.$router.replace("/profile");
      }, 500);
        });
    },
  },
};
</script>

<style scoped>


</style>