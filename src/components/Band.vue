<template>
    <div id="band">
     <div class="container p-3">
        <div class="row">
            <div class="col-12">


          <div style="height: 100vh;" v-if="load">
            <div class="d-flex justify-content-center"  >
  <div class="spinner-border text-danger" role="status">
   
  </div>
</div>
          </div>



                <div class="card mb-3"  v-for = 'info in infos' :key="info._id">
                  
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://cdn.luxatic.com/wp-content/uploads/2021/10/Le-Bernardin.jpg" alt=""  class="img img-fluid">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Joy band qilish uchun buyurtma</h5>
        <div class="d-flex">
          <h6>Fullname: {{info.userID.fullName}} </h6>
          <p class="card-text">
          
        </p>
        </div>
        <div class="d-flex">
          <h6>Tel nomer: </h6>
          <p class="card-text">
            {{info.phone}}
        </p>
        </div>

        <div class="d-flex">
          <h6>Odamlar soni: </h6>
          <p class="card-text">
         {{info.user_count}}
        </p>
        </div>

        <div class="d-flex">
          <h6>Buyurtma berilgan vaqt: </h6>
          <p class="card-text">
           {{info.arrival_time}}
        </p>
        </div>

        <button class=" border-0 px-4 py-2 rounded btn-danger" @click="DeleteProduct(info._id)">o'chirish</button>
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
 

    data() {
        return {
            infos:[],
            load:true
        };
    },

    async mounted() {
        
await axios.get('https://dilkhush-fayz.herokuapp.com/api/band/all', {
  headers:{
    Authorization:`${localStorage.getItem('jwt')}`
  }
}).then(el => {
  console.log(el)
  el.data.forEach(res => {
    console.log(res)
    this.infos.push(res)
    this.load = false
  })
})

    },

    methods: {
      async  DeleteProduct(id){
await axios.delete(`https://dilkhush-fayz.herokuapp.com/api/band/${id}`, {
  headers:{
    Authorization:`${localStorage.getItem('jwt')}`
  }
}).then(el => {
  console.log(el.data.message)
  if(el.data.message == 'Band successfully deleted'){
  alert("buyurtma o'chirildi")
  }
})
        }
    },
};
</script>

<style  scoped>
#band{
  background-image: url('https://phonoteka.org/uploads/posts/2022-02/1644356122_31-phonoteka-org-p-fon-dlya-blyud-33.jpg');
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  background-attachment: fixed;
}
</style>