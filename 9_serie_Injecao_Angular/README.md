# Projeto Exemplo Angular com Injeção de Dependências
Este é um projeto Angular simples que demonstra o uso do mecanismo de Injeção de Dependências. A Injeção de Dependências é um padrão de design amplamente utilizado no desenvolvimento de software, e no contexto do Angular, ela permite criar componentes e serviços mais flexíveis e reutilizáveis.


## O que foi Feito
### 1. Serviço de Dados (data.service.ts)
Foi criado um serviço simples chamado DataService. Esse serviço fornece um método getData que retorna dados fictícios. O serviço é decorado com @Injectable e configurado para ser provido no nível raiz (providedIn: 'root'), permitindo que seja injetado em qualquer parte da aplicação.

```typescript

// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): string[] {
    return ['Dado 1', 'Dado 2', 'Dado 3'];
  }
}
```

### 2. Componente de Exibição de Dados (data-display.component.ts)
Foi criado um componente chamado DataDisplayComponent. Este componente utiliza o serviço DataService para obter dados durante a inicialização (ngOnInit). A Injeção de Dependências facilita a obtenção da instância do serviço diretamente no construtor do componente.

```typescript

// src/app/data-display/data-display.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  data: string[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }
}
```

### 3. Utilização no Template (app.component.html)
O componente DataDisplayComponent é utilizado no template do componente principal (AppComponent). Isso ilustra como os componentes podem ser facilmente compostos e reutilizados em toda a aplicação.

```html
Copy code
<!-- src/app/app.component.html -->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
<app-data-display></app-data-display>
```

Este projeto é um exemplo básico, mas reflete a arquitetura e práticas comuns no desenvolvimento Angular, especialmente no que diz respeito à Injeção de Dependências. A capacidade de injetar serviços em componentes facilita a criação de aplicativos modulares, testáveis e escaláveis.