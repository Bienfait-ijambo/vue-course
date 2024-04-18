<template>
   <div class="row">
    <div class="col-md-4" v-for="user in users" :key="user.id" style="padding-bottom: 5px;">
        <div class="card" >
          <div class="card-header">Name: {{user.name}}</div>
          <div class="card-boby">
            email: <a v-bind:href="'mailto:'+user.email">{{user.email}}</a> <br />
            Telephone: {{user.phone}} <br />
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-primary" @click="$emit('seeUserDetails',user?.id)">see details</button>
          </div>
        </div>
        
    </div>
    <div style="background-color: antiquewhite;" v-if="users.length===0 ? true:false">No data found</div>

     
   </div>
</template>
<script>

export default{
    props:['users'],
    emits:['seeUserDetails']
}
</script>
