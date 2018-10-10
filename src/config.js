import axios from 'axios'


// 项目所有请求接口做统一的拦截🙆‍♂️
// axios 拦截请求
axios.interceptors.request.use(function(config){
    console.log(config)
    return config
})

// axios 拦截响应
axios.interceptors.response.use(function(config) {
    console.log(config)
    return config
})