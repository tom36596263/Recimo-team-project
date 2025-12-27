    <script setup>
    import { ref, computed, onMounted } from 'vue'
    import axios from 'axios'
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
        <RouterLink 
            v-for="item in productList" 
            :key="item.id"
            :to="`/product/${item.id}`"
        >
            {{ item.id }}
            {{ item.title }}
        </RouterLink>
    </main>
    
</template>

<style scoped>
    a{
    display: block;
    }
</style>
