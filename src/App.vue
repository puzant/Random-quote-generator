<template>
  <div id="app">
    <randomQuoteGenerator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import randomQuoteGenerator from './components/randomQuoteGenerator'

@Component({
  components: {
    randomQuoteGenerator
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
