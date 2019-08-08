import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import list from "./list"
import order from "./order"
import mine from "./mine"
import cityList from "./cityList"
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
        order,
        mine,
        cityList
    ]
})