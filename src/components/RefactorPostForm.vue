<script lang="ts" setup>
import { ref } from 'vue'
import { useRefactorPostStore } from '@/stores/RefactorPostStore.js'

const postStore = useRefactorPostStore()
const post = ref({
  title: '',
  content: ''
})

async function createArticle() {
  await postStore.createPost(post.value)
  initInputs()
  await postStore.fetchPost()
}

function initInputs() {
  post.value.title = ''
  post.value.content = ''
}

</script>

<template>
  <form @submit.prevent="createArticle">
    <!-- {{ post }} -->
    <div class="form-group">
      <label>Post-title</label>
      <input type="text" v-model="post.title" class="form-control" />
    </div>
    <div class="form-group">
      <label>Post-content</label>
      <textarea class="form-control" v-model="post.content" rows="2"></textarea>
    </div>
    <div class="form-group">
      <button class="btn btn-success">Create Post</button>
    </div>
  </form>
</template>
