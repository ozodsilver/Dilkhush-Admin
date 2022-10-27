<template>
  <section id="goods ">
    <div class="container-fluid">
     
      <div class="row">
        <div class="col-12 p-3 shadow">
         
          <div class="list-group    list-group-light" id="list-tab" role="tablist">
            <a
              class="
                list-group-item list-group-item-action
                active
                px-3
                border-0
              "
              id="list-home-list"
              data-mdb-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
              >Fast Foods</a
            >
            <a
              class="list-group-item list-group-item-action px-3 border-0"
              id="list-profile-list"
              data-mdb-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
              >Pitsalar</a
            >
            <a
              class="list-group-item list-group-item-action px-3 border-0"
              id="list-messages-list"
              data-mdb-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
              >Milliy Taomlar</a
            >
            <a
              class="list-group-item list-group-item-action px-3 border-0"
              id="list-settings-list"
              data-mdb-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
              >Ichimliklar</a
            >
            <a
              class="list-group-item list-group-item-action px-3 border-0"
              id="list-settings-list"
              data-mdb-toggle="list"
              href="#list-salat"
              role="tab"
              aria-controls="list-salat"
              >Salatlar</a
            >
          </div>

<!-- <img src="../assets/dilkhush.png" alt="" class="d-block m-auto w-75"> -->


        </div>
        <button class=" btn-primary h-25     p-2 px-4  " @click="back"  style="border:none"> <i class="fas fa-arrow-circle-left"></i> Home page</button>  
        <div class="col-9 m-auto p-4">


<div class="loade w-100 h-100  d-flex justify-content-center align-items-center " v-if="loade" >
  <div class="spinner-grow text-primary" role="status">
 
</div>
</div>
        

          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div v-for="foods in FastFoods" :key="foods._id">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              Some placeholder content in a paragraph relating to "Profile". And
              some more content, used here just to pad out and fill this tab
              panel. In production, you would obviously have more real content
              here. And not just text. It could be anything, really. Text,
              images, forms.
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              Some placeholder content in a paragraph relating to "Messages".
              And some more content, used here just to pad out and fill this tab
              panel. In production, you would obviously have more real content
              here. And not just text. It could be anything, really. Text,
              images, forms.
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              ichimlik
            </div>

            <div
              class="tab-pane fade"
              id="list-salat"
              role="tabpanel"
              aria-labelledby="list-salat"
            >
              Salat
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mdbListGroup, mdbListGroupItem } from "mdbvue";
import axios from "axios";
export default {
  name: "Profile",
  components: {
    mdbListGroup,
    mdbListGroupItem,
  },
  data() {
    return {
      FastFoods: [],
      loade:true,
    };
  },

  async mounted() {
    await axios
      .get(
        "https://dilkhush-fayz.herokuapp.com/api/product/byCategory?category=Fast Food",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        this.loade = false
        res.data.data.forEach((el) => {
          this.FastFoods.push(el);
        });
      });
  },

  methods:{
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
</style>
