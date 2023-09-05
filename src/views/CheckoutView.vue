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
              <br />
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

              <br />

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

              <br />
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
                    <br /><br />
                    <div class="receipt-text"><h5>Pix</h5></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        ><b-dropdown
          :text="selected_currency"
          variant="outline-primary"
          class="m-2"
        >
          <b-dropdown-item
            v-model="choosen_currency"
            @click="selectCurrency(currencies[0])"
            value="BTC"
          >
            <b-img :src="require(`@/assets/icon/bitcoin.svg`)"></b-img>
          </b-dropdown-item>
          <b-dropdown-item
            v-model="choosen_currency"
            @click="selectCurrency(currencies[1])"
            value="LTC"
          >
            <b-img :src="require(`@/assets/icon/litecoin.svg`)"></b-img>
          </b-dropdown-item>
          <b-dropdown-item
            v-model="choosen_currency"
            @click="selectCurrency(currencies[2])"
            value="BCH"
          >
            <b-img :src="require(`@/assets/icon/bitcoin-cash.svg`)"></b-img>
          </b-dropdown-item>
          <b-dropdown-item
            v-model="choosen_currency"
            @click="selectCurrency(currencies[3])"
            value="DOGE"
          >
            <b-img :src="require(`@/assets/icon/dogecoin.svg`)"></b-img>
          </b-dropdown-item> </b-dropdown
      ></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "CheckoutView",
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
      choosen_currency: "BTC"
    };
  },
  watch: {
    selected_currency(newValue) {
      this.choosen_currency = this.trunckCurrencyValue(newValue);
    }
  },
  methods: {
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
  border: 2px;
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
</style>
