<template lang="html">
  <div>
      <section class="hero is-info welcome is-small">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hello, Admin.
              </h1>
              <h2 class="subtitle">
                I hope you are having a great day!
              </h2>
            </div>
          </div>
        </section>
      <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
          <InfoTiles :title="nbCustomers" :subtitle="'Customers'"></InfoTiles>
          <InfoTiles :title="nbTransactions" :subtitle="'Transactions'"></InfoTiles>
          <InfoTiles :title="balance24hours" :subtitle="'Last 24 Hrs'"></InfoTiles>
        </div>
      </section>
      <div class="columns">
        <div class="column is-6">
          <CustomersList :customers="orderedUsers"></CustomersList>
        </div>
        <div class="column is-6">
          <SearchUser :customers="customers" :emails="usersEmail(customers)"></SearchUser>
          <Balance></Balance>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import InfoTiles from './InfoTiles.vue';
  import CustomersList from './CustomersList.vue';
  import SearchUser from './SearchUser.vue';
  import Balance from './Balance.vue';

  export default {
    data(){
        return{
            customers: [],
            charges: []
        }
    },
    components: {
      InfoTiles,
      CustomersList,
      SearchUser,
      Balance
    },
    created: function()
    {
        this.loadData();
    },
    methods: {
      ...mapActions([
        'getAllCustomers',
        'getAllCharges'
      ]),
      loadData(starting_after){
        var that = this
        this.getAllCustomers().then((result) => {
          that.customers = result
          return result
        }).then(function(){
          return that.getAllCharges()
        }).then(function(result){
          that.charges=result
          return result
        }).then(function(){
          that.attachTransactionsToCustomer()
        }).then(function(){
          that.customers = that._.orderBy(that.customers, ['transactionsAmount'], ['desc']);
        })
      },
      attachTransactionsToCustomer(){
        var that = this;
        this.customers.map(function(c){
          c.transactions = _.filter(that.charges, function(num){return num.customer === c.id;})
          c.transactionsAmount = _.reduce(c.transactions, function(memo, num){ return memo + num.amount; }, 0);
          return true
        })
      },
      totalSpent(id, index){
        var customer = this.customers[index]
        // return "AHAHA"+id
          customer.transactions = _.filter(this.charges, function(num){return num.customer === id;})
          customer.transactionsAmount = _.reduce(this.customers[index].transactions, function(memo, num){ return memo + num.amount; }, 0);
         return customer.transactionsAmount
      },
      usersEmail: (customersArray) => {
        return customersArray.map(c => c.email)
      }
    },
    computed: {
      nbCustomers: function(){
        return this.customers.length;
      },
      nbTransactions: function(){
        return this.charges.length;
      },
      balance24hours: function(){
        var now = Math.round((new Date()).getTime() / 1000);
        var yesterday = Math.round((new Date().getTime() - (24 * 60 * 60 * 1000) )/ 1000);
        var last_day_transac = _.filter(this.charges, function(num){return (num.created > yesterday && num.created < now) });
        var amount_cts = _.reduce(last_day_transac, function(memo, num){ return memo + num.amount; }, 0);
        return "$"+ Math.floor(amount_cts/100);
      },
      orderedUsers: function () {
       return this._.orderBy(this.customers, ['transactionsAmount'], ['desc']);
      },
    }
  }
</script>

<style lang="css">
</style>
