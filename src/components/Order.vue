<template>
<div>
    <div class="order-header">
        <div class="top">
            <img src="../assets/img/xiaoyu.svg" alt="">
            <h1>
                <div class="logo">订单中心</div>
            </h1>
        </div>
        <nav>
            <ul>
                <router-link to="/order" active-class="active" exact><li>全部</li></router-link>
                <router-link to="/order" active-class="active"><li>待付款</li></router-link>
                <router-link to="/order" active-class="active"><li>待发货</li></router-link>
                <router-link to="/order" active-class="active"><li>待收货</li></router-link>
                <router-link to="/order" active-class="active"><li>已完成</li></router-link>
            </ul>
        </nav>
    </div>
    <div class="order-main">
        <div>
            <div class="up"><span>2017.11.09</span><span>待收货</span></div>
            <div class="middle">
            <img src="../assets/img/guangtou_03.png" alt="">
            <div>
            <p>美国lung flute 正品"肺迪" 正式进入中国</p>
            <span>购买类型:肺迪单品</span>
            <div class="jisuan">
            <button>-</button><span>0</span><button>+</button>
            <span>2888.00</span>
            </div>
            </div>
            </div>
            <div class="down">
                <el-button size="small">申请退款</el-button>
                <el-button size="small">再次购买</el-button>
                <el-button size="small">查看物流</el-button>
                <el-button size="small" type="warning" plain>确认收货</el-button>
            </div>
        </div>
        <div>
            <div class="up"><span>2017.11.09</span><span>待付款</span></div>
            <div class="middle">
            <img src="../assets/img/guangtou_03.png" alt="">
            <div>
            <p>美国lung flute 正品"肺迪" 正式进入中国</p>
            <span>购买类型:肺迪单品</span>
            <div class="jisuan">
            <button>-</button><span>0</span><button>+</button>
            <span>2888.00</span>
            </div>
            </div>
            </div>
            <div class="down">
                <el-button size="small">取消订单</el-button>
                <el-button size="small" type="warning" plain>去支付</el-button>
            </div>
        </div>
        <div>
            <div class="up"><span>2017.11.09</span><span>已完成</span></div>
            <div class="middle">
            <img src="../assets/img/guangtou_03.png" alt="">
            <div>
            <p>美国lung flute 正品"肺迪" 正式进入中国</p>
            <span>购买类型:肺迪单品</span>
            <div class="jisuan">
            <button>-</button><span>0</span><button>+</button>
            <span>2888.00</span>
            </div>
            </div>
            </div>
            <div class="down">
                <el-button size="small">申请退款</el-button>
                <el-button size="small" type="warning" plain>再次购买</el-button>
            </div>
        </div>
        <div>
            <div class="up"><span>2017.11.09</span><span>待发货</span></div>
            <div class="middle">
            <img src="../assets/img/guangtou_03.png" alt="">
            <div>
            <p>美国lung flute 正品"肺迪" 正式进入中国</p>
            <span>购买类型:肺迪单品</span>
            <div class="jisuan">
            <button>-</button><span>0</span><button>+</button>
            <span>2888.00</span>
            </div>
            </div>
            </div>
            <div class="down">
                <el-button size="small">申请退款</el-button>
                <el-button size="small">提醒发货</el-button>
                <el-button size="small" type="warning" plain>再次购买</el-button>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>
<script>
import Footer from'../components/Footer'
export default {
    name:'Order',
    components:{
        Footer
    }
}
</script>

<style lang="scss" scoped>
    .order-header{
        .top{
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            background-color: #000;
            padding:3vw 2vw;
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
            nav{
                ul{
                    display: flex;
                    list-style: none;
                }
            }
        }
        nav{
                .active{
                    color:blue;
                    border-bottom:2px solid #333;
                }
                ul{ 
                    margin: 0;
                    padding: 0;
                    padding:3vw 3vw;
                    padding-bottom: 0;
                    display: flex;
                    justify-content: space-between;
                    list-style: none;
                    li{
                        font-size: 5vw;
                        padding-bottom: 3vw;
                    }
                }
            }
    }
    .order-main{
        background-color: rgba(0,0,0,0.1);
        overflow: hidden;
        div{
            background-color: #fff;
            margin-top: 5vw;
            .up{
                padding:3vw 2.5%;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid rgba(0,0,0,0.1);
                span:nth-child(2){
                    color:orange;
                }
            }
            .middle{
                margin: 0;
                padding:3vw 2.5%;
                border-bottom: 1px solid rgba(0,0,0,0.2);
                display: flex;
                img{
                    width: 20vw;
                    height: 20vw;
                }
                >div{
                    display: flex;
                    flex-direction: column;
                    margin-left: 2vw;
                    >span{
                        font-size: 4vw;
                        color:gray;
                    }
                    p{
                        font-size: 4vw;
                        margin: 0;
                        margin-top: -5vw;
                 }
                .jisuan{
                        margin: 0;
                        display: flex;
                        flex-direction: row;   
                        span:nth-child(2){
                                text-align:center;
                                display: block;
                                width: 10vw;
                                border:1px solid rgba(0,0,0,0.2)
                        }  
                        span:last-child{
                            margin-left: 32vw;
                            color:orange;
                            font-size: 5vw;
                        }   
                    }
                }
            }
            .down{
                margin: 0;
                padding:3vw 2.5%;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>
