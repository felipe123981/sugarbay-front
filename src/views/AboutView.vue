<template>
  <!--About Section-->
  <div class="about-site">
    <div>
      <b-card class="market">
        <b-media>
          <template #aside>
            <b-img
              :src="require('@/assets/img/1281574401536841317-128.png')"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">This market</h5>
          <p>
            Store for online buying and selling of products. Consumers can find
            unique products at competitive prices and companies can expand their
            sales on a single platform.
          </p>
        </b-media>
      </b-card>
    </div>
    <br />
    <div>
      <b-card class="security">
        <b-media>
          <template #aside>
            <b-img
              :src="require('@/assets/img/2274622811537856851-128.png')"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">Security</h5>
          <p>
            This platform is fully encrypted point-to-point (P2P). Also we have
            secure payment methods and a highly specialized team to ensure the
            safety of customers.
          </p>
        </b-media>
      </b-card>
    </div>
    <br />
    <div>
      <b-card class="benefits">
        <b-media>
          <template #aside>
            <b-img
              :src="require('@/assets/img/9080806791529652578-128.png')"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">Offered benefits</h5>
          <p>
            Some of benefits include low prices in competition with others in
            the market, ease of payment methods, various product possibilities
            in addition to the benefits offered to sellers such as sales
            expansion!
          </p>
        </b-media>
      </b-card>
    </div>
    <br />
    <div>
      <b-card class="shippment">
        <b-media>
          <template #aside>
            <b-img
              :src="require('@/assets/img/20104661581586787198-128.png')"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">Shippment</h5>
          <p>
            We rely on the postal delivery system in partnership with the
            company, thus ensuring more agility, integrity, and discounts on
            your purchases!
          </p>
        </b-media>
      </b-card>
    </div>
    <!--
    <div class="container">
      <div class="row">
        <div class="market">
          <table>
            <tr>
              <td>
                <img
                  width="63px"
                  src="@/assets/img/1281574401536841317-128.png"
                  class="market-img"
                />
              </td>

              <td class="about-text">
                <strong>This market</strong><br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada et.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada
                </p>
              </td>
            </tr>
          </table>
        </div>
        <br />
        <div class="security">
          <table>
            <tr>
              <td>
                <img
                  width="63px"
                  src="@/assets/img/2274622811537856851-128.png"
                  class="market-img"
                />
              </td>

              <td class="about-text">
                <strong>Security</strong><br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada et.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada
                </p>
              </td>
            </tr>
          </table>
        </div>

        <br />
        <div class="benefits">
          <table>
            <tr>
              <td>
                <img
                  width="63px"
                  src="@/assets/img/9080806791529652578-128.png"
                  class="market-img"
                />
              </td>

              <td class="about-text">
                <strong>Offered benefits</strong><br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada et.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada
                </p>
              </td>
            </tr>
          </table>
        </div>
        <br />

        <div class="shippment">
          <table>
            <tr>
              <td>
                <img
                  width="63px"
                  src="@/assets/img/20104661581586787198-128.png"
                  class="market-img"
                />
              </td>

              <td class="about-text">
                <strong>Shippment</strong><br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada et.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus bibendum aliquet erat, ut ornare purus malesuada
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div class="separator"></div>
      </div>
    </div>
-->
  </div>
</template>
<script>
export default {
  name: "AboutView"
};
</script>
<style scoped>
.market {
  background-color: var(--primary-color-light);
}
.security {
  background-color: var(--primary-color-light);
}
.benefits {
  background-color: var(--primary-color-light);
}
.shippment {
  background-color: var(--primary-color-light);
}
.about-site {
  /* From https://css.glass */
  height: 80vh;
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.9px);
  -webkit-backdrop-filter: blur(1.9px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>
