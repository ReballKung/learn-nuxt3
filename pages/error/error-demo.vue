<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Error Demo</h1>

        <!-- ปุ่มจำลองการสร้าง Error -->
        <button @click="handleError(400)" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Trigger 400 Error
        </button>

        <button @click="handleError(500)" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Trigger 500 Error
        </button>
    </div>
</template>

<script setup>
// นำเข้า useError Composable
const error = useError()

// ฟังก์ชันจำลองการสร้างข้อผิดพลาด
const handleError = (statusCode) => {
    if (statusCode === 400) {
        // สร้างข้อผิดพลาด 400 Bad Request
        error.value = createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
        })
    } else if (statusCode === 500) {
        // สร้างข้อผิดพลาด 500 Internal Server Error
        error.value = createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
}
</script>