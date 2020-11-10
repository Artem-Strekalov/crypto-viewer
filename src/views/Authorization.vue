<template>
  <div class="content" data-app>
    <div class="authorization-window">
      <h2>Welcome!</h2>
      <div class="login">
        <v-icon class="login-icon">account_box</v-icon>
        <v-text-field
          color="red"
          v-model="email"
          label="E-mail or login"
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
          label="Your password"
          hint=""
          value=""
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </div>
      <div class="button">
        <v-btn class="singIn" @click="authentication">
          SIGN IN
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
      </div>
      <a href="#/registration"> Don't have an account? </a>
    </div>
    <div class="main-inscription">
      <h1>CRYPTO VIEWER</h1>
      <hr />
      <p>Your currency dashboard</p>
    </div>
    <!-- alert-error -->
    <div class="alert-error">
      <v-snackbar v-model="alertError" :multi-line="multiLineError">
        {{ textError }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="alertError = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import authDb from "../firebase";
export default {
  name: "Authorization",
  data() {
    return {
      multiLineError: true,
      alertError: false,
      textError: ``,
      dialog: false,
      showPassword: false,
      password: "",
      email: "",
      rules: {
        required: (value) => !!value || "",
        min: (v) => v.length >= 8 || "Минимум 8 символов",
      },
    };
  },
  methods: {
    authentication() {
      authDb
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((error) => {
          this.alertError = true;
          this.textError = error;
        });
    },
    /* checkIn() {
      authDb
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((error) => {
          this.alertError = true;
          this.textError = error;
        });
    }, */
  },
};
</script>

<style lang="scss">
.content {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .alert-error {
    .v-snack:not(.v-snack--centered):not(.v-snack--top) {
      align-items: flex-start;
      margin-top: 80px;
    }
    .v-snack__wrapper {
      background-color: red;
      color: rgba(255, 255, 255, 0.87);
      font-family: Raleway;
      font-style: normal;
      font-weight: 800;
      font-size: 72px;
      line-height: 85px;
      letter-spacing: 0.05em;
      border-radius: 5px;
      min-width: 30px;
    }
  }

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
      margin-top: 82px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      color: #ffffff;
      text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
    }
    @media (max-width: 375px) {
      h2 {
        margin-top: 50px;
        font-size: 26px;
      }
    }
    .theme--light.v-icon {
      color: #616a8b;
    }
    .login {
      margin-top: 62px;
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
      margin-top: 103px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-decoration-line: underline;
      color: #5fb2ff;
    }
  }
  @media (max-width: 770px) {
    .authorization-window {
      margin-left: 30px;
    }
  }
  @media (max-width: 375px) {
    .authorization-window {
      width: 300px;
      height: 400px;
      margin: 0px;
      padding: 0px 50px 0px 50px;
      margin-top: 60px;
    }
  }
  .main-inscription {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 86px;
    h1 {
      font-family: Raleway;
      font-style: normal;
      font-weight: 800;
      font-size: 72px;
      line-height: 85px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-shadow: 0px 5px 12px rgba(6, 5, 19, 0.25);
      border-radius: 5px;
      background: linear-gradient(
        271.88deg,
        #3887fe 4.26%,
        #3ba0ff 51.37%,
        #5fb2ff 99.01%
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media (max-width: 1350px) {
      h1 {
        font-size: 60px;
      }
    }
    @media (max-width: 375px) {
      h1 {
        font-size: 40px;
        line-height: 50px;
      }
    }
    hr {
      width: 175px;
      height: 0px;
      border: 2px solid #1288e8;
      border-radius: 2px;
      margin-top: 17px;
    }

    @media (max-width: 375px) {
      hr {
        margin-top: 0px;
      }
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: #ffffff;
      text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
      margin-top: 24px;
    }
    @media (max-width: 375px) {
      p {
        display: none;
      }
    }
  }
  @media (max-width: 1200px) {
    .main-inscription {
      text-align: center;
      margin-left: 30px;
    }
  }
  @media (max-width: 375px) {
    .main-inscription {
      margin: 0px;
    }
  }
}
@media (max-width: 375px) {
  .content {
    flex-direction: column-reverse;
    height: 100%;
  }
}
</style>
