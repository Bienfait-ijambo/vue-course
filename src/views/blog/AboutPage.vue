
<template>
    <h1>
        {{ appTitle }}
        <br/>
        {{ users }}
    </h1>
</template>
<script>
import { useCounterStore } from '@/stores/counterStore'
import { mapStores, mapState, mapActions } from 'pinia'
export default{
    data(){
        return{
            appTitle:"About Page"
        }
    },
    computed:{
            ...mapState(useCounterStore,['users'])
    }
}
</script>