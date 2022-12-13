import { getStyles, getBorderTypes } from './../../store/form.actions';
import { stylesSelector, borderTypesSelector } from './../../store/form.reducer';
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

  styles$ = this.store.select(stylesSelector)
  borderTypes$ = this.store.select(borderTypesSelector)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getStyles())
    this.store.dispatch(getBorderTypes())
  }
}
