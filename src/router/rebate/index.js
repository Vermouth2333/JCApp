export default{
    path:"/rebate",
    component:()=>import("views/rebate"),
    name:"rebate",
    redirect:"/rebate/all",
    meta:{
        tabBar:false,
        auth:false
    },
    children:[
        {
            path:"all",
            component:()=>import("components/all"),
            name:"all",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"concert",
            component:()=>import("components/concert"),
            name:"concert",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"musical",
            component:()=>import("components/musical"),
            name:"musical",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"play",
            component:()=>import("components/play"),
            name:"play",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"child",
            component:()=>import("components/child"),
            name:"child",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"theater",
            component:()=>import("components/theater"),
            name:"theater",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"opera",
            component:()=>import("components/opera"),
            name:"opera",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"show",
            component:()=>import("components/show"),
            name:"show",
            meta:{
                tabBar:false,
                auth:false
            },
        },
        {
            path:"dance",
            component:()=>import("components/dance"),
            name:"dance",
            meta:{
                tabBar:false,
                auth:false
            },
        }
    ]
}