<template>
    <!-- 根路由出口 -->
    <router-view/>  
    <!-- <div>
      <vant-button>按钮</vant-button>
      <div class="box">示例元素</div>
    </div> -->
</template>
<script>
import request from '@/utils/request'
request({
  method:'GET',
  url:'/front/ad/getAdList',
})
export default {
  
}
</script>

<style lang="scss">
  .box {
    width: 100px;
    height: 100px;
  }
</style>
