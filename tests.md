# Testes de Serviços em Markdown

## Estrutura de Diretórios

Os arquivos de testes estão localizados na pasta 'services', dentro de cada uma das entidades (plantations, plants e users), dentro de uma pasta 'tests'. Foi realizado apenas o teste de criação (create) para os serviços de plantations e plants. No serviço users, além do teste de criação, foram realizados testes de autenticação (authenticate) e perfil (profile).

Os dados utilizados em cada teste são locais e definidos na pasta 'src\repositories\in-memory-repositories', onde existe um arquivo para cada serviço que implementa a mesma interface.

Como biblioteca, foi utilizado o 'vitest'. A seguir, será explicado cada caso de teste.

## USERS (src\services\users)

### CREATE (src\services\users\tests\create.spec.ts)

- **Caso 1:** Deve ser capaz de criar um usuário

  - **Recebe:** name, email e password
  - **Ação:** create user
  - **Retorna:** os mesmos dados do usuário criado

- **Caso 2:** A senha do usuário deve ser criptografada durante a criação

  - **Recebe:** name, email e password
  - **Ação:** create user
  - **Retorna:** true, a password_hash foi criada corretamente

- **Caso 3:** Não deve ser possível criar com o mesmo email duas vezes
  - **Recebe:** name, email e password
  - **Ação:** create user duas vezes com os mesmos dados
  - **Retorna:** erro UserAlreadyExistsError (src\services\errors\user-already-exists-error.ts)

### AUTHENTICATE (src\services\users\tests\authenticate.spec.ts)

- **Caso 1:** Deve ser capaz de autenticar

  - **Recebe:** name, email e password
  - **Ação:** create user e então verifica os dados
  - **Retorna:** os mesmos dados do usuário

- **Caso 2:** Não deve ser possível autenticar com email errado

  - **Recebe:** name, email e password, de um usuário não existente
  - **Ação:** verifica os dados
  - **Retorna:** erro InvalidCredentialsError (src\services\errors\invalid-credentials-error.ts)

- **Caso 3:** Não deve ser possível autenticar com senha errada
  - **Recebe:** name, email e password
  - **Ação:** create user e verifica dados com o password errado, nesse caso a hash não vai ser a mesma
  - **Retorna:** erro InvalidCredentialsError (src\services\errors\invalid-credentials-error.ts)

### GET USER PROFILE (src\services\users\tests\get-user-profile.spec.ts)

- **Caso 1:** Deve ser capaz de obter o perfil do usuário

  - **Recebe:** name, email e password
  - **Ação:** create user e então verifica os dados
  - **Retorna:** true

- **Caso 2:** Não deve ser possível obter o perfil com ID errado
  - **Recebe:** name, email e password, de um usuário não existente
  - **Ação:** verifica os dados
  - **Retorna:** erro ResourceNotFoundError (src\services\errors\resource-not-found.ts)

## PLANTS (src\services\plants)

### CREATE (src\services\plants\tests\create.spec.ts)

- **Caso 1:** Deve ser capaz de criar uma planta
  - **Recebe:** name, common_name, scientific_name, synonyms, image_url, family_common_name, genus, family, water_frequency
  - **Ação:** create plant
  - **Retorna:** os mesmos dados da planta criada

## PLANTATION (src\services\plantations)

### CREATE (src\services\plantations\tests\create.spec.ts)

- **Caso 1:** Deve ser capaz de criar uma plantação
  - **Recebe:** name, plantId, userId
  - **Retorna:** os mesmos dados da plantação criada
