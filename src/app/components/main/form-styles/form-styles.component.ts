import { StylesPipe } from './../../../pipes/styles.pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getBorderTypes, applyFormStyles, applyElementStyles } from './../../../store/form.actions';
import { borderTypesSelector, selectedStylesSelector } from './../../../store/form.reducer';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormStylesComponent implements OnInit {

  selectedValue!: string;
  items = ['Form Styles', 'Field Styles'];
  generalForm!: FormGroup
  elementsForm!: FormGroup
  borderTypes$ = this.store.select(borderTypesSelector)
  selectedStyles$ = this.store.select(selectedStylesSelector)


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getBorderTypes())
    this.generalForm = new FormGroup({
      label: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      textColor: new FormControl('', [Validators.required]),
      backgroundColor: new FormControl('', [Validators.required]),
      borderType: new FormControl('', [Validators.required]),
      borderColor: new FormControl('', [Validators.required]),
    })

    this.elementsForm = new FormGroup({
      label: new FormControl(''),
      textColor: new FormControl(''),
      placeholder: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      fontSize: new FormControl(''),
      fontWeight: new FormControl(''),
      required: new FormControl(''),
      colorInput: new FormControl(''),
      backgroundColor: new FormControl(''),
      borderType: new FormControl(''),
      borderColor: new FormControl(''),
      color: new FormControl('')
    })
  }

  applyFormStyles(): void {
    if (this.generalForm.valid) {
      const formData = { ...this.generalForm.value }
      console.log(formData)
      this.store.dispatch(applyFormStyles({ data: formData }))
    }
  }

  applyElementsStyles(): void {
    const formData = { ...this.elementsForm.value }
    console.log(formData)
    this.store.dispatch(applyElementStyles({ data: formData }))
  }

  cons() {
    console.log('click')
  }
}
