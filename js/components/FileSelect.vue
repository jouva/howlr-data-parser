<template>
    <howlr-parser v-if="data !== ''" :data="data"></howlr-parser>
    <div v-if="!data">
      <h1 class="text-center text-4xl pb-3 dark:text-gray-300">Parse your Howlr JSON Data</h1>
      <input @change="loadTextFromFile" class="block w-full cursor-pointer bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-50 border border-gray-300 focus:outline-none focus:border-transparent text-sm rounded-lg" type="file" aria-describedby="json_data_help" id="json_data">
      <div class="mt-1 text-sm text-gray-500" id="json_data_help">Select your Howlr JSON data file</div>
    </div>
</template>

<script>
export default {
    name: "FileSelect",
    data() {
        return {
            data: '',
        }
    },
    methods: {
        loadTextFromFile(ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();

            reader.onload = e => this.data = e.target.result;
            reader.readAsText(file);
        }
    }
}
</script>
