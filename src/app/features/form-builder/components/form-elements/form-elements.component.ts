import { map } from 'rxjs/operators';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { FormElement } from '../../store/interfaces';
import {
  selectFormStyles,
  selectSelectedElements,
  selectSelectedItemId
} from '../../store/form.selectors';
import { selectStyles } from '../../store/form.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent implements OnInit {

  labelName: string = 'Form label';
  selectedElement!: number
  form!: FormGroup
  obj!: {}

  formStyles$ = this.store.select(selectFormStyles)
  formElements$ = this.store.select(selectSelectedElements)
  selectedElement$ = this.store.select(selectSelectedItemId)

  @Input() selectedElements!: string[]
  @Input() styles!: any
  @Output() toDrop = new EventEmitter<any>()

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.selectedElement$
      .pipe(
        tap((id) => this.selectedElement = id)
      ).subscribe()
    this.form = new FormGroup({
      ...this.obj
    })
    this.formElements$
      .pipe(
        tap(() => this.form = new FormGroup({})),
        map(array => array.forEach(elem => {
          if (elem.styles.required) {
            this.form.addControl(
              `${elem.id}`, new FormControl(`${(elem.type)[0].toUpperCase() + (elem.type).slice(1)} label`, Validators.required))
          } else this.form.addControl(`${elem.id}`, new FormControl(`${(elem.type)[0].toUpperCase() + (elem.type).slice(1)} label`))
        })),

      ).subscribe()

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

  saveForm() {
    console.log(this.form)
  }
}
