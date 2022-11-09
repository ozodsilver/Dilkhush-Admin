<template>
  <div class="flexible-content ">
    <div class="sidebar-fixed position-fixed ">
      <a class="logo-wrapper"
        style="position: relative; z-index:888"><img alt="" class="img-fluid" src="./assets/dilkhush.png"
      /></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            ><mdb-icon
              icon="chart-pie"
              class="mr-3"
            />Buyurtmalar</mdb-list-group-item
          >
        </router-link>
        <router-link to="/profile" @click.native="activeItem = 2" class="mt-2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            ><mdb-icon icon="utensils" class="mr-3" />Maxsulotlar</mdb-list-group-item
          >
        </router-link>
        <router-link to="/tables" @click.native="activeItem = 3" class="mt-2 rounded-0">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            
            ><mdb-icon icon="fas fa-hourglass-end" class="mr-3" />finished products</mdb-list-group-item
          >
        </router-link>


        
        
        <router-link to="/404" @click.native="activeItem = 5">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            ><mdb-icon
              icon=" fa-plus-circle"
              class="mr-3"
            />Maxsulot qo'shish</mdb-list-group-item
          >
        </router-link>


        <router-link to="/BandQilish" @click.native="activeItem = 6">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 6 && 'active'"
            ><mdb-icon
              icon=" fas fa-chair"
              class="mr-3"
            />Band qilish</mdb-list-group-item
          >
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
<Dashboard></Dashboard>
    </main>
  </div>
</template>

<script>
import {
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  //   mdbFooter,
  waves,
} from "mdbvue";

import Dashboard from "../src/components/Dashboard.vue"
export default {
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,

    Dashboard
  },

  data() {
    return {
      activeItem: 1,
    };
  },
 
  mixins: [waves],
};
</script>


<style scoped>
main {
  background-color: #ededee;
}
.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
  
}
.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}
.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 0  10px rgba(255, 255, 255, 0.86), 0 2px 10px 0 rgba(247, 236, 236, 0.12);
  z-index: 1050;
  background-color: rgb(17, 15, 15);
  background-image:  url('https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/variety-of-green-vegetables-produce-on-daxiao-productions.jpg?&targetx=0&targety=-27&imagewidth=500&imageheight=754&modelwidth=500&modelheight=700&backgroundcolor=889D89&orientation=1') ;

  background-position: 100px;
  background-size: cover;
position: relative;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed:before{
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background: rgba(152, 148, 148, 0.7);
}


.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}
.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}
.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
   
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}

</style>