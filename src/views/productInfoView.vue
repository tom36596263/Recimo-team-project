 <script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
const props = defineProps({
    id: String
})
// 1. 定義資料
const info = ref(null)
//頁面渲染完畢去抓資料
onMounted(() => {
    axios
        .get(`https://fakestoreapi.com/products/${props.id}`)
        .then((response) => {
            info.value = response.data
        })
})
</script>

<template>
    <main>

        <RouterLink
        :to="`/timothyTest`">
            返回商城
        </RouterLink>

        <div>商品{{props.id}}詳情頁面</div>
        <div>{{ info.title }}</div>
        <

    </main>
</template>