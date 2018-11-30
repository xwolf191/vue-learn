<template lang="html">
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h2>{{ say }}</h2>
    <h1>个人简介</h1>
    <h2>name: {{ user.name }}</h2>
    <h2>age: {{ user.age }}</h2>
    <h2>school: {{ user.school }}</h2>
    <!--过滤器，格式转换,注意filters的层级结构-->
    <h2>当前时间：{{now | formatDate}}</h2>
  </div>
</template>

<script>
/* 一个页面指定导入一个默认module */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Vue.js',
      say: 'Vue 学习',
      user: {
        'name': '老王',
        'age': 49,
        'school': 'Tsinghua University'
      },
      now: new Date()
    }
  },
  filters: {
    formatDate: function (date) {
      var year = date.getFullYear()
      var month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
