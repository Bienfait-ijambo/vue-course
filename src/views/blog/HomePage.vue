<template>
  <div class="container">
    <br/>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <!-- {{ users }} -->
        <UserList :users="users" @seeUserDetails="seeUserDetails"/>
        <button @click="fetchUsers">fetch users</button>
      </div>
      <div class="col-md-2"></div>


    </div>
  </div>
</template>
<script>
import { useCounterStore } from '@/store/counterStore';
import {useUserStore} from '@/store/userStore';
import { mapState,mapActions } from 'pinia';
import UserList from '@/components/UserList.vue';
export default {
  components:{
    UserList
  },
  data() {
    return {
      appTitle: 'Home  Page',
     
    }
  },
  // track reactive property 
  computed:{
   ...mapState(useUserStore,['users'])
  },
  methods:{
    // this we need to call it 
    // ...mapActions(useCounterStore,['increment','addUsers'])
    ...mapActions(useUserStore,['fetchUsers','fetchSingleUser']),
    seeUserDetails(userId){
      
      this.$router.push('/user/'+userId)

    }
    
 
  },
  async mounted(){
    await this.fetchUsers()
  }
 
}
</script>
