<template>
  <div>
    <div class="block">
      <div class="login-window">
        <h2>Welcome!</h2>
        <input class="login" type="text" />
        <input class="password" type="password" />
        <button class="sing-up">SING UP</button>
        <button class="sing-in">SING IN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorizationPage",
};
</script>
<style lang="scss">
body {
  background: radial-gradient(
    63.88% 129.61% at 25.55% 31.91%,
    #20135c 0%,
    #140739 92.82%
  );
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.25);
}
.block {
  display: flex;

  .login-window {
    margin: 36px 0 0 106px;
    width: 480px;
    height: 595px;
    background: linear-gradient(180deg, #1e1156 0%, rgba(28, 35, 64, 0) 100%);
    filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
    border-radius: 8px;

    h2 {
      margin: 65px 168px 0 151px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      color: #ffffff;
      text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
    }
    .login {
      margin: 62px 50px 0 50px;
      width: 380px;
      height: 58px;
      background: #2e3558;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }
    .password {
      margin: 26px 50px 0 50px;
      width: 380px;
      height: 58px;
      background: #2e3558;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }
    .sing-up {
      margin-left: 114px;
      margin-top: 64px;
      width: 105px;
      height: 42px;
      background: linear-gradient(88.43deg, #2f3453 11.5%, #242845 76.7%);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #949ec0;
      &:focus {
        background: linear-gradient(
          271.88deg,
          #3887fe 4.26%,
          #3ba0ff 51.37%,
          #5fb2ff 99.01%
        );
        color: #ffffff;
      }
    }
    .sing-in {
      margin-top: 64px;
      margin-left: 42px;
      margin-right: 114px;
      width: 105px;
      height: 42px;
      background: linear-gradient(88.43deg, #2f3453 11.5%, #242845 76.7%);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #949ec0;
      &:focus {
        background: linear-gradient(
          271.88deg,
          #3887fe 4.26%,
          #3ba0ff 51.37%,
          #5fb2ff 99.01%
        );
        color: #ffffff;
      }
      /* при фокусе */
      /* background: linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%);
      color: #FFFFFF; */
    }
  }
}
</style>
