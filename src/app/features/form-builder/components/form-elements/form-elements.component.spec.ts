import { AppModule } from './../../../../app.module';
import { FormElement } from './../../store/interfaces';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementsComponent } from './form-elements.component';

describe('FormElementsComponent', () => {
  let component: FormElementsComponent;
  let fixture: ComponentFixture<FormElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [FormElementsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form control "0"', () => {
    let elem: FormElement = { id: 0, type: 'checkbox', styles: {} }
    component.addControl(elem)
    expect(component.form.contains('0')).toBeTruthy()
  });

  it('should mark field as invalid if "input" if the required field is true and the field "input" is empty', () => {
    let elem: FormElement = { id: 0, type: 'input', styles: { required: true } }
    component.addControl(elem)
    let input = component.form.get('0')

    input?.setValue('')

    expect(input?.valid).toBeFalsy()
  })

  it('should mark field as valid if "input" if the required field is false and the field "input" is empty', () => {
    let elem: FormElement = { id: 0, type: 'input', styles: { required: false } }
    component.addControl(elem)
    let input = component.form.get('0')

    input?.setValue('')

    expect(input?.valid).toBeTruthy()
  })
});
