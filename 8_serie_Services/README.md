# Minha Aplicação com Angular 

Este projeto é uma aplicação simples para gerenciar uma lista de tarefas, desenvolvida utilizando Angular. O objetivo é demonstrar a utilidade de componentes Services em Angular.

## Angular: Utilidade de Componentes Services

### Estrutura do Projeto Angular

- **`src/app/task.service.ts`**: Este é o arquivo que contém o serviço `TaskService`. O serviço gerencia o estado da lista de tarefas e fornece métodos para adicionar e completar tarefas.

- **`src/app/task-list/task-list.component.ts`**: Componente que exibe a lista de tarefas e permite a conclusão das mesmas.

- **`src/app/add-task/add-task.component.ts`**: Componente que permite adicionar novas tarefas à lista.

### Como Usar o Serviço em Componentes

O serviço `TaskService` é injetado nos componentes que precisam acessar ou modificar a lista de tarefas. O componente `task-list` usa o serviço para exibir e completar tarefas, enquanto o componente `add-task` usa o serviço para adicionar novas tarefas.

typescript
// Exemplo de utilização em task-list.component.ts
constructor(private taskService: TaskService) {
  this.tasks = taskService.getTasks();
}

completeTask(task: string): void {
  const index = this.tasks.indexOf(task);
  this.taskService.completeTask(index);
}

# Implementação de Serviços em React

Em React, não existe um conceito direto de "Services" como em Angular, mas você pode alcançar uma funcionalidade semelhante usando o Context API, Hooks e o padrão de gerenciamento de estado. Aqui estão as etapas gerais para implementar um serviço em React:

## Estrutura do Projeto React

- **`src/TaskContext.js`**: Este arquivo contém a implementação do contexto `TaskContext`. O contexto é uma ferramenta poderosa do React que nos permite compartilhar estado entre componentes sem a necessidade de passar propriedades manualmente.

- **`src/TaskList.js`**: Componente que utiliza o contexto para exibir a lista de tarefas e permitir a conclusão das mesmas.

- **`src/AddTask.js`**: Componente que utiliza o contexto para adicionar novas tarefas à lista.

## Como Implementar Serviços em React

### 1. Criar um Arquivo para o Contexto

No arquivo `TaskContext.js`, criamos um contexto utilizando a função `createContext` do React. Este contexto gerenciará o estado global da aplicação e fornecerá funções para interagir com esse estado.

### 2. Utilizar o Contexto nos Componentes

Nos componentes que precisam acessar ou modificar o estado global, importamos o contexto e utilizamos o hook `useContext` para obter acesso ao estado e às funções fornecidas pelo contexto.


// Exemplo de utilização em TaskList.js
const { state /*, funções do serviço */ } = useTask();


### 3. Provedor do Contexto
No componente principal (App.js), envolvemos a aplicação com o Provedor do Contexto. Isso garante que todos os componentes abaixo desse nível tenham acesso ao contexto e, portanto, ao estado global da aplicação.

jsx
Copy code
// Exemplo de envolvimento da aplicação com o Provedor do Contexto em App.js
<TaskProvider>
  <div>
    <TaskList />
    {/* Adicione outros componentes que precisam do serviço */}
  </div>
</TaskProvider>
Dessa forma, os componentes podem compartilhar estado e funções sem a necessidade de passar propriedades manualmente entre eles. Isso simplifica a gestão do estado global da aplicação.