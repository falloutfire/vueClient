<template>
    <v-layout row wrap>
        <v-toolbar app>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn @click="$store.dispatch('clearTokens').then(() => $router.push({name: 'login'}))" flat>Выйти</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer permanent app clipped>
            <v-toolbar dark>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Tables
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list dense class="pt-0">
                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        @click="setCurrentTable(item.table)"
                >
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-flex v-if="currentTable" xs12>
            <component :is="currentTable"></component>
        </v-flex>
    </v-layout>
</template>

<script>
    import UserTable from './tables/UserTable'

    export default {
        name: "MainPage",
        data: () => {
            return {
                currentTableName: null,
                tables: {
                    'UserTable': UserTable,
                },
                items: [
                    {
                        title: 'Users',
                        table: 'UserTable',
                    }
                ],
            }
        },
        methods: {
            setCurrentTable(tableName) {
                this.currentTableName = tableName;
            }
        },
        computed: {
            currentTable() {
                return this.currentTableName ? this.tables[this.currentTableName] : null
            }
        }
    }
</script>

<style scoped>

</style>
