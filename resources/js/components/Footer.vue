<template>
  <div class="footer-section">
       <footer class="footer">
            <div class="container px-md-5 py-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-4">
                            <router-link to="/">
                                <img :src="footerLogoImg" style="width: 11em" alt="">
                            </router-link>
                        </div>
                        <p>  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium sit et ex repudiandae quod, nihil harum officiis. Placeat delectus consequuntur perferendis nisi commodi temporibus eos velit dignissimos blanditiis laudantium!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium sit et ex repudiandae quod, nihil harum officiis. Placeat delectus consequuntur perferendis nisi commodi temporibus eos velit dignissimos blanditiis laudantium!
                        </p>
                        <br>
                        <div class="yandex-map">
                            <!-- <iframe src="https://yandex.uz/map-widget/v1/-/CGwjzFP2" width="450" height="200" frameborder="0" allowfullscreen="true"></iframe> -->
                        </div>
                    </div>
                    <div class="col-md-6 right-menu">
                        <div class="mt-5 pl-4">
                            <h2>Весь сайть</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Главная</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">О нас</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Стандарты</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/link" tag="a">Lorem ipsum dolor sit.</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
        <div class="footer-after">
            <div class="container">
                <div class="footer-menu">
                    <font-awesome-icon fas icon="copyright" />
                     {{ copyrightDate }} Институт стандартов
                </div>
               <div class="footer-menu">
                   <ul class="footer-list-menu">
                       <li class="list-menu-item">
                            <router-link to="telegram" tag="a">
                               <img :src="socialIcons.telegram" alt="">
                            </router-link>
                       </li>
                       <li class="list-menu-item">
                            <router-link to="/instagram">
                               <img :src="socialIcons.instagram" alt="">                                
                            </router-link>
                       </li>
                       <li class="list-menu-item">
                            <router-link to="/twitter">
                               <img :src="socialIcons.twiiter" alt="">                                
                            </router-link>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            copyrightDate: new Date().getFullYear(),
            footerLogoImg: '../../frontend/images/logo_rus.png',
            socialIcons: {
                telegram: '../../frontend/images/socialIcons/telegram.png',
                instagram: '../../frontend/images/socialIcons/instagram.png',
                twiiter: '../../frontend/images/socialIcons/twitter.png',
            }
        }
    }
}
</script>

<style scoped>
    .footer-section{
        background-color: #222222;
        color: #808080;
    }
    .footer{
        /* padding: 7em 12em; */
    }
    .footer-after{
        background-color: #333333 !important;
    }
    .footer-after .footer-menu{
        display: inline-block;
    }
    .right-menu .list-group li.list-group-item{
        background-color: #222222;
        border-top: 1px dashed #333333;
        border-left: none;
        border-right: none;
        border-bottom: 1px dashed #333333;
        /* padding-bottom: 10px; */
    }
    .right-menu .list-group li.list-group-item a{
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        color: #808080;
    }
    .footer-after .footer-menu .footer-list-menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .footer-menu{
        vertical-align: middle;
    }
     .footer-after .footer-menu .footer-list-menu .list-menu-item img{
         width: 25px;
     }
     .footer-after .footer-menu .footer-list-menu .list-menu-item {
        float: left;
        margin-left: 30px;
    }
</style>