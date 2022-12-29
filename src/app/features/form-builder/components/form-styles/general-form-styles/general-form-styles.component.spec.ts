import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralFormStylesComponent } from './general-form-styles.component';
import { Store } from '@ngrx/store';

describe('GeneralFormStylesComponent', () => {
  let component: GeneralFormStylesComponent;
  let fixture: ComponentFixture<GeneralFormStylesComponent>;

  let store: MockStore<{}>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [GeneralFormStylesComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeneralFormStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get<Store>(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 5 controls', () => {
    expect(component.generalForm.contains('label')).toBeTruthy()
    expect(component.generalForm.contains('textColor')).toBeTruthy()
    expect(component.generalForm.contains('backgroundColor')).toBeTruthy()
    expect(component.generalForm.contains('borderType')).toBeTruthy()
    expect(component.generalForm.contains('borderColor')).toBeTruthy()
  })

  it('should mark field as invalid if "label" field value length more then 50', () => {

    let label = component.generalForm.get('label')

    label?.setValue('012345678901234567890123456789012345678901234567890123456789')

    expect(label?.valid).toBeFalsy()
  })

  it('should mark field as valid if "label" field value length less then 50', () => {

    let label = component.generalForm.get('label')

    label?.setValue('012345678901234567890123456789')

    expect(label?.valid).toBeTruthy()
  })
});
