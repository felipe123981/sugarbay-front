<template>
  <div id="app">
    <h1>
      <div class="checkout-panel">
        <div class="panel-body">
          <h1>Fuck u</h1>
          <h2 class="title">Checkout</h2>
          
          <div class="progress-bar">
        <b-col>
            <div class="step active"></div>
        </b-col>
            <div class="step active"></div>
            <div class="step"></div>
            <div class="step"></div>
          </div>
          <b-row></b-row>

          <div class="payment-method">
            <label for="card" class="method card">
              <div class="card-logos">
                <img src="@/assets/img/visa_logo.png" />
                <img src="@/assets/img/mastercard_logo.png" />
              </div>

              <div class="radio-input">
                <input id="card" type="radio" name="payment" />
                Pay £340.00 with credit card
              </div>
            </label>

            <label for="paypal" class="method paypal">
              <img src="@/assets/img/paypal_logo.png" />
              <div class="radio-input">
                <input id="paypal" type="radio" name="payment" />
                Pay £340.00 with PayPal
              </div>
            </label>
          </div>

          <div class="input-fields">
            <div class="column-1">
              <label for="cardholder">Cardholder's Name</label>
              <input type="text" id="cardholder" />

              <div class="small-inputs">
                <div>
                  <label for="date">Valid thru</label>
                  <input type="text" id="date" placeholder="MM / YY" />
                </div>

                <div>
                  <label for="verification">CVV / CVC *</label>
                  <input type="password" id="verification" />
                </div>
              </div>
            </div>
            <div class="column-2">
              <label for="cardnumber">Card Number</label>
              <input type="password" id="cardnumber" />

              <span class="info"
                >* CVV or CVC is the card security code, unique three digits
                number on the back of your card separate from its number.</span
              >
            </div>
          </div>
        </div>

        <div class="panel-footer">
          <button class="btn back-btn">Back</button>
          <button class="btn next-btn">Next Step</button>
        </div>
      </div>
    </h1>
  </div>
</template>
<script>
import jquery from "jquery";

var $ = jquery();


export default {
  name: "CheckoutView",
  mounted() {
    $(document).ready(function () {
  // Radio box border
  $(".method").on("click", function () {
    $(".method").removeClass("blue-border");
    $(this).addClass("blue-border");
  });

  // Validation
  var $cardInput = $(".input-fields input");

  $(".next-btn").on("click", function () {
    $cardInput.removeClass("warning");

    $cardInput.each(function () {
      var $this = $(this);

      if (!$this.val()) {
        $this.addClass("warning");
      }
    });
  });
});
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Montserrat:400,700";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};
</script>
<style scoped>
/*
--- Basic Styling
*/

* {
  box-sizing: border-box;
}

html,
body {
  font-family: "Montserrat", sans-serif;
  display: flex;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  justify-content: center;
  align-items: center;
}

/*
--- Checkout Panel
*/
.checkout-panel {
  display: flex;
  flex-direction: column;
  width: 940px;
  height: 766px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
}

/* Panel Body */
.panel-body {
  padding: 45px 80px 0;
  flex: 1;
}

.title {
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 40px;
  color: #2e2e2e;
}

/* Progress Bar */
.progress-bar {
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
}

.step {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: block;
  width: 25px;
  height: 25px;
  margin-bottom: 30px;
  border: 4px solid #fff;
  border-radius: 50%;
  background-color: #efefef;
}

.step:after {
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 22px;
  width: 225px;
  height: 6px;
  content: "";
  background-color: #efefef;
}

.step:before {
  color: #2e2e2e;
  position: absolute;
  top: 40px;
}

.step:last-child:after {
  content: none;
}

.step.active {
  background-color: #f62f5e;
}
.step.active:after {
  background-color: #f62f5e;
}
.step.active:before {
  color: #f62f5e;
}

.step.active + .step {
  background-color: #f62f5e;
}
.step.active + .step:before {
  color: #f62f5e;
}

.step:nth-child(1):before {
  content: "Delivery";
}
.step:nth-child(2):before {
  right: -40px;
  content: "Confirmation";
}
.step:nth-child(3):before {
  right: -30px;
  content: "Payment";
}
.step:nth-child(4):before {
  right: 0;
  content: "Finish";
}

/* Payment Method */
.payment-method {
  display: flex;
  margin-bottom: 60px;
  justify-content: space-between;
}

.method {
  display: flex;
  flex-direction: column;
  width: 382px;
  height: 122px;
  padding-top: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: rgb(249, 249, 249);
  justify-content: center;
  align-items: center;
}

.blue-border {
  border: 1px solid rgb(110, 178, 251);
}

.card-logos {
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
}

.radio-input {
  margin-top: 20px;
}

input[type="radio"] {
  display: inline-block;
}

/* Input Fields */
.input-fields {
  display: flex;
  justify-content: space-between;
}

.input-fields label {
  display: block;
  margin-bottom: 10px;
  color: #b4b4b4;
}

.warning {
  border-color: #f62f5e !important;
}

.info {
  font-size: 12px;
  font-weight: 300;
  display: block;
  margin-top: 50px;
  opacity: 0.5;
  color: #2e2e2e;
}

div[class*="column"] {
  width: 382px;
}

input[type="text"],
input[type="password"] {
  font-size: 16px;
  width: 100%;
  height: 50px;
  padding-right: 40px;
  padding-left: 16px;
  color: rgba(46, 46, 46, 0.8);
  border: 1px solid rgb(225, 225, 225);
  border-radius: 4px;
  outline: none;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: rgb(119, 219, 119);
}

#date {
  background: url(@/assets/img/icons_calendar_black.png) no-repeat 90%;
}
#cardholder {
  background: url(@/assets/img/icons_person_black.png) no-repeat 95%;
}
#cardnumber {
  background: url(@/assets/img/icons_card_black.png) no-repeat 95%;
}
#verification {
  background: url(@/assets/img/icons_lock_black.png) no-repeat 90%;
}

.small-inputs {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.small-inputs div {
  width: 182px;
}

/* Panel Footer */
.panel-footer {
  display: flex;
  width: 100%;
  height: 96px;
  padding: 0 80px;
  background-color: rgb(239, 239, 239);
  justify-content: space-between;
  align-items: center;
}

/* Buttons */
.btn {
  font-size: 16px;
  width: 163px;
  height: 48px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  letter-spacing: 1px;
  border: none;
  border-radius: 23px;
}

.back-btn {
  color: #f62f5e;
  background: #fff;
}

.next-btn {
  color: #fff;
  background: #f62f5e;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
