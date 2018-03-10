<template>
    <div class="btn" @click="fn">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: 'btn',
        props: {
            text: {
                type: String
            }
        },
        data () {
            return {
            }
        },
        methods: {
            fn () {
                console.log('click btn')
            }
        },

    }
</script>

<style scoped>
    .btn {
        border: 1px solid #e5e5e5;
        font-size: 14px;
        color: #fff;
        height: 20px;
        padding: 5px 10px;
        width: 30px;
        background-color: #42b983;
        cursor: pointer;
    }
</style>