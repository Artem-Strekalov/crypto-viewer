<template>
  <AuthorizationPage/>
</template>

<script>
import AuthorizationPage from './components/AuthorizationPage';

export default {
  name: 'App',

  components: {
    AuthorizationPage
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" >
@import "null-style.scss";
body{
  background: radial-gradient(
    63.88% 129.61% at 25.55% 31.91%,
    #20135c 0%,
    #140739 92.82%
  );
}
</style>