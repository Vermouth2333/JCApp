
export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
    meta: {
        title: "列表",
        flag: true
    },
    // children: [
    //     {
    //         path: "list/list_secondPage/theatre",
    //         name:"theatre",
    //         // component:Theatre,
    //         component:()=>import("views/list/list_secondPage/theatre"),
            // meta: {
            //     flag: false
            // }
    //     },
    //     {
    //         path: "list_secondPage/details",
    //         name:"details",
    //         // component:Details,
    //         component:()=>import("views/list/list_secondPage/details"),

    //         meta: {
    //             flag: false
    //         }
    //     }
    // ]
}