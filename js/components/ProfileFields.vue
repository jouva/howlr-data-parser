<template>
    <div class="pb-1"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Telegram</strong>
        {{ showNoneIfEmpty(profile.telegram) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Discord</strong>
        {{ showNoneIfEmpty(profile.discord) }}
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Weasyl</strong>
        {{ showNoneIfEmpty(profile.weasyl) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Inkbunny</strong>
        {{ showNoneIfEmpty(profile.inkbunny) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Sofurry</strong>
        {{ showNoneIfEmpty(profile.sofurry) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>FurAffinity</strong>
        {{ showNoneIfEmpty(profile.furaffinity) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>F-List</strong>
        {{ showNoneIfEmpty(profile.flist) }}
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Instagram</strong>
        {{ showNoneIfEmpty(profile.instagram) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Twitter</strong>
        {{ showNoneIfEmpty(profile.twitter) }}
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Twitter AD</strong>
        {{ showNoneIfEmpty(profile.twitter_ad) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Murrtube</strong>
        {{ showNoneIfEmpty(profile.murrtube) }}
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Steam</strong>
        {{ showNoneIfEmpty(profile.steam) }}
    </div>
    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>Twitch</strong>
        {{ showNoneIfEmpty(profile.twitch) }}
    </div>

    <div class="py-2"></div>

    <div class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 py-3 my-0.5 px-4">
        <strong>My Website</strong>
        {{ showNoneIfEmpty(profile.my_website) }}
    </div>
</template>
<script>
export default {
    name: "ProfileFields",
    data() {
        return {
            profile: {},
        }
    },
    props: {
        jsonData: {},
    },
    created() {
        this.jsonData.viewer.profileFieldValues.forEach(function(element) {
            this.profile[element.name] = element.value;
        }, this);
    },
    methods: {
        showNoneIfEmpty(value) {
            return (value === "") ? 'None' : value;
        }
    }
}
</script>
