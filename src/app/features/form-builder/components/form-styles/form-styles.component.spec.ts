import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormStylesComponent } from './form-styles.component';

describe('FormStylesComponent', () => {
  let component: FormStylesComponent;
  let fixture: ComponentFixture<FormStylesComponent>;

  let store: MockStore<{}>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkAccordionModule],
      declarations: [FormStylesComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get<Store>(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have items, that includes 2 values', () => {
    expect(component.items).toContain('Form Styles')
    expect(component.items).toContain('Field Styles')
  });
});
