<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Login</h2>
        <input type="text" placeholder="Username" class="w-full p-2 border rounded mb-4" />
        <input type="password" placeholder="Password" class="w-full p-2 border rounded mb-4" />
        <button class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
</template>

<script setup>
// กำหนด Layout ที่ต้องการใช้
definePageMeta({
    layout: 'auth', // ใช้ Layout auth.vue
})
</script>