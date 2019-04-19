export const defaultFilm = {
    id: "",
    name: "",
    color: "",
    chemicalType: ""
};

export const filmDescription = {
    id: {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    name: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'name',
    },
    color:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'color',
    },
    chemicalType:  {
        descriptionFieldType: 'textField',
        objectKeyField: 'type',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        convertFunction: (prop) => {
            return prop.type
        },
        label: 'chemicalType',
    },
};
