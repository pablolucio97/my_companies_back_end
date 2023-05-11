# My Companies Back-end

Este repositório foi criado para armezenar o código back-end do desafio da HubLocal para pdevs full-stack.

## Tecnologias utilizadas

- NodeJS
- TypeScript
- TypeOrm
- Docker
- Postgres
- Express
- TSyringe

## Recursos obrigatórios desenvolvidos:

### Usuários

- [x] Cadastro de novo usuário.
- [x] Listagem de usuários cadastrados.
- [x] Autenticação de usuário.

### Empresas

- [x] Cadastro de nova empresa (deve informar o usuário reponsável).
- [x] Listagem de empresas por usuário.
- [x] Edição de uma empresa.
- [x] Remoção de uma empresa.

### Locais

- [x] Cadastro de novo local (deve informar a empresa pertencente).
- [x] Listagem de locais por empresa.
- [x] Edição de um local.
- [x] Remoção de um local.

## Recursos extras desenvolvidos:

- [x] Adicionado criptografia para a senha ao criar um novo usário.
- [x] Adicionando validação para não perimtir a criação de mais de um usuário com o mesmo e-mail.
- [x] Adicionado end-point para deletar usuário.
- [x] Adicionado os campos created_at e updated_at para visualizar datas de criação e atualização das entidades Empresas e Locais.
- [x] Adicionando validação para não perimtir a criação de mais de uma empresa com o mesmo CNPJ.
- [x] Adicionando validação para não perimtir a criação de uma empresa sem estar vinculado a um usuário válido.
- [x] Adicionando validação para não perimtir a criação de um novo local sem estar vinculada a uma empresa válida.

## Observações

- Foi providenciado um arquivo contendo todas as requisições e exemplos de request.

## Como executar esse projeto

1. Faça o clone desse repositório.
2. Tenha o Docker instalado na sua máquina.
3. Rode o comando docker-compose up para iniciar os containers.
4. Rode npx yarn typeorm migration:run para rodar todas as migrations.
5. Abra o Insomnia e importe o arquivo my-companies_insomnia.json que se encontra na raíz do projeto. Esse arquivo contém exemples de todas as requisições de todo o projeto desenvolvido.

## Contato

Qualquer dúvida ou necessidade de contato [envie-me um emaill](mailto:pablolucio_@hotmail.com) ou [me contate no Whatsapp](https://wa.me/31985187963).


## Autor
[@pablolucio97](https://www.github.com/pablolucio97)




