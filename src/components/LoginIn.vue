<template>
    <div>
    <div class="wrap" v-show="show"></div>
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
        <input type="text" v-model="user" placeholder="手机号码/用户名" ref="users" />
        <input type="password" v-model="password" placeholder="密码" ref="passwords" />
        <img src="../assets/img/login.svg" alt="" >
        <img class="img1" src="../assets/img/mima.svg" alt="">
        <button v-if="!Login" @click="handle">
            登录
        </button>
        <div class="cpm" v-show="show">
            <span v-if="Login">登陆成功!!!</span>
            <span v-else>登录失败!!!</span>
            <el-button @click="click">确定</el-button>
        </div>
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
        user:'',
        password:'',
        show:false
    }),
    methods:{
        handle(){
            console.log( typeof this.password)            
            this.$store.commit('isCurrent',{user:this.user,password:this.password})
            this.show = true
        },
        click(){
            this.show = false
            if(this.$store.state.login.login){
                this.$router.push('/index')
            }
        }
    },
        mounted(){
        if(this.$store.state.login.login){
        this.$router.push('/index')
        }
    },
    computed:{
        Login(){
            return this.$store.state.login.login
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
        .cpm{
            position:absolute;
            z-index:25;
            margin-left: 10vw;
            padding:5vw 0;
            background-color: #fff;
            .el-button{
                width: 15vw;
            }
        span{
            margin-left: 25vw;
        }
        
        }
        
    }
    .wrap{
            width: 100%;
            height: 100%;
            position:absolute;
            z-index:20;
            left:0;
            right:0;
            top:0;
            bottom:0;
            background-color: rgba(0,0,0,0.5);
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


