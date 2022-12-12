import { map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { getFields, getStyles, getBorderTypes } from './../../store/form.actions';
import { fieldsSelector, stylesSelector, borderTypesSelector } from './../../store/form.reducer';
import { switchMap, tap, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent implements OnInit, OnDestroy {

  selectedElements = ['input'];
  elemIndex!: number
  elem = 'input'
  listElements = ['input', 'textarea', 'button', 'checkbox', 'select'];
  value = 'Form label';
  items = ['Form Styles', 'Field Styles'];
  selectedValue!: string;
  // example = { "width": "500px" }


  fields$ = this.store.select(fieldsSelector)
  styles$ = this.store.select(stylesSelector)
  borderTypes$ = this.store.select(borderTypesSelector)
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(private store: Store) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.elemIndex = event.previousIndex
      this.elem = this.listElements[this.elemIndex]
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if (this.listElements.length === 4) {
        this.listElements = [...this.listElements.slice(0, this.elemIndex), this.elem, ...this.listElements.slice(this.elemIndex, this.listElements.length)]
      }
      if (this.listElements.length === 6) {
        this.listElements = [...this.listElements.slice(0, this.elemIndex), ...this.listElements.slice(this.elemIndex + 1, this.listElements.length)]
      }
    }
  }

  ngOnInit() {
    this.store.dispatch(getFields())
    this.store.dispatch(getStyles())
    this.store.dispatch(getBorderTypes())

    this.fields$
      .pipe(
        tap((item) => this.listElements = item),
        takeUntil(this.destroy),
        map((fields) => JSON.parse(JSON.stringify(fields)))
      )
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
