export default{
    path:"/list/list_secondPage/theatre/:id/:name/:show_list",
    component:()=>import("views/list/list_secondPage/theatre"),
    name:"theatre",
    meta: {
        // flag: false,
        // auth:false
    },
    props:true
}