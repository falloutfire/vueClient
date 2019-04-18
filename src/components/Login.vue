<template>
    <v-layout align-center justify-center row>
        <v-flex xs12 md6 lg4>
            <v-hover>
                <v-card
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                >
                    <v-card-title primary-title>
                        <v-layout row wrap justify-center>
                            <h3>Login</h3>
                        </v-layout>
                    </v-card-title>
                    <v-card-text>
                        <v-layout row wrap justify-center>
                            <v-flex xs6>
                                <v-text-field
                                        v-model="username"
                                        label="Login"
                                ></v-text-field>
                                <v-text-field
                                        v-model="password"
                                        type="password"
                                        label="Password"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-card-actions>
                        <v-layout row wrap justify-center>
                            <v-flex xs6>
                                <v-btn
                                        block
                                        color="primary"
                                        :loading="loading"
                                        @click="login"
                                >
                                    Log in
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-actions>
                </v-card>
            </v-hover>
        </v-flex>
    </v-layout>
</template>

<script>
    import HTTP from '../http';
    import { mapActions } from 'vuex';

    export default {
        name: "Login",
        data: () => {
            return {
                password: "",
                username: "",
                loading: false,
            }
        },
        methods: {
            ...mapActions([
               'setTokensInfo'
            ]),
            getBase64() {
              return 'bW9iaWxlX2FwcF9jbGllbnQ6bW9iaWxlX2FwcF9wYXNzd29yZA=='//btoa('mobile_app_client.mobile_app_password');
            },
            login() {
                this.loading = true;
                const formData = new FormData();
                formData.set('username', this.username);
                formData.set('password', this.password);
                formData.set('grant_type', 'password');
                HTTP.post('oauth/token', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Basic ${this.getBase64()}`
                        }
                    }
                ).then(response => {
                    this.setTokensInfo(response.data).then(() => {
                        this.$router.push({name: 'mainPage'})
                    });
                    this.loading = false;
                }).catch(error => {
                    console.log(error.response);
                    this.loading = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
