 <template>
     <div id="footer">
         <div class="bottom">
            <router-link to="/home">
              <div>
                  <span class="home__icon"></span>
                  <span class="tabbar__text">首页</span>
              </div>
            </router-link>
            <router-link to="/list">
              <div>
                  <span class="home__icon"></span>
                  <span class="tabbar__text">剧场</span>
              </div>  
            </router-link>
            <router-link to="/order">
              <div>
                  <span class="home__icon"></span>
                  <span class="tabbar__text">票夹</span>
              </div>  
            </router-link>
            <router-link to="/mine">
              <div>
                  <span class="home__icon"></span>
                  <span class="tabbar__text">我的</span>
              </div>  
            </router-link>
      </div>
     </div>
 </template>
 
 <script>
 export default {
     

 }
 </script>
 
 <style lang="scss" scoped>
  a>div{height: 100%;text-align: center;}
  /* bottom盒子 */
  .bottom{display: flex;position: absolute;width: 100%;height: .49rem;background-color: red;bottom: 0;box-shadow: 0 0 0.025rem #ebebeb;}
  /* router-link */
  a{flex:1;font-size: .12rem;color: #232323; }
  /* tabbar图标 */
  .home__icon{background-color: green;display: block;margin: 0 auto;width: .3rem;height: .3rem;}
 </style>
 