<template>
     <div class="notification">
          <div class="content">
            <div class="flag">
              <i :class="flag"></i>
            </div>
            <div class="body">
              <div class="header">
                <div class="title">
                  <h5>{{ title }}</h5>
                </div>
                <div class="date">
                  {{ date }}
                </div>
              </div>
              <div class="message">
                {{ message }}
              </div>
            </div>
          </div>
        </div>
    
</template>
<script>
export default {
    name: "NotificationComponent",
    props: {
      flag: String,
      title: String,
      message: String,
      date: String,
    }
}
</script>
<style scoped>
.icon {
    min-width: 15px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

* {
    color: #707070
}
.notification {
  display: flex;
  width: 42vw;
  background-color: var(--sidebar-color);
  border-radius: 10px;
}
.content {
    padding: 10px;
  display: flex;
  flex-flow: row nowrap;
}
.flag {
    height: 60px;
    width: 60px;
    padding: 15px;
    margin: 10px;
    border-radius: 50%;
    --tw-bg-opacity: 1;
    background-color: rgb(254 249 195);
}
.body {
    padding-top: 10px;
  display: flex;
  flex-direction: column;
}
.message {
    margin-left: 8px;
}
.header {
  display: flex;
  flex-flow: row wrap-reverse; 
  margin-left: 8px;
}
.date {
  margin-left: auto;
  margin-bottom: 0;
  right: 0;
}
</style>