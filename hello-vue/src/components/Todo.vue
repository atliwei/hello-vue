<template>
  <div>
    <!--<span v-if="item.done">{{item.todo}}</span>-->
    <!--<del v-else class="no-finish">{{item.todo}}</del>-->
    <el-input @keydown.enter.native="addTodo" v-model="todo"></el-input>
    <div v-for="(item,index) in list" :key="index" @click=changeFinish(item)>
      <el-checkbox >{{item.todo}}</el-checkbox>
    </div>
  </div>
</template>

<script>

  import {ADDTODO2, CHECKTODOLIST2} from '../store/mutationsType';

  export default {
    name: 'Todo',
    data() {
      return {
        list: [],
        url: 'https://api.myjson.com/bins/6jh3y',
        todo: '',
      };
    },
    async created() {
      await this.$store.dispatch(CHECKTODOLIST2, {
        url: this.url,
      });
      this.list = this.$store.state.list2;
    },
    methods: {
      // async init() {
      //   const {data} = await this.$http.get('https://api.myjson.com/bins/104z22');
      //   console.log(data);
      //   this.list = data.data;
      // },
      changeFinish(item) {
        item.done = !item.done;
      },
      addTodo() {
        this.$store.dispatch(ADDTODO2, {
          todo: this.todo,
          done: false,
        });
        this.todo = '';
      }
    }
  };
</script>

<style scoped lang="less">
  .noFinish {
    color: aquamarine;
  }
</style>
