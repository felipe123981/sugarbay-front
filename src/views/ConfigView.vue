<template>
  <div id="app">
    <h1 style="color: var(--text-color)"><i class='bx bxs-cog' ></i> Settings:</h1>
    <div>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Preferences" active
            ><b-card-text>Tab contents 1</b-card-text></b-tab
          >
          <b-tab title="Payment methods"><b-card-text>Tab contents 2</b-card-text></b-tab>
          <b-tab title="Privacy and security"><b-card-text>Tab contents 3</b-card-text></b-tab>
          
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfigView"
};
</script>
