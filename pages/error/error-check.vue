<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <!-- แสดงข้อความ Error -->
        <p v-if="error" class="text-red-500 mb-4">{{ error.message }}</p>

        <!-- ปุ่มจำลองการสร้าง Error -->
        <button @click="setError" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Trigger Error
        </button>

        <!-- ปุ่มล้าง Error -->
        <button @click="clearError" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Clear Error
        </button>
    </div>
</template>

<script setup>
// นำเข้า useError Composable
const error = useError()

// ฟังก์ชันตั้งค่า Error
const setError = () => {
    error.value = createError({
        statusCode: 400,
        statusMessage: 'This is a sample error!',
    })
}

// ฟังก์ชันล้าง Error
const clearError = () => {
    error.value = null
}
</script>