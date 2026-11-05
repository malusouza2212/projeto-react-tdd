# Aplicação React com TDD e GitHub Actions

Aplicação de exemplo com um contador, testes unitários, de integração e funcionais, lint e build de produção. O workflow executa CI em `push` e `pull_request` para as branches `main` e `develop`.

## Executar localmente

Use Node.js 18 e npm. Na raiz do projeto:

```bash
npm ci
npm run lint
npm run test:unit
npm run test:integration
npm run test:functional
npm test
npm run build
```

`npm test` e `npm run test` executam a mesma suíte completa com cobertura.

## Publicar no GitHub

Crie um repositório vazio no GitHub e, a partir da pasta deste projeto, envie a branch principal. Substitua a URL pela do seu repositório:

```bash
git init -b main
git add .
git commit -m "feat: configura aplicação React com TDD e CI"
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

Para validar também a branch `develop`:

```bash
git switch -c develop
git push -u origin develop
```

Abra **Actions** no GitHub para acompanhar lint, cada suíte de teste e build. Pull requests direcionados a `main` ou `develop` executam as mesmas verificações.

## Deploy opcional na Vercel

O deploy de produção ocorre somente em `push` para `main` e fica desabilitado por padrão. Para habilitá-lo, em **Settings > Secrets and variables > Actions**:

1. Crie a variável de repositório `ENABLE_VERCEL_DEPLOY` com o valor `true`.
2. Crie os secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` com os valores fornecidos pela sua conta e projeto Vercel.

Sem a variável, a etapa de deploy é ignorada e as verificações de CI continuam sendo executadas. O projeto não utiliza `REACT_APP_API_KEY`; não é necessário criar esse secret.
