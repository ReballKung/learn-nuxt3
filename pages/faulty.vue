<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <!-- ปุ่มที่กดแล้วจะทำให้เกิดข้อผิดพลาด -->
        <button @click="causeError" class="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600">
            Trigger Error
        </button>
    </div>
</template>

<script setup>
// ฟังก์ชันที่ทำให้เกิดข้อผิดพลาด
const causeError = () => {
    throw new Error('This is a forced error!')
}
</script>