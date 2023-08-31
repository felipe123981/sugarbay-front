<template>
  <div id="app">
    <div>
      <b-navbar type="dark" class="my-navbar">
        <b-navbar-brand href="#">Notifications:</b-navbar-brand>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-navbar>
    </div>
    <br />
    <div
      class="catalog"
      v-for="notification in this.notifications"
      :key="notification.id"
    >
      <NotificationComponent 
        :flag="notification.flag" 
        :title="notification.title"
        :message="notification.message"
        :date="notification.created_at"></NotificationComponent>
        <br>
    </div>
    <br />
  </div>
</template>
<script>
import NotificationComponent from "@/components/NotificationComponent.vue";
export default {
  name: "NotificationsView",
  components: {
    NotificationComponent
  },
  mounted() {
    console.log(this.notifications);
  },
  data() {
    return {
      notifications: [
        {
          id: "anyway",
          flag: "bx bx-lock",
          title: "Recent Login",
          message: "there was a recent login to your account from this device",
          user_id: "anyone",
          created_at: "any date"
        },
        {
          id: "anyway1",
          flag: "bx bx-sync",
          title: "Password Reset",
          message: "Your password has been restored successfully",
          user_id: "anyone1",
          created_at: "any date1"
        },
        {
          id: "anyway2",
          flag: "bx bx-package",
          title: "Order Received",
          message: "Your password has been restored successfully",
          user_id: "anyone2",
          created_at: "any date2"
        },
        {
          id: "anyway3",
          flag: "bx bx-money",
          title: "Payment Received",
          message: "Your password has been restored successfully",
          user_id: "anyone3",
          created_at: "any date3"
        },
        {
          id: "anyway4",
          flag: "bx bx-money-withdraw",
          title: "Payment Received",
          message: "Your password has been restored successfully",
          user_id: "anyone4",
          created_at: "any date4"
        },
        {
          id: "anyway5",
          flag: "bx bx-x-circle",
          title: "Order Canceled",
          message: "Your password has been restored successfully",
          user_id: "anyone5",
          created_at: "any date5"
        },
      ]
    };
  }
};
</script>
<style scoped>
.my-navbar {
  position: relative;
  background-color: var(--primary-color);
  color: #fff;
  box-shadow: 2px 2px 3px #999;
}
</style>
