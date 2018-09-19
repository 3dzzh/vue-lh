<template>
    <div>
    <div class="header">
        <div class="top">
        <img src="../assets/img/back_03.png" alt="">
        <div>登录</div>
        <router-link to="/register">注册</router-link>
        </div>
        <div class="banner">
            <img src="../assets/img/banner.png" alt="">
        </div>
    </div>
    <div class="main">
        <input type="text" placeholder="手机号码/用户名" ref="users" />
        <input type="password" placeholder="密码" ref="passwords" />
        <img src="../assets/img/login.svg" alt="" >
        <img class="img1" src="../assets/img/mima.svg" alt="">
        <router-link to="/index"><button @click="handle">
             
            登录
        </button>
        </router-link>
        <div>
        <span>手机快捷登录</span>
        <span>忘记密码</span>
        </div>
    </div>
    <footer>
        <span>其他方式登录:</span>
        <img src="../assets/img/weixin_07.png" alt="">
    </footer>
    </div>
</template>
<script>
export default {
    name:'LoginIn',
    data:()=>({
        user:18332571995,
        password:123456
    }),
    methods:{
        handle(){
           this.$refs.users.placeholder = this.user 
        }
    }
}
</script>
<style lang="scss" scoped>
    header{
        background-color: #35d4a0;
    }
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #35d4a0;
        padding:3vw 2vw;
        color:#fff;
        font-size: 6vw;
        margin: 0;
    }
    .banner {
    width: 100%;
    img{
        display: block;
        width: 100%;
        margin: 0;
    }
    }

    .main{
        position:relative;
        display: flex;
        flex-direction: column;
        input,div{
            line-height: 8vw;
            width: 80vw;
            margin: 0 auto;
            margin-top: 5vw;
        }
        input[type="text"],input[type="password"]{
            border-radius:4vw;
            outline: none;
            text-indent: 9vw;
            border:0;
            border:1px solid grey;
        }
        button{
            width: 80vw;
            padding:0.6vw 0;
            margin: 0 auto;
            margin-top: 10vw;
            line-height: 6vw;
            background-color: #35d4a0;
            border-radius: 4vw;
            border:0;
            outline: none;
            color:#fff;
        }
        div{
            padding:0 3vw;
            display: flex;
            margin-top: 1vw;
            justify-content: space-between;
        }
        span{
            color:gray;
        }
        img{
            width: 5vw;
            position:absolute;
            left:13vw;
            top:7vw;
        }
        .img1{
            top:21vw;
        }
    }
    footer{
        display: flex;
        align-items: center;
        padding:0 10vw;
        margin-top: 25vw;
        span{
            color:gray;
            margin-right: 5vw;
        }
        img{
            width: 10vw;
        }
    }
</style>


