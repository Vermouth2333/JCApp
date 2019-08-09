export default{
    path:"/detailD/:id/:date",
    component:()=>import("views/detailD"),
    name:"detailD",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}