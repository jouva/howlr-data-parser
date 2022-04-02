<template>
    <div class="pb-1"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Name</strong>
        {{ user.name }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Bio</strong></p>
        <span class="whitespace-pre-line">{{ user.bio }}</span>
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Location</strong></p>
        {{ user.localities.join(', ') }}
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Like</strong></p>
        <span class="whitespace-pre-line">{{ user.like }}</span>
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Dislike</strong></p>
        {{ user.dislike }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Looking For</strong></p>
        <span v-for="(matchKindId, index) in user.matchKindIds">
            <span>{{ matchKinds[matchKindId] }}</span>
            <span v-if="index + 1 < user.matchKindIds.length">, </span>
        </span>
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Birthdate</strong></p>
        <time :datetime="user.birthdate" :title="getDateAgo(user.birthdate)">{{ formatDate(user.birthdate) }}</time>
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Genders</strong></p>
        <span v-for="(genderId, index) in user.genderIds">
            <span>{{ genders[genderId] }}</span>
            <span v-if="index + 1 < user.genderIds.length">, </span>
        </span>
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Sexual Orientations</strong></p>
        <span v-for="(sexualOrientationId, index) in user.sexualOrientationIds">
            <span>{{ sexualOrientations[sexualOrientationId] }}</span>
            <span v-if="index + 1 < user.sexualOrientationIds.length">, </span>
        </span>

    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <p><strong>Relationship Status</strong></p>
        {{ relationshipStatuses[user.relationshipStatusId] }}
    </div>
</template>
<script>
export default {
    name: "Bio",
    data() {
        return {
            user: {},
            genders: {},
            sexualOrientations: {},
            relationshipStatuses: {},
            matchKinds: {},
        };
    },
    props: {
        jsonData: {},
    },
    created() {
        this.user = this.jsonData.viewer;

        this.jsonData.app.genders.forEach(function(element) {
            this.genders[element.id] = element.label;
        }, this);

        this.jsonData.app.sexualOrientations.forEach(function(element) {
            this.sexualOrientations[element.id] = element.label;
        }, this);

        this.jsonData.app.relationshipStatuses.forEach(function(element) {
            this.relationshipStatuses[element.id] = element.label;
        }, this);

        this.jsonData.app.matchKinds.forEach(function(element) {
            this.matchKinds[element.id] = element.label;
        }, this);
    },
    methods: {
        formatDate(value) {
            if (value) {
                let date = new Date(value);
                return date.toLocaleDateString();
            }
        },
        getDateAgo(value) {
            if (value) {
                return '';
            }
        },
    },
}
</script>
