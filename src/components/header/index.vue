<template>
    <div class="bw">
        <!-- 顶部-->
        <header>
            <span>&lt;</span>
            <span>{{title}}</span>
            <span>···</span>
        </header>
        <!-- 导航菜单  -->
        <nav>
            <div class="tab">
                <keep-alive>
                    <ul>  
                        <router-link 
                        v-for="(item,index) in list" 
                        :key="index" 
                        tag="li"
                        :to="item.adress">{{item.name}}</router-link>
                    </ul>
                </keep-alive>
            </div>
            <v-touch class="tab__right" @tap="handleToggle()" tag="div">
                <span>筛选<i>Y</i></span>    
            </v-touch>
        </nav>
        <!-- 城市列表 -->
        <div :class="flag?'List List1':'List'" >
                <div class="wapper">
                    <div class="top">
                    <p>折扣</p>
                        <ul>
                            <v-touch
                            :class="{active:index==digit}"
                            v-for="(val,index) in discountlist"
                            :key="index"
                            tag="li"
                            @tap="handleDiscount(index)"
                            >{{val.name}}</v-touch>
                        </ul>
                    </div>
                <div class="middle clear">
                    <p>城市</p>
                    <ul>
                        <v-touch
                        :class="{active:key==num}" 
                        v-for="(val,key) in cityList" 
                        :key="key"
                         tag="li"
                        @tap="handleCity(key)">{{val.name}}</v-touch>
                    </ul>
                </div>
                </div>
                
                <div class="bottom clear">
                    <div>重置</div>
                    <div>确定</div>
                </div>
        </div>
            <v-touch :class="flag?'List2 List1':'List2'" @tap="handleToggle()" tag="div"></v-touch>
    </div>
</template>

<script>
import {city_api,all_api} from "api/rebate"
export default {
    name: "Header",
    props:{
        title:{
            type:String,
            default:"专享折扣"
        }
    },
    data(){
        return{
            list:[
                {
                   name:"全部",
                   adress:"/rebate/all" 
                },
                {
                    name:"演唱会",
                    adress:"/rebate/concert" 
                },
                {
                    name:"音乐会",
                    adress:"/rebate/musical" 
                },
                {
                    name:"话剧歌剧",
                    adress:"/rebate/play" 
                },
                {
                    name:"儿童亲子",
                    adress:"/rebate/child" 
                },
                {
                    name:"音乐剧",
                    adress:"/rebate/theater" 
                },
                {
                    name:"戏曲综艺",
                    adress:"/rebate/opera" 
                },
                {
                    name:"展览",
                    adress:"/rebate/show" 
                },
                {
                    name:"舞蹈芭蕾",
                    adress:"/rebate/dance" 
                }
            ],
            flag:true,
            num:0,
            digit:0,

            cityList:JSON.parse(sessionStorage.getItem("cityList"))||[{"name":"全部"}],            
            discountlist:JSON.parse(sessionStorage.getItem("discountlist"))||[]
        }
    },
    async created(){
        if(!sessionStorage.getItem("cityList")){
            let data=await city_api();
            this.cityList=this.cityList.concat(data.data.hot_city_List)
            sessionStorage.setItem("cityList",JSON.stringify(this.cityList))
        }
        if(!sessionStorage.getItem("discountlist")){
            let data2=await all_api();
            this.discountlist=data2.data.discountlist
            sessionStorage.setItem("discountlist",JSON.stringify(this.discountlist))
        }
    },
    methods:{
        handleToggle(){
            this.flag=!this.flag
        },
        handleCity(key){
            this.num=key;
        },
        handleDiscount(index){
            this.digit=index;
            
        }
    },
    
};
</script>
<style scoped>
.bw{
    width:100%;
    height:100%;
}
header {
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    position: fixed;
    background: #fff;
    z-index: 12;
    top: 0;
}
header > span {
    display: block;
    font-size: 0.18rem;
    text-align: center;
}
header > span:nth-child(1),
header > span:nth-child(3) {
    width: 12.8%;
    height: 100%;
    line-height: 0.44rem;
}
/* 导航菜单 */
nav {
    width: 100%;
    height: 0.5rem;
    display: flex;
    border-bottom: 1px solid #eee;
    position: fixed;
    z-index: 10;
    top: 0.44rem;
    background: #fff;
}
.tab {
    width: 2.93rem;
    height: 100%;
    padding: 0 0 0 0.15rem;
}
.tab > ul {
    height: 0.5rem;
    width: 100%;
    display: flex;
    overflow-x: auto;
    align-items: center;
}
.tab > ul > li {
    font-size: 0.16rem;
    padding: 0.05rem;
    margin-right: 0.13rem;
    flex-shrink: 0;
}
.tab > ul > .router-link-exact-active {
    color: #ff6743;
    border-bottom: 1px solid #ff6743;
}
/* 筛选 */
.tab__right > span {
    display: block;
    margin: 0.17rem 0;
    padding-left: 0.05rem;
    line-height: 0.16rem;
    font-size: 0.16rem;
    border-left: 0.015rem solid #e0e0e0;
}
/* 动画 */
.List{
    width:78.4%;
    height:100%;
    background: #ffffff;
    transition:all .3s;
    position: absolute;
    right:0;
    z-index:11;
    }
.List2{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    transition:all .3s;
    position: absolute;
    right:0;
    z-index:10;
}
.List1{
    transform: translateX(100%);       
}

/* 城市列表 */
.List>.wapper{
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom:.44rem;
    padding-bottom: .46rem;
}
.top{
    width: 2.94rem;
    height: 1.31rem;
}

.top>p,

.middle>p{
    padding:.19rem .15rem .15rem;
    font-size:.16rem;
    color:#666;
}

.top>ul{
    width:2.64rem;
    height:.77rem;
    margin:0 .15rem;
    margin-right:.15rem
}

.top>ul>li,

.middle>ul>li{
    width:.82rem;
    height:.325rem;
    padding:0 .05rem;
    margin: 0 .03rem .06rem; 
    float: left;
    text-align:center;
    font-size:.12rem;
    line-height:.325rem;
    background: #f5f5f5;
    color: #232323;
}
.middle>ul>.active1{
    background: #f5f5f5;
    color: #232323;
}
.top>ul>.active,
.middle>ul>.active{
    background: #fff1e9;
    color: #ff6743;
}

.middle{
    width: 100%;

}

.middle>ul{
    width:2.64rem;
    margin:0 .15rem;
    margin-right:.15rem;
}


.bottom{
    width: 100%;
    height: .44rem;
    position: absolute;
    bottom: 0;
}


.bottom>div{
    width: 50%;
    height:100%;
    background: #ff6743; 
    float: left;
    color:#fff;
    font-size:.16rem;
    text-align: center;
    line-height: .44rem;
}

.bottom>div:nth-child(1){
    background: #fcfcfc;
    color:#242424;
}
</style>
