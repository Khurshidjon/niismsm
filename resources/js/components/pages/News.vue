 <template>
   <div class="container news-container">
       <div class="text-center">
            <h2><b>Новости института</b></h2>
        </div>
        <div class="row">
            <div class="col-md-3" v-for="post in posts">
                <router-link to="/single-news/2">
                    <v-card class="mx-auto" max-width="400">
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                        </v-img>
                        <v-card-text class="text--primary">
                            <div>{{ post.title }}</div>
                            <div>{{ post.discription }}</div>
                        </v-card-text>
                        <v-card-text class="text--primary pb-4">
                            <span class="float-right">                                
                                <font-awesome-icon fas icon="calendar" />
                                12.09.2019
                            </span>
                            <span class="float-left">
                                <font-awesome-icon fas icon="eye" />
                                123
                            </span>
                        </v-card-text>
                    </v-card>
                </router-link>
            </div>
        </div>
        <v-row align="center">
            <v-col cols="12" class="text-center">
                 <v-btn
                    class="ma-2"
                    :loading="loading4"
                    :disabled="loading4"
                    @click="loader = 'loading4'"
                >
                    More load
                    <template v-slot:loader>
                    <span class="custom-loader">
                        <font-awesome-icon fas icon="sync"></font-awesome-icon>
                    </span>
                    </template>
                </v-btn>
            </v-col>
        </v-row>
   </div>
</template>

<script>
export default {
    data() {
        return {
            loader: null,
            loading4: false,
            news: [],
            posts: [
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                },
                {
                    title: 'Whitehaven Beach',
                    discription: "Whitsunday Island, Whitsunday Islands"
                }
            ],
        }
    },
    watch: {
        loader () {
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => (
                this.posts.push(
                    {
                        title: 'Whitehaven Beach',
                        discription: "Whitsunday Island, Whitsunday Islands"
                    },
                    {
                        title: 'Whitehaven Beach',
                        discription: "Whitsunday Island, Whitsunday Islands"
                    },
                ),
                this[l] = false
                ), 3000);
            this.loader = null
        },
    },
}
</script>
<style scoped>
    .news-container {
        margin-top: 22px;
    }
    .news-container a{
        text-decoration: none;
    }
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
        }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>