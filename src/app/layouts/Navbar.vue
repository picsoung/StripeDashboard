<template lang="html">
  <!-- START NAV -->
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">

        <a class="navbar-item brand-text" href="../">
          Stripe dashboard
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link  class="navbar-item" :to="{ name: 'home'}">Home</router-link>
          <a class="navbar-item" href="admin.html">
            Payments
          </a>
          <a class="navbar-item" href="admin.html">
            Alerts
          </a>
        </div>

      </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
