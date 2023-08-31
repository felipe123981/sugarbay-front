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
    <b-card>
      <b-media>
        <template #aside>
          <i class="bx bx-lock"></i>
        </template>

        <h5 class="mt-0">Recent Login</h5>
        <p>there was a recent login to you account from this device</p>
      </b-media>
    </b-card>
    <br />
    <b-card>
      <b-media>
        <template #aside>
          <i class="bx bx-sync"></i>
        </template>

        <h5 class="mt-0">Password Reset</h5>
        <p>Your password has been restored successfully</p>
      </b-media>
    </b-card>
    <br />
    <b-card>
      <b-media>
        <template #aside>
          <i class="bx bx-package"></i>
        </template>

        <h5 class="mt-0">Order Received</h5>
        <p>Your password has been restored successfully</p>
      </b-media>
    </b-card>
    <br />
    <b-card>
      <b-media>
        <template #aside>
          <i class="bx bx-money"></i>
        </template>

        <h5 class="mt-0">Payment Received</h5>
        <p>Your password has been restored successfully</p>
      </b-media>
    </b-card>
    <br />
    <b-card>
      <b-media>
        <template #aside>
          <i class="bx bx-money-withdraw"></i>
        </template>

        <h5 class="mt-0">Withdraw success</h5>
        <p>Your password has been restored successfully</p>
      </b-media>
    </b-card>
    <!---->
    <br />
    <b-card>
      <b-media>
        <template #aside>
          <i class="bx bx-x-circle"></i>
        </template>

        <h5 class="mt-0">Order Canceled</h5>
        <p>Your password has been restored successfully</p>
      </b-media>
    </b-card>
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
        }
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
