import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { borderTypesSelector } from '../../../store/form.selectors';
import { applyFormStyles } from '../../../store/form.actions';

@Component({
  selector: 'app-general-form-styles',
  templateUrl: './general-form-styles.component.html',
  styleUrls: ['./general-form-styles.component.scss']
})
export class GeneralFormStylesComponent implements OnInit {

  generalForm!: FormGroup
  borderTypes$ = this.store.select(borderTypesSelector)
  selectedValue!: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.generalForm = new FormGroup({
      label: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      textColor: new FormControl('', [Validators.required]),
      backgroundColor: new FormControl('', [Validators.required]),
      borderType: new FormControl('', [Validators.required]),
      borderColor: new FormControl('', [Validators.required]),
    })
  }


  applyFormStyles(): void {
    if (this.generalForm.valid) {
      const formData = { ...this.generalForm.value }
      this.store.dispatch(applyFormStyles({ data: formData }))
    }
  }
}
