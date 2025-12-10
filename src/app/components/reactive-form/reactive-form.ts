import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(10)]],
    });
  }

  onSubmit() {
    if (this.userFormGroup.valid) {
      console.log(this.userFormGroup.value);
    } else {
    }
  }
}
