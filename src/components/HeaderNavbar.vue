<template>
  <div>
    <b-navbar  type="dark" class="my-navbar">
      <b-navbar-brand href="#"> </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2 search-input"
            placeholder="Search"
          ></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><i class="bx bx-filter-alt"></i> Filter</em>
          </template>
          <b-dropdown-item href="#"
            ><i class="bx bx-dollar"></i> Best sellers</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><i class="bx bx-sort"></i> Sort A to Z</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><i class="bx bx-calendar-week"></i> Last week</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><i class="bx bx-calendar"></i> Date to date</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><i class="bx bx-x-circle"></i> Clear</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "headerNavbar"
};
</script>
<style scoped>
.search-input {
  width: 95px;
}
.my-navbar {
  position: relative;
  background-color: var(--primary-color);
  color: #fff;
  box-shadow: 2px 2px 3px #999;
}
</style>
