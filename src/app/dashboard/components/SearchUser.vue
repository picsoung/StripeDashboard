<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Search customers
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon" v-bind:class="{ open }" v-bind:aria-expanded="open ? 'true' : 'false'"
        v-on:click="toggle">
          <i :class="open ? 'fa fa-angle-down' : 'fa fa-angle-right'" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div v-if="open" class="card-content">
      <div class="field has-addons">
        <div class="control has-icons-left has-icons-right">
          <Typeahead :source="emails" :onSelect="onSelect" :onChange="onChange" :limit="5"></Typeahead>
          <span class="icon is-medium is-left">
            <i class="fa fa-search"></i>
          </span>
        </div>
        <div class="control" v-if="checkProfileVisible">
          <button class="button is-primary" v-on:click="checkProfile">Check profile</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixins.js'
import Typeahead from 'vue-bulma-typeahead'
import autocomplete from 'vuejs-auto-complete'

export default {
  name: 'SearchUser',
  components: { Typeahead, autocomplete },
  mixins: [mixin],
  props: ["customers", "emails"],
  data: () =>{
    return {
      selectedCustomer: {},
      checkProfileVisible: false
    }
  },
  methods: {
    onSelect (value) {
      this.selectedCustomer =  Object.assign({},_.filter(this.customers, function(num){return num.email === value;})[0])
      this.checkProfileVisible = true // turn on the check profile button
      this.value = value
    },
    onChange (value) {
      this.value = value
    },
    checkProfile () {
      this.$router.push({name:'customerProfile', params: { customerId: this.selectedCustomer.id }})
    }
  }
}
</script>

<style lang="css">
</style>
