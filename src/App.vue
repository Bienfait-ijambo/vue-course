<template>
  <div class="container">
    <br />

    <!-- start nav bar -->

    <NavBar>
      <template #headerLogo>
        <ShowImage />
      </template>
    </NavBar>
    <!-- end nav bar -->
    <br />
    <PostForm :categories="categories" :postData="postData" @createPost="createPost" />
    <br />
    <br />
    <div class="row">
      <PostTable @delete="deletePost" :postData="posts" />
    </div>

    <br />
    <br />

    <!-- start footer -->

    <FooterNav>
      <template #footerLogo>
        <ShowImage />
      </template>
    </FooterNav>

    <!-- end footer -->
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue'
import PostTable from './components/PostTable.vue'
import ShowImage from './components/ShowImage.vue'
import PostForm from './components/PostForm.vue'
export default {
  // create a reactive property
  components: {
    NavBar,
    FooterNav,
    PostTable,
    ShowImage,
    PostForm
  },
  data() {
    return {
      appTitle: 'v-model directive',

      postData: {
        id: '',
        title: '',
        categoryId: '',
        post_content: ''
      },
      categories: [],

      posts: []
    }
  },

  methods: {
    deletePost(item) {
      const filteredPost = this.posts.filter((post) => post.id !== item.id)
      this.posts = filteredPost
    },

    createPost() {
      const data = this.postData
      this.posts.push({
        id: data?.id,
        title: data?.title
      })
      this.postData.id = ''
      this.postData.title = ''
      this.postData.categoryId = ''
    },

    fetchDataFromServer() {
      return new Promise((resolve, reject) => {
        resolve([
          {
            id: 1,
            name: 'typescript'
          },
          {
            id: 2,
            name: 'Vue'
          }
        ])
      })
    }
  },
  async mounted() {
    const data = await this.fetchDataFromServer()
    this.categories = data
  }
}
</script>
<style scoped>
.img-tutorial-1 {
  border-radius: 20px;
}

.img-tutorial-2 {
  border-radius: 50px;
}
</style>
