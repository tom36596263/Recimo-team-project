<script setup>
//詳情
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
const props = defineProps({
  id: String,
})
// 1.定義資料
const info = ref(null)
//2.頁面渲染完畢去抓資料
onMounted(() => {
  axios.get(`https://fakestoreapi.com/products/${props.id}`).then((response) => {
    info.value = response.data
  })
})

// import TheWelcome from ''
</script>

<template>
  <main>
    常見問題 {{ props.id }}
    {{ info }}
    <!--<TheWelcome />-->
  </main>
</template>
