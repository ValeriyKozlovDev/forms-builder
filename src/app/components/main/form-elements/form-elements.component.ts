import { map } from 'rxjs/operators';
import { ReplaySubject, takeUntil, tap } from 'rxjs';
import { formStylesSelector } from './../../../store/form.reducer';
import { selectStyles } from './../../../store/form.actions';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormElementsComponent implements OnInit, OnDestroy {

  labelName: string = 'Form label';
  formattedStyles: any = {
    "color": "black",
    "background-color": "inherit",
    "border": "1px solid black",
  }

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  formStyles$ = this.store.select(formStylesSelector)

  @Input() selectedElements!: string[]
  @Input() styles!: any
  @Output() toDrop = new EventEmitter<any>()

  constructor(private store: Store, public cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.formStyles$
      .pipe(
        map((fields) => JSON.parse(JSON.stringify(fields))),
        tap((item) => item.label ? this.formattedStyles = {
          ...this.formattedStyles,
          ["color"]: item.textColor,
          ["background-color"]: item.backgroundColor,
          ["border"]: `1px ${item.borderType} ${item.borderColor}`
        } : ''
        ),
        tap(item => item.label ? this.labelName = item.label : ''),
        tap(item => this.cd.detectChanges()),
        takeUntil(this.destroy),
      ).subscribe()
  }

  drop(event: any) {
    this.toDrop.emit(event)
  }

  selectElement(elem: string) {
    this.store.dispatch(selectStyles({ data: this.styles[elem] }))
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
