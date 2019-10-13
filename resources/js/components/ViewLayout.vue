<template>
    <div id="layouts" class="">
        <nav-bar style="padding-bottom: 5em"/>
            <div class="">
                <router-view></router-view>
            </div>
        <footer-section/>
    </div>
</template>

<script>
import NavBar from './NavBar';
import FooterSection from './Footer';
export default {
    name: 'layouts',
    components: {
        NavBar,
        FooterSection
    }
}
</script>

<style scoped>

</style>