<template>
    <div class="flex flex-row justify-between bg-gray-200 dark:bg-gray-700 dark:text-gray-50">
        <div class="flex flex-col w-2/5 border-r-2 border-gray-400 h-screen overflow-y-auto">
            <div v-for="(chat, index) in chats" @click="setCurrentMessage(index)">
                <div v-if="chat.messages.length > 0" :class="{'border-l-4 border-blue-400': activeChat === index, 'border-gray-400': activeChat !== index}" class="flex flex-row py-4 px-2 items-center border-b-2 border-gray-400">
                    <div class="w-1/4">
                        <!-- TODO: Fix color number for random color generation -->
                        <div :class="getRandomAvatarColor(1)" class="h-12 w-12 p-2 rounded-full text-white font-semibold flex items-center justify-center">{{ chat.contact.name.charAt(0) || '' }}</div>
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">{{ chat.contact.name }}</div>
                        <span class="text-gray-500 dark:text-gray-300 whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ getLastMessage(chat) }}</span>
                        <time class="text-gray-500 dark:text-gray-300 text-sm block" datetime="chat.updatedAt">{{ formatDateTime(chat.updatedAt) }}</time>
                    </div>
                </div>
            </div>
        </div>
        <messages class="h-screen overflow-y-auto" v-if="activeChat !== ''" :self="jsonData.viewer.id" :messages="messages.slice().reverse()"></messages>
    </div>
</template>

<script>
export default {
    name: "Chat",
    data() {
        return {
            chats: {},
            messages: {},
            activeChat: '',
        }
    },
    props: {
        jsonData: {},
    },
    created() {
        let unsortedChats = this.jsonData.viewer.chats;
        this.chats = unsortedChats.sort(function (a, b) {
            if (a.updatedAt === b.updatedAt) {
                return 0;
            }

            if (a.updatedAt > b.updatedAt) {
                return -1;
            }

            return 1;
        });
    },
    methods: {
        getLastMessage(chat) {
            let messages = chat.messages;
            if (messages) {
                let lastMessage = messages[0];
                if (lastMessage) {
                    return lastMessage.body;
                }
            }
            return '';
        },
        setCurrentMessage(index) {
            this.activeChat = index;
            this.messages = this.chats[this.activeChat].messages;
        },
        formatDateTime(time) {
            let dt = new Date(time);
            return dt.toLocaleString();
        },
        getRandomAvatarColor(colorNumber) {
            let colors = [
                'bg-red-500',
                'bg-orange-500',
                'bg-amber-500',
                'bg-yellow-500',
                'bg-lime-500',
                'bg-green-500',
                'bg-emerald-500',
                'bg-teal-500',
                'bg-cyan-500',
                'bg-sky-500',
                'bg-blue-500',
                'bg-indigo-500',
                'bg-violet-500',
                'bg-purple-500',
                'bg-fuchsia-500',
                'bg-pink-500',
                'bg-rose-500',
            ];
            return colors[colorNumber];
        }
    },
}
</script>
