import { ref  } from 'vue'
import { defineStore } from 'pinia'

export const useRefactorPostStore = defineStore('RefactorPostStore', () => {
  // data function
  const posts = ref([])
  const countPost = ref(0)
  const post = ref({})

  async function fetchPost() {
    const res = await fetch('http://localhost:3000/posts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    posts.value = data
    countPost.value = data.length

  }

  async function deletePost(postId) {
    const res = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    await fetchPost()
    console.log(data?.message)
  }

  async function seePostDetail(postId) {
    const res = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    if (data.length > 0) {
      post.value = data[0]
    }
  }

  async function createPost(post) {
    const res = await fetch(`http://localhost:3000/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    console.log(data.message)
  }

  return{posts,post,countPost,fetchPost,createPost,deletePost,seePostDetail}

 
})
