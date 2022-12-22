import { selectBorderTypesLoading, selectBorderTypesError } from './../../../store/form.selectors';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap, ReplaySubject, takeUntil } from 'rxjs';
import { selectSelectedStyles, selectBorderTypes } from '../../../store/form.selectors';
import { applyElementStyles, deleteElement } from '../../../store/form.actions';

@Component({
  selector: 'app-elements-styles',
  templateUrl: './elements-styles.component.html',
  styleUrls: ['./elements-styles.component.scss']
})
export class ElementsStylesComponent implements OnInit {

  elementsForm!: FormGroup
  selectedValue!: string;

  selectedStyles$ = this.store.select(selectSelectedStyles)
  borderTypes$ = this.store.select(selectBorderTypes)
  borderTypesLoading$ = this.store.select(selectBorderTypesLoading)
  borderTypesError$ = this.store.select(selectBorderTypesError)

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.elementsForm = new FormGroup({
      label: new FormControl(''),
      textColor: new FormControl(''),
      placeholder: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      fontSize: new FormControl(''),
      fontWeight: new FormControl(''),
      required: new FormControl(''),
      colorInput: new FormControl(''),
      backgroundColor: new FormControl(''),
      borderType: new FormControl(''),
      borderColor: new FormControl(''),
      color: new FormControl('')
    })
    this.selectedStyles$
      .pipe(
        tap(() => this.elementsForm.reset()),
        takeUntil(this.destroy),
      ).subscribe()
  }

  applyElementsStyles(): void {
    const formData = { ...this.elementsForm.value }
    this.store.dispatch(applyElementStyles({ data: formData }))
  }

  delete(): void {
    this.store.dispatch(deleteElement())
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
