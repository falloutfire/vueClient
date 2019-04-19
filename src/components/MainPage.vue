<template>
    <v-layout row wrap>
        <v-toolbar app>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn @click="$store.dispatch('clearTokens').then(() => $router.push({name: 'login'}))" flat>Выйти
                </v-btn>
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
            <crud-table
                    :key="currentTable.tableName"
                    v-bind="currentTable"
            ></crud-table>
        </v-flex>
    </v-layout>
</template>

<script>
    import CrudTable from "@/components/CrudTable";
    import lodash from 'lodash';
    import {usersDescription, defaultUser} from "@/modelsDescription/users";
    import {osDescription, defaultOs} from "@/modelsDescription/os";
    import {defaultDevice, deviceDescription} from "@/modelsDescription/devices";
    import {chemicalTypeDescription, defaultChemicalType} from "@/modelsDescription/chemicalTypes";
    import {defaultFilm, filmDescription} from "@/modelsDescription/films";
    import {defaultLuminophore, luminophoreDescription} from "@/modelsDescription/luminophore";
    import {defaultTemplate, templateDescription} from "@/modelsDescription/templates";

    export default {
        name: "MainPage",
        components: {CrudTable},
        data: () => {
            return {
                currentTableName: null,
                tables: {
                    'UserTable': {
                        tableName: 'User',
                        crudURL: 'users',
                        itemsDescription: lodash.cloneDeep(usersDescription),
                        defaultItem: lodash.cloneDeep(defaultUser),
                    },
                    'OSTable': {
                        tableName: 'Os',
                        crudURL: 'bd_template/os',
                        itemsDescription: lodash.cloneDeep(osDescription),
                        defaultItem: lodash.cloneDeep(defaultOs),
                    },
                    'DeviceTable': {
                        tableName: 'Device',
                        crudURL: 'bd_template/device',
                        itemsDescription: lodash.cloneDeep(deviceDescription),
                        defaultItem: lodash.cloneDeep(defaultDevice),
                    },
                    'ChemicalTypesTable': {
                        tableName: 'ChemicalType',
                        crudURL: 'bd_template/chemical_types',
                        itemsDescription: lodash.cloneDeep(chemicalTypeDescription),
                        defaultItem: lodash.cloneDeep(defaultChemicalType),
                    },
                    'FilmsTable': {
                        tableName: 'Film',
                        crudURL: 'bd_template/film',
                        itemsDescription: lodash.cloneDeep(filmDescription),
                        defaultItem: lodash.cloneDeep(defaultFilm),
                    },
                    'LuminophoreTable': {
                        tableName: 'Luminophore',
                        crudURL: 'bd_template/luminophore',
                        itemsDescription: lodash.cloneDeep(luminophoreDescription),
                        defaultItem: lodash.cloneDeep(defaultLuminophore),
                    },
                    'TemplatesTable': {
                        tableName: 'Template',
                        crudURL: 'bd_template/template',
                        itemsDescription: lodash.cloneDeep(templateDescription),
                        defaultItem: lodash.cloneDeep(defaultTemplate),
                    },
                },
                items: [
                    {
                        title: 'Users',
                        table: 'UserTable',
                    },
                    {
                        title: 'Operational systems',
                        table: 'OSTable',
                    },
                    {
                        title: 'Devices',
                        table: 'DeviceTable',
                    },
                    {
                        title: 'ChemicalTypes',
                        table: 'ChemicalTypesTable',
                    },
                    {
                        title: 'Films',
                        table: 'FilmsTable',
                    },
                    {
                        title: 'Luminophore',
                        table: 'LuminophoreTable',
                    },
                    {
                        title: 'Templates',
                        table: 'TemplatesTable',
                    },

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
            },
            table() {
                return this.currentTableName ? CrudTable : null
            }
        }
    }
</script>

<style scoped>

</style>
