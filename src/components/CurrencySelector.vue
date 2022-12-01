<template>
  <div>
    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-dropdown
          id="input-horizontal"
          variant="primary"
          text="Dropdown Button"
          class="m-md-2"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      </b-form-group>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
