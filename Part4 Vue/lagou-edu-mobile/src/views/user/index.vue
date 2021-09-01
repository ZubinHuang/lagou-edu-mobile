<template>
  <div class="user">
    <!-- 顶部功能 -->
    <van-cell-group>
      <!-- 用户信息区域 -->
      <van-cell class="user-info" :border="false">
        <!-- 用户头像    -->
        <van-image
          width="50"
          height="50"
          round
          :src="
            userInfo.portrait ||
            'https://s0.lgstatic.com/common/image/pc/default_boy_headpic1.png'
          "
        ></van-image>
        <!-- 用户信息内容区域 -->
        <div class="user-info-content">
          <h3 v-text="userInfo.userName"></h3>
          <!-- 或者插值表达式 -->
          <!-- <h3>{{userInfo.userName}}</h3> -->
          <span>
            <van-icon name="edit" />
            编辑个人资料
          </span>
        </div>
      </van-cell>
      <!-- 账户信息 -->
      <van-cell class="account-info">
        <van-grid :border="false">
          <van-grid-item>
            <span class="grid-item-value">14.05</span>
            <span>学习时长</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">200</span>
            <span>钱包勾豆</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">1</span>
            <span>优惠券</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">213</span>
            <span>学分</span>
          </van-grid-item>
        </van-grid>
      </van-cell>
      <van-cell
        icon="user-o"
        title="分销中心"
        is-link
        value="收益200元"
      ></van-cell>
      <van-cell icon="setting-o" title="个性化设置" is-link></van-cell>
      <van-cell icon="down" title="我的下载" is-link></van-cell>
      <van-cell icon="question-o" title="帮助与反馈" is-link></van-cell>
      <van-cell
        icon="info-o"
        title="关于拉勾教育"
        is-link
        value="v2.0.0"
      ></van-cell>
    </van-cell-group>
    <!-- 底部功能 -->
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import request from "@/utils/request";
import LayoutFooter from "@/components/LayoutFooter";
import { getInfo } from "@/services/user";
export default {
  name: "User",
  components: {
    LayoutFooter,
  },
  data() {
    return {
      // 存储⽤户信息
      userInfo: {},
    };
  },
  created() {
    this.loadUserInfo();
  },
  methods: {
    async loadUserInfo() {
      // 请求⽤户信息，并存储到 data 中
      const { data } = await getInfo();
      console.log(data);
      this.userInfo = data.content;
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  background-color: white;
  height: 100vh;
  .van-cell-group {
    background-color: #eef0f4;
    padding: 0 10px;
    height: 100%;
  }
  .user-info {
    background: #eef0f4;
  }
  .account-info {
    background: white;
    border-radius: 10px;
  }
}
//账户信息
.user-info {
  padding: 30px 20px 10px;
  // background-color: #E9532C;
  .van-cell__value--alone {
    display: flex;
  }
  .user-info-content {
    padding-left: 15px;
    h3 {
      margin: 5px;
      font-size: 18px;
    }
  }
}
//账户信息
.account-info {
  // background-color: #E9532C;
  margin-top: -1px;
  margin-bottom: 10px;
  .van-cell__value {
    border-radius: 10px;
  }
  .grid-item-value {
    font-size: 22px;
    font-weight: 700;
  }
}
</style>