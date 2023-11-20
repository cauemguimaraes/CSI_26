# Minha Aplicação com Angular 

Este projeto é uma aplicação simples para gerenciar uma lista de tarefas, desenvolvida utilizando Angular. O objetivo é demonstrar a utilidade de componentes Services em Angular e mostrar como implementar serviços em React usando o Context API.

## Angular: Utilidade de Componentes Services

### Estrutura do Projeto Angular

- **`src/app/task.service.ts`**: Este é o arquivo que contém o serviço `TaskService`. O serviço gerencia o estado da lista de tarefas e fornece métodos para adicionar e completar tarefas.

- **`src/app/task-list/task-list.component.ts`**: Componente que exibe a lista de tarefas e permite a conclusão das mesmas.

- **`src/app/add-task/add-task.component.ts`**: Componente que permite adicionar novas tarefas à lista.

### Como Usar o Serviço em Componentes

O serviço `TaskService` é injetado nos componentes que precisam acessar ou modificar a lista de tarefas. O componente `task-list` usa o serviço para exibir e completar tarefas, enquanto o componente `add-task` usa o serviço para adicionar novas tarefas.

```typescript
// Exemplo de utilização em task-list.component.ts
constructor(private taskService: TaskService) {
  this.tasks = taskService.getTasks();
}

completeTask(task: string): void {
  const index = this.tasks.indexOf(task);
  this.taskService.completeTask(index);
}

## React: Implementação de Services com Context API

### Estrutura do Projeto React

- **`src/TaskContext.js`**: Este arquivo contém a implementação do contexto `TaskContext`. O contexto gerencia o estado global da lista de tarefas e fornece funções para adicionar e completar tarefas.

- **`src/TaskList.js`**: Componente que utiliza o contexto para exibir a lista de tarefas e permitir a conclusão das mesmas.

- **`src/AddTask.js`**: Componente que utiliza o contexto para adicionar novas tarefas à lista.

### Como Usar o Contexto em Componentes

O contexto `TaskContext` é utilizado através do hook `useTask` nos componentes que precisam acessar as funções e o estado relacionados às tarefas.

```jsx
// Exemplo de utilização em TaskList.js
const { tasks, completeTask } = useTask();

<button onClick={() => completeTask(index)}>&check; Concluir</button>