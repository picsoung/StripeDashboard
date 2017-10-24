<template lang="html">
  <div class="tile is-parent">
    <div class="tile is-child box">
      <chartist
        type="Pie"
        :data="pieData"
        :options="chartOptions"
        :responsive-options="responsiveOptions"
        v-model="pieData">
      </chartist>
      <p class="title" style="text-align: center;">Balance</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Balance",
  data() {
    return {
      balancesArr: [],
      pieData:{
        labels: [],
        series: []
      },
      chartOptions: {
        labelInterpolationFnc: function(value) {
          return value[0]
        }
      },
      responsiveOptions: [
        ['screen and (min-width: 640px)', {
          chartPadding: 30,
          labelOffset: 100,
          labelDirection: 'explode',
          labelInterpolationFnc: function(value) {
            return value;
          }
        }],
        ['screen and (min-width: 1024px)', {
          labelOffset: 80,
          chartPadding: 20
        }]
      ]
    }
  },
  created() {
    this.fetchBalance();
  },
  methods: {
    ...mapActions([
      'getStripeBalanceDetails'
    ]),
    fetchBalance(){
      var that = this
      this.getStripeBalanceDetails().then(function(result){
        that.balancesArr = result.data
        var d = {
          labels:[],
          series:[]
        }
        result.data.available.forEach(function(b){
          d.labels.push(Math.floor(b.amount/100)+" "+b.currency.toUpperCase())
          d.series.push(b.amount)
        })
        that.pieData = d
      })
    }
  }
}
</script>

<style lang="css">
</style>
