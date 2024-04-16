import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 1 ,users:[]}),
    getters: {
      double: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
       
      },
      fetchData(){
        this.users.push({userName:"Bienfait"})
      }
    },
  })
  