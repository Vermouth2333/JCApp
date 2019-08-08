export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
    meta:{
        tabBar:true,
        auth:false,
    },
}