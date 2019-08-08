import { hot_city_api , all_city_api } from "api/home.js"
const state = {
    hotCity:JSON.parse(sessionStorage.getItem("hotCity")) || [],
    AllCity:JSON.parse(sessionStorage.getItem("AllCity")) || [],
}
const mutations = {
    //热门城市
    handlerGetHostCityMutation(state,params){
        state.hotCity=params;
        sessionStorage.setItem("hotCity",JSON.stringify(params))
    },
    //全部城市
    handlerGetAllCityMutation(state,params){
        state.AllCity=params;
        sessionStorage.setItem("AllCity",JSON.stringify(params))
    }
}
const actions = {
  async  handlerGetCityAction({commit}){
        let hotCityList1 = await hot_city_api();
        let hotCityList = hotCityList1.data.hot_city_List;
        commit("handlerGetHostCityMutation",hotCityList);

        let allCityApi1 = await all_city_api();
        let allCityApi = allCityApi1.data;
        commit("handlerGetAllCityMutation",allCityApi);

    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}