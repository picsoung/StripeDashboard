<template lang="html">
  <div>
  <div class="card events-card">
        <header class="card-header">
          <p class="card-header-title">
            Customers
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon" v-bind:class="{ open }" v-bind:aria-expanded="open ? 'true' : 'false'"
            v-on:click="toggle">
              <i :class="open ? 'fa fa-angle-down' : 'fa fa-angle-right'" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div v-if="open">
          <div class="card-table">
            <div class="content">
              <table class="table is-fullwidth is-striped">
                <tbody>
                  <tr v-for="(item,index) in customers">
                    <!-- <td width="5%"><i class="fa fa-bell-o"></i></td> -->
                    <td>{{item.metadata.name || item.email}}</td>
                    <td>${{amountInDollars(item.transactionsAmount)}}</td>
                    <td><i :class="ccIcon(item)" style="font-size: 18pt;"></i></td>
                    <td><router-link class="button is-small is-primary" :to="{name:'customerProfile', params: { customerId: item.id, transactions: item.transactions}, props: {transactions: item.transactions}}">More</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">View All</a>
          </footer>
        </div>

      </div>
    </div>
</template>

<script>
import mixin from './mixins.js'
export default {
  data() {
    return {
    }
  },
  mixins: [mixin],
  props: ["customers"],
  methods: {
    ccIcon: (item) => {
      var ccType = item.sources.data[0].brand;
      switch (ccType) {
        case "American Express":
          return "fa fa-cc-amex"
          break;
        case "MasterCard":
          return "fa fa-cc-mastercard"
          break;
        case "Visa":
          return "fa fa-cc-visa"
          break;
        case "JCB":
          return "fa fa-cc-jcb"
          break;
        case "Discover":
          return "fa fa-cc-discover"
          break;
        case "Diners Club":
          return "fa fa-cc-diners-club"
          break;
        default:
          return "fa fa-cc"
      }
    },
    amountInDollars(amount){
      return parseInt(amount,10) / 100
    }
  }
}
</script>

<style lang="css">
</style>
