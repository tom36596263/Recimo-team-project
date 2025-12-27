<script>
import { onMounted } from 'vue';
import axios from 'axios'
const props = defineProps({
        Id: String
})

const info = ref(null)
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
        商品詳情
        {{ props.id }}
        {{ info }}
    </main>
</template>