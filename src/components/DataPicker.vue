<template>
  <div>
    <b-input-group class="mb-3">
      <b-form-input
        readonly
        @click="enableInput"
        :disabled="lockform"
        id="example-input"
        style="appearance: none; -webkit-appearance: none;"
        v-model="value"
        type="date"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          :disabled="lockform"
          v-model="value"
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>

    <p>{{ formatted }}</p>
  </div>
</template>

<script>
export default {
  name: "DataPicker",
  props: {
    disabled: undefined
  },
  watch: {
    value(newValue) {
      this.$emit("birthdate-changed", newValue);
    }
  },
  computed: {
    lockform() {
      return this.disabled;
    }
  },
  data() {
    return {
      value: "",
      formatted: "",
      selected: ""
    };
  },
  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
    enableInput(event) {
      event.target.removeAttribute("readonly");
    }
  }
};
</script>
