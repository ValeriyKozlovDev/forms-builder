import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReplaySubject, tap, takeUntil } from 'rxjs';
import { selectedStylesSelector } from '../../../store/form.selectors';
import { BaseField } from 'src/app/shared/directives/base-field.directive';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NumberInputComponent implements ControlValueAccessor, BaseField, OnInit, OnDestroy {

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
    const targetInputElement = event.target as HTMLInputElement;
    const content = targetInputElement.value;

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
