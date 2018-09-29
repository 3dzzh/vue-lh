<template>
    <div>
        <div class="agent-header">
            <div class="top">
                <router-link to="/index"><img class="img0" src="../assets/img/xiaoyu.svg" alt=""></router-link>
                <h1>
                    <div class="logo">招商引资</div>
                </h1>
                <img src="../assets/img/sandaogang_03.png" alt="">
            </div>
            <nav>
                <ul class="list">
                    <li>首页</li>
                    <li>肺迪简介</li>
                    <li>关于我们</li>
                    <li class="li0">招商引资</li>
                </ul>
            </nav>
        </div>
        <div class="bussiness-main">
            <h3>请填写你的信息:</h3>
            <ul>
                <li><img src="../assets/img/chengshi.svg" alt=""><span>意向代理城市:</span><input type="text" placeholder="请输入信息"></li>
                <li><img src="../assets/img/gongsi.svg" alt=""><span>公司或机构名称:</span><input type="text" placeholder="请输入信息"></li>
                <li><img src="../assets/img/lianxiren.svg" alt=""><span>联系人姓名:</span><input type="text" placeholder="请输入信息"></li>
                <li><img src="../assets/img/dianhua.svg" alt=""><span>联系人电话:</span><input type="text" placeholder="请输入信息"></li>
                <li><img src="../assets/img/youxiang.svg" alt=""><span>联系人邮箱:</span><input type="text" placeholder="请输入信息"></li>
                <li><img src="../assets/img/dizhi.svg" alt=""><span>公司个人地址:</span><input type="text" placeholder="请输入信息"></li>
                <li><img src="../assets/img/jiangbei.svg" alt=""><span>公司个人优势:</span><input type="text" placeholder="请输入信息"></li>
            </ul>
            <div><el-button type="warning">提交信息</el-button></div>
        </div>
        <div class="bussiness-footer">
            <h3>联系我们:</h3>
            <ul>
                <li><img src="../assets/img/LianXIren.svg" alt=""><span>联系人:王先生</span></li>
                <li><img src="../assets/img/dianhua.svg" alt=""><span>电话:18701521668</span></li>
                <li><img src="../assets/img/dizhi.svg" alt=""><span>地址:北京市亦庄中和街14号</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Fheader from'../components/Fheader'
export default {
    name:'Bussiness',
    data:()=>({
        text:''
    }),
    components:{
        Fheader
    }
}
</script>
<style lang="scss" scoped>
    .agent-header{
        .top{
            background-color: #35d4a0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:3vw 0;
            padding-left: 1vw;
            padding-right: 3vw;
            img{
                width: 7vw;
                height: 7vw;
                text-align: left;
            }
            h1{
                margin: 0;
                padding: 0;
                font-weight: normal;
                .logo{
                    color:#fff;
                    font-size: 6vw;
                }
            }
        }
        nav{
            .list{
                list-style: none;
                display: flex;
                padding: 0;
                margin: 0;
            }
            li{
                line-height: 8vw;
                width: 30vw;
                text-align: center;
                border-right: 1px solid rgba(0,0,0,0.1);
                font-size: 3vw;
            }
            .li0{
                border:0;
            }
        }
    }
    .bussiness-main{
        background-color: rgba(0,0,0,0.2);
        h3{
            margin: 0;
            padding: 0;
            padding:4vw 2.5% 4vw;
            font-weight: normal;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            li{ 
                display: flex;
                align-items: center;
                background-color: #fff;
                padding:3vw 0;
                border-bottom:1px solid rgba(0,0,0,0.01);
                background-image: url('../assets/img/xiaoyuandian.svg');
                background-repeat: no-repeat;
                background-position: 90vw center;
                background-size: 5vw;
                img{
                    margin-left: 2.5%;
                    width: 7vw;
                }
                span{
                    margin-left: 2.5%;
                }
                input{
                    margin-top: 1vw;
                    outline:none;
                    border:0;
                    text-indent: 3vw;
                }
            }
        }
        div{
            background-color: #fff;
            padding-bottom: 6vw;
        .el-button{
            margin-top: 6vw;
            margin-left: 68vw;
        }
        }
    }
    .bussiness-footer{
        background-color: rgba(0,0,0,0.2);
        padding-bottom: 10vw;
        h3{
            font-weight: normal;
            margin: 0;
            padding: 0;
            padding:4vw 2.5% 4vw;
        }
        ul{
            margin: 0;
            padding: 0;
            background-color: #fff;
            list-style:none;
            li{
                display: flex;
                align-items: center;
                padding:3vw 0;
                border-bottom: 1px solid rgba(0,0,0,0.1);
            img{
                width: 7vw;
                margin-left: 2.5%;
            }
            span{
                margin-left: 3vw;
            }
            }
            
        }
    }
</style>



