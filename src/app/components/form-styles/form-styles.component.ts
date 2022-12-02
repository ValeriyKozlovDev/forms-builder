import { Component } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.css']
})
export class StylesComponent {
  items = ['Form Styles', 'Field Styles'];
  expandedIndex = 0;
}
