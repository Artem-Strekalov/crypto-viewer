<template>
  <div>
    <div class="authorization-substrate"></div>
    <div class="authorization-window">
      <h2>Welcome!</h2>
      <div class="input-login"><input type="text" value="" /></div>
      <div class="input-password"><input type="password" value="" /></div>
      <button class="sing-up"><p>SING UP</p></button>
      <button class="sing-in"><p>SING IN</p></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorizationPage",
};
</script>
<style>
@media screen and (min-width: 1024px) {
}
.authorization-substrate {
  width: 100%;
  height: 768px;
  background: radial-gradient(
    63.88% 129.61% at 25.55% 31.91%,
    #20135c 0%,
    #140739 92.82%
  );
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.25);
}
.authorization-window {
  position: absolute;
  top: 69px;
  width: 480px;
  height: 595px;
  left: 360px;
  background: linear-gradient(180deg, #1e1156 0%, rgba(28, 35, 64, 0) 100%);
  filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
  border-radius: 8px;

}
.authorization-window h2 {
  position: absolute;
  margin: 82px 160px 470px 160px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: white;
}
.input-login input,
.input-password input {
  position: absolute;
  width: 380px;
  height: 58px;
  background: #2e3558;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 187px 50px 350px 50px;
}
.input-password input {
  margin: 271px 50px 266px 50px;
}
.sing-up,
.sing-in {
  position: absolute;
  width: 105px;
  height: 42px;
  background: linear-gradient(88.43deg, #2f3453 11.5%, #242845 76.7%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin: 393px 251px 160px 124px;
}
.sing-in {
  margin: 393px 114px 160px 261px;
}
.sing-in p, .sing-up p{
  font-family: "Open Sans", sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
/* identical to box height */
align-items: center;

color: #949EC0;
}

</style>
