const path=require("path")
module.exports={
    devServer:{
        //https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.3&referer=2
        //https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.3&referer=2
        //https://api.juooo.com/home/index/getTourRecommendList?city_id=0&version=6.0.3&referer=2
        //https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2
        //https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.3&referer=2
        //https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.3&referer=2
        //https://api.juooo.com/home/index/getHotTheatre?version=6.0.3&referer=2

        //城市
        //https://api.juooo.com/city/city/getHotCityList?version=6.0.3&referer=2
        //https://api.juooo.com/city/city/getSortedCityList?version=6.0.3&referer=2

        //https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=100545&version=6.0.3&referer=2
        //https://m.juooo.com/theatre/index?tid=2
        //https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.1&referer=2
        //https://m.juooo.com/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2
        proxy:{
            "/home":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/RestTheatre":{
                target:"https://m.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/theatre":{
                target:"https://m.juooo.com",
                changeOrigin:true,
                secure: false 
            },
            "/Theatre":{
                target:"https://m.juooo.com",
                changeOrigin:true,
                secure: false 
            },
            "/Schedule":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false 
            },
            "/vip":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/city":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/Schedule":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            }

        }
    },
 
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "lib":path.join(__dirname,"./src/lib"),
            }
        }
    }
}
