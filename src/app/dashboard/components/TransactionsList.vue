<template lang="html">
  <div>
  <div class="card events-card">
        <header class="card-header">
          <p class="card-header-title">
            Transactions
          </p>
        </header>
          <div class="card-table" style=" max-height: none;">
            <div class="content">
              <table class="table is-fullwidth is-striped">
                <tbody>
                  <tr v-for="item in transactions">
                    <td>{{item.description}}</td>
                    <td style="font-size: 18pt;"><i :class="getCurrencySign(item.currency)"> </i>{{amountInDollars(item.amount)}}</td>
                    <td><i :class="ccIcon(item.source.brand)" style="font-size: 18pt;"></i></td>
                    <td>
                      <i class="fa fa-check" style="font-size: 18pt; color: green;" v-if="item.paid"></i>
                      <i class="fa fa-ban" style="font-size: 18pt; color: red;" v-if="!item.paid"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ["transactions"],
  methods: {
    ccIcon: (ccType) => {
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
    amountInDollars: (amount) =>{
      return parseInt(amount,10) / 100
    },
    getCurrencySign: (currency) =>{
      switch (currency) {
        case "usd":
          return "fa fa-dollar"
          break;
        case "eur":
          return "fa fa-eur"
          break;
        case "gbp":
          return "fa fa-gbp"
          break;
        default:
          return "fa fa-money"
      }
     }
  }
}
</script>

<style lang="css">
</style>
