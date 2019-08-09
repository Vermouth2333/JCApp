export default{
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    meta: {
        title: "列表",
        flag: true,
        tabBar:true,
        auth:false,
    },
}