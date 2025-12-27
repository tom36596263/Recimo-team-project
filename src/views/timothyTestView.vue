<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
const productList = ref([])
onMounted(() => {
    axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
            productList.value = response.data
        })
})
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <main>
        <RouterLink v-for="product in productList" 
        :key="product.id" 
        class="productCard"
        :to="`/timothyTest/${product.id}`"
        >
            商品 {{product.id}}
            <br>
        </RouterLink>
    </main>
</template>

<style lang="scss" scoped>
div {
    font-size: 1rem;
}
</style>