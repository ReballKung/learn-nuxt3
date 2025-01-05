<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white p-4">
            <h2 class="text-lg font-bold">Dashboard</h2>
            <ul class="mt-4 space-y-2">
                <li>
                    <NuxtLink to="/dashboard" class="block p-2 hover:bg-gray-700">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard/settings" class="block p-2 hover:bg-gray-700">Settings</NuxtLink>
                </li>
            </ul>
        </aside>

        <!-- Main Content -->
        <main class="flex-grow p-4">
            <slot />
        </main>
    </div>
</template>