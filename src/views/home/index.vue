<template>
    <div id="home_box">
        <!-- 头部搜索 -->
        <div class="search">
        </div>
        <!-- 内容盒子 -->
        <div class="center_box">
            <!-- 第一个轮播图 -->
            <div class="swiper__top">
            </div>
            <!-- 内容 -->
            <article class="article__center">
                <!-- 分类 演唱会  音乐剧  舞台剧 儿童剧  音乐会 -->
                <div class="article__center_top_box">
                    <div><a href=""><img src="" alt=""><span>演唱会</span></a></div>
                    <div><a href=""><img src="" alt=""><span>音乐剧</span></a></div>
                    <div><a href=""><img src="" alt=""><span>舞台剧</span></a></div>
                    <div><a href=""><img src="" alt=""><span>儿童剧</span></a></div>
                    <div><a href=""><img src="" alt=""><span>音乐会</span></a></div>
                </div>
                <!-- 图片点击 -->
                <div class="advertion"><a><img src="" alt=""></a></div>
                <!-- 五分类专区 -->
                <div class="operation">
                    <!-- 上 -->
                    <ul class="operation__top">
                        <li>
                            <a href="">
                                <div>
                                    <p>111</p>
                                    <p>222</p>
                                </div>
                                <img src="" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                    <p>111</p>
                                    <p>222</p>
                                </div>
                                <img src="" alt="">
                            </a>
                        </li>
                    </ul>
                    <!-- 下 -->
                    <ul class="operation__bottom">
                        <li>
                            <a href="">
                                <h3>111</h3>
                                <p>111</p>
                                <img src="" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h3>222</h3>
                                <p>222</p>
                                <img src="" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h3>333</h3>
                                <p>333</p>
                                <img src="" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- 热门演出 -->
                <section class="hot__play">
                    <div class="hot__play__title">
                        <h3>热门演出</h3>
                        <a href="">></a>
                    </div>
                    <div class="hot__play__center">
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                        </div>
                    </div>
                </section>
                <!-- 巡回演出 -->
                 <section class="return__play">
                    <div class="return__play__title">
                        <h3>热门演出</h3>
                        <a href="">></a>
                    </div>
                    <div class="return__play__center">
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                            <p>11</p>
                        </div>
                        <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                            <p>11</p>
                        </div>
                         <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                            <p>11</p>
                        </div>
                         <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                            <p>11</p>
                        </div>
                         <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                            <p>11</p>
                        </div>
                         <div>
                            <img src="" alt="">
                            <p>啊啊啊</p>
                            <p>11</p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name:"Home"
}
</script>

<style lang="scss" scoped>
    #home_box{height: 100%;}
    /* 搜索栏 */
    .search{width: 100%;position: absolute;top: 0;background-color: blue;height: .44rem;z-index: 10;}
    /* 内容盒子 */
    .center_box{width: 100%;position: absolute;height: auto;top: 0;bottom: .49rem;overflow-y: auto;}
    /* 头部轮播图 */
    .swiper__top{width: 100%;height: 1.96rem;background-color: aquamarine;}
    /* 信息盒子 */
    .article__center{height: 4.57rem;background-color: cadetblue;padding: .2rem .15rem 0;}
    /* 分类 演唱会  音乐剧  舞台剧 儿童剧  音乐会 */
    .article__center_top_box{display: flex;height: .75rem;margin-bottom: .3rem;background-color: wheat;}
    .article__center_top_box>div{flex: 1;background-color:green;}
    .article__center_top_box>div>a{display: block;widows: 100%;height: 100%;text-align: center;}
    .article__center_top_box>div>a>img{width: .51rem;height: .51rem;margin: 0 auto;background-color: red;}
    .article__center_top_box>div>a>span{margin-top: .08rem;font-size: .16rem;color: #232323;}
     /* advertion  一张图片*/
    .advertion{height: 1rem;margin-bottom: .3rem;border-radius: .5rem;overflow: hidden;}
    .advertion>a{height: 100%;width: 100%;display: block;}
    .advertion>a>img{height: 100%;width: 100%;display: block;background-color: black;}
    /* 五分类专区 */
    .operation{height: 2.02rem; margin-bottom: .2rem;}
    /* 五分类专区 上 */
    .operation__top{height: .9rem;background-color: red;display: flex;justify-content: space-between;}
    .operation__top>li{height: 100%;width: 1.7rem;background-color: green;padding: 0 .175rem;}
    .operation__top>li>a{display: block;width: 100%;height: 100%;display: flex;align-items: center;}
    .operation__top>li>a>div{height: .42rem;width: .9rem;background-color: beige;}
    .operation__top>li>a>div>p:nth-of-type(1){font-size: .15rem}
    .operation__top>li>a>div>p:nth-of-type(2){font-size: .12rem}
    .operation__top>li>a>img{width: .45rem;height: .45rem;background-color: black;}
    /* 五分类专区 下 */
    .operation__bottom{height: 1.06rem;margin-top: .06rem;background-color: blueviolet;display: flex;justify-content: space-between;}
    .operation__bottom>li{width: 1.11rem;height: 100%;background-color:burlywood;}
    .operation__bottom>li>a{display: block;width: 100%;height: 100%;text-align: center;}
    .operation__bottom>li>a>h3{font-size: .15rem;}
    .operation__bottom>li>a>p{font-size: .12rem;}
    .operation__bottom>li>a>img{width: .45rem;height: .45rem; margin: 0 auto;background-color: black;}
    /* 热门演出 */
    .hot__play{height: 2.76rem;padding: .2rem 0 .35rem .15rem;}
    .hot__play__title{height: .23rem;display: flex;margin-bottom: .2rem;}
    .hot__play__title>a{width: .2rem;height: .2rem;display: block;font-size: .2rem;}
    .hot__play__title>h3{flex: 1;font-size: .2rem;}
    .hot__play__center{height: 1.78rem; display: flex; overflow-y: auto;}
    .hot__play__center>div{height: 100%;width: 1.07rem;margin-right: .08rem;}
    .hot__play__center>div>img{width: 1.07rem;height: 1.46rem; background-color: brown;}
    .hot__play__center>div>p{margin-top: .05rem;font-size: .15rem;}
    /* 巡回演出 */
    .return__play{height: 2.76rem;padding: .2rem 0 .35rem .15rem;}
    .return__play__title{height: .23rem;display: flex;margin-bottom: .2rem;}
    .return__play__title>a{width: .2rem;height: .2rem;display: block;font-size: .2rem;}
    .return__play__title>h3{flex: 1;font-size: .2rem;}
    .return__play__center{height: 1.99rem; display: flex; overflow-y: auto;}
    .return__play__center>div{height: 100%;width: 2.45rem;margin-right: .08rem;}
    .return__play__center>div>img{width: 2.45rem;height: 1.40rem; background-color: brown;}
    .return__play__center>div>p:nth-of-type(1){margin-top: .05rem;font-size: .18rem;}
    .return__play__center>div>p:nth-of-type(2){margin-top: .05rem;font-size: .12rem; text-align: center;}
</style>
