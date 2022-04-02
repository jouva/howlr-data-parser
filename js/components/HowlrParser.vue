<template>
    <ul class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': bioVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !bioVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displayBio">Bio</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': socialVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !socialVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displaySocial">Social</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': eventsVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !eventsVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displayEvents">Events</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': groupsVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !groupsVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displayGroups">Groups</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': sentLikesVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !sentLikesVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displaySentLikes">Sent Likes</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': receivedLikesVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !receivedLikesVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displayReceivedLikes">Received Likes</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': blockedUsersVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 hover:cursor-pointer': !blockedUsersVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displayBlockedUsers">Blocked Users</a>
        </li>
        <li class="mr-2 grow">
            <a
                :class="{'active bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-500 hover:cursor-default': chatsVisible, 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300   hover:cursor-pointer': !chatsVisible}"
                class="w-full inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center"
                @click="displayChat">Chats</a>
        </li>
    </ul>
    <div class="py-2">
        <div v-if="bioVisible" class="h-full overflow-y-scroll">
            <bio :json-data="jsonData"></bio>
        </div>
        <div v-if="socialVisible" class="h-full overflow-y-scroll">
            <profile-fields :json-data="jsonData"></profile-fields>
        </div>
        <div v-if="eventsVisible" class="h-full overflow-y-scroll">
            <div v-for="event in jsonData.viewer.eventsAsParticipant" class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
                <strong>{{ event.title }}</strong>
                <p>{{ event.localities.join(', ') }}</p>
                <p>{{ formatDate(event.date) }}</p>
                <p>{{ event.address }}</p>
                <p>{{ event.description }}</p>
            </div>
        </div>
        <div v-show="groupsVisible" class="h-full overflow-y-scroll">
            <div v-for="groupId in jsonData.viewer.groupIds" class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200  py-3 my-0.5 px-4">
                <strong>{{ groups[groupId].name }}</strong> <span class="text-sm text-gray-400">{{ groups[groupId].usersCount }} members</span>
            </div>
        </div>
        <div v-if="sentLikesVisible" class="h-full overflow-y-scroll">
            <div v-for="like in jsonData.viewer.sentLikes" class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
                You like <strong>{{ like.user.name }}</strong> <time class="text-sm text-gray-400" datetime="like.createdAt">{{ formatDate(like.createdAt) }}</time>
            </div>
        </div>
        <div v-if="receivedLikesVisible" class="h-full overflow-y-scroll">
            <div v-for="like in jsonData.viewer.receivedLikes" class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
                <strong>{{ like.user.name }}</strong> likes you  <time class="text-sm text-gray-400" datetime="like.createdAt">{{ formatDate(like.createdAt) }}</time>
            </div>
        </div>
        <div v-if="blockedUsersVisible" class="h-full overflow-y-scroll">
            <div v-for="blockedUser in jsonData.viewer.blockedUsers" class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
                <strong>{{ blockedUser.name }}</strong>
            </div>
        </div>
        <div v-if="chatsVisible">
            <chat :json-data="jsonData"></chat>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HowlrParser',
    data() {
        return {
            jsonData: {},
            groups: {},
            bioVisible: true,
            socialVisible: false,
            eventsVisible: false,
            groupsVisible: false,
            sentLikesVisible: false,
            receivedLikesVisible: false,
            blockedUsersVisible: false,
            chatsVisible: false
        }
    },
    props: {
        data: '',
    },
    created() {
          this.jsonData = JSON.parse(this.data);

          this.jsonData.app.groups.forEach(function(element) {
              this.groups[element.id] = {
                  name:  element.name,
                  usersCount: element.usersCount,
              };
          }, this);
    },
    methods: {
        displayBio() {
            this.resetAllDisplays();
            this.bioVisible = true;
        },
        displaySocial() {
            this.resetAllDisplays();
            this.socialVisible = true;
        },
        displayEvents() {
            this.resetAllDisplays();
            this.eventsVisible = true;
        },
        displayGroups() {
            this.resetAllDisplays();
            this.groupsVisible = true;
        },
        displaySentLikes() {
            this.resetAllDisplays();
            this.sentLikesVisible = true;
        },
        displayReceivedLikes() {
            this.resetAllDisplays();
            this.receivedLikesVisible = true;
        },
        displayBlockedUsers() {
            this.resetAllDisplays();
            this.blockedUsersVisible = true;
        },
        displayChat() {
            this.resetAllDisplays();
            this.chatsVisible = true;
        },
        resetAllDisplays() {
            this.bioVisible = false;
            this.socialVisible = false;
            this.eventsVisible = false;
            this.groupsVisible = false;
            this.sentLikesVisible = false;
            this.receivedLikesVisible = false;
            this.blockedUsersVisible = false;
            this.chatsVisible = false;
        },
        formatDate(value) {
            if (value) {
                let date = new Date(value);
                return date.toLocaleDateString();
            }
        },
        getDateAgo(value) {
            if (value) {
                return ''; // moment(String(value)).fromNow();
            }
        },
    }
}
</script>

