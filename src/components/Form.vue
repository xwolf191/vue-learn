<template lang="html">
  <div id="ap">
 <form >
   <table>
     <tr>
       <td><p>用户名</p></td>
       <td> <input name="username" v-model="formData.username" maxlength="10" /> <label>{{formData.username}}</label></td>
     </tr>

     <tr>
     <td>
       <p>密码</p>
     </td>
     <td>
       <input v-model="formData.password" type="password"  maxlength="30" />
     </td>
     </tr>

     <tr>
     <td>
       <p>性别</p>
     </td>
     <td>
       <input id="sex_man" name="sex" type="radio"  value="0"  v-model="formData.sex" /> <label for="sex_man">男</label>
       <input id="sex_woman" name="sex" type="radio"  value="1"  v-model="formData.sex" /> <label for="sex_woman">女</label>
     </td>
     </tr>

     <tr>
       <td>
         <p>喜爱的搜索引擎：</p>
       </td>
       <td>
         <input v-model="formData.love" type="checkbox" id="love_Google" value="0" >
         <label for="love_Google">谷歌</label>
         <input v-model="formData.love" type="checkbox" id="love_Baidu" value="1">
         <label for="love_Baidu">百度</label>
         <input v-model="formData.love" type="checkbox" id="love_taobao" value="2">
         <label for="love_taobao">淘宝</label>
       </td>
     </tr>

     <tr>
       <td>
         <p>喜欢的美女：</p>
       </td>
       <td>
        <select  id="girl" v-model="formData.girl" >
          <option v-for="gr in girls" v-bind:key="gr.id" v-bind:value="gr.id">{{gr.title}}</option>
        </select>
         {{formData.girl}}
       </td>
     </tr>

     <tr>
       <td>
         <p>头像：</p>
       </td>
       <td>
        <input  type="file" />
       </td>
     </tr>

     <tr>
       <td>
         <p>介绍：</p>
       </td>
       <td>
         <textarea  v-model="formData.desc" placeholder="个人简介">
         </textarea>
       </td>
     </tr>

     <tr>
       <button id="sub_button" @click.prevent="subForm($event)">提交</button>
     </tr>
   </table>
 </form>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Hello',
  data: function () {
    return {
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
      imgData: {
        accept: 'image/gif, image/jpeg, image/png, image/jpg'
      },
      formData: {
        username: '',
        password: '',
        love: [],
        sex: '',
        girl: '',
        desc: ''
      },
      subForm: function () {
        // 构造表单数据json
        var data = JSON.stringify(this.formData)
        console.info(data)
        Vue.http.post('http://localhost:8080/user/save', this.formData, {
          headers: {
            'Token': 'AiYaCeshiToken'
          }
        }).then(function (success) {
          console.info(success)
        }, function (error) {
          console.info(error)
        })
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
