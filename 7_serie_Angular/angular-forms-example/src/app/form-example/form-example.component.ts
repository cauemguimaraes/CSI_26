// src/app/form-example/form-example.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  formData = {
    name: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/data', this.formData)
      .subscribe(response => {
        console.log(response);
      });
  }
}
