# Workalove Chat Bot

## Indice

- [Preview](#Preview)
- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configurações](#configurações)
- [Inicialização](#inicializando)
- [Pacotes principais](#pacotes-principais)

## Preview

![](./src/assets/preview.gif)

## Descrição

Tela de chat bot, realizado como parte do processo seletivo da Workalove, com o
objetivo de testar os conhecimentos do candidato, assim como verificar a capacidade
de resolver problemas do mesmo.
Para entender melhor o desafio, [clique aqui](./src/assets/desafio_front_end.pdf)
para mais detalhes.

## Features

- [x] Responsivo
- [x] Envio de dados pessoais
- [x] Consumo de API
- [x] Validação de campos
- [x] Testes básicos de componentes

## Pré-requisitos

Para rodar o projeto em sua máquina local, você precisa ter o `Node` e um gerenciador
de pacotes (npm ou yarn) instalados em sua máquina, caso não tenha, acesse [aqui](https://nodejs.org/pt-br/download/) a documentação
do Node e faça o download.

## Instalação

Faça o clone do projeto com:

```bash
git clone git@github.com:Raellopes368/Workalove-Chat-Bot.git
```

## Configurações

Após clonar o projeto, navegue até a pasta do mesmo e rode os comandos abaixo de
acordo com seu gerenciador de pacotes preferido:

para `yarn`:

```bash
yarn
```

ou com `npm`:

```bash
npm install
```

## Tests

Para rodar os testes, use os comandos abaixo de acordo com seu gerenciador de pacotes:

```bash
  yarn test
```
ou

```bash
  npm run test
```


## Inicializando

Após fazer o clone do projeto e baixar as dependências, você pode rodar o projeto com:

```bash
yarn start
```

ou

```bash
npm run start
```

O projeto será acessível em:

`http://localhost:3000`

## Pacotes principais

- [Axios](https://www.npmjs.com/package/axios)
- [Formik](https://formik.org/docs/overview)
- [Yup](https://github.com/jquense/yup)
