<template>
    <div class="main">
            <nav class="navbar navbar-expand-md navbar-light shadow-sm fixed-top" style="background-color: #24246f;">
            <div class="container-fluid">
                <router-link class="navbar-brand" tag="a" to="/">
                    <img :src="navbarBrand.img" alt="" :style="{'width': navbarBrand.size}">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/">Главная</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about">О нас</router-link>
                        </li>
                        <li class="nav-item" @mouseover="isActive = true" @mouseleave="isActive = false">
                            <router-link to="/pages">Страницы
                                <font-awesome-icon class="menu-icon" fas icon="chevron-down" />
                            </router-link>
                             <transition
                                :duration="{ enter: 200, leave: 200 }"
                                name="custom-classes-transition"
                                enter-active-class="animated tada"
                                leave-active-class="animated bounceOutRight"
                             >
                                <ul class="submenu" style="position: absolute" v-if="isActive">
                                    <li><router-link to="/sub1">Sub submenu 1</router-link></li>
                                    <li><router-link to="/sub2">Sub subwfwefwemenu 2</router-link></li>
                                    <li><router-link to="/sub3">Subwedfwemenu 3</router-link></li>
                                    <li><router-link to="/sub4">Submen sfwefweu wef 4</router-link></li>
                                </ul>
                            </transition>
                        </li>
                        <li class="nav-item">
                            <router-link to="/news">Новости</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contacts">Контакты</router-link>
                        </li>
                        <li class="nav-item">
                            <font-awesome-icon style="font-size: 15px; margin-top: 6px;" class="menu-icon text-white" fas icon="eye" />                            
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login" tag="a">Войти</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register" tag="a">Зарегистрироваться</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navbarBrand:{
                img:  '../../frontend/images/logo_rus.png',
                size: '7em',
            },
            navbarBgImg: '../../frontend/images/bg.png',
            isActive: false,
            show: false,
        }
    },
    mounted(){
       //
    },
    methods:{
        //
    }
}
</script>

<style scoped>
    .navbar-nav.mr-auto li{
        cursor: pointer;    
    }
    .navbar-nav.mr-auto li.nav-item a {
        color: #fff;
        text-decoration: none;
        font-size: 17px;
        padding: 14px;
        font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    }
    .navbar-nav.ml-auto li.nav-item a {
        color: #fff;
        font-size: 17px;
        font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    }
    .navbar-nav.mr-auto li .menu-icon{
        font-size: 10px;
    }
    .submenu{
        background-color:  rgb(36, 36, 111);
        padding-top: 26px;
    }
    .submenu li{
        list-style-type: none;
        padding: 10px !important;
        /* margin-left: -40px; */
    }
    .submenu li:hover{
        background-color: rgba(250, 250, 250, 0.986);
    }
    .submenu li:hover a{
        color:  rgb(36, 36, 111) !important;
    }
</style>