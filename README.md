#  Jest_Supertest_Arch_Template

Template base para criar testes automatizados de API com Node, Jest e Supertest.
##
##
#### Requisitos
[NodeJS](https://nodejs.org)
##
##
#### Instalação de dependências
`npm install`
##
##
#### Execução
`npm run test:dev` irá rodar todos os testes.
`npm run test:dev -t '<nome_do_arquivo>'` irá rodar um arquivo de teste em especifico.
##
##
Em package.json há o script "test:dev", que possui o value "set TARGET=dev&&jest".
Em src/config há o arquivo dev.js, que é o apontamento do set TARGET.
Seguindo o exemplo acima, é possível configurar o template para rodar em ambientes diferentes.
