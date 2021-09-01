<template>
  <div class="course-section">
    <h2 class="section" v-text="sectionData.sectionName"></h2>
    <!-- 课时列表 -->
    <p
      class="lesson"
      v-for="item in sectionData.courseLessons"
      :key="item.id"
      @click="handleClick(item)"
    >
      <span>{{ item.theme }}</span>
      <van-icon v-if="item.canPlay" name="play-circle" size="20" />
      <van-icon v-else name="lock" size="20" />
    </p>
  </div>
</template>

<script>
export default {
  name: "CourseSection",
  props: {
    sectionData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick(lessonInfo) {
      if (lessonInfo.canPlay) {
        // 命名的路由  params相当与发送了一次post请求，请求参数则不会显示，并且刷新页面之后参数会消
        this.$router.push({
          name: "lesson-video",
          params: {
            lessonId: lessonInfo.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.course-section {
  padding: 0 20px;
  .lesson {
    display: flex;
    line-height: 20px;
    justify-content: space-between;
  }
}
</style>