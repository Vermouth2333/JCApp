<template>
    <div class="content">
        <div class="pic">
            <a href="#">
                <img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg" alt="">
            </a>
        </div>
        
        <div class="list">
            <div class="category_container">
                <a href="#">
                    <img src="./img/a.png" alt="">
                    <p>演出</p>
                </a>
                 <a href="#">
                    <img src="./img/b.png" alt="">
                    <p>日历</p>
                </a>
                 <a href="#/list">
                    <img src="./img/c.png" alt="">
                    <p>剧院</p>
                </a>
                 <a href="#">
                    <img src="./img/d.png" alt="">
                    <p>特惠</p>
                </a>
            </div>
        </div>

        <h2 class="hot">热门演出</h2>
        <div class="list_wrap" v-for="(item,index) in show_list" :key="index" >
            <a href="#" class="show_item_clearfix">
                <div class="show_left">
                    <img :src="item.pic" alt="">
                    <span class="logo_jucheng"></span>
                </div>
                <div class="show_right">
                    <p class="title">{{item.schedular_name}}</p>
                    <p class="show_time">{{item.show_time}}</p>
                    <p class="show_venue">{{name}}</p>
                    <p class="price">
                        <span class="fs24">￥</span><span class="fs32">80</span><span class="fs24">起</span>
                    </p>
                </div>
            </a>
        </div>
    </div>
</template>


<script>
import {list_api} from "api/list"
export default{
    name:"theatre",

    async created(){
        let data = await list_api(this.id);
        // this.theatre_list = data.data.theatre_list;
        // console.log(this.theatre_list)
        let {id,name,show_list} = this.$route.params ;
        this.show_list = show_list ;
        this.name = name
    },
    data(){
        return{
            show_list:[],
            name:""
            // theatre_list:[]
        }
    },



    // created() {
    //     document.title = this.$route.meta.title;
    //     http("get","/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2")
    //     .then(data => {
    //         console.log(data.data.theatre_list)
    //         let { theatre_list } = data.data;
    //         // for (let i = 0; i < theatre_list.length; i++) {
    //         //     this.arr.push(theatre_list[i]);
    //         // }
    //     });
    //     // console.log(this.arr);
    // },

    // data(){
    //     return{
    //         arr:[
    //             {

    //             },
    //             {
                    
    //             }
    //         ],
    //         arr1:[
    //             {

    //             },
    //             {
                
    //             },
    //             {

    //             },
    //             {

    //             }
    //         ]
    //     }
    // }
}
</script>


<style lang="scss" scoped>
    .content{
        position: absolute;
        top: .43rem ;
        width: 100% ;
        height: calc(100% - .43rem);
        overflow-y: auto;
    }




/* ===================== pic ====================== */
    .pic{
        width: 100% ;
        height: 1.55rem;
        a{
            display: block ;
            width: 100% ;
            height: 100% ;
        }
        a img{
            width: 100% ;
            height: 100% ;
        }
    }


/* ========== category_container =============== */
    .list{
        width: 100%;
        height: .88rem;
        padding:0 .1rem ;
        margin: .1rem 0 ;
        .category_container{
            padding: .13rem 0 ;
            height: 100% ;
            display: flex;
            justify-content: space-around;
            align-items: center ;
    
            .category_container a{
                display: flex;
                flex-direction: column;
                justify-content: center ;
            }
        }
        .category_container a img{
            width: .42rem;
            height: .42rem;
        }
        .category_container a p{
            font-size: .12rem ;
            color: #333;
            text-align: center ;
        }
    }



    /* ============= 热门演出 ======================= */
    .hot{
        width: 100% ;
        height: .38rem ;
        display: flex;
        align-items: center;
        padding: 0 .1rem;
    }

    .list_wrap{
        width: 100% ;
        padding: 0 .1rem;
         .list_wrap .show_item_clearfix{
            display: block ;
            width: 100% ;
            height: 1.4rem;
            background: skyblue ;
        }
    }
    .list_wrap .show_item_clearfix{
        display: flex ;
        width: 100% ;
        height: 1.4rem;
        padding: .07rem 0 ;
        border-bottom: .01rem solid #e6e6e6;
    }
    .show_item_clearfix .show_left{
        width: .89rem;
        height: 1.19rem;
        background:red ;
    }
    .show_item_clearfix .show_left img{
        width: 100% ;
        height: 100% ;
    }
    
    .show_item_clearfix .show_right{
        width: 2.42rem;
        height: 1.19rem;
        margin-left: .1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .show_right p{
        font-size: .11rem;
        color: #999;
        font-weight: bold;

    }
    .show_right .title{
        color: #333;
        font-size: .14rem;
        font-weight:normal;
    }

    .show_right .price{
        color: #ff7919;
    }

    .show_right .price span:first-of-type{
        font-size: .12rem;
    }

    .show_right .price span{
        font-size: .16rem;
    }

    .show_right .price span:last-of-type{
        font-size: .12rem;
    }

    
</style>