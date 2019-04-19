<template>
    <v-dialog v-model="isOpen" max-width="500px" persistent>
        <v-card>
            <v-card-title>
                <span class="headline mt-2 ml-2">User</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>

                        <v-flex v-bind="descr['flexValues']" v-for="[key, descr] in fields" :key="key">
                            <v-text-field
                                    v-if="descr['descriptionFieldType'] === 'textField'"
                                    v-model="value[key]"
                                    v-bind="descr"
                            ></v-text-field>
                            <v-select
                                    v-if="descr['descriptionFieldType'] === 'selectField'"
                                    v-model="value[key]"
                                    v-bind="descr"
                            ></v-select>
                            <v-checkbox
                                    v-if="descr['descriptionFieldType'] === 'checkBox'"
                                    v-model="value[key]"
                                    v-bind="descr"
                            ></v-checkbox>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="$emit('close')">Cancel</v-btn>
                <v-btn color="blue darken-1" :loading="saveLoading" flat @click="$emit('apply')">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditDialog",
        props: {
            value: Object,
            fieldsDescription: Object,
            isOpen: Boolean,
            saveLoading: Boolean,
        },
        methods: {
            closeDialog() {
            },
            save() {
            },
        },
        computed: {
            fields() {
                return Object.entries(this.fieldsDescription).filter(([, descr]) => {
                    return descr['editableField'] !== undefined ? descr['editableField'] : true
                })
            },
        },
    }
</script>

<style scoped>

</style>
