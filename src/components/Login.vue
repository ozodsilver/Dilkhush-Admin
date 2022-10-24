<template>
  <div>
    <div id="login">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <img src="../assets/food.png" alt="" class="w-100 m-auto d-block" />
        </div>

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true">Login</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              v-model="email"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              v-model="password"
            />
            <button @click.prevent="Login">Login</button>
          </form>

          <img
            src="../assets/dilkhush.png"
            alt=""
            class="w-25 m-auto d-block"
          />
          <h4 class="text-center animation">
            <span id="dilkhush">Dilkhush</span> Admin Panel
          </h4>
        </div>
      </div>
    </div>
  
  
    <div class="loade" v-if="this.$store.state.loade">
      <div
        class="spinner-border text-light"
        style="width: 4rem; height: 4rem"
        role="status"
      ></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  mounted() {},

  methods: {
    async Login() {
     this.$store.state.loade = true
      await axios
        .post(
          "https://dilkhush-fayz.herokuapp.com/api/user/login",
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((el) => {
          console.log(el.data.token);
          localStorage.removeItem('jwt')
          localStorage.setItem('jwt', el.data.token)
          if (el.data.success) {
            this.$router.push("Home");
            this.$store.state.loade = false;

          }
        });
    },
  },
};
</script>

<style  scoped>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Jost", sans-serif;
  background: url("https://avatars.mds.yandex.net/i?id=fcc30fe9bc6ea97b476d8c8dd159765a-5205187-images-thumbs&n=13");
  background-position: center;
  background-size: cover;
}

#login:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(63, 112, 112, 0.5);
}

.main {
  width: 450px;
  height: 500px;
  background: red;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
    no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgb(60, 60, 60);
  position: relative;
  z-index: 22222222;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 70%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button {
  width: 70%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  background: #6d44b8;
}
.login {
  height: 500px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-150px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #573b8a;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}

.animation {
  background: rgb(37, 33, 173);
  background: linear-gradient(
    153deg,
    rgba(37, 33, 173, 1) 29%,
    rgba(166, 11, 108, 0.9278420840992647) 96%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#dilkhush {
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
}

.loade {
  width: 100vw;
  height: 100vh;
  background: #20192c;
  position: absolute;
  top: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
</style>