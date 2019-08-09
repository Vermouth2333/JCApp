import http from "utils/http.js"

//专享折扣---全部
export const all_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.3&referer=2")
export const all_api2=()=>http("get","/vip/index/getDiscountList?page=2&city_id=0&cate_id=0&discount_id=0&version=6.0.3&referer=2") 
export const all_api3=()=>http("get","/vip/index/getDiscountList?page=5&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2") 
//专享折扣---演唱会
export const concert_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=35&discount_id=0&version=6.0.3&referer=2")
//专享折扣---音乐会
export const musical_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2")
///vip/index/getDiscountList?page=2&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2
///vip/index/getDiscountList?page=3&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2
///vip/index/getDiscountList?page=4&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2
// /vip/index/getDiscountList?page=5&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2
//专享折扣---话剧歌剧
export const paly_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=37&discount_id=0&version=6.0.3&referer=2")
//专享折扣---儿童亲子
export const child_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=38&discount_id=0&version=6.0.3&referer=2")
//专享折扣---音乐剧
export const theater_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=79&discount_id=0&version=6.0.3&referer=2")
//专享折扣---戏曲综艺
export const opera_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=91&discount_id=0&version=6.0.3&referer=2")
//专享折扣---展览
export const show_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=99&discount_id=0&version=6.0.3&referer=2")
//专享折扣---舞蹈芭蕾
export const dance_api=()=>http("get","/vip/index/getDiscountList?page=1&city_id=0&cate_id=86&discount_id=0&version=6.0.3&referer=2")

//城市列表
export const city_api=()=>http("get","/city/city/getHotCityList?version=6.0.3&referer=2")

//详情
export const detailD_api=(id)=>http("get","/Schedule/Schedule/getScheduleInfo?schedular_id="+id+"&version=6.0.3&referer=2")



