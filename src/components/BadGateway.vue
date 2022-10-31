<template>
  <div id="add">
    <div class="container">
      <h1 class="my-4 text-muted">
        Mahsulot qo'shish <i class="fas fa-plus-circle text-primary"></i>
      </h1>

      <img src="../assets/dilkhush.png" alt="" class="w-25 m-auto d-block" />

      <select class="form-select" v-model="val">
        <option selected value="fast_foods">Fast Food</option>
        <option value="pizzas">Pitsalar</option>
        <option value="national_foods">Milliy taomlar</option>
        <option value="drinks">Ichimliklar</option>
        <option value="salat">Salat</option>
      </select>

      <div class="row">
        <div class="col-6 my-3">
          <input
            type="text"
            class="form-control"
            placeholder="name"
            v-model="name"
          />
        </div>

        <div class="col-6 my-3">
          <input
            type="text"
            class="form-control"
            placeholder="tavsif"
            v-model="description"
          />
        </div>

        <div class="col-6 my-3">
          <input
            type="text"
            class="form-control"
            placeholder="details"
            v-model="details"
          />
        </div>

        <div class="col-6 my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Narxi"
            v-model="price"
          />
        </div>

        <div class="col-12">
          <div class="input-group mb-3">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile02"
              ref="image"
              v-on:change="handleFileUpload()"
            />
            <label class="input-group-text" for="inputGroupFile02"
              >Rasm yuklash</label
            >
          </div>
        </div>

        <div class="col-12">
          <button
            class="btn-danger border-0 p-3 rounded w-25"
            @click="PostGoods"
          >
            joylash <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      val: "",
      name: "",
      description: "",
      details: "",
      price: "",
      image: "",
    };
  },

  methods: {
    handleFileUpload() {
      this.image = this.$refs.image.files[0];
    },

    async PostGoods() {
      let num = +this.price;

  console.log(this.image)



      await axios
        .post(
          "https://dilkhush-fayz.herokuapp.com/api/product/add",

          {
            name: this.name,
            description: this.description,
            details: this.details,
            price: num,
            categoryName: this.val,
            image: this.image,
          },

          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `${localStorage.getItem("jwt")}`,
            },
          },

         
        )
        .then((el) => {
          console.log(el);
        });
    },
  },
};
</script>

<style  scoped>
</style>