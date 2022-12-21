import { tap, ReplaySubject, takeUntil } from 'rxjs';
import { selectedStylesSelector } from './../../../store/form.reducer';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BaseField } from 'src/app/directives/base-field.directive';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextInputComponent implements ControlValueAccessor, BaseField, OnInit, OnDestroy {

  @Input() label!: string

  public value: string | undefined;

  selectedStyles$ = this.store.select(selectedStylesSelector)

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

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

