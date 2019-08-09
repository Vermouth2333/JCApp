export default{
    path:"/list/list_secondPage/details/:id",
    component:()=>import("views/list/list_secondPage/details"),
    name:"detail",
    meta: {
        flag: false,
        auth: false
    },
    props:true
}