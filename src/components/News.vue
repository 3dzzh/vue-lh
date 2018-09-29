<template>
    <div>
        <div class="header-top">
            <img src="../assets/img/xiaoyu.svg" alt="">
            <h1>
                <div class="logo">热点新闻</div>
            </h1>
        </div>
        <div class="news-main">
            <div class="news">
                <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国......</p>
                <span>2017-12-23 09:23</span>
                <span class="span0">查看更多</span>
            </div>
            <div class="news">
                <p>公司下设研发部，项目部，设计部</p>
                <span>2017-12-23 09:23</span>
                <span class="span0">查看更多</span>
            </div>
            <div class="news">
                <p>恒安将依靠先进的基因组学研究和分子检测,生物信息学技术......</p>
                <span>2017-12-23 09:23</span>
                <span class="span0">查看更多</span>
            </div>
            <div class="news">
                <p>郎恒安团队正与北京大学人民医院,首都医科大学......</p>
                <span>2017-12-23 09:23</span>
                <span class="span0">查看更多</span>
            </div>
            <div class="news">
                <p>郎恒安在美国,香港,瑞典,台湾等国家或地区......</p>
                <span>2017-12-23 09:23</span>
                <span class="span0">查看更多</span>
            </div>
            <div class="more">
                <span>加载更多......</span>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from'../components/Footer.vue'
export default {
    name:'News',
    components:{
        Footer
    }
}
</script>

<style lang="scss">
    .header-top{
        background-color: #000;
        display: flex;
        align-items: center;
        padding:3vw 0;
        img{
            width: 7vw;
        }
        h1{
            margin: 0;
            padding: 0;
            font-weight: normal;
            .logo{
                color:#fff;
                font-size: 6vw;
                margin-left: 28vw;
            }
        }
    }
    .news-main{
        padding-top: 5vw;
        margin-bottom: 8vw;
        .news{
            padding:0 4vw;
            margin-top: 3vw;
            border-bottom: 1px solid gray;
            padding-bottom: 3vw;
            p{
                margin: 0;
                margin-bottom: 5vw;
            }
            span{
                color:gray;
            }
            .span0{
                color:orange;
                margin-left: 40vw;
            }
        }
        .more{
            display: flex;
            justify-content: center;
            border:0;
            padding-bottom: 10vw;
            background-color: rgba(0,0,0,0.2);
        }
        span{
            margin-top: 5vw;
            color:gray;
        }
    }
</style>

