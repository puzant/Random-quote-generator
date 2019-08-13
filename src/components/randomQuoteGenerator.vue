<template lang="pug">
.rqg-container

  RandomeQouteGeneratorHeader
    template(slot="custom-text" v-if="customeSlot")
      h2.rqg-custom-headline  Welcome To Random Quote Generator
      p.rqg-custom-subtitle A Selection of Quotes

  hr.rqg-line-seperator

  .rqg-qoutes-container
    .rqg-copy-button
      button( v-clipboard:copy="randomQoute.qoute", v-clipboard:success="copySuccess" )
        img.rqg-copy-button-image(src="../assets/copy_icon.png")
    .rgq-qoute-text
      | "{{randomQoute.qoute}}"
    .rqg-qoute-author
      | - {{randomQoute.author}} -

  .rqg-buttons
    .rqg-qoute-button( @click="generateRandomQoute()" )
      | Get Qoute 
    .rqg-qoute-button( @click="shareQoute()" )
      | Share Qoute
      img.rqg-twitter-log(src="../assets/twitter_icon.png")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import quotesData from '../assets/quotes.js'
import RandomeQouteGeneratorHeader from '../components/randomQouteGeneratorHeader.vue'

@Component({
  components: {
    RandomeQouteGeneratorHeader
  }
})
export default class RandomQuoteGenerator extends Vue {

  quotes = quotesData.quotes
  customeSlot = false


  colors = ['#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  randomQoute = {qoute: "Stay Hungry. Stay Foolish.", author: "Steve Jobs"}
  randomBackgroundColor = "#16a085"

  generateRandomQoute() {
    (<HTMLElement>document.querySelector('body')).style.background = this.generateRandomHexColor()
    return this.randomQoute = this.quotes[Math.floor(Math.random() * this.quotes.length)]
  }

  generateRandomHexColor() {
    return this.randomBackgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)]
  }


  copySuccess() {
    this.$swal({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      type: 'success',
      title: 'Qoute,',
      text: 'copied!'
    });

  }

}
</script>


<style lang="sass">
body 
  background-color: #5c9aff
  color: #fff
  transition: .8s

.rqg-container
  text-align: center
 
.rqg-line-seperator
  width: 50%
  border-width: 0 0 1px
  color: #fff
  border-image: linear-gradient(90deg, rgba(135, 206, 235, 0), #fff 50%, rgba(135, 206, 235, 0) 100%) 0 0 100%
  border-style: solid
  
.rqg-qoutes-container
  position: relative
  display: flex
  justify-content: space-around
  flex-direction: column
  color: #111
  margin: 25px auto
  border: 1px solid #ccc
  border-radius: 7px
  width: 640px
  height: 230px
  background-color: aliceblue
  opacity: 0.5
  transition: .5s

.rqg-copy-button
  position: absolute
  top: 10px
  right: 10px

.rqg-copy-button button 
  border: none
  background: none
  &:focus
    outline: none


.rqg-copy-button-image
  width: 29px
  &:hover
    cursor: pointer

.rgq-qoute-text
  font-weight: bold
  font-size: 22px
  font-style: italic
  margin-top: 22px
  
.rqg-qoute-author
  font-weight: bold
  font-size: 17px
  font-style: italic
  
  
.rqg-buttons
  display: flex
  justify-content: center
  
.rqg-qoute-button
  margin: 0 20px 0 20px
  background-color: #fff
  color: #00143d
  padding: 10px
  border-radius: 5px
  width: 120px
  font-weight: bold
  transition: .5s
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0),0px 0px 0px rgba(0, 0, 0, 0)
  &:hover
    box-shadow: 9px -9px 0px rgba(0, 0, 0, 0.15),-9px 9px 0px rgba(0, 0, 0, 0.15)
    cursor: pointer

.rqg-twitter-log
  width: 15px
 
.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>
