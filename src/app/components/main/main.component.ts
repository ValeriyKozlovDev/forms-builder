import { map } from 'rxjs/operators';
import { getFields } from './../../store/form.actions';
import { ReplaySubject, tap, takeUntil } from 'rxjs';
import { fieldsSelector } from './../../store/form.reducer';
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

  selectedElements = ['input', 'textarea', 'button'];
  elemIndex!: number
  elem = 'input'
  listElements!: string[];
  // 'input', 'textarea', 'button', 'checkbox', 'select'
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  fields$ = this.store.select(fieldsSelector)

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getFields())
    this.fields$
      .pipe(
        map((fields) => JSON.parse(JSON.stringify(fields))),
        tap((item) => this.listElements = item),
        takeUntil(this.destroy),
      ).subscribe()
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer, event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('onSecond')

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
        console.log('4 elements', this.listElements)

      }
    }
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
