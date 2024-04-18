
import { defineStore } from 'pinia'
// 
export const useCounterStore = defineStore('counter', {
    // data function
    state: () => ({
         count: 0, 
        name: 'Eduardo',
    }),
    //gettters are like computed property
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    //is methods
    actions: {
      increment() {
        this.count++
      },
    //   addUsers(){
    //     this.users.push({
    //         name:"isaac",
    //         email:"isaac@gmail.com",
    //     })
    //   }
     
    },
  })