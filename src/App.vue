<template>
    <div id="app">
        <HeadTop></HeadTop>
        <router-view></router-view>
        <Foot v-show="$route.meta.show"></Foot>
    </div>
</template>

<script>
import HeadTop from './components/headTop/HeadTop'
import Foot from './components/foot/Foot'
export default {
    name: "App",
    components: {
        HeadTop,
        Foot,
    },
};
</script>

<style>
</style>
