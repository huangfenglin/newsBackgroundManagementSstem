<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>

     <el-form-item label="栏目">
      <el-checkbox-group v-model="form.categories">
        <el-checkbox
          v-for="(item, index) in categoryList"
          :key="index"
          :label="item.id">
        {{item.name}}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="类型">
      <el-radio v-model="form.type" label="1">文章</el-radio>
      <el-radio v-model="form.type" label="2">视频</el-radio>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        categories: [],
        type: 1
      },
      // 所有的分类选项
      categoryList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.categoryList = data;
    });
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>