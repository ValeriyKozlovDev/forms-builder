import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent {

  value = 'Form label';

  @Input() selectedElements!: any
  @Output() toDrop = new EventEmitter<any>()

  drop(event: any) {
    this.toDrop.emit(event)
  }

}
