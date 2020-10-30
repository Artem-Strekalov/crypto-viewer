<template>
  <div class="home">
    <h1>xxzxzx</h1>
    <button class="out" @click="out">Выход</button>
  </div>
</template>

<script>
import authDb from "../firebase"
export default {
  name: "Home",
  methods:{
    out(){
      authDb.signOut().then(()=>{
        this.$router.replace('authorization')
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: wheat;
  height: 100px;
  width: 300px;
  h1{
    color: red;
    font-size: 30px;
  }
  button{
    background: rebeccapurple;
    height: 20px;
    width: 40px;
  }
}
</style>
