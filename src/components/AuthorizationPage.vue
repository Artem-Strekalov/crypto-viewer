<template>
  <div>
    <div class="block">
      <div class="content">
        <div class="login-window">
          <div class="welcome"><h2>Welcome!</h2></div>
          <div class="input-login">
            <input type="text" />
          </div>
          <div class="input-password">
            <input type="password" />
          </div>
          <div class="button">
            <button class="sing-up">SING UP</button>
            <button class="sing-in">SING IN</button>
          </div>
        </div>
        <div class="name-page">
          <div class="cypto-viewer">
            <h1>CYPTO VIEWER</h1>
          </div>
          <hr />
          <div class="paragraph">
            <p>Your currency dashboard</p>
          </div>
        </div>
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
.block {
  min-height: 921px;
  display: flex;
  align-items: center;
  .content {
    max-width: 1380px;
    display: flex;
    align-items: center;
    margin-left: 106px;
    .login-window {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 480px;
      height: 595px;
      background: linear-gradient(180deg, #1e1156 0%, rgba(28, 35, 64, 0) 100%);
      filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
      border-radius: 8px;
      .welcome {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        color: #ffffff;
        text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
        margin-top: 82px;
      }
      .input-login {
        input {
          margin-top: 62px;
          width: 380px;
          height: 58px;
          background: #2e3558;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
        }
      }
      .input-password {
        input {
          margin-top: 26px;
          width: 380px;
          height: 58px;
          background: #2e3558;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
        }
      }
      .button {
        margin-top: 64px;
        .sing-up,
        .sing-in {
          margin-right: 32px;
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
      }
    }
    .name-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 300px;
      .cypto-viewer {
        font-family: Raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 72px;
        letter-spacing: 0.05em;
        border-radius: 5px;
        color: #1288e8;
      }
      hr {
        margin-top: 17px;
        margin-bottom: 24px;
        height: 0px;
        width: 175px;
        border: 2px solid #1288e8;
        border-radius: 8px;
      }
      .paragraph {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        color: #ffffff;
        text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
      }
    }
    @media (max-width: 1380px) {
      .name-page {
        margin-left: 100px;
      }
    }
  }
}
</style>
