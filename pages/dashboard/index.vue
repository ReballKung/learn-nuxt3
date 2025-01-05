<template>
    <div>
        <h2 class="text-2xl font-bold">Dashboard Home</h2>
        <p>This page uses the Dashboard Layout.</p>
        <Counter/>
    </div>
</template>

<script setup>
import Counter from '~/components/Counter.vue';
// กำหนด Layout ที่ต้องการใช้
definePageMeta({
    layout: 'dashboard', // ใช้ Layout dashboard.vue
})
</script>