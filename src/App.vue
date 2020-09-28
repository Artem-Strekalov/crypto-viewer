<template>
  <div id="app">
    <AuthorizationPage />
  </div>
</template>

<script>
import AuthorizationPage from "./components/AuthorizationPage";

export default {
  name: "App",
  components: {
    AuthorizationPage,
  },
};
</script>

<style lang="scss" >
@import "null-style.scss";

</style>
