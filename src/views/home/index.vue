<template>
    <div id="home_box">
        <!-- 头部搜索 -->
        <div class="search">
            <router-link
            to="/cityList"
            tag="div">
                <i class="iconfont">&#xe611;</i>
                <span>{{$store.state.city.cityName}}</span>
            </router-link>
            <div>
                <img src="../../../public/iconfont/search.png" alt="">
                <span>搜索热门演出</span>
            </div>
            <div></div>
        </div>
        <!-- 内容盒子 -->
        <div class="center_box__box">
            <mhy-BScroll ref="verscroll" style="overflow: hidden;">
                <div class="center_box">
                    <!-- 轮播图 -->
                    <div class="swiper__top">
                        <div class="swiper-container" ref="swiperContainer">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide" v-for="(item,index) in bannerImg" :key="index">
                                    <img :src="item" alt="" style="width:100%;height:100%;">
                                </div>
                            </div>
                            <!-- 如果需要分页器 -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    <!-- 内容 -->
                    <article class="article__center">
                        <!-- 分类 演唱会  音乐剧  舞台剧 儿童剧  音乐会 -->
                        <div class="article__center_top_box">
                            <div v-for="(item,index) in classify_list" :key="index">
                                <a href=""><img :src="item.pic" alt=""><span>{{item.name}}</span></a>
                            </div>
                        </div>
                        <!-- 图片点击 -->
                        <div class="advertion"><a><img :src="ad_list.advert1[0].pic" alt=""></a></div>
                        <!-- 五分类专区 -->
                        <div class="operation">
                            <!-- 上 -->
                            <ul class="operation__top">
                                <li>
                                    <a href="">
                                        <div>
                                            <p>{{operation_list[0]?operation_list[0].name:""}}</p>
                                            <p v-html="operation_list[0]?operation_list[0].describe:''">{{operation_list[0]?operation_list[0].describe:''}}</p>
                                        </div>
                                        <img :src="operation_list[0]?operation_list[0].pic:''" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div>
                                            <p>{{operation_list[1]?operation_list[1].name:""}}</p>
                                            <p v-html="operation_list[1]?operation_list[1].describe:''">{{operation_list[1]?operation_list[1].describe:''}}</p>
                                        </div>
                                        <img :src="operation_list[1]?operation_list[1].pic:''" alt="">
                                    </a>
                                </li>
                            </ul>
                            <!-- 下 -->  
                            <ul class="operation__bottom">
                                <li>
                                    <a href="">
                                        <h3>{{operation_list[2]?operation_list[2].name:""}}</h3>
                                        <p v-html="operation_list[2]?operation_list[2].describe:''">{{operation_list[2]?operation_list[2].describe:''}}</p>
                                        <img :src="operation_list[2]?operation_list[2].pic:''" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h3>{{operation_list[3]?operation_list[3].name:""}}</h3>
                                        <p v-html="operation_list[3]?operation_list[3].describe:''">{{operation_list[3]?operation_list[3].describe:''}}</p>
                                        <img :src="operation_list[3]?operation_list[3].pic:''" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h3>{{operation_list[4]?operation_list[4].name:""}}</h3>
                                        <p v-html="operation_list[4]?operation_list[4].describe:''">{{operation_list[4]?operation_list[4].describe:''}}</p>
                                        <img :src="operation_list[4]?operation_list[4].pic:''" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                        <!-- 热门演出 -->
                        <section class="hot__play">
                            <div class="hot__play__title">
                                <h3>热门演出</h3>
                                <span ></span>
                            </div>
                            <div class="hot__play__center">
                                <mhy-BScroll class="hot__play__center__box">
                                    <div>
                                        <div v-for="(item,index) in hotPlay" :key="index">
                                            <img :src="item.pic" alt="">
                                            <p>{{item.show_name}}</p>
                                        </div>
                                    </div>
                                </mhy-BScroll>
                            </div>
                        </section>
                    <!-- 巡回演出 -->
                        <section class="return__play">
                            <div class="return__play__title">
                                <h3>巡回演出</h3>
                                <span></span>
                            </div>
                            <div class="return__play__center">
                                <mhy-BScroll class="return__play__center__box">
                                    <div>
                                        <div v-for="(item,index) in returnPlay" :key="index">
                                            <img :src="item.pic" alt="">
                                            <p>{{item.show_name}}</p>
                                            <p>{{item.schedular_num}}场巡演</p>
                                        </div>
                                    </div>
                                </mhy-BScroll>
                            </div>
                        </section>
                        <!-- VIP -->
                        <section class="vip">
                            <div>
                                <span></span>
                                <span>VIP+会员尊享权益</span>
                            </div>
                            <div>
                                <span>开通99元/年</span>
                                <span></span>
                            </div>
                        </section>
                        <!-- 专享折扣  优先购票 -->
                        <section class="vip__block__conent">
                            <router-link  tag="div" to="../rebate" class="vip__block__conent__left">
                                <h3>专享则扣</h3>
                                <ul>
                                    <li>
                                        <img :src="forVip.discountList[0]?forVip.discountList[0].pic:''" alt="">
                                        <span>{{forVip.discountList[0]?forVip.discountList[0].min_discount:""}}</span>
                                        <span>折</span>
                                    </li>
                                    <li>
                                        <img :src="forVip.discountList[1]?forVip.discountList[1].pic:''" alt="">
                                        <span>{{forVip.discountList[1]?forVip.discountList[1].min_discount:""}}</span>
                                        <span>折</span>
                                    </li>
                                </ul>
                            </router-link>
                            <div class="vip__block__conent__right">
                                <h3>优先购票</h3>
                                <img :src="forVip.watchList[0]?forVip.watchList[0].pic:''" alt="">
                                <span>{{forVip.watchList[0]?forVip.watchList[0].date:''}} 16:18</span>
                                <span>开始</span>
                            </div>
                        </section>
                        <!-- 演唱会 音乐剧 舞台剧 儿童剧 音乐会 展览休闲 -->
                        <div class="category_box">
                            <section v-for="(item, index) in sixPlay" :key="index">
                                <hgroup>
                                    <h3>{{sixPlay[index].title}}</h3>
                                    <span></span>
                                </hgroup>
                                <div class="category_imgmsg">
                                    <img :src="sixPlay[index].list[0].pic" alt="">
                                    <div>
                                        <span>{{sixPlay[index].list[0].date}}</span> <span>{{sixPlay[index].list[0].week}}</span>
                                        <p>{{sixPlay[index].list[0].schedular_name}}</p>
                                        <p>{{sixPlay[index].list[0].city_name}} | {{sixPlay[index].list[0].venue_name}}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="category__swiper">
                                        <mhy-BScroll class="category__swiper__box">
                                            <div class="category__swiper__box__firstdiv">
                                                <div v-for="(item, index) in sixPlay[index].list" :key="index">
                                                    <img :src="item.pic" alt="">
                                                    <p>{{item.schedular_name}}</p>
                                                    <span>￥{{splitPrice(item.low_price)}}</span><span>起</span>
                                                </div>
                                            </div>
                                        </mhy-BScroll>
                                    </div>
                                </div>
                            </section>  
                        </div>  
                        <!-- 热门场馆 -->
                        <div class="hot__airtle">
                            <router-link
                             to="/List"
                             tag="hgroup"
                            >
                                <h3>热门场馆</h3>
                                <span></span>
                            </router-link>
                            <div class="hot__airtle__swiper__box">
                                <mhy-BScroll class="hot__airtle__swiper__bigbox">
                                    <div class="hot__airtle__swiper_smallbox">
                                        <div class="hot__aritle__swiper" v-for="(item,index) in hotVenue" :key="index">
                                            <div class="hot__aritle__swiper_top">
                                                <img :src="item.pic" alt="">
                                                <div>
                                                    <a href="#">{{item.name}}</a>
                                                    <p>{{item.count}}场在售演出</p>
                                                </div>
                                                <a href="#" class="elipse">...</a>
                                            </div>
                                            <div class="hot__aritle__swiper_center">
                                                <p>
                                                    <span>{{item.showList?item.showList[0].show_time:''}}</span>
                                                    <span>{{item.showList?item.showList[1].show_time:''}}</span>
                                                </p>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                            <div class="hot__aritle__swiper_bottom">
                                                <a href="#"><img :src="item.showList?item.showList[0].pic:''" alt=""></a>
                                                <a href="#"><img :src="item.showList?item.showList[1].pic:''" alt=""></a>
                                            </div>
                                        </div>
                                    </div>
                                </mhy-BScroll>
                            </div>
                        </div>
                        <!-- 为您推荐 -->
                        <div class="recommend__box">
                            <h3>为您推荐</h3>
                            <ul class="recommend">
                                <li v-for="(item,index) in forYou" :key="index">
                                    <div><a href=""><img :src="item.schePic" alt=""></a></div>
                                    <div>
                                        <p>{{item.show_time}}</p>
                                        <p>{{item.show_name}}</p>
                                        <p>{{item.c_name}} | {{item.v_name}}</p>
                                        <p>
                                            <span>￥{{splitPrice(item.low_price)}}</span> <span>起</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </div>
            </mhy-BScroll>
        </div>
    </div>
</template>


<script>
import "../../../public/iconfont/icon/iconfont.css"
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import {home_now_api,home_hot_play_api,home_return_play_api,home_six_play_api,for_you_play_api,for_vip_api,hot_venue_api} from "api/home.js";
import { constants } from 'crypto';
export default {
    name:"Home",
        async created(){
        
        let imgData = await home_now_api();
        this.ad_list.advert1[0].pic = imgData.data.ad_list.advert1[0].pic; //获取图片图标信息
        this.classify_list=imgData.data.classify_list;//演唱会 音乐剧 舞台剧 儿童剧 音乐会
        this.operation_list=imgData.data.operation_list;//五大分区
        this.slide_list=imgData.data.slide_list;//轮播图
        setTimeout(() => {
            this.slide_list.forEach(item=>{
                this.bannerImg.push(item.image_url);
            })
        }, 1000);

        let hotPlay = await home_hot_play_api();
        this.hotPlay= this.filterNum(hotPlay.data.hots_show_list,10);//热门演出

        let returnPlay = await home_return_play_api();
        this.returnPlay= this.filterNum(returnPlay.data.tour_show_list,6);//巡回演出

        let sixPlay = await home_six_play_api();
        this.sixPlay= sixPlay.data;//六分类演出

        let forYou = await for_you_play_api(this.page);
        this.forYou= forYou.data.recommend_show_list;//为您推荐
        
        let forVip = await for_vip_api();
        this.forVip= forVip.data;//vip

        let hotVenue = await hot_venue_api();
        this.hotVenue= hotVenue.data.theatre_list;//热门场馆

    },
    
    data(){
        return {
            page:1,//页面
            ad_list:{//获取图片图标信息
                advert1:[
                    {   
                        ad_id:0,
                        pic:"",
                        ad_name:"",
                        url:""
                    }
                ]
            },
            classify_list:[],//演唱会 音乐剧 舞台剧 儿童剧 音乐会
            operation_list:[],//五大分区
            slide_list:[],//轮播图数据信息
            hotPlay:[],//热门演出
            returnPlay:[],//巡回演出
            sixPlay:[],//六分类演出
            forYou:[],//为您推荐
            forVip:{//vip
                discountList:[],
                watchList:[]
            },
            hotVenue:{//热门场馆
                theatre_list:[]
            },
            bannerImg:[]//轮播图
        }
    },
    watch:{
        //轮播图配置
        bannerImg(){
            this.$nextTick(() => {
                var mySwiper = new Swiper (this.$refs.swiperContainer, {
                    observer:true,
                    observerParents:true,
                    loop : true,
                    autoplay:{
                        delay: 3000, //3秒切换一次
                        disableOnInteraction: false
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }) 
            })
        }
    },
    methods:{
        //限制首页数据数量
        filterNum(arr,num){
            let newArr= arr.slice(0,num);
            return newArr;
        },
        //修改价格显示
        splitPrice(str){
           let price= str.split(".")[0];
           return price;
        },
    },
    mounted(){
         this.$refs.verscroll.handlepullingUp(async()=>{
            this.page=this.page+1; 
            let data=await for_you_play_api(this.page);
            this.forYou=[...this.forYou,...data.data.recommend_show_list];
            this.$refs.verscroll.handlefinishPullUp();
        })
    }
}
</script>
<style scoped  lang="scss">
    #home_box{height:100%;background-color: #F5F5F5;}
    /* 搜索栏 */
    .search{width: 100%;position: absolute;top: 0;height: .44rem;z-index: 10;;display:flex;justify-content: space-between;align-items: center; padding:0 .15rem;
        background-color: #fff;
        div:nth-of-type(1){width: .6rem;height: .3rem;background-color: rgba(0,0,0,.3);border: 1px solid hsla(0,0%,88%,.3);line-height:.3rem;border-radius: .13rem;
            i{width: .11rem;height: .13rem; color: #fff;padding-left: .05rem;}
            span{color: #fff;font-weight: 700;font-size: .15rem;margin-left: .005rem;}
        }
        div:nth-of-type(2){width:2.4rem;height: .3rem;background-color:#b3b3b3;border: 1px solid hsla(0,0%,88%,.3);border-radius: .13rem;
            display: flex;line-height:.3rem;
            img{width:.2rem;height:.2rem;margin-left: .11rem;margin-right: .05rem;margin-top: .05rem;}
            span{color: #fff;font-size: .13rem;}
        }
        div:nth-of-type(3){width: .27rem;height: .25rem;background: url("https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png");
            background-size: 100%;
        }
    }
    .center_box__box{height: 100%;width: 100%;position: absolute;top: 0;bottom: .49rem;}
    /* 内容盒子 */
    .center_box{width: 100%;height:auto;touch-action: none;}
    /* 头部轮播图 */
    .swiper__top{width: 100%;height: 1.96rem;background-color: aquamarine;
        .swiper-container {width: 100%;height: 100%;}  
    }
    /* 信息盒子 */
    .article__center{height: 4.57rem;padding: .2rem .15rem 0;}
    /* 分类 演唱会  音乐剧  舞台剧 儿童剧  音乐会 */
    .article__center_top_box{display: flex;height: .75rem;margin-bottom: .3rem;}
    .article__center_top_box>div{flex: 1;}
    .article__center_top_box>div>a{display: block;widows: 100%;height: 100%;text-align: center;}
    .article__center_top_box>div>a>img{width: .51rem;height: .51rem;margin: 0 auto;}
    .article__center_top_box>div>a>span{margin-top: .08rem;font-size: .14rem;color: #232323;}
     /* advertion  一张图片*/
    .advertion{height: 1rem;margin-bottom: .3rem;border-radius: .5rem;overflow: hidden;}
    .advertion>a{height: 100%;width: 100%;display: block;}
    .advertion>a>img{height: 100%;width: 100%;display: block;}
    /* 五分类专区 */
  
    .operation{height: 2.02rem; margin-bottom: .2rem;background-color:#F5F5F5;}
    /* 五分类专区 上 */
    .operation__top{height: .9rem;display: flex;justify-content: space-between;}
    .operation__top>li{height: 100%;width: 1.7rem;padding: 0 .175rem;background-color: #fefefe;}
    .operation__top>li>a{display: block;width: 100%;height: 100%;display: flex;align-items: center;}
    .operation__top>li>a>div{height: .42rem;width: .9rem;}
    .operation__top>li>a>div>p:nth-of-type(1){font-size: .15rem;font-weight: 700;color: #232323;text-align: center;}
    .operation__top>li>a>div>p:nth-of-type(2){font-size: .11rem;margin-top: .05rem;}
    .operation__top>li>a>img{width: .45rem;height: .45rem;}
    /* 五分类专区 下 */
    .operation__bottom{height: 1.06rem;margin-top: .06rem;display: flex;justify-content: space-between;}
    .operation__bottom>li{width: 1.11rem;height: 100%;background-color: #fefefe;}
    .operation__bottom>li>a{display: block;width: 100%;height: 100%;text-align: center;}
    .operation__bottom>li>a>h3{font-size: .15rem;color:#232323;padding-top: .1rem;}
    .operation__bottom>li>a>p{font-size: .12rem;margin-top: .05rem;}
    .operation__bottom>li>a>img{width: .45rem;height: .45rem; margin: 0 auto;}
    /* 热门演出 */
    .hot__play{height: 2.76rem;padding: .2rem 0 .35rem .15rem;}
    .hot__play__title{height: .23rem;display: flex;margin-bottom: .2rem;}
    .hot__play__title>span{margin-right:.1rem;width: .2rem;height: .2rem;display: block;font-size: .2rem;background: url("../../../public/iconfont/to_next_icon.png");background-size: 100%;}
    .hot__play__title>h3{flex: 1;font-size: .2rem;}
    .hot__play__center{height: 1.78rem;width: 100%;}

    .hot__play__center__box>div{height: 100%;width: 11.61rem;display: flex;}
    .hot__play__center__box>div>div{height: 100%;width: 1.07rem;margin-right: .08rem;}
    .hot__play__center__box>div>div>img{width: 1.07rem;height: 1.46rem; background-color: brown;}
    .hot__play__center__box>div>div>p{margin-top: .05rem;font-size: .15rem;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;}
    /* 巡回演出 */
    .return__play{height: 2.76rem;padding: .2rem 0 .35rem .15rem;}
    .return__play__title{height: .23rem;display: flex;margin-bottom: .2rem;}
    .return__play__title>span{margin-right:.1rem;width: .2rem;height: .2rem;display: block;font-size: .2rem;background: url("../../../public/iconfont/to_next_icon.png");background-size: 100%;}
    .return__play__title>h3{flex: 1;font-size: .2rem;}
    .return__play__center{height: 1.99rem;}
    .return__play__center__box>div{width: 15.24rem; display: flex;}
    .return__play__center__box>div>div{height: 100%;width: 2.45rem;margin-right: .08rem;}
    .return__play__center__box>div>div>img{width: 2.45rem;height: 1.40rem; background-color: brown;}
    .return__play__center__box>div>div>p:nth-of-type(1){margin-top: .05rem;font-size: .18rem;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;}
    .return__play__center__box>div>div>p:nth-of-type(2){margin-top: .05rem;font-size: .12rem; text-align: center;}
    /* vip */
    .vip{
        height: .4rem;padding: 0 .15rem; background-color: black;display: flex;justify-content: space-between; align-items: center;width: 100%;
        div:nth-of-type(1){
            height: .2rem;width: 1.48rem;display:flex;
            span:nth-of-type(1){width: .2rem;height: .18rem;margin-right: .05rem;background-color: brown;}
            span:nth-of-type(2){color: #f0d1b0;font-size: .15rem;}
        }
        div:nth-of-type(2){
            height: .2rem;display:flex;
            span:nth-of-type(1){color: #f0d1b0;font-size: .14rem;}
            span:nth-of-type(2){color: #f0d1b0;width:.2rem;height:.2rem; background: url("../../../public/iconfont/to_next_icon.png");background-size: 100%;}
        }
    }
    /*  专享折扣  优先购票 */
    .vip__block__conent{
            padding: 0 .15rem .15rem .15rem;height:2.34rem;display:flex;
            .vip__block__conent__left{
                width: 2.37rem;height: 100%;
                h3{font-size: .16rem;height: .41rem;line-height: .41rem;}
                ul{display: flex;height: 1.78rem; width: 2.3rem;justify-content:space-between;
                    li{width: 1.07rem;height: 1.78rem;margin-right:.07rem;
                        img{display: block;width: 1.05rem;height: 1.46rem;background-color: black;}
                        span:nth-of-type(1){color:#ff6743;font-size: .18rem;}
                        span:nth-of-type(2){color:#999;font-size: .12rem;}
                    }
                }
            }
            .vip__block__conent__right{
                width: 1.16rem;height: 100%;padding-left:.08rem;
                h3{font-size: .16rem;height: .41rem;line-height: .41rem;}
                img{display: block;width: 1.05rem;height: 1.46rem;background-color: black;}
                span:nth-of-type(1){color:#ff6743;}
            }
    }
    /* 演唱会 音乐剧 舞台剧 儿童剧 音乐会 展览休闲 */
    .category_box{
        height: auto;
        section{
          height: 4.4rem;
            hgroup{
                display: flex;
                h3{flex: 1;font-size: .2rem;padding-left: .15rem;}
                span{margin-right: .1rem; width: .2rem;height: .2rem;display: block;font-size: .2rem; background: url("../../../public/iconfont/to_next_icon.png");background-size: 100%;}
            }
            .category_imgmsg{
                height: 1.76rem;background-color: #53555A; padding: .14rem 0 .14rem .15rem;display:flex;
                img{width: 1.07rem;height:1.46rem;}
                div:nth-of-type(1){margin-left: .15rem;flex: 1;
                    span:nth-of-type(1){font-size: .16rem;color: #fff;}
                    span:nth-of-type(2){font-size: .12rem;color: #fff;}
                    p:nth-of-type(1){padding-right: .25rem; font-size: .17rem;color: #fff;margin-top: .12rem;overflow:hidden; text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-wrap: break-word;}
                    p:nth-of-type(2){font-size: .12rem;color: #fff;margin-top: .12rem;}
                }
            }
            div:nth-of-type(2){height: 2.21rem;
                .category__swiper{
                    height: 100%;padding: .15rem 0 0 .15rem;
                    .category__swiper__box{
                        .category__swiper__box__firstdiv{display:flex;width:11.5rem;
                            div{
                                width: 1.07rem; margin-right: .08rem;height:100%;
                                img{width: 1.07rem;height: 1.46rem;}
                                p{white-space: nowrap;overflow:hidden; text-overflow: ellipsis;font-size: .17rem;margin-top:.1rem;color: #232323;font-weight: bold;}
                                span:nth-of-type(1){color: #ff6743;font-size: .16rem;margin-right: .05rem;}
                                span:nth-of-type(2){font-size: .12rem;color: #999;}
                            }
                        }
                    }
                   
                }
            }
        }
    }
    /* 热门场馆 */
    .hot__airtle{
        height: 3.43rem;padding-left:.15rem;margin-bottom: .2rem;
        hgroup{
            display: flex;
            h3{flex: 1;font-size: .2rem;padding-left: .15rem;}
            span{width: .2rem;height: .2rem;display: block;margin-right: .1rem;background: url("../../../public/iconfont/to_next_icon.png");background-size: 100%;}
        }
        .hot__airtle__swiper__box{height:3.13rem;
            .hot__airtle__swiper__bigbox{
                .hot__airtle__swiper_smallbox{display:flex;width:17.04rem;
                    .hot__aritle__swiper{width: 2.64rem;height: 2.93rem;margin-right: .2rem;border: 1px solid #ebebeb;background-color: #fff;padding:.2rem .17rem 0;margin-top: .2rem;flex-shrink:0;
                    // 横向滑动头部
                    .hot__aritle__swiper_top{
                        height: .51rem;display: flex;
                        img{height: .5rem; width: .5rem;background-color: black;}
                        div{padding-left: .1rem;
                            a{font-size: .17rem;color: #232323;font-weight: 700;}
                            p{font-size: .12rem;color: #666;margin-top: .07rem;}
                        }
                        .elipse{font-size: .2rem;line-height: .51rem;padding-left: .4rem;}
                    }
                    .hot__aritle__swiper_center{
                        height:.02rem;margin-top: .4rem;position: relative;background-color: #ebebeb;
                        p{position: absolute;display: flex;justify-content: space-around;width: 100%;bottom: .17rem;color: #b3b3b3;}
                        ul{display: flex;width: 100%;justify-content: space-around;position: absolute;bottom: -.03rem;
                            li{width: .07rem;height: .07rem;background-color: #ccc;border-radius: 50%;}
                        }
                    }
                    .hot__aritle__swiper_bottom{
                        height: 1.65rem;padding-top: .17rem;display: flex; justify-content: space-between;
                        a{
                            display: block;width:1.09rem;height:1.46rem;
                            img{width: 100%;height: 100%;background-color: black;}
                        }
                    }
                }
            }
         }
        }
    }
    /* 为您推荐 */
    .recommend__box{
        h3{font-size:.2rem;color: #232323;text-indent: .15rem;}
        .recommend{
            margin: .2rem;height:auto;
            li{display: flex;margin-bottom:.32rem;
                div:nth-of-type(1){
                    width: 1.1rem;height: 1.5rem;
                    a{width: 100%;height: 100%;display: block;
                        img{width: 100%;height: 100%;background-color: black;}
                    }
                }
                div:nth-of-type(2){
                    padding-left: .15rem;flex:1;
                    p:nth-of-type(1){font-size: .16rem;color:#232323;}
                    p:nth-of-type(2){font-size: .17rem;color: #232323;margin-top:.12rem;font-weight: 700;
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    display:-webkit-box;  //将对象作为弹性伸缩盒子模型显示。
                    -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
                    -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。此处为2行
                    word-wrap: break-word;//允许单词内断句，首先会尝试挪到下一行，看看下一行的宽度够不够，不够的话就进行单词内的断句
                    }
                    p:nth-of-type(3){font-size: .12rem;color: #666;margin-top: .12rem;}
                    p:nth-of-type(4){margin-top: .1rem;
                        span:nth-of-type(1){font-size: .16rem;color:#ff6743;}
                        span:nth-of-type(2){padding-left: .05rem;color: #999;}
                    }
                }
            }
        }
    }
</style>
