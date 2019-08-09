<template>
    <div class="page">
        
        <Header></Header>
        <section>
            <mhy-BScroll ref="mhyscroll">
            <ul>
                <v-touch 
                v-for="(item,index) in allList" 
                :key="index"
                @tap="handleToDetail(item.id,item.date)"
                tag="li"
                >
                    <div class="card">
                        <div class="pic"><img :src="item.pic"></div>
                        <div class="info">
                            <div><span>{{item.date}}</span><i>{{item.week}}</i></div>
                            <div>{{item.schedular_name}}</div>
                            <div><span>{{item.city_name}}</span>{{item.venue_name}}</div> 
                            <div><span>￥{{item.min_price}}</span> 起</div>
                        </div>
                    </div>
                    <div class="bottom"><span>{{item.min_discount}}&nbsp;</span><span>折起</span></div>
                </v-touch>
            </ul>
           </mhy-BScroll>
        </section>
      
    </div>
</template>

<script>
import {all_api,all_api2,all_api3} from "api/rebate"
import { async } from 'q';
export default {
    name:"All",
    async created(){
        if(!sessionStorage.getItem("allList")){
            let data=await all_api();
            this.allList=data.data.list
            sessionStorage.setItem("allList",JSON.stringify(data.data.list))
            console.log(this)  
        }      
    },
    data(){
        return{
            allList:JSON.parse(sessionStorage.getItem("allList"))||[],
        }
    },
    methods:{
        handleToDetail(id,date){
            this.$router.push({name:"detailD",params:{id,date}})
        }
    },
    mounted(){
        this.$refs.mhyscroll.handlepullingDown(async()=>{
            // if(sessionStorage.getItem("allList")){
                let data=await all_api();
                this.allList=data.data.list
                this.$refs.mhyscroll.handlefinishPullDown(); 
            // }
            this.$refs.mhyscroll.handlepullingDown(async()=>{
                
            })
        })

        //上拉加载更多
        this.$refs.mhyscroll.handlepullingUp(async()=>{
            
                let data2=await all_api2();
                this.allList=[...this.allList,...data2.data.list];
                sessionStorage.setItem("allList2",JSON.stringify(data2.data.list))    
            
                this.$refs.mhyscroll.handlefinishPullUp();
        })
    }
}
</script>

<style lang="scss" scoped>
    .page{
        width:100%;
        height:100%;
        background: #f5f5f5;
    }
    section{
        position: absolute;
        top:.94rem;
        bottom: 0;
        overflow-y: auto;
    }

    ul>li{
        height:2.394rem;
        width:100%;
        margin-bottom:.12rem;
        padding:0 .15rem;
        background:#fff
    }
    ul>li>.card{
        width: 100%;
        height: 1.9rem;
        padding: .2rem 0;
        display: flex;
    }
    // 图片
    ul>li>.card>.pic,
    ul>li>.card>.pic>img{
        width:1.1rem;
        height:1.5rem;
    }
    // 信息
    ul>li>.card>.info{
        width:2.2rem;
        height:1.5rem;
        margin-left:.14rem;
    }
    ul>li>.card>.info>div:nth-child(1){
        width:100%;
        height:.16rem;
        margin-top:.08rem;
        font-size:.12rem;
    }
    ul>li>.card>.info>div:nth-child(1) span{
        font-weight: 700;
        font-size:.16rem;
        margin-right:.05rem; 
        vertical-align: top;
        line-height:.16rem;
    }
    ul>li>.card>.info>div:nth-child(1) i{
        vertical-align: top;
        line-height: .16rem;
    }
    ul>li>.card>.info>div:nth-child(2){
        width:100%;
        height:.46rem;
        font-size:.18rem;
        font-weight:700;
        margin:.20rem 0;
        line-height: .24rem;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    ul>li>.card>.info>div:nth-child(3){
        width:100%;
        height:.12rem;
        margin-top:.08rem;
        line-height:.12rem;
        font-weight:500;
        color:#666;
    }
    ul>li>.card>.info>div:nth-child(3)>span{
        display: inline-block;
        padding-right:.05rem;
        margin-right: .05rem;
        height:.12rem;
        border-right: 1.5px solid #666;
    }
    ul>li>.card>.info>div:nth-child(4){
        width:100%;
        height:.16rem;
        margin-top:.08rem;
    }
    ul>li>.card>.info>div:nth-child(4)span{
        color: #ff6743;
        font-size:.16rem;
    }
    // 底部
    ul>li>.bottom{
        width:100%;
        height:.2rem;
        margin:.15rem 0;
        text-align:right;
        font-size:.16rem;
    }
    ul>li>.bottom>span:nth-child(1){
        color: #ff6743;
        font-weight:400;
    }
    ul>li>.bottom>span:nth-child(2){
        font-size:.14rem;
    }
</style>

