<template>
  <div id="app">
    <b-container fluid class="bv-example-row">
  <b-row>
    <b-col col lg="4"><Menu/></b-col>

    <b-col><Page/></b-col>

  </b-row>
</b-container>
  </div>
</template>

<script>
import Page from './components/page.vue'
import Menu from './components/menu.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'app',
  components: {
    Page,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
