<template lang="html">
  <div>
    <section class="hero is-title welcome is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Customer details
            </h1>
          </div>
        </div>
    </section>
    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered" v-cloak>
        <InfoTiles :title="displayCurrency" :subtitle="'Currency'"></InfoTiles>
        <InfoTiles :title="nbCharges" :subtitle="'Transactions'"></InfoTiles>
      </div>
    </section>
    <div class="columns">
      <div class="column is-6">
        <TransactionsList :transactions="charges"></TransactionsList>
      </div>
      <div class="column is-6">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <chartist
              type="Line"
              :data="pieData"
              :options="chartOptions"
              v-model="pieData">
            </chartist>
            <p class="title" style="text-align: center;">This month</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InfoTiles from './InfoTiles.vue';
import TransactionsList from './TransactionsList.vue';
import moment from 'moment';

export default {
  data() {
      return {
          customer: {},
          charges: [],
          pieData:{
           labels: [],
           series: [
           ]
         },
         chartOptions:{
           fullWidth: true,
          chartPadding: {
            right: 40
          }
        }
      }
  },
  props: ['transactions'],
  mounted() {
    this.fetchCustomer();
    this.loadCharges();
  },
  components: {
    InfoTiles,
    TransactionsList
  },
  methods: {
    ...mapActions([
      'getStripeCustomerDetails'
    ]),
    fetchCustomer() {
      var that = this
      this.getStripeCustomerDetails(this.$route.params.customerId)
      .then(function(result){
        that.customer = result.data;
      })
    },
    loadCharges () {
      this.charges = this.$route.params.transactions;
      this.assembleData()
    },
    assembleData(){
      var d = {
        labels:[],
        series:[[]]
      }
      this.charges.forEach(function(b){
        d.labels.push(moment(b.created*1000).format("HH:mm"))
        d.series[0].push(Math.floor(b.amount/100))
      })
      this.pieData = d
    }
  },
  computed: {
    displayCurrency() {
      return (this.customer.currency || "USD").toUpperCase();
    },
    nbCharges(){
      return this.charges.length;
    }
  }
}
</script>

<style lang="css">
.is-title {
  background: linear-gradient(to right, #5ebd7b, #bbdc36);
}
[v-cloak] {
  display: none;
}
</style>
