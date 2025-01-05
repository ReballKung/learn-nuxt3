<template>
    <div>
        <h1>Error Test Page</h1>
        <button @click="throwError" class="bg-red-500 text-white p-2 rounded">
            Throw Error
        </button>
    </div>
</template>

<script setup>
const throwError = () => {
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
}
</script>