import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Field } from 'src/app/abstracts';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SelectorComponent implements ControlValueAccessor, Field {

  @Input() items!: string[]
  @Input() label!: string

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
}

