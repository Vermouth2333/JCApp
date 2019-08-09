<template>
    <div>
        <div class="showContent">
            <div class="nav">
                <ul>
                    <li>全部</li>
                    <li>演唱会</li>
                    <li>音乐会</li>
                    <li>话剧歌剧</li>
                    <li>儿童亲子</li>
                    <li>音乐剧</li>
                    <li>舞蹈芭蕾</li>
                    <li>吸取综艺</li>
                    <li>展览</li>
                </ul>
            </div>
            <div class="show-wrap">
                <ul>
                    <li v-for="(item,index) in showList" :key="index">
                        <div class="img-box">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="tetail-box">
                            <p class="title">{{item.schedular_name}}</p>
                            <p class="time">{{item.show_time}}</p>
                            <p class="place">{{item.name}}</p>
                            <p class="price">
                                <span>￥</span>
                                <span>{{item.min_price}}</span>
                                <span>起</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<script>
import {showList_api} from "api/list"
export default {
    name:"showList",

    async created(){
        let data = await showList_api(this.$route.params.id);
        // console.log(this.$route.params.pic) ;
        // console.log(data);
        
        let {datas} = data ;
        this.showList = datas;

        this.pic = this.$route.params.pic;
        for(var i = 0 ; i < this.showList.length ; i++){
            for(var j = 0 ; j < this.pic.length ; j++){
                Object.assign(this.showList[i],this.pic[i])
            }
        }
        console.log(this.showList)
    },

    data(){
        return {
            showList:[],
            pic:[]
        }
    }
}


</script>



<style lang="scss" scoped>
    .showContent{
        position: absolute;
        width: 100%;
        height: 100%;
        background:#eee;
    }
    .nav{
        width: 100%;
        height: .455rem;
    }
    .nav ul{
        width: 100%;
        height: 100%;
        padding: 0 .15rem;
        display: flex;
        align-items: center;
        overflow-x:auto;
        background: #fff;
    }
    .nav ul li{
        width: .88rem;
        flex-shrink:0;
        font-size: .12rem;
        color: #666;
    }

    .show-wrap{
        position: absolute;
        width: 100%;
        height: calc(100% - .555rem);
        margin-top: .1rem;
        background: red
    }
    .show-wrap ul{
        width: 100%;
        height: 100%;
        padding: 0 .075rem;
        background: #fff;
    }
    .show-wrap ul li{
        display: flex;
        width: 100%;
        height: 1.355rem;
        padding: .075rem 0;
        border-bottom: .01rem solid #eee;
        .img-box{
            width: .89rem;
            height: 1.19rem;
            background: green;
            margin-right: .15rem;
        }
        .img-box img{
            width: 100%;
            height: 100%;
        }
        .tetail-box{
            width: 2.4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .title{
            font-size: .14rem;
            color: #262626;

        }
        .time{
            font-size: .11rem;
            color: #999;
        }
        .place{
            font-size: .11rem;
            color: #999;
        }
        p:last-of-type{
            color: #ff7919;
            
        }
        p:last-of-type span:nth-of-type(2){
            font-size: .16rem;
            font-weight: bolder;
        }
        

    }

// iv class="tetail-box">
//     <p class="title">【万有音乐系】“猫和老鼠的古典乐“趣味视听互动音乐会--宜昌站</p>
//     <p class="time">2019.08.09 19:30</p>
//     <p class="place">宜昌剧院</p>
//     <p class="price">
//         <span>￥</span>
//         <span>60</span>
//         <span>起</span>
</style>




