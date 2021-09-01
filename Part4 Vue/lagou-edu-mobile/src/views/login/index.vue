<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.phone"
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请填写手机号' },
          { validator: phoneCheck, message: '格式有误，请重新输入' },
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^[a-zA-Z0-9]{6,12}$/,
            message: '密码为6~12位，请重新输入',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" :loading="isLoading"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import {login} from '@/services/user'
export default {
  name: "Login",
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
      //登录加载中的状态
      isLoading:false
    };
  },
  methods: {
    async onSubmit() {
      console.log("Submit!");
      this.isLoading = true;
      const { data } = await login( this.form);     
      console.log("data", data);
      if(data.state ===1){
          this.$toast.success('登录成功')
          // 将数据保存到本地存储中
          this.$store.commit('setUser', data.content)
          this.$router.push(this.$route.query.redirect || '/')
      }else{
        this.$toast.fail('登录失败')
      }
      // 加载完成,加载状态取消
      this.isLoading = false;
    },
    phoneCheck(val) {
      return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(val);
    },

    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>