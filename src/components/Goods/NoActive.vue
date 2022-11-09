<template>
  <div id="NoActive">
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


    <!-- Just an image -->

    <div class="container">
        <nav class="navbar navbar-light bg-white ">
  <div class="container">
    <a class="navbar-brand" href="#">
      History Products
    </a>

<button class="btn-danger p-2 rounded-1 border-0"> 
bajarilgan buyurtmalar <span class="badge bg-dark" id="inactive"></span>
</button>

  </div>
</nav>

      <div class="row">
        <div class="col-12" style="min-height: 100vh">
          <div class="row">
            <div class="col-6 mt-3" v-for="zakaz in FastFoods" :key="zakaz._id">
              <div class="card p-4">
                <!-- <h4>{{zakaz}}</h4> -->
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>

                <div class="card-body">
                  <!-- <h5 class="card-title">{{ zakaz }}</h5> -->
                  <h5 class="text-white" style="font-weight: bold">
                    Buyurtma berilgan telefon raqami
                  </h5>
                  <div class="d-flex align-items-center">
                    <i class="fas fa-phone fa-2x text-primary"></i>
                    <h5 class="text-muted m-0 ml-3">{{ zakaz.phone }}</h5>
                  </div>
                  <hr />
                  <h5 class="text-muted">Buyurtma beruvchining manzili</h5>
                  <div class="d-flex align-items-center">
                    <i class="fas fa-map-marked-alt fa-2x text-primary"></i>
                    <h5 class="ml-3 m-0 text-muted">{{ zakaz.address }}</h5>
                  </div>

                  <hr />
                  <h5 class="text-muted">Buyurtma beruvchi</h5>
                  <div class="d-flex align-items-center">
                    <i class="far fa-user-circle fa-2x text-primary"></i>
                    <h5 class="ml-3 m-0 text-muted">{{ zakaz.user_name }}</h5>
                  </div>
                  <hr />
                  <h4 class="text-muted">
                    <i class="fas fa-utensils"></i> Buyurtma qilingan
                    maxsulotlar
                  </h4>
                  <h5 v-for="(pro, index) in zakaz.product_ID" :key="index">
                    <div class="d-flex align-items-center">
                      <h5 class="ml-3 m-0">{{ pro.name }} - {{ pro.count }}</h5>
                    </div>
                    <hr />
                  </h5>

                  <div>
                    <h5 class="text-muted">Umumiy narx</h5>
                    <div class="d-flex align-items-center">
                      <i class="fas fa-hand-holding-usd fa-2x text-primary"></i>
                      <h5 class="ml-3 m-0 text-warning">
                        {{ zakaz.totalPrice }}
                      </h5>
                    </div>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <span class="text-success">
                      <span class="text-dark">status:</span>
                      {{ zakaz.status }}</span
                    >
                    <div>
                    

                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div v-for="foods in FastFoods" :key="foods._id">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-5">
                      <img
                        :src="`https://dilkhush-fayz.herokuapp.com${foods.image}`"
                        alt="rasm yuklanishida xatolik yuzaga keldi"
                        class="img-fluid w-100 rounded-start"
                      />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h3 class="card-title">{{ foods.name }}</h3>
                        <p class="card-text">
                          {{ foods.description }}
                        </p>

                        <p class="card-text d-flex align-items-center">
                          <b class="badge bg-dark">Address</b>
                          <b class="ml-2">{{ foods.address }}</b>
                        </p>

                        <p class="card-text" v-for="pro in foods.product_ID" :key="pro._id">
                          <b>Name</b> {{pro.name}}
                         
                        </p>

                        <p class="card-text">
                          <b class="badge bg-dark">tel: <span class="fas fa-phone text-success"></span> </b>
                          {{ foods.phone }}
                        </p>
                        <p class="card-text">
                          <b class="badge bg-dark">Narx</b>
                          {{ foods.totalPrice }}
                        </p>

                        <p class="card-text">
                          <b class="badge bg-dark">User name</b>
                          {{ foods.user_name }}
                        </p>

                        <p class="card-text">
                          <b class="badge bg-dark">status</b>
                          {{ foods.status }}
                        </p>

                        <p class="card-text">
                          <small class="text-muted"
                            >oxirgi yangilanish {{ foods.updatedAt }}</small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
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
    let inactive = document.querySelector("#inactive")
    await axios
      .get(
        `https://dilkhush-fayz.herokuapp.com/api/order/inactiveOrder`,

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
          inactive.innerHTML = this.FastFoods.length
        });
      });
  },
};
</script>

<style scoped>
#NoActive {
background: url('https://www.orderhive.com/wp-content/uploads/2020/04/Finished-goods.png');
background-size: cover;
background-position: center;
background-attachment: fixed;
}
</style>