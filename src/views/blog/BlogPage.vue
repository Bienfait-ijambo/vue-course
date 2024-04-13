<template>
    <div class="container">
      <NavBar></NavBar>
    <main>
      <RouterView />
    </main>
    </div>
  </template>
  <script>
import NavBar from '@/components/NavBar.vue'

  export default{
    components:{
      NavBar
    },
      data(){
          return{
              appTitle:"Entry point Page"
          }
      }
  }
  </script>
  