export default{
    path:"/order",
    component:()=>import("views/order"),
    name:"order",
    meta:{
        tabBar:true,
        auth:false
    },
}