<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <XCircleIcon class="h-16 w-16 text-red-500 mb-4" />
    <h1 class="text-6xl font-bold text-red-500 mb-4">
      {{ error.statusCode }}
    </h1>
    <p class="text-xl text-gray-700">
      {{ error.statusCode === 404 ? 'Page Not Found' : 'An error occurred' }}
    </p>
    <NuxtLink to="/" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Go Home
    </NuxtLink>
  </div>
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/24/outline'
// รับ props จาก Nuxt
defineProps(['error'])
</script>