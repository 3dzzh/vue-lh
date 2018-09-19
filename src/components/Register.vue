<template>
    <div>
        <header>
            <div class="top">
                <img src="../assets/img/back_03.png" alt="">
                <div>登录</div>
            </div>
            <div class="banner">
                <img src="../assets/img/banner.png" alt="">
            </div>
        </header>
        <div class="main">
            <input type="text" placeholder="手机号码/用户名">
            <input type="text" placeholder="请输入验证码">
            <input type="password" placeholder="请输入密码(6-16位,区分大小写)">
            <img src="../assets/img/login.svg" alt="">
            <img class="img1" src="../assets/img/yanzheng.svg" alt="">
            <img class="img2" src="../assets/img/mima.svg" alt="">
            <div>获取验证码</div>
            <input type="button" value="注册" >
            <span>用已有账号登录</span>
        </div>
        <footer>
            <input type="checkbox">
            <span>同意并愿意遵守《朗恒安服务协议》</span>
        </footer>
    </div>
</template>
<script>
export default {
    name:'Register'
}
</script>
<style lang="scss" scoped>
    .top{
        display: flex;
        align-items: center;
        background-color: #35d4a0;
        padding:3vw 2vw;
        color:#fff;
        font-size: 6vw;
        div{
            margin-left: 35vw;
        }
    }
    .banner img{
        display: block;
        width: 100%;
    }
    .main{
        position:relative;
        display: flex;
        flex-direction: column;

        input{
            width: 80vw;
            margin: 0 auto;
            margin-top: 10vw;
            outline: none;
            border:0;
            border:1px solid gray;
            line-height: 8vw;
            border-radius:3vw;
            text-indent: 10vw;
        }
        input[type="button"]{
            color:#fff;
            background-color: #35d4a0;
            border:0;
        }
        span{
            display: flex;
            width: 30vw;
            margin-left: 60vw;
            margin-top: 2vw;
            color:gray;
        }
        img{
            width: 5vw;
            position:absolute;
            left:12vw;
            top:12vw;
        }
        .img1{
            top:31vw;
        }
        .img2{
            top:50vw;
        }
        div{
            position:absolute;
            right:10vw;
            top:10vw;
            width: 30vw;
            height: 9vw;
            color:#fff;
            background-color: #35d4a0;
            line-height: 8vw;
            border-radius:3vw;
            text-align:center;
        }
    }
    footer{
        margin-top: 15vw;
        display: flex;
        justify-content: center;
        input[type="checkbox"]{
            margin-top: 2vw;
        }
    }
</style>


