<template>
    <div>
       <div class="agent-header">
            <div class="top">
                <img class="img0" src="../assets/img/xiaoyu.svg" alt="">
                <h1>
                    <div class="logo">肺迪简介</div>
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
        <div class="brief-main">
            <h3>产品介绍</h3>
            <div>
                <span class="span0">产品名称:排痰器</span>
                <span class="span1">商品名:郎弗罗 &reg; 肺迪</span>
                <span class="span2">可选型号:家庭理疗护理型</span>
            </div>
            <h3 class="h3">适用人群</h3>
            <div class="person">
                <div><img src="../assets/img/yanmin_13.png" alt=""> 烟民</div>
                <div><img src="../assets/img/chenfeibing_16.png" alt=""> 尘肺病</div>
                <div><img src="../assets/img/feibujibing_16.png" alt=""> 肺部疾病患者</div>
                <div><img src="../assets/img/wumai_22.png" alt=""> 雾霾吸入者</div>
            </div>
            <h3>产品特点</h3>
            <div class="feature">
                <div><img src="../assets/img/meiguo_24.png" alt=""> 美国原装进口</div>
                <div><img src="../assets/img/wulizhiliao_26.png" alt=""> 纯物理治疗</div>
                <div><img src="../assets/img/baiyan_05.png" alt=""> 吸出有害物质</div>
            </div>
            <h3>使用方法</h3>
            <ul>
                <li>保持一个放松的位置;背部挺直不要靠在椅背上,身体略前倾,并保持喉咙和气道畅通, 拿住肺迪向下指。</li>
                <li>比平常更深一些吸气。</li>
                <li>把嘴唇完全的包住吹嘴。</li>
                <li>平稳而缓慢地向肺迪吹气,好像要把蜡烛吹灭。当吹气时,哨片将震动并传递声波。在吹气时专注于保持哨片</li>
                <li>把吹嘴从口中一开,快速地吸一口气，并重复以上步骤</li>
            </ul>
            <h3>工作原理</h3>
            <p>当患者通过吹嘴向器械吹气时,器械产生声波和肺腔一起震动,传送到气道和肺部,
                是痰液从粘稠变为流体,让痰液松动,易于咳出。使用肺迪前,结合大力咳嗽,将有利于清除呼吸道分泌物,减少可能被困在呼吸道的空气量,保持气道开放,清除分泌物，改善支气管扩张剂药物的的输送。年夜阻塞气道,并且不易咳出<br />轻轻地吹几分钟肺迪,一个非常简单的过程,产生低频声波震动,声波行驶到胸部并穿透肺部的分泌物,使其变稀薄,使其松动,支持身体本身的粘液清除系统<br />肺迪的声波穿透粘液，有类似改变凝胶转化成液体的结果。患者能够咳出变薄的痰液,清肺并缓解症状。</p>
        </div>
    </div>
</template>
<script>
import Fheader from'../components/Fheader'
export default {
    name:'BrtefIntroduce',
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
    .brief-main{
        background-color: gray;
        overflow: hidden;
        h3{
            font-weight: normal;
            width: 95%;
            margin: 0 auto;
            margin-bottom: 6vw;
            margin-top: 8vw;
            padding-left: 3vw;
            border-left: 4px solid #35d4a0;
        }
        div{
            background-color: #fff;
            display: flex;
            flex-direction: column;
            span{
                color:gray;
                padding: 3vw 0;
                padding-left: 12vw;
                border-bottom: 1px solid rgba(0,0,0,0.1);
            }
            .span0{
                background-image: url('../assets/img/chanpin_03.png');
                background-repeat: no-repeat;
                background-position: 3vw center;
                background-size: 6vw;
            }
            .span1{
                background-image: url('../assets/img/shangpin_06.png');
                background-repeat: no-repeat;
                background-position: 3vw center;
                background-size: 6vw;
            }
            .span2{
                background-image: url('../assets/img/xinghao_10.png');
                background-repeat: no-repeat;
                background-position: 3vw center;
                background-size: 6vw;
            }
        }
        .person{
            width: 100%;
            display: flex;
            padding:3vw 2.5%;
            flex-direction: row;
            justify-content: space-between;
            div{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            img{
                display: block;
                margin: 0 auto;
                width: 7vw;
            }
            }
        }
        .feature{
            background-color: gray;
            padding:3vw 2.5%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div{
                img{
                    display: block;
                    width: 30vw;
                    margin-bottom: 2vw;
                }
            }
        }
        ul{
            margin: 0;
            padding: 0;
            padding:0 2.5%;
            list-style: none;
            li{
                font-size: 10px;
                padding-left: 5vw;
                background-image: url('../assets/img/yuandian.svg');
                background-repeat: no-repeat;
                background-position: left center;
                margin-bottom: 3vw;
                background-size: 5vw;
                color:rgba(0,0,0,0.2);
            }
        }
        p{
            width: 95%;
            margin: 0 auto;
            color: rgba(0,0,0,0.2);
            margin-bottom: 8vw;
        }
    }
</style>


