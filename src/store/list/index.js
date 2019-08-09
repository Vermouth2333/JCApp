import {list_api} from "api/list"
const state={
    listArr:[],
    // showArr:[]
}
const actions={
    async handlerGetListAction({commit}){
        let data = await list_api();
        commit("handlerGetListMutation",data.data.theatre_list);
    },
}



const mutations={
    handlerGetListMutation(state,params){
        for(var i = 0 ; i < params.length ; i++){
            if(state.listArr.length > params.length - 1) return
            state.listArr.push(params[i]);
            
        }
        console.log(state.listArr)
    },
}

export default{
    state,
    actions,
    mutations,
    namespaced: true
}