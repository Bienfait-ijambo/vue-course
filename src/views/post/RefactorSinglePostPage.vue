
<script lang="js" setup>
import { useRefactorPostStore } from '@/stores/RefactorPostStore.js'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


const postStore=useRefactorPostStore()

const route=useRoute()
  

onMounted(async()=>{
    const postId=route.params?.id
    await postStore.seePostDetail(postId)
})
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <h1>SinglePost page- Refactor</h1>
                <div class="card">
                    <div class="card-body">
                        <h1>{{postStore.post?.title}}</h1>
                        <br>
                        <p>
                          {{ postStore.post?.content }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>

        </div>
    </div>
</template>