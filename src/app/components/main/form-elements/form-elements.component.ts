import { FormElement } from './../../../interfaces';
import { formStylesSelector, selectedElementsSelector } from './../../../store/form.reducer';
import { selectStyles } from './../../../store/form.actions';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent {

  labelName: string = 'Form label';
  formStyles$ = this.store.select(formStylesSelector)
  formElements$ = this.store.select(selectedElementsSelector)

  @Input() selectedElements!: string[]
  @Input() styles!: any
  @Output() toDrop = new EventEmitter<any>()

  constructor(private store: Store) { }

  drop(event: any) {
    this.toDrop.emit(event)
  }

  selectElement(elem: FormElement, i: number) {
    this.store.dispatch(selectStyles({ data: this.styles[elem.type], id: elem.id, index: i }))
  }
}
