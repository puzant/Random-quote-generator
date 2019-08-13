<template lang="pug">
  .rqg-header
    slot(name="custom-text")
      .rqg-headline 
        | Random Quote Generator
      .rqg-subtitle
        | A selection of finest quotes from aount the world
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class RandomQuoteGenerator extends Vue {



}
</script>


<style lang="sass">
.rqg-headline
  font-size: 50px
  font-weight: bold
  font-family: arial
  margin: 10px
  
.rqg-subtitle
  font-weight: bold
  font-size: 20px
  margin: 10px

.rqg-custom-headline 
  font-size: 40px
  font-style: italic

.rqg-custom-subtitle 
  margin: 15px
  font-size: 30px

</style>