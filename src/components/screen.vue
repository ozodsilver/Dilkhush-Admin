<template>
    <div id="screen">
       <div class="container p-5">
       <div class="row">
        <div class="col-12 col-sm-6">
            <div class="card text-white bg-dark mb-3" >
  <div class="card-header"><img src="" alt="rasm yuklanishda muammo"></div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>

      
       </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
images:[]
        }
    },

   async mounted() {

   
    console.log(ById);


     let getImages =  await  axios.get('https://dilkhush-fayz.herokuapp.com/api/photo/6350eed48c2a1b0fed87bf1f', 
     {
        headers:{
            'Content-type': 'application/json',
            Authorization: `${localStorage.getItem('jwt')}`
        }
     })



     let ById = await axios.get('https://dilkhush-fayz.herokuapp.com/api/photo/6350eed48c2a1b0fed87bf1f', 
    {
        headers:{
            'Content-Type':'application/json',
            Authorization:`${localStorage.getItem('jwt')}`
        }
    })




     console.log(getImages)
    },
}

</script>
<style>
    #screen{
        background-color: #89e8d5;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2353bec9' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2334ab82' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%233abcc2' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%234aac81' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%234ebbb9' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%233e9567' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2356bcb3' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%235aa373' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%231cac9c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%232d9049' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2321a58c' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23509156' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
height: 100vh;
    }
</style>