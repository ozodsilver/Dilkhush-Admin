<template>
  <div id="add">
    <div class="container">
      <h1 class="my-4 text-muted">
        Mahsulot qo'shish <i class="fas fa-plus-circle text-primary"></i>
      </h1>

      <div
        class="badge w-75 position-absolute m-auto bg-success p-5"
        v-if="added"
      >
        <h2>
          Mahsulotlar muvaffaqiyatli qo'shildi
          <i class="fas fa-check text-white"></i>
        </h2>
      </div>

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
              >mahsulot rasmini yuklash</label
            >
          </div>
        </div>

        <div class="col-12">
          <button
            class="btn-success border-0 p-2 rounded w-25"
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
      added: false,

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

      console.log(this.image);

if(this.image !== '' && this.name !== '' && this.val !== '' && this.description !== ''  && this.price !== ''){
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
              Authorization: `${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((el) => {
          console.log(el);
          console.log(el.data.message == 'Data is  created')
        setTimeout(()=>{
          if(el.data.message == 'Data is  created'){
            this.added = true;
          }
        }, 10)

        setTimeout(()=>{
          if(el.data.message == 'Data is  created'){
            this.added = false;
          }
        }, 4000)
        

        });
}else{
  alert("to'ldirilmagan maydon mavjud tekshiring")
}

    
    },
  },
};
</script>

<style  scoped>
</style>