<template>
  <div class="course-content-list">
    <!-- 下拉刷新组件 -->
    <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item.id"
          @click="
            $router.push({
              name: 'course-info',
              params: {
                courseId: item.id,
              },
            })
          "
        >
          <!-- 课程左侧图片 -->
          <div>
            <!-- 所有课程与已购课程的图⽚数据属性名不同，检测后使⽤ -->
            <img :src="item.courseImgUrl || item.image" alt="" />
          </div>
          <!-- 课程右侧信息 -->
          <div class="coures-info">
            <!-- 名称检测 -->
            <h3 v-text="item.courseName || item.name"></h3>
            <!-- 简介里面可能包含长的富文本标签，所以用html -->
            <p class="course-preview" v-html="item.previewFirstField"></p>
            <!-- 如果为已购课程，⽆需显示价格区域 -->
            <p class="price-container" v-if="item.price">
              <span class="course-discounts">￥{{ item.discounts }}</span>
              <!-- 删除线标签<s></s> -->
              <s class="course-price">￥{{ item.price }}</s>
            </p>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { PullRefresh, List, Cell, Toast } from "vant";
export default {
  name: "CourseContentList",
  componentes: {
    VanList: List,
    VanCell: Cell,
    VanPullRefresh: PullRefresh,
  },
  props: {
    // ⽤于请求数据的函数
    fetchData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      //用于存储数据
      list: [],
      //是否处于加载中
      loading: false,
      //是否加载完毕
      finished: false,
      //数据下拉的页数
      currentPage: 1,
      //下拉刷新状态,true为刷新
      isRefreshing: false,
    };
  },
  created(){
    this.onLoad();
  },
  methods: {
    /*下拉刷新*/
    async onRefresh() {
      //刷新重新请求
      // 还原数据⻚数为 1
      this.currentPage = 1;
      const { data } = await this.fetchData({
        currentPage: this.currentPage,
        // 每次请求10页
        pageSize: 10,
        //代表请求的是上架的课程
        status: 1,
      });
      // 如果存在数据，清空并课程数据，否则结束
      if (data.data && data.data.records && data.data.records.length !== 0) {
        this.list = data.data.records;
      }
      //   请求学习已购的课程，接口的数据和获取所有课程接口不一样
      else if (data.content && data.content.length !== 0) {
        this.list = data.content;
      } else {
        this.finished = true;
      }
      // 提示,这是全局引用this.$.toast，如果按需引入可以用Toast(),还需引入import
      Toast.success("刷新成功");
      // 关闭下拉提示框
      this.isRefreshing = false;
    },
    async onLoad() {
      console.log("发送数据请求");
      const { data } = await this.fetchData({
        currentPage: this.currentPage,
        // 每次请求10页
        pageSize: 10,
        //代表请求的是上架的课程
        status: 1,
      });
      // 检测，如果没有数据了，结束，如果有，保存
      if (data.data && data.data.records && data.data.records.length !== 0) {
        this.list.push(...data.data.records);
      }
      //请求学习已购的课程，接口的数据和获取所有课程接口不一样
      else if (data.content && data.content.length !== 0) {
        this.list.push(...data.content);
      } else {
        this.finished = true;
      }
      //下一次请求下一页
      this.currentPage++;
      //加载状态结束
      this.loading = false;
      //数据全部加载完成全部加载完成，置为false

      // 数据全部加载完成
      if (this.list.length < 10) {
        this.finished = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
//列表组建的固定滚动设置
.course-content-list {
      box-sizing: border-box;
    background: #EEF0F4;
    /* width: 100%; */
    padding: 0 10px;
  position: fixed;
  // 只设置纵向滚动
  overflow-y: auto;
  // 顶部轮播图的高度
  /*子组件不应该写死距离顶部的高度，
        为了后续子组件复用到其他父组件中，
        在父组件中添加给子组件样式*/
  top: 0;
  // 底部tab的高度
  bottom: 0;
  // left和righ让盒子贴边
  left: 0;
  right: 0;
}

//课程列表的样式
.van-cell__value {
  display: flex;
  height: 100px;
  padding: 10px 0;
}
.van-cell__value img {
  width: 75px;
  height: 100%;
  border-radius: 5px;
}
.coures-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
.coures-info .course-preview {
  flex: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  word-break: break-all;
  // white-space: nowrap;
}
.coures-info .course-discounts {
  color: red;
  margin-right: 10px;
}
.coures-info h3 {
  flex: 1;
}
.coures-info .price-container {
  flex: 1;
}
.van-pull-refresh {
    border-radius: 10px;
  }
.van-list .van-cell::after {
  border-bottom: none;
}
p,
h3 {
  margin: 0;
}
</style>