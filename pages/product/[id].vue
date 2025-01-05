<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <!-- แสดง Loading -->
        <div v-if="loading" class="text-center">Loading...</div>

        <!-- แสดง Error -->
        <div v-else-if="error" class="text-center text-red-500">
            <h2 class="text-2xl font-bold mb-2">Error!</h2>
            <p>{{ error.statusMessage }}</p>
        </div>

        <!-- แสดงข้อมูลสินค้า -->
        <div v-else class="bg-white p-6 rounded shadow-lg">
            <h1 class="text-2xl font-bold">{{ product.name }}</h1>
            <p class="text-gray-600 mt-2">Price: {{ product.price }} USD</p>
        </div>
    </div>
</template>

<script setup>
// ดึงข้อมูล ID จาก URL
const route = useRoute()

// ดึงข้อมูลสินค้า
const { data: product, error, pending: loading } = await useFetch(`/api/products/${route.params.id}`)
</script>