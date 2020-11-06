<template>
  <div class="content">
    <div class="bar">
      <div class="top-block">
        <div class="heading">
          <h2>VALUET</h2>
          <hr />
        </div>
        <div class="content-switcher">
          <div class="currency-overview">
            <v-icon class="material-icons">widgets </v-icon>
            <p>Overview</p>
          </div>
          <hr />
        </div>
      </div>
      <div class="bottom-block">
        <hr />
        <div class="user-and-out">
          <div class="user">
            <div class="icon"></div>
            <a href="">User</a>
          </div>
          <div class="out">
            <v-icon class="icon-out">exit_to_app </v-icon>
            <a href="" @click="out">Log Out</a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="header">
        <div class="date">
          <p>Overview</p>
          <p class="dateTime">{{ date }}</p>
        </div>
        <v-btn> Add Curency </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import authDb from "../firebase";
export default {
  name: "Home",
  date: "",
  methods: {
    out() {
      authDb.signOut().then(() => {
        this.$router.replace("authorization");
      });
    },
    pageTime() {
      let monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let m = monthList[new Date().getMonth()]
    console.log(m)
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .bar {
    padding: 0px 15px 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    height: 100vh;
    background: linear-gradient(
      0.32deg,
      rgba(28, 35, 64, 0) -5.79%,
      #1c0f54 114.59%
    );
    filter: drop-shadow(0px -5px 25px rgba(0, 3, 32, 0.5));
    .top-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      .heading {
        margin-top: 24px;
        h2 {
          font-family: Raleway;
          font-style: normal;
          font-weight: 800;
          font-size: 24px;
          line-height: 28px;
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
        hr {
          width: 100px;
          height: 2px;
          background: #1288e8;
        }
      }

      .content-switcher {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 189.99px;
        height: 46px;
        background: #32395e;
        border-radius: 5px;
        .currency-overview {
          display: flex;
          align-items: center;
          align-self: flex-start;
          margin-top: 10px;
          margin-left: 16px;
          .theme--light.v-icon {
            color: #ffffff;
          }
        }
        p {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          text-transform: capitalize;
          color: #ffffff;
          border-radius: 5px;
          margin-left: 16px;
        }

        hr {
          width: 185px;
          height: 3px;
          background: #1288e8;
          border-radius: 5px;
        }
      }
    }
    .bottom-block {
      margin: 30px 0px 40px 0px;
      hr {
        width: 172px;
        height: 2px;
        background: #018fff;
        border-radius: 5px;
      }
      .user-and-out {
        .user {
          margin-top: 24px;
          display: flex;
          height: 22px;
          width: 117px;
          .icon {
            margin-left: 8px;
            width: 21px;
            height: 21px;
            border-radius: 50%;
            border: 1px solid #018fff;
          }
          a {
            margin-left: 14px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #616a8b;
          }
        }
        .out {
          margin-top: 24px;
          display: flex;
          height: 22px;
          width: 117px;
          .icon-out {
            color: #616a8b;
            margin-left: 6px;
          }
          a {
            margin-left: 13px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #616a8b;
          }
        }
      }
    }
  }
  .main-content {
    width: 100%;
    border-top: 1px solid #2d317a;
    margin: 88px 32px 1px 32px;
    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 24px;
      .date {
        display: flex;
        align-items: center;
        p {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          color: #ffffff;
        }
        .dateTime {
          margin-left: 40px;
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          text-transform: capitalize;
          color: #54669c;
          border-radius: 5px;
        }
      }
      .v-btn {
        width: 125px;
        height: 32px;
        border-radius: 25px;
        background: linear-gradient(
          271.88deg,
          #3887fe 4.26%,
          #3ba0ff 51.37%,
          #5fb2ff 99.01%
        );
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: #ffffff;
        text-transform: capitalize;
      }
    }
  }
}
</style>
