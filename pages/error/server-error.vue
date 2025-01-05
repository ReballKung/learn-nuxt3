<template>
    <div>
        <h1 class="text-2xl font-bold">Server Error Handling</h1>
        <p v-if="error" class="text-red-500">{{ error.message }}</p>
        <button @click="fetchData" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Fetch Data
        </button>
    </div>
</template>

<script setup>
const error = useError()

const fetchData = async () => {
    try {
        // เรียก API
        await $fetch('/api/error-test')
    } catch (err) {
        // จับข้อผิดพลาดจาก Server และตั้งค่า Error
        error.value = err
    }
}
</script>