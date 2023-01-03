import { State } from './../../../../../store/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppModule } from './../../../../../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorInputComponent } from './color-input.component';
import { Store } from '@ngrx/store';

describe('ColorInputComponent', () => {
  let component: ColorInputComponent;
  let fixture: ComponentFixture<ColorInputComponent>;
  let mockStore: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorInputComponent],
      providers: [provideMockStore()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ColorInputComponent);
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
