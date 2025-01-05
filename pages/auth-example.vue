<template>
    <div class="p-4 text-center">
        <h1 class="text-2xl font-bold">Authentication Example</h1>

        <!-- แสดงผู้ใช้ -->
        <p v-if="user">Welcome, {{ user.name }}</p>
        <p v-else>Please log in.</p>

        <!-- ปุ่ม Login -->
        <button v-if="!user" @click="login('JohnDoe')" class="bg-blue-500 text-white p-2 rounded">Login</button>

        <!-- ปุ่ม Logout -->
        <button v-if="user" @click="logout" class="bg-red-500 text-white p-2 rounded">Logout</button>
    </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth'

// เรียกใช้งานฟังก์ชัน Auth
const { user, login, logout } = useAuth()
</script>