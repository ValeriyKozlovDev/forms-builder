import { NgControl } from '@angular/forms';
import { AppModule } from './../../../../../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppModule, NgControl],
      declarations: [NumberInputComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
