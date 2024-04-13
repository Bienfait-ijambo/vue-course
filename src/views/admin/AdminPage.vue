<template>
    <div class="container">
      <ul>
        <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
        <li><RouterLink to="/users">users</RouterLink></li>
        <li><RouterLink to="/settings">settings</RouterLink></li>

      </ul>
    <main>
      <RouterView />
    </main>
    </div>
  </template>
  <script>

  export default{
   
      data(){
          return{
              appTitle:"Entry point Page"
          }
      }
  }
  </script>
  