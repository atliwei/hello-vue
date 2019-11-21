<template>
  <div>
    <el-card class="box-card">
    <h2>1.v-text</h2>
    {{hello}}
    <br/>
    </el-card>

    <el-card class="box-card">
    <h2>2.v-model</h2>
    <input type="text" v-model="inputStr"><br/>
    <p>{{inputStr}}</p>
      <br/>
    </el-card>

    <el-card class="box-card">
    <h2>3.v-show/v-on/v-if/v-else</h2>
    <el-button @click = "ShowC">显示</el-button>
    <el-button @click = "HiddenC">隐藏</el-button>
    <p v-if="bol">hello v-if</p>
    <p v-else>hello v-else</p>
    <p v-show = "bol">hello v-show</p>
      <br>
    </el-card>

    <el-card class="box-card">
    <h2>4.v-html</h2>
    <p v-html="helloHTML"></p>
      <br/>
    </el-card>

    <el-card class="box-card">
    <h2>5.v-for/v-bind</h2>
    <ul>
      <li  v-for="(item,index) in list" :key="index">
        {{item.cate}}
        <ul>
          <li v-for="(item2,index) in item.list1" :key="index">
            {{item2.title}}
          </li>
        </ul>
      </li>
    </ul>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: 'instructions',
      data() {
        return {
          hello: '<p style="color:red;">hello v-text</p>',
          helloHTML: '<p style="color:red;">hello v-html</p>',
          inputStr: '',
          bol: true,
          list: [
            {
              'cate': '我是第一层1111',
              'list1': [
                {'title': '1111的第二层1111'},
                {'title': '1111的第二层2222'}
              ]
            },
            {
              'cate': '我是第一层2222',
              'list1': [
                {'title': '2222的第二层1111'},
                {'title': '2222的第二层2222'}
              ]
            }
          ]
        };
      },
      methods: {
          HiddenC() {
            this.bol = false;
          },
          ShowC() {
            this.bol = true;
          }
      }
    };
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    margin: 20px auto;
  }
</style>
