<template>
  <div class="breadcrumb">{{breadcrumb}}</div>
</template>

<script>
export default {
  computed: {
    breadcrumb() {
      let res = '';
      this.$route.matched.forEach( e => {
        res += e.meta + '->';
      })
      return res
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb {
    padding: 10px 0;
}
</style>