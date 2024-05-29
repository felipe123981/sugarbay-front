<template>
    <div id="wallet">
        <HeaderNavbar headerTitle="Wallet" />
        <br>
        <h1 style="color: var(--text-color);">
            Balance = {{ balance.toPrecision(8) }} {{ choosen_currency }}
        </h1>
        <div class="wallet_address">
            <h5 style="color: var(--text-color);">Address:</h5>
            <div style="color: var(--text-color);" class="address">
                {{ my_address }}
            </div>
            <br>
            <div class="controls">
                <div class="copy_button">
                    <b-button pill size="sm" variant="primary"> Copy <i class='bx bx-copy'></i> </b-button>
                </div>
                <div class="change_button">
                    <b-button pill size="sm" variant="primary">
                        Change <i class='bx bx-sync'></i>
                    </b-button>
                </div>
            </div>
            <div class="crypto_selector">
                    <b-dropdown :text="selected_currency" variant="outline-primary" class="m-2">
                        <b-dropdown-item v-model="choosen_currency" @click="selectCurrency(currencies[0])" value="BTC">
                            <b-img :src="require(`@/assets/icon/bitcoin.svg`)"></b-img>
                        </b-dropdown-item>
                        <b-dropdown-item v-model="choosen_currency" @click="selectCurrency(currencies[1])" value="LTC">
                            <b-img :src="require(`@/assets/icon/litecoin.svg`)"></b-img>
                        </b-dropdown-item>
                        <b-dropdown-item v-model="choosen_currency" @click="selectCurrency(currencies[2])" value="BCH">
                            <b-img :src="require(`@/assets/icon/bitcoin-cash.svg`)"></b-img>
                        </b-dropdown-item>
                        <b-dropdown-item v-model="choosen_currency" @click="selectCurrency(currencies[3])" value="DOGE">
                            <b-img :src="require(`@/assets/icon/dogecoin.svg`)"></b-img>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
        </div>
        <br>
        <div class="actions">
            <div class="withdraw">
                <CryptoWithdrawButton :crypto="choosen_currency" />
            </div>
            <div class="deposit">
                <CryptoDepositButton :crypto="choosen_currency" />
            </div>
        </div>
        <br>
        <h3 style="color: var(--text-color)">History:</h3>
        <div v-if="pageWidth > 580">
            <b-table style="color: var(--text-color)" hover :items="items">
                <template #cell(AMOUNT)="data">
                    <span v-html="data.value"></span>
                </template>
                <template #cell(STATE)="data">
                    <span v-html="data.value"></span>
                </template>
            </b-table>
        </div>
        <div v-else>
            <b-table stacked striped hover :items="items">
                <template #cell(AMOUNT)="data">
                    <span v-html="data.value"></span>
                </template>
                <template #cell(STATE)="data">
                    <span v-html="data.value"></span>
                </template>
            </b-table>
        </div>

    </div>
</template>
<script>
import CryptoWithdrawButton from '@/components/CryptoWithdrawButton.vue'
import CryptoDepositButton from '@/components/CryptoDepositButton.vue';
import HeaderNavbar from '@/components/HeaderNavbar.vue';
export default {
    name: 'WalletView',
    components: {
        HeaderNavbar,
        CryptoDepositButton,
        CryptoWithdrawButton
    },
    mounted() {
        this.pageWidth = document.body.clientWidth;
    },
    watch: {
        selected_currency(newValue) {
            this.choosen_currency = this.trunckCurrencyValue(newValue);
        }
    },
    data() {
        return {
            currencies: [
                "Bitcoin (BTC)",
                "Litecoin (LTC)",
                "BitcoinCash (BCH)",
                "Dogecoin (DOGE)"
            ],
            selected_currency: "Bitcoin (BTC)",
            choosen_currency: "BTC",
            fromCurrency: "",
            my_address: "3HCXVgrDBQ4voywZyohgv1nDShecnGQ9Uf",
            balance: 0.0000,
            crypto: 'BTC',
            pageWidth: 0,
            items: [
                {
                    DATE: "Tue, 28 May 2024 14:03:09",
                    ADDRESS: "3CgVJPaoVWjD2UE6hTJZn4MntbKmUK5Q5e",
                    AMOUNT:
                        "<p style='color: green'> +0.001103 BTC<p>",
                    STATE: "<button type='button' class='btn btn-warning btn-sm' style='border-radius:20px'>PENDING</button>"
                },
                {
                    DATE: "Tue, 28 May 2024 14:03:09",
                    ADDRESS: "3P3gQZ2m5h69cnA1RAGMBHSbED87iRLmpw",
                    AMOUNT:
                        "<p style='color: green'> +0.00057 BTC<p> ",
                    STATE: "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>DONE</button>"
                },
                {
                    DATE: "Tue, 28 May 2024 14:03:09",
                    ADDRESS: "3MfMyHHF6hpTn3hj72ZTH9CnaeftXbKuaw",
                    AMOUNT:
                        "<p style='color: green'> +0.0024 BTC<p>",
                    STATE: "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>DONE</button>"
                },
                {
                    DATE: "Tue, 28 May 2024 14:03:09",
                    ADDRESS: "35JRBi1eqzZt6TSFMcJdfiy2DB8Gf8Bb6C",
                    AMOUNT:
                        "<p style='color: red'> -0.0030 BTC<p>",
                    STATE: "<button type='button' class='btn btn-success btn-sm' style='border-radius:20px'>DONE</button>"
                }
            ]
        }
    },
    methods: {
        selectCurrency(value) {
            this.selected_currency = value;
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
    }
}
</script>
<style scoped>
.actions {
    display: flex;
    flex-flow: row wrap;
}

.deposit {
    padding-left: 15px;
}
.controls {
    display: flex;
    flex-flow: row wrap;
}
</style>