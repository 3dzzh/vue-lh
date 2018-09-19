<template>
    <div>
        <header>
            <div class="top">
                <h1>
                    <div class="logo">个人中心</div>
                </h1>
            </div>
            <div class="banner">
                <img src="../assets/img/banner.png" alt="">
                <nav>
                    <ul>
                        <li class="li1">独家代理</li>
                        <li class="li2">肺迪简介</li>
                        <li class="li3">招商引资</li>
                        <li class="li4">我的订单</li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="main">
            <div class="main-up">
                <h3>我的产品</h3>
                <div>
                    <img src="../assets/img/feidi_15.png" alt="">
                    <div>
                        <p>美国lung flute 正品“肺迪”正式进入中国</p>
                        <span>￥2880.00</span>
                        <el-row>
                            <el-button class="el-button0" type="warning">加入购物车</el-button>
                            <el-button class="el-button1" type="warning">立即购买</el-button>
                        </el-row>
                    </div>
                </div>
            </div>
            <div class="main-down">
                <h3>热点新闻</h3>
                <div>
                    <img src="../assets/img/meiguolao_16.png" alt="">
                    <div>
                        <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国......</p>
                        <span>查看更多</span>
                    </div>
                </div>
                <div>
                    <img src="../assets/img/meiguolao_16.png" alt="">
                    <div>
                        <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国......</p>
                        <span>查看更多</span>
                    </div>
                </div>
                <div>
                    <img src="../assets/img/meiguolao_16.png" alt="">
                    <div>
                        <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国......</p>
                        <span>查看更多</span>
                    </div>
                </div>
                <span>查看更多</span>
            </div>
        </div>
        <footer>
            <div class="nav">
                <ul>
                    <li><img class="img0" src="../assets/img/shouye_16(1).png" alt=""> 首页</li>
                    <li><img src="../assets/img/geren_16.png" alt=""> 个人中心</li>
                    <li><img src="../assets/img/feidi-footer_19.png" alt=""> 肺迪</li>
                    <li><img src="../assets/img/guanyuwomen_21.png" alt=""> 关于我们</li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  name: "Index"
};
</script>
<style lang="scss" scoped>
.top {
  margin: 0;
  padding: 0;
  background-color: #000;
  background-image: url("../assets/img/xiaoyu.svg");
  background-repeat: no-repeat;
  background-position: 5vw center;
  background-size: 7vw;
  padding: 3vw 0;
  h1 {
    margin: 0;
  }
  h1 .logo {
    width: 25vw;
    color: #fff;
    font-size: 6vw;
    font-weight: normal;
    margin: 0 auto;
  }
}
.banner {
  img {
    width: 100%;
  }
  nav {
    margin-bottom: 3vw;
    ul {
      margin: 0;
      padding: 0;
      margin-top: 3vw;
      padding: 0 3vw;
      list-style: none;
      display: flex;
      justify-content: space-between;
      .li1 {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 14vw;
        background-image: url("../assets/img/daili_05.png");
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 8vw;
      }
      .li2 {
        height: 14vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url("../assets/img/feidi_15.png");
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 8vw;
      }
      .li3 {
        height: 14vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url("../assets/img/zhaoshangyinzi_07(1).png");
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 8vw;
      }
      .li4 {
        height: 14vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url("../assets/img/order_10.png");
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 6vw;
      }
    }
  }
}
.main {
  background-color: gray;
  padding-top: 5vw;
  padding-bottom: 5vw;
  .main-up {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    h3 {
      border-bottom: 1px solid gray;
      margin-bottom: 0;
      padding-bottom: 5vw;
      font-weight: normal;
      text-indent: 3vw;
    }
    img {
      height: 30vw;
      margin-top: 5vw;
    }
    span {
      color: orange;
    }
    > div {
      display: flex;
      justify-content: space-around;
      padding-bottom: 5vw;
    }
    > div > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .el-button0{
          background-color: #fff;
          color:orange;
      }
      .el-button1 {
        margin-left: 3vw;
      }
    }
  }
  .main-down {
    margin-top: 5vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    h3 {
      border-bottom: 1px solid gray;
      margin-bottom: 0;
      padding-bottom: 5vw;
      font-weight: normal;
      text-indent: 3vw;
    }
    div {
      margin-top: 3vw;
      display: flex;
      img {
        width: 35vw;
      }
    }
    > div > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        margin: 0;
        padding: 0;
        color: gray;
        font-size: 4vw;
        margin-left: 2vw;
      }
      span {
        margin-left: 35vw;
        color: orange;
      }
    }
    span{
        padding:3vw 0;
        color:gray;
        text-align:center;
    }
  }
}
footer {
  padding: 3vw 0;
  .nav {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        img {
          width: 8vw;
          margin: 0 auto;
        }
        .img0 {
          width: 10vw;
        }
      }
    }
  }
}
</style>


