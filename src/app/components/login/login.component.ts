import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup!: FormGroup;

  @Input() formError = '';
  @Input() disabled!: boolean;
  @Output() login = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    this.login.emit(this.formGroup.value);
  }

}
