import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextInputComponent implements ControlValueAccessor {
  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this;
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
}

