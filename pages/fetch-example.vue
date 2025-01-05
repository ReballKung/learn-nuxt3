<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Fetch Data Example</h1>

        <!-- แสดง Loading -->
        <div v-if="loading">Loading...</div>

        <!-- แสดง Error -->
        <div v-else-if="error" class="text-red-500">{{ error }}</div>

        <!-- แสดงข้อมูล -->
        <div v-else>
            <pre>{{ data }}</pre>
        </div>
    </div>
</template>

<script setup>
import { useFetchData } from '~/composables/useFetchData'

// เรียกใช้งานฟังก์ชันดึงข้อมูล
const { data, error, loading } = await useFetchData('https://jsonplaceholder.typicode.com/posts')
</script>