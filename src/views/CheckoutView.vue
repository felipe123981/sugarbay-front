<template>
  <div id="app">
    <b-row>
      <b-col>
        <div>
          <div class="header"><h4>Select payment method:</h4></div>

          <div class="checkout-body">
            <div class="checkout-card">
              <div class="checkout-radio-input">
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected_method"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="Cryptocurrency"
                    aria-selected="true"
                    >Cryptocurrency
                  </b-form-radio>
                </b-form-group>
              </div>
              <div class="radio-input-icons">
                <b-img
                  :src="require('@/assets/img/btc1.webp')"
                  class="icon"
                ></b-img>
                <b-img
                  :src="require('@/assets/img/ltc1.webp')"
                  class="icon"
                ></b-img>
                <b-img
                  :src="require('@/assets/img/doge1.webp')"
                  class="icon"
                ></b-img>
                <b-img
                  :src="require('@/assets/img/bch1.webp')"
                  class="icon"
                ></b-img>
              </div>
            </div>

            <div class="coming_soon">
              <h5>Coming soon:</h5>

              <div class="checkout-card">
                <div class="checkout-radio-input">
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <b-form-radio
                      v-model="selected_method"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="Paypal"
                      aria-selected="true"
                      disabled="true"
                      >Paypal
                    </b-form-radio>
                  </b-form-group>
                </div>
                <div class="radio-input-icons">
                  <b-img
                    :src="require('@/assets/img/paypal-logo.png')"
                    height="35px"
                  ></b-img>
                </div>
              </div>

              <div class="checkout-card">
                <div class="checkout-radio-input">
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <b-form-radio
                      v-model="selected_method"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="CreditOrDebtCard"
                      aria-selected="true"
                      disabled="true"
                      >Credit or debt card
                    </b-form-radio>
                  </b-form-group>
                </div>
                <div class="radio-input-icons">
                  <b-img
                    :src="require('@/assets/img/mastercard_logo.png')"
                    height="35px"
                  ></b-img>
                  <b-img
                    :src="require('@/assets/img/visa_logo.png')"
                    height="25px"
                  ></b-img>
                </div>
              </div>

              <div class="checkout-card">
                <div class="checkout-radio-input">
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <b-form-radio
                      v-model="selected_method"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="Receipt"
                      aria-selected="true"
                      disabled="true"
                      >Receipt
                    </b-form-radio>
                  </b-form-group>
                </div>
                <div class="radio-input-icons">
                  <div class="receipt-content">
                    <div class="barcode">
                      <div class="receipt-content">
                        <div class="barcode">
                          <i class="bx bx-barcode-reader barcode-icon"></i>
                        </div>
                        <div class="receipt-text"><h5>Receipt</h5></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="checkout-card">
                <div class="checkout-radio-input">
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <b-form-radio
                      v-model="selected_method"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="Pix"
                      aria-selected="true"
                      disabled="true"
                      >Pix
                    </b-form-radio>
                  </b-form-group>
                </div>
                <div class="radio-input-icons">
                  <div class="receipt-content">
                    <div class="barcode">
                      <b-img
                        :src="require('@/assets/img/pix-icon.png')"
                        height="38vh"
                      ></b-img>
                    </div>

                    <div class="receipt-text"><h5>Pix</h5></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="payment-form">
          <div class="bitcoin-payment">
            <div class="payment-body">
              <div class="deposit-currency">
                <div>Deposit currency</div>
                <div>
                  <div class="from">
                    <div class="select-box">
                      <img src="https://flagcdn.com/48x36/us.png" alt="flag" />
                      <select>
                         Options tag are inserted from JavaScript 
                      </select>
                    </div>
                  </div>
                  <!--
                    <b-dropdown
                    :text="selected_currency"
                    variant="outline-primary"
                    class="m-2"
                  >
                    <b-dropdown-item
                      v-model="choosen_currency"
                      @click="selectCurrency(currencies[0])"
                      value="BTC"
                    >
                      <b-img
                        :src="require(`@/assets/icon/bitcoin.svg`)"
                      ></b-img>
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-model="choosen_currency"
                      @click="selectCurrency(currencies[1])"
                      value="LTC"
                    >
                      <b-img
                        :src="require(`@/assets/icon/litecoin.svg`)"
                      ></b-img>
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-model="choosen_currency"
                      @click="selectCurrency(currencies[2])"
                      value="BCH"
                    >
                      <b-img
                        :src="require(`@/assets/icon/bitcoin-cash.svg`)"
                      ></b-img>
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-model="choosen_currency"
                      @click="selectCurrency(currencies[3])"
                      value="DOGE"
                    >
                      <b-img
                        :src="require(`@/assets/icon/dogecoin.svg`)"
                      ></b-img>
                    </b-dropdown-item>
                  </b-dropdown>
                  -->
                  <!--
                    
                  -->
                </div>
              </div>

              <div class="processing-fee">
                <div>Processing fee</div>
                <div>U$0.00</div>
              </div>
              <hr />
              <div class="total">
                <div>
                  <h5>Total</h5>
                </div>
                <div>U$432.00</div>
              </div>
              <div class="payment-button">
                <CryptoPaymentButton></CryptoPaymentButton>
              </div>
              <br>
              <div class="advices">
                <p>&#x2022; You agree your deposit is <strong>non-refundable</strong>!</p>
                <br>
                <p>&#x2022; Deposits can be confirmed from <strong>10 minutes to a few hours</strong>!</p>
                   
                  
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <br>
  </div>
</template>
<script>
import CryptoPaymentButton from "@/components/CryptoPaymentButton.vue";
import country_list from "@/modules/country_list";
export default {
  name: "CheckoutView",
  components: {
    CryptoPaymentButton
  },
  mounted() {
    const dropList = document.querySelectorAll("select"),
      fromCurrency = document.querySelector(".from select");

    this.fromCurrency = fromCurrency;

    for (let i = 0; i < dropList.length; i++) {
      for (let currency_code in country_list) {
        // selecting USD by default as FROM currency and NPR as TO currency
        let selected =
          i == 0
            ? currency_code == "USD"
              ? "selected"
              : ""
            : currency_code == "NPR"
            ? "selected"
            : "";
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
      }
      dropList[i].addEventListener("change", (e) => {
        this.loadFlag(e.target); // calling loadFlag with passing target element as an argument
      });
    }
  },
  data() {
    return {
      selected_method: "Cryptocurrency",
      currencies: [
        "Bitcoin (BTC)",
        "Litecoin (LTC)",
        "BitcoinCash (BCH)",
        "Dogecoin (DOGE)"
      ],
      selected_currency: "Bitcoin (BTC)",
      choosen_currency: "BTC",
      fromCurrency: ""
    };
  },
  watch: {
    selected_currency(newValue) {
      this.choosen_currency = this.trunckCurrencyValue(newValue);
    }
  },
  methods: {
    loadFlag(element) {
      for (let code in country_list) {
        if (code == element.value) {
          // if currency code of country list is equal to option value
          let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
          // passing country code of a selected currency code in a img url
          imgTag.src = `https://flagcdn.com/48x36/${country_list[
            code
          ].toLowerCase()}.png`;
        }
      }
    },
    trunckCurrencyValue(value) {
      const indiceAbertura = value.indexOf("(");
      const indiceFechamento = value.indexOf(")");

      // Verifique se ambos os índices foram encontrados
      if (indiceAbertura !== -1 && indiceFechamento !== -1) {
        // Extraia o valor entre parênteses
        const valorEntreParenteses = value.slice(
          indiceAbertura + 1,
          indiceFechamento
        );
        return valorEntreParenteses;
      }

      // Se não foram encontrados parênteses, retorne uma string vazia ou outra indicação de que não há valor
      return "";
    },
    selectCurrency(value) {
      this.selected_currency = value;
    }
  }
};
</script>
<style scoped>
.payment-form {
  padding-top: 5.5vh;
}
.payment-body {
  padding: 12px;
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--primary-color-light);
  border-radius: 5px;
}
.deposit-currency {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}
.deposit-amount {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}
.processing-fee {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 2px;
}
.total {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}
.icon {
  height: 23px;
}
.checkout-body {
  display: flex;
  flex-flow: column nowrap;
}
.checkout-card {
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 5px;
  background-color: var(--primary-color-light);
  width: 50vw;
  min-width: 278px;
  max-width: 500px;
}
.checkout-radio-input {
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-left: 15px;
}
.radio-input-icons {
  display: flex;
  flex-flow: row nowrap;
  padding: 7px;
}
.header {
  width: auto;
}
* {
  color: var(--text-color);
}
.my-navbar {
  position: relative;
  background-color: var(--primary-color);
  color: #fff;
  box-shadow: 2px 2px 3px #999;
}
.receipt-content {
  display: flex;
  align-items: center;
}
.barcode-icon {
  font-size: 8vh;
}
.receipt-text {
  padding: 7px;
}
select {
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: none;
}
.drop-list {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}
.drop-list .select-box {
  display: flex;
  width: 115px;
  height: 45px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  border: 1px solid #999;
}
.select-box img {
  max-width: 21px;
}
.select-box select {
  width: auto;
  font-size: 16px;
  background: none;
  margin: 0 -5px 0 5px;
}
.select-box select::-webkit-scrollbar {
  width: 8px;
}
.select-box select::-webkit-scrollbar-track {
  background: #fff;
}
.select-box select::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
  border-right: 2px solid #ffffff;
}
.drop-list .icon {
  cursor: pointer;
  margin-top: 30px;
  font-size: 22px;
}
</style>
