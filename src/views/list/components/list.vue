<template>
  <div class="content">
    <!-- 内容区域 -->
    <div class="content_list">
      <ul class="theater_ul">

        <li class="theater_li" v-for="(item,index) in listArr" :key="index">
          <div class="theater_info_shows">
            <div class="theater_info">
          
                <div class="theater_pic_name_count" @click="handlerTheatre(item.id,item.name,item.show_list)" :key="index">
                    <div class="theater_pic_wrap">
                      <img
                        :src="item.pic"
                        alt
                      />
                    </div>
                    <div class="theater_name_count_wrap">
                      <p class="theater_name">{{item.name}}</p>
                      <p class="theater_count">{{item.count}}场在售演出</p>
                    </div>
                </div>

              <a href="#" class="theater_link">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC"
                  alt
                />
              </a>
            </div>

            <div class="swiper_wrapper">
              <a
                v-for="(item1,index1) in item.show_list"
                :key="index1"
                @click="handlerPic(item1.id)"
              >
                <div class="swiper_slide">
                  <div class="date">
                    <p>{{item1.show_time}}</p>
                  </div>

                  <div class="hr">
                    <p></p>
                  </div>

                  <div class="pic">
                    <img :src="item1.pic" alt />
                  </div>
                </div>
              </a>
               <a>
                <div class="swiper_slide">
                  <div class="date">
                    <p></p>
                  </div>

                  <div class="hr">
                    <p></p>
                  </div>

                  <div class="pic">

                      <p style="line-height:1.46rem;text-align:center" @click="handlerShowList(item.id,item.show_list)">点击查看更多</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>

import{mapActions, mapState} from "vuex";
export default {
  created () {
    this.handlerGetListAction();
  },

  computed: {
      ...mapState({
        listArr:state=>state.list.listArr,
      })
  },
  
  methods: {
    ...mapActions({
      handlerGetListAction:"list/handlerGetListAction",
    }),

    handlerTheatre(id,name,show_list){
      this.$router.push({name:"theatre",params:{id,name,show_list}})  
      //跳转传值theatre页面
      // console.log(this.$router)
    },

    handlerPic(id){
       this.$router.push({name:"detail",params:{id}})
      //跳转传值details页面
      // console.log(this.$router)
    },

    handlerShowList(id,pic){
      //跳转传值showList页面
      // console.log(id)
      this.$router.push({name:"showList",params:{id,pic}})
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 0.43rem;
  width: 100%;
  height: calc(100% - 1.02rem);
  overflow-y: auto;
}
.content .content_list {
  width: 3.5rem;
  height: 100%;
  margin: 0 auto;
}
.content_list .theater_ul {
  width: 100%;
  height: 100%;
}

/* ============ li =================== */
.theater_ul .theater_li {
  width: 100%;
  height: 2.9rem;
  border: 0.01rem solid #eee;
  margin-top: 0.1rem;
}

.theater_li .theater_info_shows {
  width: 100%;
  height: 100%;
  padding: 0.205rem 0.115rem 0.21srem;
  border-radius: 0.03rem;
  background: #fefefe;
  padding-top: 0.15rem;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
}

/* ============ li上半部分 =================== */
.theater_li .theater_info {
  font-size: 0.12rem;
  height: 0.5rem;
  width: 100%;
  border-top-right-radius: 0.02rem;
  border-top-left-radius: 0.02rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ============ li上半部分左边 =================== */
.theater_info .theater_pic_name_count {
  display: flex;
  width: 2.33rem;
  height: 100%;
}

.theater_pic_name_count .theater_name_count_wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.theater_name_count_wrap .theater_name {

  font-size: 0.16rem;
  color: #232323;
  font-weight: bolder;
  margin-bottom: 0.05rem;
}

.theater_name_count_wrap .theater_count {
  color: #666;
  font-size: 0.12rem;
}

/* ==================== pic盒子 ===================== */
.theater_pic_name_count .theater_pic_wrap {
  border-radius: 0.04rem;
  width: 0.5rem;
  height: 100%;
  overflow: hidden;
  margin-right: 0.07rem;
}

.theater_pic_wrap img {
  width: 100%;
  height: 100%;
}

/* ============ li上半部分右边 =================== */
.theater_info .theater_link img {
  width: 0.14rem;
  height: 0.14rem;
}

/* =============== li下半部分 ==================== */
.theater_li .swiper_wrapper {
  height: calc(100% - 0.5rem);
  border-bottom-right-radius: 0.02rem;
  border-bottom-left-radius: 0.02rem;
  display: flex;
  overflow-x: auto;
}

.swiper_wrapper .swiper_slide {
  width: 1.14rem;
  flex-shrink: 0;
}

.swiper_wrapper .swiper_slide .date {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 0.26rem;
  color: #b3b3b3;
  font-size: 0.14rem;
}

.swiper_wrapper .swiper_slide .hr {
  height: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper_wrapper .swiper_slide .hr p {
  width: 0.07rem;
  height: 0.07rem;
  border-radius: 50%;
  background: #ccc;
}

.swiper_wrapper .swiper_slide .pic {
  width: 100%;
  height: 1.46rem;
}

.swiper_wrapper .swiper_slide .pic img {
  width: 100%;
  height: 100%;
}
</style>