
<template>
    <div>
        <h1>
        {{ appTitle }}
       
    </h1>
    <br/>
    <h4>
        {{ users }}
    </h4>
    <br/>
    <br/>

    </div>
</template>
<script>
import { useCounterStore } from '@/store/counterStore';
import { mapState,mapActions } from 'pinia';
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