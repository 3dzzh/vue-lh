<template>
    <div>
        <Fheader />
        <div class="agent-main">
            <h3>授权书</h3>
            <img src="../assets/img/zhengshu_03.png" alt="">
            <h3 class="h3">肺迪科技奖项</h3>
            <ul>
                <li>2007 年 Frost&Sullivan 的 "卓越技术奖"</li>
                <li>2009/10 年度科普: "年度最佳创新"</li>
                <li class="li1">2010 MD+DI: "关注的前50家企业" 高级护理和睡眠呼吸医学杂志</li>
                <li>2010年技术观察奖</li>
                <li class="li1">2011年 Frost&SSullivan的 "肺器械年度创业公司将"</li>
                <li class="li1">2012年世界卫生组织,医疗设备创新的卫生技术汇编-低资源设备。</li>
                <li class="li1">2015年联合援助,"结核病初诊,目前市场和未来新技术"</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Fheader from'../components/Fheader'
export default {
    name:'Agent',
    components:{
        Fheader
    }
}
</script>

<style lang="scss" scoped>
    .agent-main{
        padding-top: 7vw;
        padding-bottom: 10vw;
        background-color: rgba(0,0,0,0.2);
        h3{
            width: 95%;
            color:gray;
            margin-top: 0;
            margin: 0 auto;
            padding-left: 3vw;
            border-left:5px solid #35d4a0;
        }
        img{
            display: block;
            width: 95%;
            margin: 0 auto;
            margin-top: 3vw;
        }
        .h3{
            margin: 5vw auto;
        }
        ul{ 
            width: 95%;
            list-style: none;
            padding: 0;
            margin: 0 auto;
            li{
                background-image: url('../assets/img/yuandian.svg');
                background-position: left center;
                background-repeat: no-repeat;
                background-size: 4vw;
                padding-left: 5vw;
            }
            .li1{
                background-position: left 2vw;
            }
        }
    }
</style>

