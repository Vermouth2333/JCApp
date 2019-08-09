<template>
    <div>
        <HeaderT></HeaderT>
        <!-- 上 -->
        <div class="top">
            <img :src="detailList.pic">
            <div class="main">
                <div class="pic">
                    <img :src="detailList.pic" >    
                </div>   
                <div class="info">
                    <div class="title">{{detailList.show_name}}</div>
                    <div class="middle"></div>
                    <div class="price">￥{{detailList.price_range}}</div>
                </div>
            </div>
        </div>
        <!-- 中 -->
        <div class="date">
            <div class="time">{{date}}</div>
            <div class="adress"><span>{{detailList.city?detailList.city.city_name:''}}</span><span>{{detailList.venue?detailList.venue.venue_name:''}}</span></div>
        </div>
        <!-- 下 -->
        <div class="card">
            <div></div>
        </div>
    </div>
</template>

<script>
import {detailD_api} from "api/rebate"
import { async } from 'q';
export default {
    name :"Detail",
    props:["id"],
    async created(){
        console.log(this)
        let data=await detailD_api(this.$route.params.id);
        this.detailList=data.data.static_data
        this.date=this.$route.params.date
        console.log(data.data.static_data)
        console.log(data)
    },
    data(){
        return{
            detailList:[],
            date:""
        }
    }
}

</script>

<style scoped>
.top{
    width: 100%;
    height:2.296rem;
    overflow: hidden;
    background-color: #b8abab;
}
.top>img{
    width:100%;
    filter: blur(.25rem);
}
.main{
    width: 100%;
    height:1.856rem;
    position:absolute;
    top: .44rem; 
    padding: 0 .15rem .2rem;
    display:flex;
    

}
.pic{
    width:1.1rem;
    height:1.5rem;
    margin-top: .15rem;
}
.pic>img{
    width:1.1rem;
    height:1.5rem;
}
.info{
    width:2.2rem;
    height:1.445rem;
    margin:.2rem 0 0 .15rem;
}
.info>.title{
    width:100%;
    height:.6rem;
    font-weight: 700; 
    font-size:.18rem;
    color: #ffffff;
}
.info>.middle{
    width: 100%;
    height:.17rem;
    margin-top:.11rem;
}
.info>.price{
    width:100%;
    height:.54rem;
    margin:.02rem 0 .08rem; 
    font-weight: 700; 
    font-size: .14rem;
    padding-top:.35rem;
    color: #ffffff;
}
.date{
    width:100%;
    height:1.11rem;
    padding:.295rem .15rem .215rem;
}
.date>.time{
    width: 3.05rem;
    font-weight: 700;
    font-size: .18rem;
}
.date>.adress{
    width:3.05rem;
    margin-top:.16rem;
    font-weight: 700; 
    font-size: .18rem;
    line-height:.18rem;
}
.date>.adress>span:nth-child(1){
    display: inline-block;
    margin-right:.05rem;
    padding-right: .05rem;
    border-right: 2px solid #000;
}
.card{
    width: 100%;
    height: .69rem;
    padding:0 .15rem .2rem;
}
.card>div{
    width: 3.45rem;
    height: .49rem;
    background: linear-gradient(-50deg,#ff9a34,#ff4d4a);
    border-radius: 0.066665rem;
}
</style>
