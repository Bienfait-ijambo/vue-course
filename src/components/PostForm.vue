<template>
  <div class="row">
    <div class="col-md-4">
      {{ postData }}
      <form @submit.prevent="$emit('createPost')">
        <div class="form-group">
          <label for="">PostID</label>
          <input type="text" v-model="postData.id" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Post-title</label>
          <input type="text" v-model="postData.title" class="form-control" />
        </div>

        <!-- <div class="form-group">
            <label for="">Post-tile</label>
            <textarea v-model="postData.post_content" class="form-control"></textarea>
          </div> -->

        <div class="form-group">
          <label for="">post-categories</label>
          <select class="form-control" v-model="postData.categoryId">
            <option value="">select categories</option>
            <option v-for="category in categories" :key="category.id" v-bind:value="category.id">
              {{ category.name }}
            </option>
            <option></option>
          </select>
        </div>
        <br />

        <div class="form-group">
          <button class="btn btn-primary">Create Post</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['postData', 'categories'],
  emits: ['createPost']
}
</script>
