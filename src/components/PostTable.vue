<template>
  <table class="table table-striped table-bordered">
    <tr>
      <td>ID</td>
      <td>Title</td>
      <td>Action</td>
    </tr>
    <tr v-for="post in postData" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>
        <button @click="$emit('delete', post)" style="border: 1px solid black; color: red">
          Delete
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  // a prop, is a parameter for components
  props: ['postData'],
  emits: ['delete']
}
</script>
