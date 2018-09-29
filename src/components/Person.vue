<template>
    <div>
        <Header />
        <div class="main">
            <img src="../assets/img/touxiang_03.png" alt="">
            <div><span>用户名</span><span class="span1">可爱的桃桃</span></div>
            <div><span>性别</span><span class="span1">女</span></div>
            <div><span>出生日期</span><span class="span1">1993.09.08</span></div>
            <div><span>籍贯</span><span class="span1">河北省保定市徐水县西村</span></div>
            <div><span>邮箱</span><span class="span1">18701239847@163.com</span></div>
            <div><span>病因</span><span class="span1">咳嗽</span></div>
            <div class="gray"></div>
        </div>
        <footer>
            退出登录
        </footer>
    </div>
</template>
<script>
import Header from'../components/Header'
export default {
    name:'Person',
    components:{
        Header
    }
}
</script>
<style lang="scss" scoped>
    .main{
        padding-top:10vw;
        img{
            display: block;
            margin: 0 auto;
            width: 20vw;
            padding-bottom: 10vw;
        }
        div{
            display: flex;
            justify-content: space-between;
            padding:0 3vw;
            background-image: url('../assets/img/dayu.svg');
            background-repeat: no-repeat;
            background-position: 92vw 0vw;
            padding-bottom: 3vw;
            background-size: 6vw;
            border-bottom:1px solid gray;
            margin-bottom: 5vw;
            .span1{
                margin-right: 5vw;
            }
        }
        .gray{
            flex-grow: 1;
            border:0;
            margin: 0;
            padding: 0;
            background-color: gray;
        }
        
    }
    footer{
            position:absolute;
            bottom: 0;
            height: 10vw;
            width: 100%;
            background-color:orange;
            line-height: 10vw;
            text-align:center;
    }
</style>

