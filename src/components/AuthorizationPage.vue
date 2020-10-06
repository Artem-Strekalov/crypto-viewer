<template>
  <div class="content">
    <div class="authorization-window">
      <h2>Welcome!</h2>
      <div class="input-login">
        <img src="..\assets\icon-login.svg" alt="" />
        <input type="text" placeholder="E-mail or login" />
      </div>
      <div class="input-password">
        <img class="castle" src="..\assets\icon-password.svg" alt="" />
        <input type="password" placeholder="Your password" />
        <img src="..\assets\password-icon.svg" alt="" />
      </div>
      <div class="button">
        <button class="singUP">SING UP</button
        ><button class="singIN">SING IN</button>
      </div>
    </div>
    <div class="main-inscription">
      <h1>CYPTO VIEWER</h1>
      <hr />
      <p>Your currency dashboard</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorizationPage",
};
</script>
<style lang="scss">
.content {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .authorization-window {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    height: 595px;
    background: linear-gradient(180deg, #1e1156 0%, rgba(28, 35, 64, 0) 100%);
    filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
    border-radius: 8px;
    h2 {
      margin-top: 82px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      color: #ffffff;
      text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
    }
    .input-login {
      margin-top: 62px;
      display: flex;
      align-items: center;
      width: 380px;
      height: 58px;
      background: #2e3558;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      input {
        width: 268px;
        height: 58px;
        background: #2e3558;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        font-size: 20px;
        color: white;
      }
      :focus::-webkit-input-placeholder {
        color: transparent;
      }
      ::-webkit-input-placeholder {
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #616a8b;
      }
      img {
        margin: 10px 16px 0px 16px;
      }
    }
    .input-password {
      margin-top: 26px;
      display: flex;
      align-items: center;
      width: 380px;
      height: 58px;
      background: #2e3558;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      input {
        width: 263px;
        height: 58px;
        border: none;
        background: #2e3558;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        font-size: 20px;
        color: white;
      }
      ::-webkit-input-placeholder {
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #616a8b;
      }
      :focus::-webkit-input-placeholder {
        color: transparent;
      }
      .castle {
        margin: 10px 16px 0px 16px;
      }
    }
    .button {
      display: flex;
      justify-content: space-around;
      margin-top: 64px;
      .singUP {
        margin-right: 32px;
        width: 105px;
        height: 42px;
        background: linear-gradient(88.43deg, #2f3453 11.5%, #242845 76.7%);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #949ec0;
      }
      .singUP:hover {
        background: linear-gradient(
          271.88deg,
          #3887fe 4.26%,
          #3ba0ff 51.37%,
          #5fb2ff 99.01%
        );
        color: white;
      }
      .singIN {
        width: 105px;
        height: 42px;
        background: linear-gradient(88.43deg, #2f3453 11.5%, #242845 76.7%);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #949ec0;
      }
      .singIN:hover {
        background: linear-gradient(
          271.88deg,
          #3887fe 4.26%,
          #3ba0ff 51.37%,
          #5fb2ff 99.01%
        );
        color: white;
      }
    }
  }
  .main-inscription {
    align-self: flex-start;
  }
}
</style>
