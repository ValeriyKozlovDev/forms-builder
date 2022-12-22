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

  drop(event: any) {
    this.toDrop.emit(event)
  }
}
