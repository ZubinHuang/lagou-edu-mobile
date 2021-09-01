<template>
  <div class="course-video">
    <!-- 导航 -->
    <van-nav-bar
      title="视频"
      left-arrow
      left-text="返回"
      @click-left="$router.go(-1)"
    />
    <!-- 设置视频容器 -->
    <div id="video-container"></div>
  </div>
</template>

<script>
import { getVideoInfo } from "@/services/course";
export default {
  name: "CouresVideo",
  props: {
    lessonId: {
      type: [String, Number],
      required: true,
    },
    data() {
      return {
        //视频信息
        videoInfo: {},
      };
    },
  },
  created() {
    this.loadVideo();
  },
  methods: {
    async loadVideo() {
      const { data } = await getVideoInfo({
        lessonId: this.lessonId,
      });
      console.log("loadVideo", data);
      //   初始化播放器
      const player = new window.Aliplayer(
        {
          // 视频容器 ID
          id: "video-container",
          // 视频 ID
          vid: data.content.fileId,
          // 播放凭证
          playauth: data.content.playAuth,
          qualitySort: "asc",
          format: "mp4",
          mediaType: "video",
          width: "100%",
          height: "100%",
          autoplay: true,
          isLive: false,
          rePlay: false,
          playsinline: true,
          preload: true,
          controlBarVisibility: "hover",
          useH5Prism: true,
        },
        function (player) {
          console.log("The player is created");
        }
      );
      console.log(player)
    },
    
  },
};
</script>

<style lang="scss" scoped>
.course-video {
  width: 100%;
  height: 210px;
}
</style>