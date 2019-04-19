export const defaultTemplate = {
    id: "",
    colorScheme: "",
    rounding: "",
    device: "",
    film: "",
    luminophore: "",
    xcolor: "",
    ycolor: "",
    zcolor: "",
    xdelta: "",
    ydelta: "",
    zdelta: ""
};

export const templateDescription = {
    id:  {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    colorScheme:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'colorScheme',
    },
    rounding:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'rounding',
    },
    device:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        convertFunction: (prop) => {
            return prop.name
        },
        label: 'device',
    },
    film:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        convertFunction: (prop) => {
            return prop.name
        },
        label: 'film',
    },
    luminophore:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        convertFunction: (prop) => {
            return prop.name
        },
        label: 'luminophore',
    },
    xcolor:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'xcolor',
    },
    ycolor:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'ycolor',
    },
    zcolor:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'zcolor',
    },
    xdelta:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'xdelta',
    },
    ydelta:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'ydelta',
    },
    zdelta:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'zdelta',
    },};
