<template>
  <div id="app">
    <div class="__apr-constructor-code"></div>
    <form class="__apr-constructor-form">
      <span class="__apr-constructor-error"></span>
      <div class="__apr-constructor-container">
        <button
          type="button"
          class="__apr-constructor-button"
          v-b-modal.depositModal
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            viewBox="0 0 4091.27 4091.73"
          >
            <g fill-rule="nonzero">
              <path
                d="m4030.06 2540.77c-273.24 1096.01-1383.32 1763.02-2479.46 1489.71-1095.68-273.24-1762.69-1383.39-1489.33-2479.31 273.12-1096.13 1383.2-1763.19 2479-1489.95 1096.06 273.24 1763.03 1383.51 1489.76 2479.57l.02-.02z"
                fill="#f7931a"
              ></path>
              <path
                d="m2947.77 1754.38c40.72-272.26-166.56-418.61-450-516.24l91.95-368.8-224.5-55.94-89.51 359.09c-59.02-14.72-119.63-28.59-179.87-42.34l90.16-361.46-224.36-55.94-92 368.68c-48.84-11.12-96.81-22.11-143.35-33.69l.26-1.16-309.59-77.31-59.72 239.78s166.56 38.18 163.05 40.53c90.91 22.69 107.35 82.87 104.62 130.57l-104.74 420.15c6.26 1.59 14.38 3.89 23.34 7.49-7.49-1.86-15.46-3.89-23.73-5.87l-146.81 588.57c-11.11 27.62-39.31 69.07-102.87 53.33 2.25 3.26-163.17-40.72-163.17-40.72l-111.46 256.98 292.15 72.83c54.35 13.63 107.61 27.89 160.06 41.3l-92.9 373.03 224.24 55.94 92-369.07c61.26 16.63 120.71 31.97 178.91 46.43l-91.69 367.33 224.51 55.94 92.89-372.33c382.82 72.45 670.67 43.24 791.83-303.02 97.63-278.78-4.86-439.58-206.26-544.44 146.69-33.83 257.18-130.31 286.64-329.61l-.07-.05zm-512.93 719.26c-69.38 278.78-538.76 128.08-690.94 90.29l123.28-494.2c152.17 37.99 640.17 113.17 567.67 403.91zm69.43-723.3c-63.29 253.58-453.96 124.75-580.69 93.16l111.77-448.21c126.73 31.59 534.85 90.55 468.94 355.05z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          <span></span> Deposit
        </button>
        <b-modal
          id="depositModal"
          title=""
          ok-only
          :header-bg-variant="headerBgVariant"
          :footer-bg-variant="footerBgVariant"
          :header-text-variant="headerTextVariant"
        >
          <div class="content">
            <div class="payment-body"></div>
              Deposit
          </div>
        </b-modal>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    name: "CryptoDepositButton",
    data() {
      return {
        headerTextVariant: "danger",
        footerBgVariant: "warning",
        headerBgVariant: "warning",
      };
    },
  };
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
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji", sans-serif;
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
