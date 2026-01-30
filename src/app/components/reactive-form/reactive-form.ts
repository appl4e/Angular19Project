import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function matchPassword(c: AbstractControl) {
  const pass = c.get('password')?.value;
  const confPass = c.get('confirm_password')?.value;

  return pass === confPass ? null : { passwordMismatch: true };
}

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userFormGroup: FormGroup;

  get field() {
    return this.userFormGroup.controls;
  }

  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        age: [null, [Validators.required, Validators.min(10)]],
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      },
      {
        validators: matchPassword,
      }
    );
  }

  onSubmit() {
    if (this.userFormGroup.valid) {
      console.log(this.userFormGroup.value);
    } else {
      console.log(this.userFormGroup);
    }
  }
}
