import { selectedStylesSelector } from './../../../store/form.reducer';
import { Store } from '@ngrx/store';
import { ReplaySubject, tap, takeUntil } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BaseField } from 'src/app/directives/base-field.directive';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SelectorComponent implements ControlValueAccessor, BaseField, OnInit, OnDestroy {

  @Input() items!: string[]
  @Input() label!: string

  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  selectedStyles$ = this.store.select(selectedStylesSelector)

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef,
    private store: Store
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.selectedStyles$
      .pipe(
        tap(() => this.value = ""),
        takeUntil(this.destroy),
      ).subscribe()
  }

  public onEditorValueChange(event: Event): void {
    const targetSelectElement = event.target as HTMLSpanElement;
    const content = JSON.parse(JSON.stringify(targetSelectElement.textContent));

    this.onChange(content);
  }

  public writeValue(value: string): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}

