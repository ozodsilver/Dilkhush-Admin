<template>
  <div id="pro" class="py-3">
    <div class="container">
      <nav class="navbar navbar-expand-lg my-3 rounded navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" >Dilkush/Mahsulotlar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link "  href="#" @click="selectedComp = 'FastFoods'">Fast Food</a>
        <a class="nav-link" href="#" @click="selectedComp = 'Pizzas'">Pitsalar</a>
        <a class="nav-link" href="#" @click="selectedComp = 'MilliyGoods'">Milliy taomlar</a>
        <a class="nav-link " href="#"  @click="selectedComp = 'drinks'" >Ichimliklar</a
        >
        <a class="nav-link " href="#"
        @click="selectedComp = 'Salat'" >Salatlar</a
        >

        
      </div>

    </div>
  </div>
</nav>  

<component :is="selectedComp"></component>


    </div>
  </div>
</template>

<script>
import FastFoods from '../components/Goods/FastFoods.vue';
import Pizzas from '../components/Goods/Pizzas.vue'
import MilliyGoods from '../components/Goods/MilliyGoods.vue'
import drinks from '../components/Goods/drinks.vue'
import Salat from '../components/Goods/Salat.vue'
  export default {
    components:{
FastFoods,
Pizzas,
MilliyGoods,
drinks,
Salat
    },
    data(){
     return{
      FastFoods:[],
      
      selectedComp:'FastFoods'
     }
    },

  


  }
</script>

<style scoped>
#pro{
  background-image: url('https://phonoteka.org/uploads/posts/2021-05/1620121015_13-phonoteka_org-p-obed-fon-20.jpg');
background-size: cover;
background-attachment: fixed;


}
</style>