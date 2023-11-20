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
