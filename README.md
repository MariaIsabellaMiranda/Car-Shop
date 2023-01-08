# Car Shop
# Sobre

Trata-se de uma aplicação Backend, onde foram aplicados os princípios de **Programação Orientada a Objetos (POO)** e **SOLID** para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Foi feita utilizando o banco de dados **MongoDB** e o **ODM Mongoose**, com a arquitetura de software **MSC (Model-Service-Controller)**.<br>
Foram criados Testes Unitários utilizando **Mocha, Chai e Sinon**.<br>
O framework **Express.js** foi usado para criar e estruturar uma **API RESTful** flexível e robusta, por meio de vários endpoints.<br>

<br>

## Construído com
  
- Typescript
- Node.js
- MongoDB
- Mongoose
- Express
- Mocha
- Chai
- Sinon

<br>

## Documentação (endpoints)

<details>
<summary> <b>Cars</b> </summary>

<br>
  
<details>
  <summary> Método GET </summary>
  
  <br>

Funcionalidade | URL 
---|---
Retorna uma lista de carros cadastrados | http://localhost:3001/cars

<br>

<b>Resposta da Requisição:</b><br>

```
Status: 200

[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  ...
]
```
</details>

<details>
  <summary> Método GET </summary>
  
  <br>

Funcionalidade | URL 
---|---
Retorna um carro específico | http://localhost:3001/cars/:id

<br>

<b>Resposta da Requisição:</b><br>

```
Status: 200

{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```
</details>

<details>
  <summary> Método POST </summary>
  
<br>

Funcionalidade | URL 
---|---
Realiza o cadastro de um carro | http://localhost:3001/cars

<br>
  
<b>Body (JSON):</b><br>

```
{
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```
  
<br>

<b>Resposta da Requisição:</b><br>

```
Status: 201

{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```
</details>

<details>
  <summary> Método PUT </summary>
  
  <br>

Funcionalidade | URL 
---|---
Atualizar um carro atravéz do id	 | http://localhost:3001/cars/:id
  
<br>
  
<b>Body (JSON):</b><br>

```
{
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

<b>Resposta da Requisição:</b><br>

```
Status: 200

{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```
</details>

<details>
  <summary> Método DELETE </summary>
  
  <br>

Funcionalidade | URL 
---|---
Apaga os dados de um carro específico | http://localhost:3001/cars/:id

<br>

<b>Resposta da Requisição:</b><br>

```
Status: 204
```
</details>
</details>


<details>
<summary> <b>Motorcycle</b> </summary>
<br>
  
<details>
  <summary> Método GET </summary>
  
  <br>

Funcionalidade | URL 
---|---
Retorna uma lista de motos cadastradas | http://localhost:3001/motorcycles
<br>

<b>Resposta da Requisição:</b><br>

```
Status: 200

[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  ...
]
```
</details>

<details>
  <summary> Método GET </summary>
  
  <br>

Funcionalidade | URL 
---|---
Retorna uma moto específica | http://localhost:3001/motorcycles/:id
<br>

<b>Resposta da Requisição:</b><br>

```
Status: 200

{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```
</details>

<details>
  <summary> Método POST </summary>
  
  <br>

Funcionalidade | URL 
---|---
Realiza o cadastro de uma moto | http://localhost:3001/motorcycles
<br>
  
  <b>Body (JSON):</b><br>

```
{
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

<b>Resposta da Requisição:</b><br>

```
Status: 201

{
   _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```
</details>
  
<details>
  <summary> Método PUT </summary>
  
  <br>

Funcionalidade | URL 
---|---
Atualizar uma moto atravéz do id | http://localhost:3001/motorcycles/:id
<br>
  
  <b>Body (JSON):</b><br>

```
{
  model: "Honda CG Titan 125",
  year: 1963,
  color: "black",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

<b>Resposta da Requisição:</b><br>

```
Status: 200

{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "black",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```
</details>
  
<details>
  <summary> Método DELETE </summary>
  
  <br>

Funcionalidade | URL 
---|---
Apaga os dados de uma moto específica | http://localhost:3001/motorcycles/:id
<br>

<b>Resposta da Requisição:</b><br>

```
Status: 204
```
  
</details>
</details>

<br>

## Como excutar o projeto

### Rodando com o Docker:

- Clone o projeto para sua máquina local;
- `cd` no diretório do projeto;
- Rode `docker-compose up -d` para inicializar os containers docker;
- Rode `docker exec -it car_shop bash` para ter acesso ao terminal interativo do container criado pelo compose;
- Rode `npm install` para instalar as dependências;
- Rode `npm run dev` para iniciar a aplicação;
- Rode `docker-compose down` para parar completamente a aplicação;

Opcional:
- Rode `npm run test:coverage` para visualizar a cobertura dos testes unitários.

### Rodando Localmente:
 ⚠️**Importante**: É necessário ter o `node` na versão `16` instalado em sua máquina!

- Clone o projeto para sua máquina local;
- `cd` no diretório do projeto;
- Rode `npm install` para instalar as dependências;
- Rode `npm run dev` para iniciar a aplicação;

Opcional:
- Rode `npm run test:coverage` para visualizar a cobertura dos testes unitários.

<br>

## Autor

- Maria Isabella Miranda da Silva <br>
  - Linkedin: [@Maria Isabella](https://www.linkedin.com/in/maria-isabella-miranda/) <br>
  - Email: ma_isabella.miranda@hotmail.com

<br>

## Mostre seu suporte

Me dê uma ⭐️ se você gostou deste projeto!
