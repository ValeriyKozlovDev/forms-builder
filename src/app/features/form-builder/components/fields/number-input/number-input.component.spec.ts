import { State } from './../../../../../store/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgControl } from '@angular/forms';
import { AppModule } from './../../../../../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { Store } from '@ngrx/store';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;
  let mockStore: MockStore<State>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [NumberInputComponent],
      providers: [provideMockStore()]

    })
      .compileComponents();

    fixture = TestBed.createComponent(NumberInputComponent);
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
