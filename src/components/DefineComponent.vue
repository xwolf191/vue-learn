<template lang="html">
  <div id="app">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <!--props方式-->
   <!-- <hb id="t1" title="测试1234"></hb>
    <hb id="t2" title="测试123444343"></hb>-->
  </div>

</template>

<script>
import Vue from 'Vue'

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

/* Vue.component('hb', {
  props: ['title', 'id'],
  template: '<span >{{ title }} - {{id}}</span>'
}) */

export default {
  name: 'comp'
}
</script>

<style scoped>

</style>
