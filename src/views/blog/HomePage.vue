<template>
  <div>
    <h1>
      {{ appTitle }}
    </h1>
    {{ users }}

    {{ count }}
    <button type="button" @click="addUser">count</button>

  </div>
</template>
<script>
import { useCounterStore } from '@/stores/counterStore'
import { mapStores, mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      appTitle: 'Home  Page'
    }
  },
  computed: {
    // other computed properties : A computed property automatically tracks its reactive dependencies.
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['count', 'double','users'])
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment','fetchData']),

    addUser(){
      this.users.push({name:"alert"})
    }
  
  },
  mounted() {
 
      this.fetchData()
  }
}
</script>
