import { faker } from '@faker-js/faker';



export class User {
    static createUser() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        const newUser = {
            nome: `${firstName} ${lastName}`,
            email: faker.internet.email({ firstName: firstName, lastName: lastName }),
            password: faker.internet.password(),
            administrador: faker.datatype.boolean().toString()
        };

        return newUser;
    };
}