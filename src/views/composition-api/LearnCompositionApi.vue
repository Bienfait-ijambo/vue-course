<script lang="js" setup>
import {ref,reactive, computed, onMounted} from 'vue'
import UserTable from './UserTable.vue'
import { useCounter } from './counter';
import { usePostService } from './postService';

// 1.Create reactive property using Ref, Reactive and Functions
const userInput=ref({
    userName:"",
    userEmail:""
})
const taskStatus=ref(false)
const loadingStatus=reactive(false)

// const userInput=reactive({
//     userName:"",
//     userEmail:""
// })

function getData(){
    // console.log(taskStatus.value)
    console.log(loadingStatus.value)

}

const firstName=reactive('Ben')
const lastName=ref('Doe')

// 2. computed property
const fullName=computed(()=>firstName+' '+lastName.value)
// computed:{
//     function fullName(){
//         this.firstName +''+this.lastName
//     }
// }

// 3. Unmounted lifecycle

function fetchData(){
    console.log("Fetching data")
}


// 4. components ,props,events
// using Array syntax
const users=ref(
[
	{
		id:1,
		userName:"joseph"
	},
	{
		id:2,
		userName:"Albert"
	}
])

function deleteUser(id){
    console.log(id)
}

// 5. What is Composable
// 1. counter 
const {counter,increment,decrement}=useCounter()
// 2 postService
const {posts,fetchPost,deletePost}=usePostService()

onMounted(async()=>{
await fetchPost()
await deletePost(3)
})

// mounted(){

// }
</script>
<template>
    <div class="container">
        <h1>Vue Composition-Api</h1>
        <div class="row">
            {{ posts }}
        </div>
        <div class="row">
            <div class="col-md-4">
                {{ counter }}
                <button @click="increment">Increment</button>
                <button @click="decrement">Decrement</button>

            </div>
            <div class="col-md-4">
                {{ fullName }}
               {{ userInput }} {{ loadingStatus }}
               <button @click="getData">get Data</button>
               <form>
                <input type="text" v-model="userInput.userName">
                <input type="text" v-model="userInput.userEmail">

               </form>
            </div>
            <div class="col-md-4">
                <UserTable @deleteUser="deleteUser" v-bind:users="users"/>
            </div>
        </div>
       
    </div>
</template>

