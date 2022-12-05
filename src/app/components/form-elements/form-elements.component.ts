import { FormControl } from '@angular/forms';

import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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


  items = ['Form Styles', 'Field Styles'];
  expandedIndex = 0;
}
