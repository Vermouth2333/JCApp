<template>
    <div id="city_box" ref="scroll">
            <header>
                <h3>
                <v-touch @tap="goBack()" tag="span">&lt;</v-touch>城市选择</h3>
            </header>
        <mhy-BScroll ref="mhyscroll">
        <div>
            <!-- 当前城市 -->
            <div class="now__city">
                <span :ref="1">当前城市</span>
                <ul>
                    <li>{{$store.state.city.cityName}}</li>
                </ul>
            </div>
            <!-- 定位城市 -->
            <div class="now__city">
                <span :ref="2">定位城市</span>
                <ul>
                    <li style="color:#ff6743">全国</li>
                </ul>
            </div>
            <!-- 热门城市 -->
            <div class="hot__city">
                <span :ref="3">热门城市</span>
                <ul>
                    <v-touch tag="li" @tap="getCityValue(item)"  v-for="(item,index) in cityHot" :key="index">{{item.name}}</v-touch>
                </ul>
            </div>
            <!-- 城市列表 -->
            <div class="city__list"  ref="list">
                <div v-for="(item,index) in cityList" :key="index">
                    <div class="city__title" :ref="index" :key="index">{{index}}</div>
                    <ul>
                        <v-touch v-for="(item1, idx) in item.list" :key="idx"
                        tag="li"
                        @tap="getCityValue(item1)"
                        >{{item1.name}}</v-touch>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 侧边栏 -->
        <section  class="city__nav">
            <v-touch tag="span" @tap="handleTo(1)" class="city__nav__lab">当前</v-touch>
            <v-touch tag="span" @tap="handleTo(2)" class="city__nav__lab">定位</v-touch> 
            <v-touch tag="span" @tap="handleTo(3)" class="city__nav__lab">热门</v-touch> 
            <v-touch tag="span" @tap="handleTo(index)" class="city__nav__lab" v-for="(item,index) in cityList" :key="index">{{index}}</v-touch>
        </section>
        </mhy-BScroll>
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from "vuex";
export default {
    name:"cityList",
    created(){
        if(!sessionStorage.getItem("hotCity")||!sessionStorage.getItem("AllCity")){
            this.handlerGetCityAction();
        }
    },
    methods:{
        ...mapActions({
            handlerGetCityAction:"city/handlerGetCityAction"
        }),
        ...mapMutations({
            handleToggleCity:"city/handleToggleCity"
        }),
        handleTo(index){
            if(index==1||index==2||index==3){
                this.$refs.mhyscroll.scroll.scrollTo(0,-this.$refs[index].offsetTop,500);
                //this.$refs.scroll.scrollTop=this.$refs[index].offsetTop;
            }else{
                this.$refs.mhyscroll.scroll.scrollTo(0,-this.$refs[index][0].offsetTop,500);
                //通过index  key值 遍历ref
                //移动
                //this.$refs.scroll.scrollTop=this.$refs[index][0].offsetTop;
            }
        },
        goBack(){
            this.$router.back();
        },
        getCityValue(val){
            let city={};
            city.cityName=val.name;
            city.cityId=val.id;
            this.$router.push("/home");
            this.handleToggleCity(city);

        }
    },
    computed: {
        ...mapState({
            cityHot:state=>state.city.hotCity,
            cityList:state=>state.city.AllCity,
        })
    },
    data(){
        return{
            hotCityList:[],
            allCityApi:[],
            toCity:[],
        }
    }
}
</script>
<style lang="scss" scoped>
#city_box{background-color:#f5f5f5;height: 100%; position: relative;overflow: hidden;}
//头部
header{height: .44rem;line-height: .44rem;background-color:#fff;position:relative;z-index: 10;
    span{position: absolute;left:.15rem;font-size: .16rem;font-size: 0.25rem;}
    h3{font-size: .18rem;font-weight: 400;text-align: center;}
}
//当前城市,定位城市,热门城市
.now__city{height: .81rem;padding: .13rem .38rem 0 .15rem;
    span{font-size: .12rem;margin-bottom: .05rem;display: block;color: #999;}
    ul{ display: flex;flex-wrap:wrap;
        li{width: 1rem;height: .37rem;display: block;color: #232323; font-size: .13rem;background-color: #fff;border: 1px solid #ebebeb;margin-right: .07rem;line-height: .37rem;text-align: center;margin-bottom: .07rem;}
    }
}
//热门城市
.hot__city{height:auto;padding: .13rem .38rem 0 .15rem;
    span{font-size: .12rem;margin-bottom: .05rem;display: block;color: #999;}
    ul{ display: flex;flex-wrap:wrap;
        li{width: 1rem;height: .37rem;display: block;color: #232323; font-size: .13rem;background-color: #fff;border: 1px solid #ebebeb;margin-right: .07rem;line-height: .37rem;text-align: center;margin-bottom: .07rem;}
    }
}
//城市列表
.city__list{height: auto;background-color:#f5f5f5;
    div{
        div{height: .29rem;padding-left: .15rem;color: #999;line-height: .29rem;font-size: .13rem;}
        ul{
            height: auto;padding-left:.15rem; padding-right: .42rem;background-color:#fff;
            li{height: .51rem;border-bottom: 1px solid #ebebeb;display: block;font-size: .13rem;line-height: .51rem;color: #232323;}
        }
    }
}
//侧边栏
.city__nav{
    display: flex;flex-direction: column;width: .2rem;height: 3.6rem;position:fixed;right:0;top:1.2rem;margin-right:.05rem;
    .city__nav__lab{font-size: .1rem;margin-bottom: .05rem;text-align: center;}
}
</style>
