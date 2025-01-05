<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="text-center p-6 bg-white rounded shadow-lg">
            <h1 class="text-3xl font-bold text-red-600">Oops! Something went wrong!</h1>
            <p class="mt-4 text-lg text-gray-600">{{ errorMessage }}</p>
            <p class="mt-2 text-sm text-gray-500">Please try again later or contact support.</p>
        </div>
    </div>
</template>

<script setup>
// รับข้อมูลข้อผิดพลาดจาก NuxtErrorBoundary
defineProps({
    errorMessage: {
        type: String,
        default: 'An unexpected error occurred.'
    }
})
</script>