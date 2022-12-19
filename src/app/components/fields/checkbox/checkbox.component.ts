import { Field } from 'src/app/abstracts';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CheckboxComponent implements ControlValueAccessor, Field {

  @Input() label!: string

  public value: string | undefined;

  private onChange!: (value: boolean) => void;
  private onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this;
  }

  public onEditorValueChange(event: Event): void {
    const targetInputElement = event.target as HTMLInputElement;
    const content = targetInputElement.checked;

    this.onChange(content);
  }

  public writeValue(value: string): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

