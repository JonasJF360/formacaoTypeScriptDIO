# Anotações do curso de TypeScript:

## Instalação:
```bash
npm i -g typescript
```

## Iniciando:
**Criando package.hson**
```bash
npm init --y
```

**Dependências:**
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