<template>
    <label style="text-align: start">{{label}}</label>
    <textarea v-model="reviewText" placeholder="введите текст"></textarea>
</template>

<script>
export default {
        name: 'MyTextarea',
        data () {
            return {
                reviewText: "",
            };
        },
        props: {
            label: {
                type: String,
                default: 'Название',
            },
        },
    };
</script>
    

<style>

</style>