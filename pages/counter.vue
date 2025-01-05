<template>
    <div class="p-4 text-center">
        <h1 class="text-2xl font-bold">Counter Example</h1>
        <p class="text-xl mt-4">Count: {{ count }}</p>
        <button @click="increment" class="bg-green-500 text-white p-2 rounded mr-2">+1</button>
        <button @click="decrement" class="bg-red-500 text-white p-2 rounded">-1</button>
    </div>
</template>

<script setup>
import { useCounter } from '~/composables/useCounter'

// เรียกใช้ Composable
const { count, increment, decrement } = useCounter()
</script>