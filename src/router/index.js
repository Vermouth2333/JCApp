import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"

import list from "./list"
import theatre from "./list_theatre"
import detail from "./list_details"
import showList from "./list_showList"
import order from "./order"
import mine from "./mine"
Vue.use(VueRouter)

export default new VueRouter({
    // 设置重定项
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,

        list,
        theatre,
        detail,
        showList,


        order,
        mine
    ]
})