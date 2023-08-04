<template>
  <div id="app">
    <h2 style="color: var(--text-color)"><i class='bx bxs-cog' ></i> Settings:</h2>
    <div>
      <b-card no-body style="background-color: var(--primary-color-light);">
        <b-tabs pills card vertical>
          <b-tab title="Preferences" active
            ><b-card-text>
              language
              <br>
              currency

            </b-card-text></b-tab
          >
          <b-tab title="Payment methods"><b-card-text>Tab contents 2</b-card-text></b-tab>
          <b-tab title="Privacy and security"><b-card-text>Tab contents 3</b-card-text></b-tab>
          
        </b-tabs>
      </b-card>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfigView"
};
</script>
