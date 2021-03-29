# NestJs - GraphQl - Mongoose

## Module

Divise votre code en élément plus petit et facile à gérer

## Resolver

Responsable des réquêtes entrante, comme des __controller__ pour du REST

## Service

Contient la logique métier pour les renvoyer au controller ou resolver

## Schema

Modéle qui corrépond à un collection

## Installation

```Shell
npm i -g @nestjs/cli
```

Creation du projet 

```Shell
nest new nest-mongo-graphql
```

## GraphQl et Mongoose

```Shell
npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```

```Shell
npm i --save @nestjs/mongoose mongoose
```

## Creer Module / Service / Resolver

> Dans la documentation le premier module crée est __cat__ on fait la même la chose

```Shell
nest g mo cat
```

```Shell
# --no-spec sans les fichiers de test
nest generate service cat --no-spec
```

```Shell
nest generate resolver cat --no-spec
```

## GraphQL

```ql
cats {
  breed {
    characteristics {
      lifespan
      size
      coat
      color
    }
  }
}
```

```ql
mutation {
  createCat(input: {
    breed: "Thirst cat"
    characteristics: {
      lifespan: "12 as 14 years"
      size: "medium"
      coat: "medium"
      color: "color"
    }
  }) {
    breed {
      characteristics {
        lifespan
        size
        coat
        color
      }
    }
  }
}
```
