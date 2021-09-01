<template>
  <div class="course-content">
    <div class="banner-bg"></div>
    <!-- 顶部轮播设置 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in activeAdList" :key="item.id">
          <img :src="item.img" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 底部课程列表 -->
    <course-content-list :fetchData="fetchData"></course-content-list>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import CourseContentList from "@/components/CourseContentList.vue";
import { getAllAds, getQueryCourses } from "@/services/course";
export default {
  name: "CourseContent",
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    CourseContentList,
  },

  data() {
    return {
      //轮播图列表
      adList: [],
    };
  },
  created() {
    this.loadAds();
  },
  //由于广告图片获取的是所有图片，并不是请求到的都上架，需要把请求到的数据,
  //筛选处理，这时候适合用computed里利用缓存
  methods: {
    fetchData(options) {
      return getQueryCourses(options);
    },
    async loadAds() {
      //此处的'999'代表了首页顶部轮播图的广告位
      const { data } = await getAllAds({
        spaceKeys: "999",
      });
      //   console.log("data", data);
      // 保存⼴告信息
      this.adList = data.content[0].adDTOList;
      // this.$set(this.adList,data.content[0].adDTOList)
    },
  },
  computed: {
    activeAdList() {
      //    console.log("先执行", this.adList)
      return this.adList.filter((item) => {
        return item.status == 1 && item.img != "";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.course-content {
  position: relative;
  width: 100%;
  height: 187px;
  overflow: hidden;
  background: #eef0f4;

  .banner-bg {
    /* 子级设置absolute不会撑开父级 */
    position: absolute;
    /* 从左往右多了父级的50% ,左边往左拽25%*/
    left: -25%;
    width: 150%;
    height: 145px;
    background-color: #ec7e61;
    /* 左右下角出现圆弧 */
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background-image: linear-gradient(180deg, #ec7e61, #e9532c 50%);
  }
}
.banner {
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 167px;
}
.my-swipe {
  height: auto;
}
// 图片居中
.my-swipe .van-swipe-item {
  display: flex;
  justify-content: center;
}

.my-swipe img {
  display: block;
  width: 350px;
  height: 130px;
  border-radius: 10px;
}
.course-content-list {
  top: 216px;
  // 底部tab的高度
  bottom: 50px;
}
</style>