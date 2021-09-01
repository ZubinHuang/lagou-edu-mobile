<template>
  <div class="learn">
    <!-- 顶部功能 -->
    <van-nav-bar
      title="已购课程"    
    />
    <!-- 课程列表 -->
    <course-content-list :fetchData="fetchData"></course-content-list>
    <!-- 底部导航 -->
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from "@/components/LayoutFooter";
import CourseContentList from '@/components/CourseContentList.vue'
import {getPurchaseCourse} from "@/services/course"
export default {
  name: "Learn",
  components: {
    LayoutFooter,
    CourseContentList
  },
  created(){
      this.loadCourse()
  },
  methods:{
    fetchData(){
           return getPurchaseCourse()
            console.log("loadCourse",data);
     }
  }
};
</script>

<style lang="scss" scoped>
.course-content-list {
 padding-top: 8px;
        top: 46px;
        // 底部tab的高度
        bottom: 50px;
}
</style>