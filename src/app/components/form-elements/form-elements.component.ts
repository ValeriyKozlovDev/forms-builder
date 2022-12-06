import { FormControl } from '@angular/forms';

import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface borderType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css']
})
export class FormElementsComponent {
  selectedElements = ['Input label'];

  listElements = ['Input', 'Checkbox', 'Button', 'Select'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  value = 'Form label';


  items = ['Form Styles', 'Field Styles'];
  expandedIndex = 0;

  selectedValue!: string;

  foods: borderType[] = [
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
