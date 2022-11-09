<template >
    <div id="active" class="p-4">
      <div class="container">


<div class="w-100  d-flex justify-content-center align-items-center" style="height: 100vh;" v-if="loade">
<div class="spinner-grow  text-white" style="width: 3rem; height: 3rem;" role="status">
<span class="visually-hidden"></span>
</div>
</div>


<div class="row">
<div class="col-12" style="min-height: 100vh;">

<div v-for="foods in FastFoods" :key="foods._id">
        <div class="card mb-3 shadow-lg " >
          <div class="row g-0">
            <div class="col-md-5 ">
              <img
                :src="`https://dilkhush-fayz.herokuapp.com${foods.image}`"
                alt="Maxsulot Rasmi Mavjud emas"
                class="img-fluid w-100 rounded-start rounded-lg"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body" >
                <h3 class="card-title">Address</h3>
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

               <div class="d-flex justify-content-end gap-2">
                <button class=" btn-success border-0 p-2 rounded" @click="Isactive(foods._id)">Active</button>
        
             
               </div>
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
import axios from 'axios';

    export default {
        data(){
            return {
                FastFoods:[],
                loade: true,
                
        }
    },

  async mounted() {
 
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
      console.log(res.data.data)
      this.loade = false;

      res.data.data.forEach((el) => {
     
        this.FastFoods.push(el);
   
      });
    });
},

methods:{
  async Isactive(id) {
      await axios
        .put(
          `https://dilkhush-fayz.herokuapp.com/api/product/isExist/${id}`,
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
          if (el.data.data.isExist == true) {
            alert("Mahsulot active qilindi");
          }
        });
    },
}


}
</script>

<style scoped>
#active{
  background: url('https://phonoteka.org/uploads/posts/2022-02/1644356122_31-phonoteka-org-p-fon-dlya-blyud-33.jpg');
  background-position: center;
  background-attachment: fixed;

}
</style>