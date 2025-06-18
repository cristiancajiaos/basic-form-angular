import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../classes/user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  public user = new User();

  public nombreControl: FormControl = new FormControl("", [Validators.required]);
  public apellidoControl: FormControl = new FormControl("", [Validators.required])

  public userForm: FormGroup = new FormGroup({});

  constructor() {
    this.userForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl
    });
  }

  ngInit() {

  }

  public onSubmit(): void  {
    this.user.nombre = this.userForm.controls["nombre"].value;
    this.user.apellido = this.userForm.controls["apellido"].value;
  }

}
