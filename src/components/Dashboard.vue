<template>
  <section id="dashboard">
    <mdb-card class="mb-4  ">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          <a href="" target="_blank">Dilkhush</a><span>/</span
          ><span>Buyurtmalar</span>
        </h4>

        <div class="d-flex align-items-center justify-content-between w-50">
          <router-link  to="/Home" class="fas fa-sync text-muted" @click="this.$router.reload()"></router-link>
          <button
            type="button"
            class="border-0 rounded btn-primary position-relative"
            title="Active buyurtmalar"
          >

        

            <i class="fas fa-bell">
              
            </i>
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                badge-danger
              "
              id="or"
            >
            {{counte}}
            </span>
          </button>
         <div class="d-flex flex-column align-items-center">
          <i class="fas fa-user-alt text-muted"></i>
          <b class="text-muted">Admin</b>
         </div>
          <p></p>
          <form class="d-flex md-form justify-content-center" style="margin: 0">
            <input
              aria-label="Search"
              class="form-control"
              placeholder="Qidiruv"
              type="search"
            />
          
          </form>
        </div>
      </mdb-card-body>
    </mdb-card>
    <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="money-bill-alt" far class="primary-color" />
              <div class="data">
                <p>1 oy davomida sotilgan mahsulotlar</p>
                <h4>
                  <strong>NaN so'm</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 25%"
                ></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="warning-color" />
              <div class="data">
                <p>SUBSCRIPTIONS</p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg grey darken-2"
                  role="progressbar"
                  style="width: 25%"
                ></div>
              </div>
              <mdb-card-text>Worse than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-pie" class="light-blue lighten-1" />
              <div class="data">
                <p>TRAFFIC</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="75"
                  class="progress-bar grey darken-2"
                  role="progressbar"
                  style="width: 75%"
                ></div>
              </div>
              <mdb-card-text>Worse than last week (75%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-bar" class="red accent-2" />
              <div class="data">
                <p>ORGANIC TRAFFIC</p>
                <h4>
                  <strong>2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 25%"
                ></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <div class="container-fluid">
      <h1 class="text-muted text-right text-primary">Active buyurtmalar</h1>

      <div
        class="w-100 d-flex justify-content-center align-items-center"
        style="height: 100vh"
        v-if="loading"
      >
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <div class="row">
        <div class="col-6 mt-3" v-for="zakaz in zakazlar" :key="zakaz._id">
          <div class="card">
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
              <h5 class="text-muted" style="font-weight: bold">
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
                <i class="fas fa-utensils"></i> Buyurtma qilingan maxsulotlar
              </h4>
              <h5 v-for="pro in zakaz.product_ID" :key="pro">
                <div class="d-flex align-items-center">
                  <h5 class="ml-3 m-0">{{ pro.name }} - {{ pro.count }}</h5>
                </div>
                <hr />
              </h5>

              <div>
                <h5 class="text-muted">Umumiy narx</h5>
                <div class="d-flex align-items-center">
                  <i class="fas fa-hand-holding-usd fa-2x text-primary"></i>
                  <h5 class="ml-3 m-0 text-warning">{{ zakaz.totalPrice }}</h5>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <span class="text-success">
                  <span class="text-dark">status:</span>
                  {{ zakaz.status }}</span
                >
                <div>
                  <button class="btn btn-danger">
                    Rad etish <i class="fas fa-times"></i>
                  </button>
                  <button class="btn btn-success">
                    Qabul qilish <i class="fas fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
  mdbCardText,
  mdbIcon,
  mdbTbl,
  mdbListGroup,
  mdbListGroupItem,
  mdbBadge,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
} from "mdbvue";

export default {
  name: "Dashboard",
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbTbl,

    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
  },
  data() {
    return {
      zakazlar: [],
      loading: true,
    };
  },

  async mounted() {
    let or = document.querySelector('#or')
    await axios
      .get("https://dilkhush-fayz.herokuapp.com/api/order/activeOrder", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        this.loading = false;

    or.innerHTML = res.data.data.length 
        res.data.data.forEach((el) => {
          this.zakazlar.push(el);
          console.log(el.order_id);
        });
      });
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3,
h4,
h1,
h5 {
  font-family: "Inter", sans-serif;
}
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
</style>
