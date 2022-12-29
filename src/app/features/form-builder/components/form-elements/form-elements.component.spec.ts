import { MatSnackBar } from '@angular/material/snack-bar';
import { FormElement } from './../../store/interfaces';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormElementsComponent } from './form-elements.component';
import { Store } from '@ngrx/store';

describe('FormElementsComponent', () => {
  let component: FormElementsComponent;
  let fixture: ComponentFixture<FormElementsComponent>;
  let store: MockStore<{}>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [FormElementsComponent],
      providers: [provideMockStore({ initialState }), MatSnackBar]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get<Store>(Store);
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

  it('should return value and placeholder', () => {
    let label = component.itemDetails({ id: 0, type: 'checkbox', styles: { label: 'label', placeholder: 'placeholder' } }).value
    let placeholder = component.itemDetails({ id: 0, type: 'checkbox', styles: { label: 'label', placeholder: 'placeholder' } }).placeholder

    expect(label).toBe('label')
    expect(placeholder).toBe('placeholder')
  });

  it('should continue labelName', () => {
    expect(component.labelName).toBe('Form label');
  });
});

