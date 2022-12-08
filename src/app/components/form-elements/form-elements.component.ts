import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { getFields } from './../../store/form.actions';
import { fieldsSelector } from './../../store/form.reducer';
import { BorderType } from './../../interfaces';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent implements OnInit {

  selectedElements = ['Input label'];
  elemIndex!: number
  elem!: any
  listElements = ['Input', 'Checkbox', 'Button', 'Select'];
  fields$ = this.store.select(fieldsSelector)
  value = 'Form label';
  items = ['Form Styles', 'Field Styles'];
  expandedIndex = 0;
  selectedValue!: string;

  constructor(private store: Store) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.elemIndex = event.previousIndex
      this.elem = this.listElements[this.elemIndex]
      console.log(this.elem)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.listElements = [...this.listElements.slice(0, this.elemIndex), this.elem, ...this.listElements.slice(this.elemIndex, this.listElements.length)]
    }
  }

  ngOnInit() {
    this.store.dispatch(getFields())
  }

  foods: BorderType[] = [
    { value: 'dotted', viewValue: 'Dotted' },
    { value: 'dashed', viewValue: 'Dashed' },
    { value: 'solid', viewValue: 'Solid' },
    { value: 'double', viewValue: 'Double' },
    { value: 'groove', viewValue: 'Groove' },
    { value: 'ridge', viewValue: 'Ridge' },
    { value: 'inset', viewValue: 'Inset' },
    { value: 'outset', viewValue: 'Outset' },
    { value: 'none', viewValue: 'None' },
    { value: 'hidden', viewValue: 'Hidden' },
  ];
}
