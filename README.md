# Formacao TypeScript Fullstack.
> Esses são os arquivos gerados no curso, Formação TypeScript Fullstack da DIO (Digital Inovation One).

## Dependências / Requisitos:
1. **Ter um computador com um sistema operacional instalado.**
    - O meu sistema é o [Pop-OS.](https://pop.system76.com/)
2. **Instalar o** [**Node.js.**](https://nodejs.org/en)
    - Por segurança, instale a versão LTS (Long-Term Support ou Suporte a longo Prazo em português).
3. **Ter uma IDE de sua preferencia.**
    - [Visual Studio Code](https://code.visualstudio.com/) no meu caso.

# Anotações do curso de TypeScript:

## Instalação do Typescript de forma global: 
```bash
npm i -g typescript
```

## Iniciando:
**Criando package.hson**
```bash
npm init --y
```

**Dependências para execução:**
```bash
npm i -D typescript
```
```bash
npm i -D ts-node
```
```bash
npm i -D ts-node-dev
```

## Iniciando o TS no projeto:
**Iniciando:**
```bash
npx tsc --init
```

**Transpilando:**
```bash
npx tsc <nome>.ts
```

**Transpilando automáticamente:**
1. Inclua o scripr "dev" no **package.json**
```bash
"scripts": {
    "dev": "ts-node-dev <nome_do_app>.ts",
    ...
}
```
2. Rodando o script
```bash
npm run dev
```

# Iniciado com o React:
## **instalando:**
- `npm i -g create-react-app` ou `npm install -g create-react-app`
## Criando um projeto:
- `npx create-react-app <nome-do-projeto>`
    - EX.: `npx create-react-app my-app`
## Criando um projeto com TypeScript:
- `npx create-react-app <nome-do-projeto> --template typescript`
    - EX.: `npx create-react-app my-app-ts --template typescript`
## Rodando o app:
- Abra a pasta do projeto com o comando `cd <nome-do-projeto>` e execute o comando `npm start`.
    - Ex.:
        ```bash
        cd my-app-ts
        npm start
        ```