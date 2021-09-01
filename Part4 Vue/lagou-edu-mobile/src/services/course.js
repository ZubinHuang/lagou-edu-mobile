import request from "@/utils/request";

// 获取⼴告位及其对应⼴告
export const getAllAds = params => {
    return request({
        method: 'GET',
        url: '/front/ad/getAllAds', 
        params
    })
}
//分页查询课程内容
export const  getQueryCourses = data => {
    return request({
        method: 'POST',
        url: '/boss/course/getQueryCourses', 
        data
    })
}
//获取已购课程
/*没有入参就写如下的箭头函数形式，有的话，写上面"分页查询课程内容"形式*/
export const  getPurchaseCourse = () => {
    return request({
        method: 'GET',
        url: '/front/course/getPurchaseCourse',         
    })
}
//获取课程详情
export const  getCourseById = params => {
    return request({
        method: 'GET',
        url: '/front/course/getCourseById',   
        params
    })
}
//获取课程章节与课时
export const  getSectionAndLesson = params => {
    return request({
        method: 'GET',
        url: '/front/course/session/getSectionAndLesson',   
        params
    })
}
//根据fileId获取阿⾥云对应的视频播放信息
export const  getVideoInfo = params => {
    return request({
        method: 'GET',
        url: '/front/course/media/videoPlayInfo',   
        params
    })
}