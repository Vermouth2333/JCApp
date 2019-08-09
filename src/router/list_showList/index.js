export default{
    path:"/list/list_secondPage/showList/:id/:pic",
    component:()=>import("views/list/list_secondPage/showList"),
    name:"showList",
    meta: {
        flag: false,
        auth: false
    },
    props:true
}