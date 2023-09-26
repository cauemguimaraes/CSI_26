# City Info Web App

## Visão Geral

Este projeto é uma aplicação web que exibe informações sobre várias cidades. A aplicação atende aos seguintes requisitos:

1. **Listagem de Cidades**: A página principal exibe uma lista de cidades com seus nomes.

2. **Seleção de Cidades**: O usuário pode selecionar uma cidade da lista usando o mouse.

3. **Exibição de Detalhes**: Quando o usuário seleciona uma cidade, a posição da cidade na lista se expande, mostrando uma foto e informações adicionais sobre a cidade.

4. **Fechamento de Detalhes**: O usuário pode fechar as informações expandidas da cidade usando o mouse.

5. **Dados do Servidor**: Os dados das cidades são armazenados no servidor Node como dados JSON e são carregados somente quando o usuário faz uma seleção na tela.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado no servidor.

## Configuração e Execução

1. Clone o repositório:

Navegue até a pasta do projeto

Instale as dependências do servidor Node:
cd server
npm install

Inicie o servidor Node:
npm start

O servidor estará disponível em http://localhost:5000.

Volte para a raiz do projeto:
cd ..

Instale as dependências do aplicativo React:
npm install

Inicie o aplicativo React:
npm start

O aplicativo estará disponível em http://localhost:3000.

## Estrutura de Diretórios

servidor/: Contém o código do servidor Node que fornece os dados das cidades em formato JSON.
public/: Contém arquivos públicos acessíveis pelo aplicativo React, incluindo a pasta "images" para as imagens das cidades.
src/: Contém o código-fonte do aplicativo React.

## Dados das Cidades
Os dados das cidades são fornecidos pelo servidor Node e estão localizados no arquivo server.js na pasta servidor. Cada cidade possui os seguintes campos:

nome: Nome da cidade.
estado: Estado da cidade.
país: País da cidade.
população: População da cidade.
imagem: Nome do arquivo de imagem da cidade localizado na pasta "public/images".

## Tecnologias Utilizadas
React - Biblioteca para construção da interface de usuário.
Node.js - Ambiente de servidor para fornecer dados das cidades.
Express - Framework para desenvolvimento de aplicativos web em Node.js.