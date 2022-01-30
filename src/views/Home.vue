<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button type="success" @click="clickBtn">
      按钮
    </el-button>
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { getBanner } from '@/api'

@Component({
  components: {
    HelloWorld,
  },
})
export default class extends Vue {
  clickBtn() {
    getBanner()
      .then((res) => {
        console.log(res, '获取成功')
      })
      .catch((err) => {
        console.log(err, '获取失败')
      })
  }
}
</script>
