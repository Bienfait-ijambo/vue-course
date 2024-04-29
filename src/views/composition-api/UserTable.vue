<script lang="js" setup>

// these are macro
const props=defineProps(['users'])

const emit=defineEmits(['deleteUser'])

// export default{
//     props:['users','posts']
//    emits:['deleteUser','updateUser']
// }
</script>
<template>
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Delete user</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="user in props.users" :key="user.id">
      <th scope="row">{{user.id}}</th>
      <td>{{user.userName}}</td>
     
      <td>
      	<button @click="emit('deleteUser',user.id)" class="btn btn-danger btn-sm">Delete User</button>
      </td>
    </tr>
   
  </tbody>
</table>
</template>