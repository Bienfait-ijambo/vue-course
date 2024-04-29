import {ref} from 'vue'


export function usePostService(){
    const posts=ref([])
    
    async function createPost(){

    }

    async function fetchPost() {
        const res = await fetch('http://localhost:3000/posts', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        posts.value = data
       
      }
      async function deletePost(postId) {
        const res = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
    
        console.log(data?.message)
      }

      return {posts,fetchPost,deletePost}
     
}