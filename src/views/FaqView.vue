<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
//1.定義資料
const productList = ref([])
//2.頁面渲染完畢去抓資料
onMounted(() => {
  axios.get('https://fakestoreapi.com/products').then((response) => {
    productList.value = response.data
  })
})
// import TheWelcome from '../components/TheWelcome.vue'
</script>
<template>
  <main>
    <RouterLink v-for="item in productList" :key="item.id" :to="`/product/${item.id}`">
        {{ item.id }}s
        {{ item.title }}
    </RouterLink>
  </main>
</template>

<style scoped>
    a{
        display: block;
    }
</style>
