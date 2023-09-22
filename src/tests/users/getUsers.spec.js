import { validateSchema, request } from '../../utils/index';


describe("GET Users - /usuarios", () => {
    test("deve listar todos os usuários", async () => {
        const res = await request.get("/usuarios");

        validateSchema(res.body, 'getUsers');

        expect(res.status).toEqual(200);
        expect(res.body.usuarios).toHaveLength(res.body.quantidade);
    });
});