 <template>
         <div class="bottom">
            <router-link to="/home">
              <div>
                  <span class="home__icon" :style="img[0]"></span>
                  <span class="tabbar__text">{{bottom_list[0]?bottom_list[0].name:''}}</span>
              </div>
            </router-link>
            <router-link to="/list">
              <div>
                  <span class="home__icon" :style="img[1]"></span>
                  <span class="tabbar__text">{{bottom_list[1]?bottom_list[1].name:''}}</span>
              </div>  
            </router-link>
            <router-link to="/order">
              <div>
                  <span class="home__icon" :style="img[2]"></span>
                  <span class="tabbar__text">{{bottom_list[2]?bottom_list[2].name:''}}</span>
              </div>  
            </router-link>
            <router-link to="/mine">
              <div>
                  <span class="home__icon" :style="img[3]"></span>
                  <span class="tabbar__text">{{bottom_list[3]?bottom_list[3].name:''}}</span>
              </div>  
            </router-link>
        </div>
 </template>
 
 <script>
 import {home_now_api} from "api/home.js";
 export default {
    name:"tabBar",
    async created(){
      let imgData = await home_now_api();
      this.bottom_list=imgData.data.bottom_list;
      //获取图标图片
      this.bottom_list.forEach(item=>{
        this.img.push(item.pic);
      })
      //修改图标的css样式
      this.img=this.img.map(item=>{
        item=`background:url(${item}) no-repeat;background-size:100% 200%;`
        return item;
      })
    },
     data(){
       return{
         bottom_list:[],
         img:[],
       }
     },
 }
 </script>
 
 <style lang="scss" scoped>
  a>div{height: 100%;text-align: center;}
  /* bottom盒子 */
  .bottom{display: flex;position: absolute;width: 100%;height: .49rem;bottom: 0;box-shadow: 0 0 0.025rem #ebebeb;background-color: #fff;}
  /* router-link */
  a{flex:1;font-size: .12rem;color: #232323;}
  /* tabbar图标 */
  .home__icon{display: block;margin: 0 auto;width: .3rem;height: .3rem;}
 </style>
 