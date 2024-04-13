
<template>
    <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <form @submit.prevent="goToAdmin">
                <input type="text" class="form-control" placeholder="Email">
                <input type="text" class="form-control" placeholder="Password"><br/>
                <RouterLink to="/auth">Go to register page</RouterLink>
                <button class="btn btn-primary">Login</button>
            </form>
        </div>
        <div class="col-md-4"></div>

    
    </div>
</template>
<script>

export default {
    data(){
        return{
            appTitle:"Login page"
        }
    },
    methods:{
        goToAdmin(){
            window.location.href='/admin'
        }
    }
}
</script>
