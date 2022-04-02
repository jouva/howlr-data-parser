<template>
    <div>
        <label for="dark_toggle" class="flex items-center cursor-pointer toggle">
            <div class="relative">
                <input v-model="darkMode" v-on:change="updateDarkMode" type="checkbox" id="dark_toggle" class="sr-only">
                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition checked:bg-green-500 checked:translate-x-full"></div>
            </div>
            <div class="ml-3 dark:text-gray-100 text-gray-700 font-medium"><slot></slot></div>
        </label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            darkMode: false,
        }
    },
    mounted() {
        this.getDarkModeSetting();
        this.updateDarkMode();
    },
    methods: {
        getDarkModeSetting() {
            this.darkMode = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
        },
        updateDarkMode() {
            localStorage.theme = this.darkMode ? 'dark' : 'light';
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }
}
</script>
<style scoped>
    input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #48bb78;
    }
</style>
