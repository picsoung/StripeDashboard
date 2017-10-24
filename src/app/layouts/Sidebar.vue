<template lang="html">
  <div class="column is-3">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
              <router-link :to="{ name: 'home'}">Dashboard</router-link>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="css">
</style>
