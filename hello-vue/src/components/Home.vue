<template>
  <div class="Login">
    <p>{{this.$store.state.msg}}</p>
    <el-input v-model="from.username" placeholder="请输入用户名" style="width:400px;"></el-input>
    <br>
    <el-input v-model="from.password" placeholder="请输入密码" show-password style="width:400px"></el-input>
    <br>
    <el-button type="primary" icon="el-icon-edit" @click="handleClick()">登录</el-button>
  </div>
</template>

<script>

  import {CHANGEMSG} from '../store/mutationsType';

  export default {
    name: 'home',
    components: {},
    data() {
      return {
        from: {
          username: '',
          password: ''
        },
        list: []
      };
    },
    async created() {
      // this.$store.commit('changeMsg', 'hi');
      await this.$store.dispatch(CHANGEMSG, 'Welcome');
    },
    methods: {
      handleClick() {
        if (this.from.username === '' || this.from.password === '') {
          this.$message.warning('用户名或密码不能为空！');
        } else {
          this.$router.push({path: '/mySpace'});
        }
      }
    }
  };

</script>

<style scoped lang="less">
  .Login {
    text-align: center;
    margin-top: 15%;
  }
</style>
