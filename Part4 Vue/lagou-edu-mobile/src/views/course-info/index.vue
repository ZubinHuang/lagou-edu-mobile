<template>
  <div class="course-info">
    <van-cell-group>
      <!-- 课程图片 -->
      <van-cell class="course-img">
        <img :src="course.courseListImg" alt="" />
      </van-cell>
      <!-- 课程描述 -->
      <van-cell class="course-description">
        <!-- 课程名称 -->
        <h2 v-text="course.courseName"></h2>
        <!-- 课程概述 -->
        <p v-text="course.previewFirstField"></p>
        <!-- 课程销售信息 -->
        <div class="course-sale-info">
          <p class="course-price">
            <span class="discounts">￥{{ course.discounts }}</span>
            <s>￥{{ course.price }}</s>
          </p>
          <span class="tag">￥{{ course.sales }}人已购</span>
          <span class="tag">每周三、五更新</span>
        </div>
      </van-cell>
      <!-- 课程选项卡 -->
      <van-cell class="course-detail">
        <van-tabs v-model="active" scrollspy sticky>
          <van-tab title="详情">
            <!-- 详情在后台是通过富⽂本编辑器设置的，内容为 HTML ⽂本 -->
            <div v-html="course.courseDescription"></div>
          </van-tab>
          <van-tab title="内容">
            <course-section
              v-for="item in sections"
              :key="item.id"
              :section-data="item"
            ></course-section>
          </van-tab>
        </van-tabs>
      </van-cell>
    </van-cell-group>
    <!-- 底部支付功能 -->
    <van-tabbar v-if="!course.isBuy">
      <div class="price">
        <span v-text="course.discountsTag"></span>
        <span class="discounts">￥{{ course.discounts }}</span>
        <span>￥{{ course.price }}</span>
      </div>
      <van-button @click="handlePay" type="primary">⽴即购买</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import { getCourseById, getSectionAndLesson } from "@/services/course";
import CourseSection from "./components/CourseSection";
export default {
  name: "CourseInfo",
  components: {
    CourseSection,
  },
  props: {
    courseId: {
      type: [String, Number],
      require: true,
    },
  },
  data() {
    return {
      //课程信息
      course: {},
      //课程章节信息
      sections: {},
      // 样式动态绑定立即购买是否显示，距离底部白色距离
      styleOptions: {},
    };
  },
  created() {
    this.loadCourseDetail();
    this.loadSectionAndLesson();
  },
  methods: {
    async loadCourseDetail() {
      const { data } = await getCourseById({
        courseId: this.courseId,
      });
      this.course = data.content;
      //是否购买了课程，显示底部的立即购买tabbar
      if (data.content.isBuy) {
        this.styleOptions.bottom = 0;
      }
    },
    async loadSectionAndLesson() {
      const { data } = await getSectionAndLesson({
        courseId: this.courseId,
      });
      console.log("loadSectionAndLesson", data);
      this.sections = data.content.courseSectionList;
    },
    // 支付设置
    handlePay() {
      /*跳转页面并传递参数的方法*/
      //检验是否需要登录后才支付 .检测⽤户是否登录，登录时跳转⽀付，未登录则跳转登录⻚并记录当前⻚信息
      if (this.$store.state.user) {
        /*跳转方法1:Params*/
        this.$router.push({
          name: "pay",
          /*
// 命名的路由   params相当与发送了一次post请求，请求参数则不会显示，并且刷新页面之后参数会消*/
          params: {
            courseId: this.courseId,
          },
        });
      } else {
        /*跳转方法2:Query*/
        this.$router.push({
          name: "login",
          /*query相当与发送了一次get请求，请求参数会显示在浏览器地址栏中
           */
          query: {
            //$route是当前router跳转对象。里面可以获取name、path、query、params等相关信息。
            redirect: this.$route.fullPath,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 课程图片区域
.van-cell {
  padding: 0;
}
.course-img {
  height: 280px;
}
// 课程描述区域
.course-description {
  padding: 10px 20px;
  height: 150px;
  .course-sale-info {
    display: flex;
    .course-price {
      flex: 1;
      margin: 0;
    }
    .tag {
      background-color: #f8f9fa;
      font-size: 12px;
      font-weight: 700;
      color: #666;
      margin-left: 10px;
      padding: 7px;
      line-height: 15px;
      border-radius: 3px;
    }
  }
}
.discounts {
  color: #ff7452;
  font-size: 24px !important;
  font-weight: 700;
}
// 添加底部导航后设置
.van-cell-group {
  position: fixed;
  // 预留底部⽀付区域⾼度
  width: 100%;
  top: 0;
  bottom: 50px;
  overflow-y: auto;
}
// 调整内部⽂字位置
.van-tabbar {
  line-height: 50px;
  // 设置 padding 后元素超出窗⼝
  padding: 0 20px;
  // 设置 box-sizing
  box-sizing: border-box;
  display: flex;
  // 内部元素左右显示
  justify-content: space-between;
  // 内容居中
  align-items: center;
}
.price span {
  font-size: 14px;
}
// 按钮尺⼨调整
.van-button {
  width: 50%;
  height: 80%;
}
</style>