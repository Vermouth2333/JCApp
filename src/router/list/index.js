
export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
    meta: {
        title: "列表",
        flag: true,
        tabBar:true,
        auth:false,
    },
}