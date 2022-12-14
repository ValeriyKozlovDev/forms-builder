import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getBorderTypes, applyFormStyles } from './../../../store/form.actions';
import { borderTypesSelector, selectedStylesSelector } from './../../../store/form.reducer';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormStylesComponent implements OnInit {

  selectedValue!: string;
  items = ['Form Styles', 'Field Styles'];
  form!: FormGroup

  borderTypes$ = this.store.select(borderTypesSelector)
  selectedStyles$ = this.store.select(selectedStylesSelector)


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getBorderTypes())
    this.form = new FormGroup({
      label: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      textColor: new FormControl('', [Validators.required]),
      backgroundColor: new FormControl('', [Validators.required]),
      borderType: new FormControl('', [Validators.required]),
      borderColor: new FormControl('', [Validators.required]),
    })
  }

  applyFormStyles(): void {
    if (this.form.valid) {
      // const formData = { ...this.form.value }
      const formData = { ...this.form.value }
      this.store.dispatch(applyFormStyles({ data: formData }))
    }
  }
}
