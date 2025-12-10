import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  user = {
    name: '',
    email: '',
    age: '',
  };
  onSubmit(formData: any) {
    console.log(formData);
  }
}
