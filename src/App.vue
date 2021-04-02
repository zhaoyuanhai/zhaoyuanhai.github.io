<template>
    <div class="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component";

    import Navigation from "./components/navigation.vue";

    @Options({
        components: {
            Navigation,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="less">
    .app {
        font-family: "microsoft yahei";
    }
    #content {
        background-color: #f9f9f9;
        padding: 30px 0;
    }
    .navBarWrap {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
    }
</style>
