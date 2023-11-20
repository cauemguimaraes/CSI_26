// src/app/app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';

export const routes: Routes = [
  { path: 'form-example', component: FormExampleComponent },
  // Adicione outras rotas conforme necessário
];

export const AppRoutingModule = RouterModule.forRoot(routes);
