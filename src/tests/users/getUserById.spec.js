import { validateSchema, request } from '../../utils/index';


describe("GET User By Id - /usuarios/{_id}", () => {
    test("deve mostrar as informações do id que foi informando", async () => {
        const res = await request.get("/usuarios/0uxuPY0cbmQhpEz1");

        validateSchema(res.body, 'getUserById');

        expect(res.status).toEqual(200);
        expect(res.body.nome).toEqual("Fulano da Silva");
        expect(res.body.email).toEqual("fulano@qa.com");
        expect(res.body.password).toEqual("teste");
        expect(res.body.administrador).toEqual("true");
        expect(res.body._id).toEqual("0uxuPY0cbmQhpEz1");
    });


    test("deve retornar notfound", async () => {
        const res = await request.get("/usuarios/adksjadlskajdlaskdjlasjkslakjlasd");
        
        validateSchema(res.body, 'errorMessage');

        expect(res.status).toEqual(400);
        expect(res.body.message).toEqual("Usuário não encontrado");
    });
});