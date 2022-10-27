<template>
  <div class="flexible-content ">
    <div class="sidebar-fixed position-fixed ">
      <a class="logo-wrapper"
        ><img alt="" class="img-fluid" src="./assets/dilkhush.png"
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
        <router-link to="/profile" @click.native="activeItem = 2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            ><mdb-icon icon="utensils" class="mr-3" />Maxsulotlar</mdb-list-group-item
          >
        </router-link>
        <router-link to="/tables" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            ><mdb-icon icon="table" class="mr-3" />Tables</mdb-list-group-item
          >
        </router-link>
        
        <router-link to="/404" @click.native="activeItem = 5">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            ><mdb-icon
              icon="exclamation"
              class="mr-3"
            />404</mdb-list-group-item
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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
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