<template>
  <div id="ap">
 <form>
   <table>
     <tr>
       <td><p>用户名</p></td>
       <td> <input v-model="message" maxlength="10" /> <label>{{message}}</label></td>
     </tr>

     <tr>
     <td>
       <p>密码</p>
     </td>
     <td>
       <input type="password"  maxlength="30" />
     </td>
     </tr>

     <tr>
     <td>
       <p>性别</p>
     </td>
     <td>
       <input id="sex_man" name="sex" type="radio"  value="0"  v-model="sex" /> <label for="sex_man">男</label>
       <input id="sex_woman" name="sex" type="radio"  value="1"  v-model="sex" /> <label for="sex_woman">女</label>
     </td>
     </tr>

     <tr>
       <td>
         <p>喜爱的搜索引擎：</p>
       </td>
       <td>
         <input type="checkbox" id="love_Google" value="0" >
         <label for="love_Google">谷歌</label>
         <input type="checkbox" id="love_Baidu" value="1">
         <label for="love_Baidu">百度</label>
         <input type="checkbox" id="love_taobao" value="2">
         <label for="love_taobao">淘宝</label>
       </td>
     </tr>

     <tr>
       <td>
         <p>喜欢的美女：</p>
       </td>
       <td>
        <select  id="girl" v-model="selected" >
          <option v-for="gr in girls" v-bind:value="gr.id">{{gr.title}}</option>
        </select>
         {{selected}}
       </td>
     </tr>

     <tr>
       <td>
         <p>头像：</p>
       </td>
       <td>
        <input type="file"  @change="getFile($event)" /> <button @click="upload">上传</button>
       </td>
     </tr>

   </table>
 </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: '',
      sex: 1,
      selected: '2',
      girls: [
        {
          'id': 1,
          'title': '小清新',
          'value': 1
        },
        {
          'id': 2,
          'title': '怨妇',
          'value': 2
        },
        {
          'id': 3,
          'title': '泼妇',
          'value': 3
        }
      ],
      selectVal: function (data) {
        console.info(data.title)
      },
      getFile: function (even) {
        this.upath = event.target.files[0]
      },
      upload: function () {
      }
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
