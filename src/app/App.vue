<template>
<div id="app">
    <Navbar></Navbar>
    <div class="container">
         <div class="columns">
           <Sidebar></Sidebar>
           <div class="column is-9">
              <transition name="fade">
                  <router-view></router-view>
              </transition>
          </div>
        </div>
    </div>
  </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>
  import Sidebar from './layouts/Sidebar.vue';
  import Navbar from './layouts/Navbar.vue';
    export default{
      components: {
        Sidebar,
        Navbar
      }
    }
</script>
