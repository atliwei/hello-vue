<template>
  <div class="mySpace">

    <el-tabs style="margin-left: 30%; margin-right: 25% " type="card">
      <el-tab-pane label="指令" name="first"><Instructions></Instructions></el-tab-pane>
      <el-tab-pane label="TodoList" name="third"><Todo></Todo></el-tab-pane>
      <el-tab-pane label="自由发挥" name="fourth"><Action :list="this.list"></Action></el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
  import Todo from '@/components/Todo.vue';
  import Instructions from '@/components/Instructions.vue';
  import Action from '@/components/Action.vue';

    export default {
        name: 'MySpace',
      components: {
          Todo,
          Instructions,
          Action
      },
      data() {
          return {
            list: [],
            url: 'https://api.myjson.com/bins/150h1a',
          };
      },
      async created() {
        await this.$store.dispatch('CHECKTODOLIST', {
          url: this.url
        });
        this.list = this.$store.state.list;
      },
      methods: {
    },
    };
</script>

<style scoped>

</style>
