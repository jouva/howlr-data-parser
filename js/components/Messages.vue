<template>
    <div class="w-full px-5 flex flex-col justify-between">
        <div class="flex flex-col mt-5">
            <div v-for="message in messages" :class="{'justify-end': fromMe(message), 'justify-start': !fromMe(message)}" class="flex mb-4">
                <div :class="{'mr-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl': fromMe(message), 'ml-2 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl': !fromMe(message) }" class="py-3 px-4 text-white">
                    {{ message.body }}
                    <time :datetime="message.createdAt" :class="{'text-right': fromMe(message), 'text-left': !fromMe(message) }" class="text-gray-500 text-sm block">{{ formatDateTime(message.createdAt) }}</time>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Messages",
    props: {
        messages: {},
        self: '',
    },
    methods: {
        formatDateTime(time) {
            let dt = new Date(time);
            return dt.toLocaleString();
        },
        fromMe(message) {
            return message.senderId === this.self;
        }
    },
}
</script>
