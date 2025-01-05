<template>
    <div class="counter">
        <h2>Count: {{ count }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
// การใช้ useState เพื่อจัดการสถานะของ count
const count = useState('count', () => 0)

// ฟังก์ชันในการเพิ่มค่า count
const increment = () => {
    count.value++
}
</script>

<style scoped>
.counter {
    text-align: center;
    padding: 20px;
}
</style>