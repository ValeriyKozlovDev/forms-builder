import { FormElement } from './../../../interfaces';
import { formStylesSelector, selectedElementsSelector, selectedItemIdSelector } from './../../../store/form.reducer';
import { selectStyles } from './../../../store/form.actions';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent implements OnInit {

  labelName: string = 'Form label';
  selectedElement!: number


  formStyles$ = this.store.select(formStylesSelector)
  formElements$ = this.store.select(selectedElementsSelector)
  selectedElement$ = this.store.select(selectedItemIdSelector)

  @Input() selectedElements!: string[]
  @Input() styles!: any
  @Output() toDrop = new EventEmitter<any>()

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.selectedElement$.subscribe()
    // тут я зараз працюю
  }

  drop(event: any) {
    this.toDrop.emit(event)
  }

  selectElement(elem: FormElement, i: number) {
    this.store.dispatch(selectStyles({ data: this.styles[elem.type], id: elem.id, index: i }))
  }

  itemDetails(item: any) {
    let value = item.type
    let placeholder = ''
    let required = false
    if (item.styles.label) {
      value = item.styles.label
    }
    if (item.styles.placeholder) {
      placeholder = item.styles.placeholder
    }
    if (item.styles.required) {
      required = item.styles.required
    }
    return { value: value, placeholder: placeholder, required: required }
  }


}
