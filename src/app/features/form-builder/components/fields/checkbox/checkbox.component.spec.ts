import { State } from './../../../../../store/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CheckboxComponent } from './checkbox.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';


describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let mockStore: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      providers: [provideMockStore()]

    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.get(Store);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change value in writeValue method', () => {
    component.writeValue('value')
    expect(component.value).toBe('value');
  });
});
