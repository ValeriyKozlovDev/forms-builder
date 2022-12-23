import { selectFieldsLoading, selectFieldsError } from './../../store/form.selectors';
import { Store } from '@ngrx/store';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListElementsComponent {

  @Input() listElements: any
  @Output() toDrop = new EventEmitter<any>()

  fieldsLoading$ = this.store.select(selectFieldsLoading)
  fieldsError$ = this.store.select(selectFieldsError)

  constructor(private store: Store) { }

  drop(event: any) {
    this.toDrop.emit(event)
  }
}
