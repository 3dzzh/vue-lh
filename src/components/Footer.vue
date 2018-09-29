<template>
    <footer>
            <div class="nav">
                <ul>
                    <li><img class="img0" src="../assets/img/shouye_16(1).png" alt=""> 首页</li>
                    <li><router-link to="/person" tag="li" active-class="active"><img src="../assets/img/geren_16.png" alt=""> 个人中心</router-link></li>
                    <li><img src="../assets/img/feidi-footer_19.png" alt=""> 肺迪</li>
                    <li><img src="../assets/img/guanyuwomen_21.png" alt=""> 关于我们</li>
                </ul>
            </div>
    </footer>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style lang="scss" scoped>
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
      .active{
        display: flex;
      }
    }
  }
}
</style>

