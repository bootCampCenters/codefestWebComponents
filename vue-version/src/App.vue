<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="align-content: center">
      <p>{{ messageFromWebComponent }}</p>
    </div>
    <div style="width: 100%; height: 20rem; text-align: left;">
      <my-component 
        first="Stencil" last="'Don't call me a framework' JS"
        v-on:onEvent="eventInVue">
      </my-component>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: function() {
    return {
      messageFromWebComponent: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    eventInVue(e) {
      // eslint-disable-next-line
      console.log(e);
      this.messageFromWebComponent = e.detail.data.data;
    }
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
  margin-top: 60px;
}
</style>
