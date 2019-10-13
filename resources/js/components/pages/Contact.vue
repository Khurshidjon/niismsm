<template>
    <div class="container contacts-container">
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="400">
                    <v-card-title>Адрес</v-card-title>
                    <v-card-text class="text--primary">
                        <div><b>Full Address:</b> Lorem ipsum dolor sit.</div>
                        <div><b>Street:</b> Lorem ipsum dolor sit.</div>
                        <div><b>Bus:</b> 12, 13, 14</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="400">
                    <v-card-title>Phone</v-card-title>
                    <v-card-text class="text--primary">
                        <div><b>Тел:</b> Lorem ipsum dolor sit.</div>
                        <div><b>Phone:</b> Lorem ipsum dolor sit.</div>
                        <div><b>Fax:</b> Lorem ipsum dolor sit.</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="400">
                    <v-card-title>Режим работы</v-card-title>
                    <v-card-text class="text--primary">
                        <div><b>Понедельник - пятница:</b> 09:00 - 18:00</div>
                        <div><b>Обедный перерыв:</b> 13:00 - 14:00</div>
                        <div><b>Суббота - воскресеные:</b> Выходные</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-container>
                    <h3>Карта маршрута</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.0774622968788!2d69.23208471911204!3d41.26995244929278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36b091725f%3A0xcc69c1acfd01bb7b!2z0J3QsNGD0YfQvdC-LdC40YHRgdC70LXQtNC-0LLQsNGC0LXQu9GM0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdGC0LDQvdC00LDRgNGC0LjQt9Cw0YbQuNC4LCDQvNC10YLRgNC-0LvQvtCz0LjQuCDQuCDRgdC10YDRgtC40YTQuNC60LDRhtC40Lg!5e0!3m2!1sru!2s!4v1570988756210!5m2!1sru!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </v-container>
            </v-col>
            <v-col cols="12" md="6">
                <v-form v-model="valid">
                    <v-container>
                        <h3>Контакты</h3>
                        <v-row>
                            <v-col
                                cols="12"
                                md="12"
                            >
                                <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Имя"
                                    class="text-danger"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="12"
                            >
                                <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Фамилия"
                                    class="text-danger"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                md="12"
                            >
                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                class="text-danger"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="12"
                            >
                                <v-textarea
                                    v-model="message"
                                    :auto-grow="autoGrow"
                                    :clearable="clearable"
                                    :counter="counter ? counter : false"
                                    :filled="filled"
                                    :flat="flat"
                                    :hint="hint"
                                    :label="label"
                                    :loading="loading"
                                    :no-resize="noResize"
                                    :outlined="outlined"
                                    :persistent-hint="persistentHint"
                                    :placeholder="placeholder"
                                    :rounded="rounded"
                                    :row-height="rowHeight"
                                    :rows="rows"
                                    :shaped="shaped"
                                    :single-line="singleLine"
                                    :solo="solo"
                                    class="text-danger"
                                    required
                                    :rules="messageRules"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-btn
                            outlined
                            @click="submit"
                            class="success-text float-right"
                        >
                            Submit
                        </v-btn>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import colors from 'vuetify/lib/util/colors'

export default {
    data() {
        return {
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            messageRules: [
                v => !!v || 'Message is required',
                v => v.length <= 255 || 'Message must be less than 255 characters'
            ],
            autoGrow: false,
            autofocus: true,
            clearable: false,
            counter: 0,
            filled: false,
            flat: false,
            hint: '',
            label: 'Message',
            loading: false,
            message: '',
            noResize: true,
            outlined: false,
            persistentHint: false,
            placeholder: '',
            rounded: false,
            rowHeight: 34,
            rows: 5,
            shaped: false,
            singleLine: false,
            solo: false,
        }
    },
    theme: {
        themes: {
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
    methods: {
        submit(){
             if(this.valid == true) {
                 alert("Message is sending...")

             }
        }
    }
}
</script>

<style>
    .v-messages__message{
        color: red;
    }
    .contacts-container{
        margin-top: 5em;
    }
</style>