<template>
  <div class="detail_wrapper">
    <div class="details_brief">

      <div class="brief">
        <div class="background" :style="{backgroundImage:'url('+share_data.share_pic+')'}">

        </div>
        <div class="brief__primary__fg">
          <div class="brief__primary__fg__title__text">
            <div class="nav_bar">
              <div class="left">
                <a href="#" @click="clickBack()">&lt;</a>
              </div>
              <div class="center">演出详情</div>
              <div class="right">
                <a href="#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="brief__primary__fg__content">
            <div class="left">
              <img :src="share_data.share_pic" alt="">
            </div>
            <div class="right">
              <p>{{share_data.share_title}}</p>
              <p>￥{{price_range}}</p>
            </div>
          </div>
        </div>
        <div class="brief__secondary">
          <div class="brief__secondary__info">
            <p>08/04 - 08/25</p>
            <p>{{city.city_name}} | {{venue.venue_name}}</p>
          </div>
          <div class="brief__secondary__pointer"></div>
        </div>
      </div>

      <div class="detail__plus-tips">
          <div class="orange_plus_tips">
              <div class="left">
                  <span>橙PLUS卡</span>
                  <span>开通送￥100 最高省20元</span>
              </div>
              <div class="right">
                  <span>立即开卡</span>
                  <span>xxx</span>
              </div>
          </div>
      </div>
      <div class="times-card-benefit-item">
          <p class="times-card-benefit-item-left">
            欢乐家庭卡PLUS
          </p>
          <p class="times-card-benefit-item-right">
            <span>3:1起兑换</span><span>></span>
          </p>
      </div>
      <div class="show-benefit-item">
        <div class="show-benefit-item-plus">
          <span>VIP+ ：</span>
          <p><span>V+会员享</span><span>国内免邮+双倍积分</span></p>
          <span>></span>
        </div>
        <div class="show-benefit-item-wrapper">
          <span>优惠</span>
          <span>购买指定票夹享5折</span>
          <span>。。。</span>
        </div>
        <div class="show-benefit-item-entrance">
          <span>入场：</span>
          <span>{{tipsList}}</span>
        </div>
        <div class="show-benefit-item-support">
          <span>支持：</span>
          <p>
            <span v-for="(item,index) in supportList" :key="index">{{item}}</span>
            </p>
        </div>
      </div>

      <div class="performance_introduced">
        <div>演员介绍</div>

        <div v-html="show_desc">
        </div>
          <img src="https://image.juooo.com/group1/M00/01/97/rAoKmVu_AdyAKs5PAAaqe_adMEE227.png" alt="">
        </p>
      </div>
    </div>

      <!-- bottom -->
    <div class="details_bottom">
        <div class="bottom__img__service">
            <a href="#">
                <span class="bottom_img">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt="">
                </span>
                <span class="bottom_service">客服</span>
            </a>
        </div>
        <button class="bottom_button">选座购买</button>
    </div>
  </div>

  <!-- https://image.juooo.com/group1/M00/00/55/rAoKNVf8mcWAKzVzAAPYiYcizBg970.jpg -->
</template>


<script>
import {detail_api} from "api/list"

export default {

  name:"detail",
   async created(){
        let data = await detail_api(this.$route.params.id);
        console.log(this.$route.params.id)



        let {item_list,share_data,static_data} = data.data;
        this.share_data = share_data;
        this.static_data = static_data;
        this.item_list = item_list;


        this.price_range = static_data.price_range;
        this.city = static_data.city;
        this.venue = static_data.venue;
        this.supportList = static_data.support.list;
        this.tipsList = static_data.tips.desc;

        this.show_desc = static_data.show_desc.desc;
    },
  
  data () {
    return {
      price_range:"",
      tipsList:"",
      show_desc:"",

      
      share_data:{},
      static_data:{},
      venue:{},
      city:{},

      supportList:[],
    }
  },

  methods: {
      clickBack() {
          this.$router.back();
      },
  }
};
</script>

<style lang="scss" scoped>
.detail_wrapper {
  width: 100%;
  height: 100%;
}

.details_brief {
  width: 100%;
  position: absolute;
  height: calc(100% - 0.494rem);
  overflow-y: auto;
  background: #f5f5f5;
  .brief {
    width: 100%;
    height: 3.365rem;
    position: relative;

    .background{
      position: absolute;
      width: 100%;
      height: 2.3rem;
      filter: blur(10px);
      background-repeat: no-repeat;
      background-size: 100% 100% ;
    }

    .brief__primary__fg {
      position: absolute;
      width: 100%;
      height: 2.3rem;
      .brief__primary__fg__title__text {
        width: 100%;
        height: 0.445rem;
        .nav_bar {
          position: absolute;
          top: 0;
          width: 100%;
          height: 0.43rem;
          padding: 0 0.15rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left a {
            width: 0.2rem;
            font-size: 0.2rem;
            color: white;
          }
          .center {
            font-weight: bolder;
            font-size: 0.17rem;
            color: white;
          }
        }
      }
    }
    .brief__primary__fg .brief__primary__fg__content {
      position: absolute;
      width: 100%;
      height: 1.65rem;
      padding: 0.15rem 0.15rem 0;
      display: flex;
      justify-content: space-between;
      position: absolute;
    }
    .brief__primary__fg__content .left {
      width: 1.1rem;
      height: 1.5rem;
    }
    .brief__primary__fg__content .left img {
      width: 100%;
      height: 100%;
    }

    .brief__primary__fg__content .right {
      width: 2.2rem;
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: bolder;
      color: #fefefe;
    }
    .brief__primary__fg__content .right p:first-of-type {
      font-size: 0.19rem;
    }
    .brief__primary__fg__content .right p:last-of-type {
      font-size: 0.16rem;
    }

    .brief__secondary {
      height: 1.07rem;
      display: flex;
      justify-content: space-between;
      padding: 0.18rem 0.15rem;
      position: relative;
      top: 2.35rem;
    }
    .brief__secondary .brief__secondary__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: #232323;
      font-weight: bolder;
    }
    .brief__secondary__info p:first-of-type{
        font-size: .18rem;
    }
    .brief__secondary__info p:last-of-type{
        font-size: .16rem;
    }
    .brief__secondary .brief__secondary__pointer {
        width: .4rem;
        height: .4rem;
        position:absolute;
        right: .15rem;
        top: .35rem ;
        background: #ccc;
    }
  }
}

.detail__plus-tips{
        width: 100%;
        height: .69rem;
        padding: 0 .15rem;
        background: #fff;
        .orange_plus_tips{
            width: 100%;
            height: .49rem;
            background: linear-gradient(to right,#2C2C2B,#2C2C2B);
            display: flex;
            border-radius: .04rem;
        }

        .orange_plus_tips .left{
            flex: 70%;
            color: #F5DDA6;
            display: flex;
            justify-content: space-around;
            align-items: center ;
        }

        .orange_plus_tips .right{
            flex: 30%;
            color: #F5DDA6;
            display: flex;
            justify-content: center ;
            align-items: center ;
        }
    }
/* ==================== PLUS兑换 ========================= */

.times-card-benefit-item{
  height: .52rem;
  display: flex;
  justify-content: space-between;
  align-items: center ;
  background: #fefefe;
  margin: .15rem 0 ;
  padding: 0 .15rem;
}

.times-card-benefit-item-left{
  color: #232323;
  font-size: .13rem;
}
.times-card-benefit-item-right{
  color: #666;
  font-size: .12rem;
}
.times-card-benefit-item-right span:last-of-type{
  font-size: .15rem;
  font-weight: bolder;
  margin-left: .05rem;
}

.show-benefit-item{
  width: 100% ;
  padding: 0 .15rem;
  background: #fff;
}

.show-benefit-item div{
  display: flex;
  height: .54rem;
  align-items: center;
  border-bottom: .01rem solid #ccc ;
}


.show-benefit-item-plus{
   justify-content: space-between;
   color: #999;

}

.show-benefit-item-plus p span:last-of-type{
  margin-left: .1rem;
  color: #ff6743;
}

.show-benefit-item-wrapper{
  justify-content: space-between;

}
.show-benefit-item-wrapper span:first-of-type{

  color: #999;
}

.show-benefit-item-entrance span{
  margin-right: .4rem;
}
.show-benefit-item-entrance span:first-of-type{
  color: #999;
}




.show-benefit-item-support{
 color: #999;
   font-size: .14rem;
}

.show-benefit-item-support span{
  flex: 20%;
}
.show-benefit-item-support p{
  flex: 80%;
  display: flex ;
 
  font-size: .12rem;
}


.performance_introduced{
  margin-top: .15rem;
  padding: 0 .15rem;
  background: #fff;
  text-align: center;
  overflow-x: hidden;
}
.performance_introduced div:first-of-type{
  padding: .2rem 0;
  font-size: .2rem;
  font-weight: bolder;
  text-align: left;
  color: #232323;
}
.performance_introduced h2{
  font-size: .18rem;
  color: #000;
  margin-bottom: .05rem;
}
.performance_introduced strong{
  color:#232323;
  font-size: .2rem;
}
.performance_introduced h3{
  color: #000;
  font-size: .14rem;
  margin-bottom: .5rem;
}

.performance_introduced p{
  height: 2.17rem;
}
.performance_introduced div:last-of-type img{
  height: 2.17rem;
}
  //  <div class="performance_introduced">
  //       <div>演员介绍</div>
  //       <h2>家庭音乐剧四季剧团首部海外授权中文版音乐剧《想变成人的猫》</h2>
  //       <strong>超高好评明星大咖热荐超燃音乐剧！</strong>
  //       <h3>动听的歌超燃的舞蹈还有满满的正能量</h3>
  //       <img src="https://image.juooo.com/group1/M00/01/97/rAoKmVu_AdyAKs5PAAaqe_adMEE227.png" alt="">
  //     </div>



/* ================ bottom ======================= */
.details_bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.495rem;
  display: flex;
  border-top: .01rem solid #eee;


  .bottom__img__service{
      width: .51rem;
      height:100% ;
  }
    .bottom__img__service a{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: .05rem 0 ;
        font-size: .12rem;
        color: #666;
    }
    .bottom__img__service a span img{
        width: .2rem;
        height: .2rem;
    }

  .bottom_button{
      flex: 1;
      border-style: none;
      color: #fefefe;
      font-weight: bolder;
      font-size: .17rem;
      background: linear-gradient(to right,#FF9336,#FF5F45);
  }
}




    
</style>