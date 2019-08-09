<template lang="pug">
.rqg-container
  .rqg-header
    .rqg-headline Random Quote Generator
    .rqg-subtitle  A selection of finest quotes from aount the world

    hr

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

@Component({})
export default class RandomQouteGenerator extends Vue {

quotes = [
    {qoute: "Stay Hungry. Stay Foolish.", author: "Steve Jobs"},
    {qoute: "Good Artists Copy, Great Artists Steal.", author: "Pablo Picasso"},
    {qoute: "Argue with idiots, and you become an idiot.", author: "Paul Graham"},
    {qoute: "Be yourself; everyone else is already taken.", author:"Oscar Wilde"},
    {qoute: "Simplicity is the ultimate sophistication.", author: "Leonardo Da Vinci"},
    {qoute: "Learn from the mistakes of others. You can't live long enough to make them all yourself.", author: "Eleanor Roosevelt"},
    {qoute: "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become", author: "W.E.B. Du Bois"},
    {qoute: "I know in my heart that man is good. That what is right will always eventually triumph. And there's purpose and worth to each and every life.", author: "Ronald Reagan"},
  ]

  colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  randomQoute = {qoute: "Stay Hungry. Stay Foolish.", author: "Steve Jobs"}
  randomBackgroundColor = "#16a085"

  generateRandomQoute() {
    (<HTMLElement>document.querySelector('body')).style.background = this.generateRandomHexColor();    
    return this.randomQoute = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  generateRandomHexColor() {
    return this.randomBackgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  copySuccess() {
    console.log('done')
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

.rqg-headline
  font-size: 50px
  font-weight: bold
  font-family: arial
  margin: 10px
  
.rqg-subtitle
  font-weight: bold
  font-size: 20px
  margin: 10px
 
hr
  width: 30%
  
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
  &:hover
    cursor: pointer
  &::after
   
.rqg-twitter-log
  width: 15px
 
.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>
