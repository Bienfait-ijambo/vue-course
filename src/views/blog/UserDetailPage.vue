<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">UserDetails</div>
          <div class="card-body">
           <p>userName : {{ user.name }} </p>
           <p>Email : <a :href="'mailto:'+user.email"> {{ user.email }}</a> </p>
           <p>Address : {{ user.address?.street }} </p>
           <p>Website : {{ user.website }} </p>


          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from '@/store/userStore'
import { mapState, mapActions } from 'pinia'
export default {
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    ...mapActions(useUserStore, ['fetchSingleUser'])
  },
  async mounted() {
    const userId = this.$route.params?.userId
    await this.fetchSingleUser(userId)
  }
}
</script>
