<template>
    <div>
        <h2 class="text-2xl font-bold">Welcome to Home Page</h2>
        <p>This page uses the Default Layout.</p>
        <!-- <v-img :src="newjeans"></v-img> -->

        <h1>{{ $t('hello') }}</h1>
        <p>{{ $t('welcome') }}</p>

        <p>{{ $t('welcomeMessage', { name: 'John' }) }}</p>

        <p>{{ $t('itemsCount', { count: 3 }) }}</p>

        <p>{{ $t('date', { date: new Date() }) }}</p>

        <!-- การสลับภาษา -->
        <button @click="setLocale('en')">English</button>
        <button @click="setLocale('th')">ไทย</button>
    </div>
</template>

<script setup>
import newjeans from '@/assets/images/NJ_HowSweet_61.jpg'
const { setLocale } = useI18n()
</script>