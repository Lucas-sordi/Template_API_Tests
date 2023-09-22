import { validateSchema, request } from '../../utils/index';
import { User } from '../../fixtures/factory/user.factory';

describe("POST Create User - /usuarios", () => {
    test("deve cadastrar o usuário", async () => {
        const data = User.createUser();

        const res = await request.post("/usuarios")
        .send(data)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

        validateSchema(res.body, 'createUser');

        expect(res.status).toEqual(201);
    });
});