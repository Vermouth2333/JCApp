import http from "utils/http.js"
//首页图片数据
export const home_now_api =()=>http("get","/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.3&referer=2")
//首页热门演出
export const home_hot_play_api =()=>http("get","/home/index/getHotsRecommendList?city_id=0&version=6.0.3&referer=2")
//首页巡回演出
export const home_return_play_api =()=>http("get","/home/index/getTourRecommendList?city_id=0&version=6.0.3&referer=2")
//首页 演唱会 音乐剧 舞台剧 儿童剧 音乐会 展览休闲
export const home_six_play_api =()=>http("get","/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2")
//为您推荐
export const for_you_play_api =()=>http("get","/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.3&referer=2")
//vip
export const for_vip_api =()=>http("get","/vip/index/getVipHomeSchedular?version=6.0.3&referer=2")
//热门场馆
export const hot_venue_api =()=>http("get","/home/index/getHotTheatre?version=6.0.3&referer=2")

//热门城市
export const hot_city_api =()=>http("get","/city/city/getHotCityList?version=6.0.3&referer=2")
//城市列表
export const all_city_api =()=>http("get","/city/city/getSortedCityList?version=6.0.3&referer=2")
