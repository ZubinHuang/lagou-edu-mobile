<template>
  <div class="course-header">
    <h1 class="title">拉勾教育</h1>
    <div class="buble">
      <van-icon size="20" color="#fff" name="bulb-o" />
    </div>
    <!-- <van-image :src="require('@/assets/logo.png')"></van-image> -->
  </div>
</template>

<script>
export default {
  name: "CourseHeader",
};
</script>

<style lang="scss" scoped>
.course-header {
  height: 50px;
  display: float;
  background-color: #ec7e61;
  .title {
    float: left;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
    margin: 12px 15px;
    line-height: 20px;
    text-align: center;
  }
  .buble {
    position: relative;
    float: right;
    width: 25px;
    height: 25px;
   margin: 12px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    .van-icon-bulb-o {
      position: absolute;
      left: 2px;
      right: 0;
      top: 2px;
      bottom: 0;
    }
  }
}
.van-image {
  width: 180px;
  //图片往左移动
  margin-left: -20px;
}
</style>