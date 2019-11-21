<template>
    <div>
      <el-input @keydown.enter.native="addTodo" v-model="todo"></el-input>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="正在进行" name="1">
          <div v-for="(item, index) in reverseList" :key="index">
            <el-checkbox v-model="item.done" v-if="!item.done">{{item.todo}}</el-checkbox>
          </div>
        </el-collapse-item>
        <el-collapse-item title="已完成" name="2">
          <div v-for="(item, index) in reverseList" :key="index">
            <el-checkbox v-model="item.done" v-if="item.done">{{item.todo}}</el-checkbox>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'Action',
      props: {
          list: Array,
      },
      data() {
          return {
            todo: '',
            activeNames: [
              '1',
              '2',
            ],
            checked: true,
          };
      },
      computed: {
        reverseList() {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.list.reverse();
        }
      },
      methods: {
        addTodo() {
          this.$store.dispatch('addTodo', {
            todo: this.todo,
            done: false,
          });
          this.todo = '';
        },

        changeFinish(item) {
          item.done = !item.done;
        },
      }
    };
</script>

<style scoped>

</style>
