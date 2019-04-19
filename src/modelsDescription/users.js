export const defaultUser = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    roles: [],
};

export const usersDescription = {
    firstName: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'First name',
    },
    lastName: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Last Name',
    },
    email: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Email',
    },
    username: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Username',
    },
    password: {
        descriptionFieldType: 'textField',
        showInTable: false,
        flexValues: {
            xs12: true,
        },
        label: 'Password',
        type: 'password'
    },
    roles: {
        descriptionFieldType: 'selectField',
        convertFunction: (prop) => {
          return prop.map(role => role.roleName).join(', ')
        },
        flexValues: {
            xs12: true,
        },
        items: [
            {
                id: 1,
                roleName: 'ROLE_ADMIN',
            },
            {
                id: 2,
                roleName: 'ROLE_USER',
            }
        ],
        itemText: "roleName",
        itemValue: "id",
        multiple: true,
        returnObject: true,
        label: "Roles",
    }
};
