<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-toolbar flat color="white">
                <v-toolbar-title>Users</v-toolbar-title>
                <v-divider
                        class="mx-2"
                        inset
                        vertical
                ></v-divider>
                <v-spacer></v-spacer>

                <v-dialog v-model="deleteDialog" max-width="500px">
                    <v-card>
                        <v-card-title>
                            <v-layout row wrap justify-center>
                                <span class="headline ">Are you sure to delete user?</span>
                            </v-layout>
                        </v-card-title>
                        <v-card-actions>
                            <v-layout row wrap justify-center>
                                <v-btn color="blue darken-1" flat @click="closeDeleteDialog">Cancel</v-btn>
                                <v-btn color="blue darken-1" flat @click="sureDelete">Delete</v-btn>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline mt-2 ml-2">New User</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6>
                                        <v-text-field v-model="editedItem.firstName" label="First Name"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6>
                                        <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-select
                                                :items="roles"
                                                v-model="editedItem.roles"
                                                item-text="roleName"
                                                multiple
                                                return-object
                                                label="Roles">
                                        </v-select>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="closeDialog">Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </v-flex>
        <v-flex xs12>
            <v-data-table
                    :headers="headers"
                    :items="users"
                    class="elevation-1"
            >
                <template v-slot:items="props">
                    <td>{{ props.item.firstName }}</td>
                    <td>{{ props.item.lastName }}</td>
                    <td>{{ props.item.email }}</td>
                    <td>{{ props.item.username }}</td>
                    <td>{{ getRoles(props.item.roles) }}</td>
                    <td class="justify-center layout px-0">
                        <v-icon
                                small
                                class="mr-2"
                                @click="editItem(props.item)"
                        >
                            edit
                        </v-icon>
                        <v-icon
                                small
                                @click="deleteItem(props.item)"
                        >
                            delete
                        </v-icon>
                    </td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
    import HTTP from '../../http';
    import lodash from 'lodash';

    const defaultUser = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
    };

    export default {
        name: "UserTable",
        data: () => {
            return {
                deleteDialog: false,
                roles: [
                    {
                        id: 1,
                        roleName: 'ADMIN_USER',
                    },
                    {
                        id: 2,
                        roleName: 'STANDARD_USER',
                    }
                ],
                users: [],
                dialog: false,
                saveLoading: false,
                deleteLoading: false,
                deletedItem: null,
                editedItem: lodash.cloneDeep(defaultUser),
                headers: [
                    {text: 'First Name', value: 'firstName'},
                    {text: 'Last name', value: 'lastName'},
                    {text: 'Email', value: 'email'},
                    {text: 'Username', value: 'username'},
                    {text: 'Roles', value: 'roles'},
                ],
            }
        },
        methods: {
            getRoles(roles) {
                console.log(roles);
                return roles.map(role => role.roleName).join(', ');
            },
            closeDeleteDialog() {
                this.deletedItem = null;
                this.deleteDialog = false;
            },
            closeDialog() {
                this.editedItem = lodash.cloneDeep(defaultUser);
                this.dialog = false;
            },
            save() {
                this.saveLoading = true;
                HTTP.post('users', this.editedItem).then(response => {
                    this.saveLoading = false;
                    console.log(response);
                    this.editedItem = lodash.cloneDeep(defaultUser);
                    this.dialog = false;
                }).catch(error => {
                    this.saveLoading = false;
                    console.log(error.response);
                    this.editedItem = lodash.cloneDeep(defaultUser);
                    this.dialog = false;
                })
            },
            editItem(item) {
                console.log(item)
                this.editedItem = item;
                this.dialog = true;
            },
            deleteItem(item) {
                this.deletedItem = item;
                this.deleteDialog = true;
            },
            sureDelete() {
                this.deleteLoading = true;
                HTTP.delete(`users/${this.deletedItem.id}`).then(response => {
                    this.deleteLoading = false;
                    this.deleteDialog = false;
                    console.log(response)
                }).catch(error => {
                    this.deleteLoading = false;
                    this.deleteDialog = false;
                    console.log(error.response)
                })
            },
            updateUsers() {
                HTTP.get('users').then(response => {
                    this.users = response.data.result
                }).catch(error => {
                    console.log(error.response)
                });
            },
        },
        mounted() {
            this.updateUsers();
        }
    }
</script>

<style scoped>

</style>
