<template>
  <div class="content">
    <div class="authorization-window">
      <h2>Create your account</h2>
      <div class="login">
        <v-icon class="login-icon">account_box</v-icon>
        <v-text-field
          color="red"
          v-model="Username"
          label="Username"
          clearable
        ></v-text-field>
      </div>
      <div class="login">
        <v-icon class="login-icon">mail_outline</v-icon>
        <v-text-field
          color="red"
          v-model="email"
          label="E-mail"
          clearable
        ></v-text-field>
      </div>
      <div class="password">
        <v-icon class="password-icon">lock</v-icon>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint=""
          value=""
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </div>
      <div class="button">
        <v-btn @click="checkIn">
          SIGN UP
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
      </div>
      <a @click="goToAuthorization"> Do you have an account? </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Registration",
  data() {
    return {
      multiLineError: true,
      alertError: false,
      textError: ``,
      showPassword: false,
      password: "",
      email: "",
      Username: "",
      rules: {
        required: (value) => !!value || "",
        min: (v) => v.length >= 8 || "Минимум 8 символов",
      },
    };
  },
  methods: {
    goToAuthorization() {
      this.$router.replace("authorization");
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  .authorization-window {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    height: 595px;
    background: linear-gradient(180deg, #1e1156 0%, rgba(28, 35, 64, 0) 100%);
    filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
    border-radius: 8px;
    padding: 0px 50px 0px 50px;
    h2 {
      margin: 82px 0 36px 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      color: #ffffff;
      text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
    }
    .theme--light.v-icon {
      color: #616a8b;
    }
    .login {
      margin-top: 26px;
    }
    .password {
      margin-top: 26px;
    }
    .login,
    .password {
      display: flex;
      width: 100%;
      .material-icons {
        font-size: 36px;
        margin-right: 20px;
        color: white;
      }
      .v-text-field {
        label {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #616a8b;
        }
        input {
          font-family: Roboto;
          font-size: 15px;
          color: #ffffff;
          transition-delay: 3600s;
        }
        .v-input__slot:after {
          border-color: #1288e8;
        }
        .v-input__slot:before {
          border-color: #1288e8;
        }
      }
      .theme--light.v-messages {
        color: #1288e8;
      }
      .theme--light.v-text-field:not(.v-input--has-state):hover
        > .v-input__control
        > .v-input__slot:before {
        border-color: #1288e8;
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 64px;
      .v-btn {
        width: 205px;
        height: 42px;
        background: linear-gradient(88.43deg, #2f3453 11.5%, #242845 76.7%);
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #949ec0;
      }
      button:hover {
        background: linear-gradient(
          271.88deg,
          #3887fe 4.26%,
          #3ba0ff 51.37%,
          #5fb2ff 99.01%
        );
        color: white;
      }
    }
    @media (max-width: 770px) {
      .button {
        margin-top: 32px;
        .v-btn {
          width: 90px;
          height: 38px;
          font-size: 13px;
        }
      }
    }
    a {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-decoration-line: underline;
      color: #5fb2ff;
    }
  }

  @media (max-width: 414px) {
    .authorization-window {
      width: 300px;
      height: 500px;
      margin: 0px;
      padding: 0px 20px 0px 20px;
      margin-top: 0px;
      h2 {
        margin-top: 30px;
        font-size: 26px;
      }
    }
  }
}
</style>