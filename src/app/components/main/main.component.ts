import { Field, FormElement } from './../../interfaces';
import { map } from 'rxjs/operators';
import { getFields, addFormElement, selectStyles } from './../../store/form.actions';
import { ReplaySubject, takeUntil } from 'rxjs';
import { fieldsSelector, fieldsLoadingSelector, fieldsLoadedSelector } from './../../store/form.reducer';
import { Store } from '@ngrx/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent {

  id: number = 0
  selectedElements = ['input'];
  previousIndex!: number
  currentIndex!: number
  elem: string = 'input'
  listElements: any[] = []
  styles: any = {}
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  fields$ = this.store.select(fieldsSelector)
  fieldsLoading$ = this.store.select(fieldsLoadingSelector)
  fieldsLoaded$ = this.store.select(fieldsLoadedSelector)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getFields())
    this.fields$
      .pipe(
        map((fields) => JSON.parse(JSON.stringify(fields))),
        map((item) => item.forEach((elem: Field) => { this.listElements.push(elem.type), this.styles = { ...this.styles, [elem.type]: elem.styles } })),
        takeUntil(this.destroy),
      ).subscribe()
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.previousIndex = event.previousIndex
      this.currentIndex = event.currentIndex
      this.elem = this.listElements[this.previousIndex]
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.id++
      this.store.dispatch(addFormElement({ data: { id: this.id, type: this.elem, styles: [] }, index: this.currentIndex }))
      if (this.listElements.length === 4) {
        this.listElements = [...this.listElements.slice(0, this.previousIndex), this.elem, ...this.listElements.slice(this.previousIndex, this.listElements.length)]
      }
      this.store.dispatch(selectStyles({ data: this.styles[this.elem], id: this.id, index: this.currentIndex }))

    }
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
