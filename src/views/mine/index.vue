<template>
  <div id="mine">
    <div class="mine__body">
      <!-- 顶部整体div -->
      <div class="mine__info">
        <!-- 设置按钮 -->
        <router-link to="/mine/setting">
          <i class="iconfont">❀</i>
        </router-link>
        <!-- 顶部带数据div -->
        <div class="mine__info__main">
          <div class="mine__main__head">
            <!-- 头像 -->
            <div class="mine__main__head__pic">
              <img src alt />
            </div>
            <span class="first">aaaaaaaaa</span>
            <span class="second">bbbbbbbbbb</span>
          </div>
          <div class="mine__main__label">
            <p>普通会员</p>
          </div>
          <div class="mine__main__cnt">
            <a href="#">
              <p class="iscolor">0</p>
              <p>2222</p>
            </a>
            <a href="#">
              <p class="iscolor">0</p>
              <p>2222</p>
            </a>
            <a href="#">
              <p class="iscolor">0</p>
              <p>2222</p>
            </a>
            <a href="#" class="noborder">
              <p class="isgray">1111</p>
              <p>2222</p>
            </a>
          </div>
        </div>
      </div>
      <!-- 顶部下带图标div -->
      <div class="mine__setting">
        <ul class="mine__setting__list">
          <li>
            <a href="#">
              <i></i>
              <p>我的订单</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
              <p>我的票夹</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
              <p>我的卡包</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
              <p></p>
            </a>
          </li>
        </ul>
        <ul class="mine__setting__list">
          <li>
            <a href="#">
              <i></i>
              <p>实名购票人</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
              <p>收货地址</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
              <p>意见反馈</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
              <p>客服帮助</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mine"
    
    };
</script>

<style lang="scss" scoped>
body {
  background: #f5f5f5;
}
/* 顶部整体div */

.mine__info {
  width: 100%;
  height: 2.096rem;
  background: deepskyblue;
  background: url(../../../public/img/1.png) no-repeat;
  background-size: 100%;
  position: relative;
}
/* 设置按钮 */
.mine__info > a {
  position: absolute;
  right: 0.18rem;
  top: 0.1rem;
  font-size: 0.18rem;
  color: #fefefe;
}
/* 顶部带数据div */
.mine__info__main {
  width: 92%;
  background: #ffffff;
  border-radius: 0.0533rem;
  position: absolute;
  bottom: 0;
  margin: 0 0.15rem;
}

.mine__main__head {
  width: 100%;
  height: 0.5043rem;
  padding: 0 0.15rem;
  position: relative;
}
/* 头像 */
.mine__main__head__pic {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-right: 0.1rem;
  background: #f5f5f5;
  position: absolute;
  margin-top: -0.12rem;
}
.mine__main__head .first {
  position: absolute;
  top: 0.15rem;
  left: 0.85rem;
  color: #232323;
  font-size: 0.14rem;
  font-weight: 700;
}
.mine__main__head .second {
  position: absolute;
  bottom: 0;
  left: 0.85rem;
  color: #999;
  font-size: 0.12rem;
}
.mine__main__label {
  width: 100%;
  height: 0.262rem;
  margin-top: -0.04667rem;
}
.mine__main__label > p {
  display: block;
  width: 0.81rem;
  height: 100%;
  font-size: 0.14rem;
  font-weight: 700;
  color: #454341;
  text-align: center;
  line-height: 0.262rem;
  float: right;
  border-radius: 0.36rem 0 0 0.36rem;
  background: linear-gradient(-45deg, #f5dea9, #f8d583);
}

.mine__main__cnt {
  width: 100%;
  height: 0.812rem;

  display: flex;
  align-items: center;
}
.mine__main__cnt > a {
  display: block;
  margin: 0.15rem 0 0.195rem;
  width: 25%;
  border-right: 1px solid #ccc;
}
.mine__main__cnt .noborder {
  border: none;
}
.mine__main__cnt > a > p {
  text-align: center;
  color: #232323;
}
.mine__main__cnt > a > p:nth-child(1) {
  margin-bottom: 0.07rem;
}
.mine__main__cnt > a > .iscolor {
  color: #ff6743;
  font-size: 0.22rem;
}
.mine__main__cnt > a > p:nth-child(2) {
  color: #666;
  font-weight: 500;
  font-size: 0.12rem;
}
.mine__main__cnt > a > .isgray {
  font-size: 0.18rem;
  color: #232323;
}

/* 顶部下带图标div */
.mine__setting {
  width: 92%;
  margin: 0 0.15rem;
}
.mine__setting__list {
  width: 100%;
  padding: 0.165rem 0 0.2rem;
  background: #ffffff;
  margin-bottom: 0.12rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.0533rem;
  box-shadow: 0 0.02667rem 0.2rem 0.01334rem rgba(35, 35, 35, 0.08);
}
.mine__setting__list > li {
  width: 25%;
  height: 100%;
  display: flex;
}
.mine__setting__list > li > a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.mine__setting__list > li > a > i {
  width: 0.3301rem;
  height: 0.3301rem;
  background: green;
}
.mine__setting__list > li > a > p {
  width: 100%;
  height: 0.16rem;
  display: block;
  text-align: center;
  color: #232323;
}
</style>
