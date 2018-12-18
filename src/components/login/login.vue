<template>

  <el-form ref="form" :model="user" label-width="100px" >
    <el-form-item label="用户名">
      <el-input  v-model="user.name" clearable></el-input>
    </el-form-item>

    <el-form-item label="密码">
      <el-input type="password" v-model="user.password" clearable></el-input>
    </el-form-item>

    <el-form-item label="登录角色">
      <el-select v-model="user.role" placeholder="请选择登录角色">
        <el-option label="学生" value="0"></el-option>
        <el-option label="教师" value="1"></el-option>
      </el-select>

      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>

</template>

<script type="text/javascript">
import API from '../../util/api'

export default {
  data: function () {
    return {
      user: {
        name: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      API.get('/login', { params: this.user }).then(response => {
        console.info(response)
      }).catch(error => {
        console.error(error)
      })

      let params = new URLSearchParams()
      let obj = this.user
      Object.keys(obj).forEach(function (key) {
        params.append(key, obj[key])
      })
      console.info('params= ' + params + ',userObject= ' + this.user)
      API.post('/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        console.info(response)
      }).catch(error => {
        console.error(error)
      })

      /* form object 提交 */
      API.post('/login', this.user, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
      }).then(response => {
        console.info(response)
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
