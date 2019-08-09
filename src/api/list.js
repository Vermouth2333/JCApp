
import http from "utils/http.js"
export const list_api = () => http("get","/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2")

export const detail_api = (id) => http("get","/Schedule/Schedule/getScheduleInfo?schedular_id="+id+"&version=6.0.3&referer=2")

export const theatre_api = (id) => http("get","/theatre/index?tid="+id)

export const showList_api = (id) => http("get","/Theatre/showListData?tid="+id+"&category=0&page=1")


//  https://m.juooo.com/theatre/showList?tid=2
//  https://m.juooo.com/Theatre/showListData?tid=5&category=0&page=1









//https://m.juooo.com/theatre/index?tid=2


// getScheduleInfo?schedular_id=97638&version=6.0.3&referer=2
// export const detail_api = (ditailId) => http("get","/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2",{ditailId:ditailId})


///Schedule/Schedule/getScheduleInfo?schedular_id=100545&version=6.0.3&referer=2