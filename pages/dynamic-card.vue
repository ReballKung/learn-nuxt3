<template>
    <!-- ตัว Container สำหรับ Card -->
    <div class="min-h-screen bg-gray-100 p-6">
        <h1 class="text-3xl font-bold text-center mb-6">Dynamic Card View</h1>

        <!-- แสดง Loading เมื่อข้อมูลยังไม่ถูกโหลด -->
        <!-- แสดง Loading Animation -->
        <div v-if="loading" class="text-center">
            <!-- สัญลักษณ์ Loading แบบหมุน -->
            <svg class="animate-spin h-8 w-8 text-blue-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <!-- ข้อความกำกับ -->
            <p class="mt-2 text-gray-500">Loading data, please wait...</p>
        </div>

        <!-- แสดง Error เมื่อเกิดข้อผิดพลาด -->
        <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

        <!-- แสดง Card เมื่อข้อมูลพร้อม -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- วนลูปแสดงข้อมูล -->
            <div v-for="item in items" :key="item.id" class="bg-white p-4 rounded shadow">
                <!-- รูปภาพ -->
                <img :src="item.image" alt="Product" class="w-full h-40 object-cover rounded" />

                <!-- ชื่อและราคา -->
                <h2 class="text-xl font-bold mt-4">{{ item.title }}</h2>
                <p class="text-gray-600">{{ item.price }} USD</p>

                <!-- ปุ่ม -->
                <button @click="handleClick(item)"
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    View Details
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
// ใช้ useFetch สำหรับดึงข้อมูล
const { data: items, error, pending: loading } = await useFetch('https://fakestoreapi.com/products')

// ฟังก์ชันจัดการเมื่อกดปุ่ม
const handleClick = (item) => {
    alert(`You selected: ${item.title}`)
}
</script>