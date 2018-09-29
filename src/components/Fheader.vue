<template>
    <div class="agent-header">
            <div class="top">
                <img class="img0" src="../assets/img/xiaoyu.svg" alt="">
                <h1>
                    <div class="logo">独家代理</div>
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
</template>
<script>
export default {
    name:'Fheader'
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
</style>

