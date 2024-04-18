import { defineStore } from 'pinia'
//
export const useUserStore = defineStore('user', {
  // data function
  state: () => ({
    users: [ ],
    user:{}
  }),
  //gettters are like computed property
  getters: {
    //   doubleCount: (state) => state.count * 2,
  },
  //is methods
  actions: {
    async fetchUsers() {
      const res=await fetch('http://localhost:3000/users',{
        headers: {'Content-Type': 'application/json',method:'GET'},
      })
      const data=await res.json()
      this.users=data
    },
    async fetchSingleUser(id) {
        const res=await fetch(`http://localhost:3000/users/${id}`,{
          headers: {'Content-Type': 'application/json',method:'GET'},
        })
        const data=await res.json()
        if(data.length>0){
            this.user=data[0]
        }
        
      },
    
    
  }
})
