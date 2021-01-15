<template>
    <div>
        <!-- <h1>App</h1> -->
        <Navbar />
        <Articles />
        <!-- <Articles ref="test" /> -->
        <!-- <button @click = "test()">test</button> -->
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
export default {
    components: {
        Navbar,
        Articles
    },
    // data() {
    //     return {};
    // },
    // mounted() {
    //     this.test();
    // },
    // methods: {
    //     test() {
    //         this.$refs.test.fetchData();
    //     }
    // }
};
</script>
