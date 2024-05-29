<template>
  <div id="app">
    <div class="__apr-constructor-code"></div>
    <form class="__apr-constructor-form">
      <span class="__apr-constructor-error"></span>
      <div class="__apr-constructor-container">
        <button stop type="button" class="__apr-constructor-button" v-b-modal.withdrawModal>
          <svg v-if="currency == 'BTC'" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 4091.27 4091.73">
            <g fill-rule="nonzero">
              <path
                d="m4030.06 2540.77c-273.24 1096.01-1383.32 1763.02-2479.46 1489.71-1095.68-273.24-1762.69-1383.39-1489.33-2479.31 273.12-1096.13 1383.2-1763.19 2479-1489.95 1096.06 273.24 1763.03 1383.51 1489.76 2479.57l.02-.02z"
                fill="#f7931a"></path>
              <path
                d="m2947.77 1754.38c40.72-272.26-166.56-418.61-450-516.24l91.95-368.8-224.5-55.94-89.51 359.09c-59.02-14.72-119.63-28.59-179.87-42.34l90.16-361.46-224.36-55.94-92 368.68c-48.84-11.12-96.81-22.11-143.35-33.69l.26-1.16-309.59-77.31-59.72 239.78s166.56 38.18 163.05 40.53c90.91 22.69 107.35 82.87 104.62 130.57l-104.74 420.15c6.26 1.59 14.38 3.89 23.34 7.49-7.49-1.86-15.46-3.89-23.73-5.87l-146.81 588.57c-11.11 27.62-39.31 69.07-102.87 53.33 2.25 3.26-163.17-40.72-163.17-40.72l-111.46 256.98 292.15 72.83c54.35 13.63 107.61 27.89 160.06 41.3l-92.9 373.03 224.24 55.94 92-369.07c61.26 16.63 120.71 31.97 178.91 46.43l-91.69 367.33 224.51 55.94 92.89-372.33c382.82 72.45 670.67 43.24 791.83-303.02 97.63-278.78-4.86-439.58-206.26-544.44 146.69-33.83 257.18-130.31 286.64-329.61l-.07-.05zm-512.93 719.26c-69.38 278.78-538.76 128.08-690.94 90.29l123.28-494.2c152.17 37.99 640.17 113.17 567.67 403.91zm69.43-723.3c-63.29 253.58-453.96 124.75-580.69 93.16l111.77-448.21c126.73 31.59 534.85 90.55 468.94 355.05z"
                fill="#fff"></path>
            </g>
          </svg>

          <svg v-if="currency == 'LTC'" viewBox="0 0 508.96 508.96"><circle cx="254.48" cy="254.48" fill="#fff" r="226.94"></circle><path d="m256.38 2c-140.54 0-254.48 114-254.48 254.52s113.94 254.48 254.48 254.48 254.49-113.93 254.49-254.48c.4-140.14-112.87-254.07-253-254.52zm4.32 263.11-26.5 89.34h141.72a7.15 7.15 0 0 1 7.4 6.89v2.34l-12.32 42.57a9.18 9.18 0 0 1 -9.24 6.78h-216.9l36.35-123.85-40.67 12.32 9.25-28.34 40.66-12.33 51.15-173.76a9.3 9.3 0 0 1 9.24-6.78h54.84a7.15 7.15 0 0 1 7.39 6.9v2.35l-43.13 146.65 40.67-12.33-8.61 29.58z" fill="#345d9d" transform="translate(-1.9 -2.04)"></path></svg>

          <svg v-if="currency == 'BCH'" enable-background="new 0 0 788 788" viewBox="0 0 788 788"><circle cx="394" cy="394" fill="#0ac18e" r="394"></circle><path d="m516.9 261.7c-19.8-44.9-65.3-54.5-121-45.2l-17.9-69.4-42.2 10.9 17.6 69.2c-11.1 2.8-22.5 5.2-33.8 8.4l-17.6-68.8-42.2 10.9 17.9 69.4c-9.1 2.6-85.2 22.1-85.2 22.1l11.6 45.2s31-8.7 30.7-8c17.2-4.5 25.3 4.1 29.1 12.2l49.2 190.2c.6 5.5-.4 14.9-12.2 18.1.7.4-30.7 7.9-30.7 7.9l4.6 52.7s75.4-19.3 85.3-21.8l18.1 70.2 42.2-10.9-18.1-70.7c11.6-2.7 22.9-5.5 33.9-8.4l18 70.3 42.2-10.9-18.1-70.1c65-15.8 110.9-56.8 101.5-119.5-6-37.8-47.3-68.8-81.6-72.3 21.1-18.7 31.8-46 18.7-81.7zm-20.3 165.5c8.4 62.1-77.9 69.7-106.4 77.2l-24.8-92.9c28.6-7.5 117-39 131.2 15.7zm-52-126.5c8.9 55.2-64.9 61.6-88.7 67.7l-22.6-84.3c23.9-5.9 93.2-34.5 111.3 16.6z" fill="#fff"></path></svg>          

          <svg v-if="currency == 'DOGE'" height="65" viewBox="0 0 64 65" width="64"><g fill="none"><circle cx="32.2" cy="32.4" fill="#f8bf1a" r="31.7"></circle><path d="m14.6 50.2v-8.4h4.9v-19.2h-4.9v-8.1h20.5c1.4 0 2.8.4 4.1.9 2.6 1 4.9 2.5 6.7 4.7 1.6 1.9 2.7 4.1 3.3 6.6 1 4.2 1 8.5-.2 12.7-1.6 5.5-5 9.2-10.8 10.5-1 .2-2.1.3-3.1.4h-19.7c-.3-.1-.5-.1-.8-.1zm14.9-8.4c1.1 0 2.2.1 3.3 0 1.4-.1 2.7-.6 3.6-1.8.8-1 1.5-2.1 1.9-3.3.8-2.7.5-5.4-.1-8.1-.3-1.6-1.1-3.1-2.1-4.3-.6-.7-1.4-1.5-2.3-1.6-1.4-.3-2.9-.1-4.3-.1z" fill="#fff"></path></g></svg>

          <span></span> Withdraw
        </button>
        <b-modal id="withdrawModal" title="" ok-only :header-bg-variant="headerBgVariant"
          :footer-bg-variant="footerBgVariant" :header-text-variant="headerTextVariant">
          <div class="content">
            <div class="payment-body">
              Withdraw

            </div>
          </div>
        </b-modal>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'CryptoWithdrawButton',
  props: {
    crypto: String
  },
  watch: {
    crypto(newValue) {
      this.currency = newValue;
    }
  },
  data() {
    return {
      currency: "BTC",
      headerTextVariant: "danger",
      footerBgVariant: "warning",
      headerBgVariant: "warning",

    };
  },
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}

* {
  color: var(--text-color);
}

.__apr-constructor-error {
  display: none;
  margin-bottom: 12px;
  color: #ff0000;
  border: 1px solid #ff0000;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #f9e8e8;
}

.__apr-constructor-container-input {
  display: inline-block;
  margin-right: 16px;
  position: relative;
  margin-top: 6px;
}

.__apr-constructor-fiat-icon {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #5d8ab9;
}

.__apr-constructor-form {
  max-width: 400px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji",
    sans-serif;
}

.__apr-constructor-container {
  display: flex;
  flex-wrap: wrap;
}

.__apr-constructor-button {
  background-color: #5d8ab9;
  color: #ffffff;
  border: 1px solid;
  border-color: #5d8ab9;
  padding: 0 16px 0 12px;
  border-radius: 8px;
  cursor: pointer;
  height: 36px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  margin-top: 6px;
  display: flex;
  align-items: center;
}

.__apr-constructor-button svg {
  width: 20px;
  margin-right: 8px;
}

.__apr-constructor-button span {
  width: 0.5px;
  background: #ced4da;
  height: 100%;
  display: block;
  margin: 0 8px;
}

.__apr-constructor-input {
  width: 200px;
  height: 36px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #ced4da;
  transition: 0.2s;
  padding-left: 12px;
  padding-right: 42px;
  font-family: inherit;
}

.__apr-constructor-input:focus {
  border: 1px solid #5d8ab9;
}

.__apr-constructor-container-total-amount {
  display: none;
  text-align: start;
  margin-top: 12px;
}
</style>
<!--

    <template>
  
</template>

<script>
export default {
  name: "CryptoPaymentButton",
  
};
</script>

<style scoped>

</style>


-->