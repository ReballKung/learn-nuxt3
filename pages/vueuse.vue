<template>
    <div>
        <input v-model="value" placeholder="Enter something" />
        <p>Stored value: {{ value }}</p>
        <template>
            <ClientOnly>
                <div>
                    <!-- คอมโพเนนต์ที่จะถูกเรนเดอร์เฉพาะในฝั่งลูกค้า -->
                    <h1>This content is only rendered client-side</h1>
                </div>
            </ClientOnly>
        </template>
    </div>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core'

// ใช้ useLocalStorage ในการจัดการข้อมูล
const value = useLocalStorage('inputValue', '')
</script>