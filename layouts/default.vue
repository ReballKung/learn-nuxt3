<template>
    <!-- Container หลัก -->
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-blue-500 text-white p-4">
            <h1 class="text-xl font-bold">Default Layout</h1>
        </header>

        <!-- Content -->
        <main class="flex-grow p-4">
            <!-- Slot สำหรับแสดงเนื้อหาของแต่ละหน้า -->
            <!-- <NuxtErrorBoundary> -->
                <slot />
            <!-- </NuxtErrorBoundary> -->
        </main>

        <!-- Footer -->
        <footer class="bg-gray-200 p-4 text-center">
            <p>© 2025 My Nuxt 3 App</p>
        </footer>
    </div>
</template>