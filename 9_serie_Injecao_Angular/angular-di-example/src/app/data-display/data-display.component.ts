// src/app/data-display/data-display.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  data: string[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }
}
