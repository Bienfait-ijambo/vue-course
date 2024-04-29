<script lang="js" setup>
import RefactorPostTable from '@/components/RefactorPostTable.vue'
import RefactorPostForm from '@/components/RefactorPostForm.vue'

import { useRefactorPostStore } from '@/stores/RefactorPostStore.js'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const post = useRefactorPostStore()
const router = useRouter()

async function deleteArticle(postId) {
  if (confirm('do you want to delete this post?')) {
    await post.deletePost(postId)
  }
}

async function seeArticleDetail(postId) {
  await post.seePostDetail(postId)
  router.push('/refactor_post/' + postId)
}

onMounted(async () => {
  await post.fetchPost()
})
</script>

<template>
  <div class="container">
    <div class="row">
      <h1>Refactor post page</h1>
    </div>
    <div class="col-md-2"></div>
    <div class="col-md-9">
      <button>Total Posts :{{ post.countPost }}</button>
      <br />
      <RefactorPostForm />
      <br />
      <RefactorPostTable
        :posts="post.posts"
        @deletePost="deleteArticle"
        @seePostDetails="seeArticleDetail"
      />
    </div>
    <br/>
    <div class="col-md-1"></div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

  </div>
</template>
